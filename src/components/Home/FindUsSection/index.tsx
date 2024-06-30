import { Tabs } from "@/components/shared";
import { LinkIcon } from "@heroicons/react/16/solid";
import lineGreen from "@/assets/illustrations/line-green.png";
import Image from "next/image";

const tabs = [
  { name: "Universidad Continental", href: "#", current: false },
  { name: "La Base Co-Work", href: "#", current: true },
  { name: "SENATI", href: "#", current: false },
];

export const FindUsSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-screen absolute left-0 h-full flex items-center justify-center z-10">
        <Image src={lineGreen} alt="line" className="w-full h-[475px]" />
      </div>
      <div className="max-w-6xl w-full mx-auto  px-6 py-24 sm:py-32 relative z-20">
        <div className=" max-w-2xl ">
          <h2 className="text-3xl font-bold tracking-tight text-left text-gray-900 font-product">
            Nuestra ubicación
          </h2>
          <p className="mt-4 text-left text-base  font-product text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            alias perspiciatis, maxime dicta accusamus modi laboriosam
            repudiandae fugit.
          </p>
          <button className="text-base flex justify-center items-center gap-2 rounded-full  mt-4  leading-6 py-1 px-2  font-product bg-white text-blue-500 transition-colors font-bold hover:bg-blue-100">
            Únete a Nosotros
            <LinkIcon className="size-5 text-blue-600" />
          </button>
        </div>
        <div className="mt-16 w-full h-[720px] rounded-[40px] shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.2825437770388!2d-75.19949664110908!3d-12.047418852361565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e97b3314cd879%3A0x9f66ef8a3f5b21d1!2sPuerta%20Principal%20-%20Universidad%20Continental!5e0!3m2!1ses!2spe!4v1718812870094!5m2!1ses!2spe"
            style={{ border: "0px solid #000", outline: "none" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-[40px] overflow-hidden outline-none"
          ></iframe>
        </div>
        <div className="mt-16">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
};
