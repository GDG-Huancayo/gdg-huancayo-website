import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { CardInfo } from "./CardInfo";

const info = [
  {
    title: "Obtén primeros pasos útiles y fáciles de seguir",
    message:
      "Empieza con la ayuda de un experto y lanza tu campaña con orientación práctica.",
    icon: "https://lh3.googleusercontent.com/KO-PLOBExTo8863TI6cYI5dYbqNbdWBJd9e-AKtmO2dh6QX0v4hYyK3H0-WT3Nzzbm8PoLavXeztBn7_I9DF13rpr7C3YwD05nloDS-xA3nL47p6g44=s0-rw-v1",
  },
  {
    title: "Descubre las funciones y las actualizaciones de la plataforma",
    message:
      "Analizaremos las funcionalidades más recientes de la plataforma, incluidas las nuevas funciones de IA en Google Ads.",
    icon: "https://lh3.googleusercontent.com/tviTpyu2t7CeQAOl8OttHNN3TusfORNS-GfNqSl88VRToL7wZ0BW0WIFnlroLRIMoxN1yVA4zupQ0jg2rcjvQw26oyxTp-S1RA8CMQSQRUzHSqHt9pI=s0-rw-v1",
  },
  {
    title: "Revisa tu campaña antes de que se publique",
    message:
      "Diseñaremos un plan de medios, seleccionaremos las palabras clave correctas y optimizaremos tu presupuesto.",
    icon: "https://lh3.googleusercontent.com/SoviBot3lepb09ybMG0466a5xrXLAYKAK-EpygRoHEqwcy4Xpo9b_XxclNUbK6Vo5vFa2Iutg19tRYg_eJBcn8UqQm2K2EkBRiKhezK9nxQkIpFaIg=s0-rw-v1",
  },
];

export const DevFestInfo = () => {
  return (
    <section className="mx-auto max-w-6xl w-full  py-24 sm:py-24  px-6 ">
      <h1 className="text-5xl font-product text-gray-900 font-bold w-full text-center max-w-3xl mx-auto leading-normal">
        Descubre los beneficios exclusivos de DevFest 2024
      </h1>
      <p className="font-product text-gray-500 text-base w-full text-center max-w-3xl mx-auto mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        omnis dignissimos ipsa consectetur officiis iste quia neque ipsam
        veritatis illo sapiente in, inventore, voluptates dolor quas placeat
        maiores ipsum dolore!
      </p>
      <a
        href="#"
        className=" flex items-center justify-center w-fit mx-auto gap-2 mt-8 rounded-full font-bold text-base leading-6 py-3 px-10  text-blue-500 border  font-product transition-colors"
      >
        <ArrowDownIcon className="size-4 text-blue-500" strokeWidth={3} />
        Conocer a los expertos
      </a>
      <div className="mt-14 grid md:grid-cols-3 gap-10 md:justify-between justify-center items-start">
        {info.map((item, idx) => {
          const marginTop =
            idx === 1 ? "md:mt-16" : idx === 2 ? "md:mt-36" : "mt-0";
          return (
            <div key={item.title} className={`relative ${marginTop}`}>
              <CardInfo
                message={item.message}
                title={item.title}
                icon={item.icon}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
