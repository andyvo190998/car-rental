import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-[0.5] flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="object-contain"
            width={118}
            height={18}
          />
          <p className="text-base text-gray-700">
            Car rental 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="flex flex-1 flex-wrap justify-between items-center">
          {footerLinks.map((link, idx) => (
            <div key={idx} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              <div className="flex flex-col gap-5">
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-gray-500"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 md:flex-row md:gap-3 flex-col">
        <p>@2023 CarHub. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
