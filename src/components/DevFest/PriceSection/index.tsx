import React from "react";
import { CardPrice } from "./CardPrice";
import Image from "next/image";
import iconTada from "@/assets/icon/tada.png";

export const PriceSection = () => {
  return (
    <section className="bg-blue-100 my-24 sm:my-32  lg:my-40 py-24">
      <div className="bg-white rounded-3xl py-24 px-16 w-full max-w-6xl mx-auto">
        <Image
          alt="tada"
          src={iconTada}
          className="size-24 object-contain mx-auto mb-8"
        />
        <h2 className="text-gray-900 font-bold text-3xl font-product text-center">
          Elige una oferta de registro para lanzar tu primera campaña
        </h2>
        <p className="text-gray-500 text-base font-product text-center max-w-3xl mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem inventore sequi numquam! Ipsam porro veritatis at ad
          maiores doloremque eos odio vitae similique, architecto repudiandae
          vero omnis impedit, hic natus.
        </p>
        <div className="grid grid-cols-3 mt-12 gap-6">
          <CardPrice />
          <CardPrice />
          <CardPrice />
        </div>
        <div className="rounded-3xl flex justify-between bg-gray-100 mt-10 items-center px-12 py-10 ">
          <h3 className="font-product text-gray-500">
            Elige una oferta para continuar
          </h3>
          <a
            href="#"
            className="block rounded-full py-3 px-10 bg-gray-50  font-bold leading-6 text-gray-500 font-product transition-colors text-sm"
          >
            Reclamar ahora
          </a>
        </div>
      </div>
    </section>
  );
};
