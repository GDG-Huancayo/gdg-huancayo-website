import { CalendarDaysIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import google from "@/assets/icon/google.png";
import banner from "@/assets/banner-devfest.jpg";

export const HeroSection = () => {
  return (
    <section className="mx-auto max-w-5xl mt-32">
      <div className="max-w-4xl mx-auto">
        <span className="flex items-center justify-center font-product rounded-full px-6 py-2 text-green-700 mx-auto bg-green-100 w-fit gap-2 ">
          <Image alt="google" src={google} className="size-5" />
          Google Developers Group
        </span>
        <h1 className="leading-tight text-6xl font-bold font-product text-center text-gray-900 mt-4">
          Bienvenidos a <span className="text-green-600">DevFest 2024</span>{" "}
          Innovación y Tecnología
        </h1>
        <div className="flex justify-center gap-4 mt-8">
          <button className=" flex gap-2 border rounded-lg border-gray-200 px-4 py-4 w-full max-w-80 items-center">
            <span>
              <UserGroupIcon className="text-blue-500 size-6" />
            </span>
            <span>
              <h2 className="font-product text-blue-500 text-left text-sm font-bold">
                Conocer más
              </h2>
              <p className="font-product text-xs text-left text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                voluptas, at nesciunt soluta voluptate quibusdam!
              </p>
            </span>
          </button>
          <button className="items-center justify-center flex gap-2 border rounded-lg border-gray-200 px-4 py-4 w-full max-w-80">
            <span>
              <CalendarDaysIcon className="text-blue-500 size-6" />
            </span>
            <span>
              <h2 className="font-product  text-blue-500  text-sm font-bold">
                Comprar entrada
              </h2>
            </span>
          </button>
        </div>
        <div className="mt-16 mx-auto w-full flex items-center justify-center">
          <Image
            alt="banner"
            src={banner}
            className="object-cover rounded-3xl  w-full h-[400px] max-w-[720px]"
          />
        </div>
      </div>
    </section>
  );
};
