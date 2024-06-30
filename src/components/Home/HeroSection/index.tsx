import Image from "next/image";
import banner from "@/assets/banner.png";
import logoYoutube from "@/assets/logo-youtube.png";
import { ClockIcon } from "@heroicons/react/24/outline";

export const HeroSection = () => {
  return (
    <section className="max-w-6xl w-full mx-auto mt-36 mb-8 px-6">
      <p className="text-3xl font-product text-center max-w-4xl text-gray-900 mx-auto my-8 py-6">
        Nuestra misión es <span className="text-red-500">organizar</span> la
        <span className="text-blue-500"> información</span> del mundo para que{" "}
        <span className="text-green-500">todos puedan acceder a ella</span> y
        <span className="text-yellow-500"> usarla.</span>
      </p>
      <div className="my-10 relative w-full h-[720px] mx-auto rounded-[40px] overflow-hidden">
        <div className="w-full h-full">
          <Image
            alt="banner"
            src={banner}
            className="w-full h-full object-cover"
          />
          <button className="w-full h-full backdrop:blur-3xl absolute top-0 left-0 bg-[#0009] z-10 flex items-center justify-center  transition-colors hover:bg-[#0004] group">
            <div className="grid place-items-center">
              <Image
                alt="youtube-logo"
                src={logoYoutube}
                className="w-20 object-cover mb-4 brightness-[20.5] "
              />
              <h3 className="text-2xl text-white font-product font-bold">
                Mirar el video
              </h3>
              <div className="flex items-center gap-1 justify-center w-fit px-3 py-2 rounded-full mt-4 bg-[#0008] ">
                <ClockIcon className="size-4 text-white" />
                <p className="font-bold font-product text-sm text-white">
                  1:30
                </p>
              </div>
            </div>
          </button>
        </div>
        <div></div>
      </div>
      <p className="text-xl font-product text-center max-w-3xl text-gray-900 mx-auto ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa
        minus perferendis, eum dolorem aut placeat at obcaecati aspernatur
      </p>
      <div className="flex gap-4 mt-12 items-center justify-center w-full flex-wrap">
        <button className="text-base block rounded-full  leading-6 py-4 px-10  font-product bg-blue-500 text-white transition-colors font-bold">
          Únete a Nosotros
        </button>
        <button className="text-base block rounded-full  leading-6 py-4 px-10  font-product bg-white border border-gray-200 text-blue-500 transition-colors font-bold">
          Mira nuestra galeria
        </button>
      </div>
    </section>
  );
};
