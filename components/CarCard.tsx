'use client';
import React from 'react';
import Image from 'next/image';
import { carProps } from '@/types';
import { calculateCarRent } from '@/utils';

interface CarCardProps {
  car: carProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p>
        <span>{calculateCarRent(city_mpg, year)} $</span>
      </p>
    </div>
  );
};

export default CarCard;
