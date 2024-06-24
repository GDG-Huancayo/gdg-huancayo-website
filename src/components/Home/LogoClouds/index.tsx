import s from "./index.module.css";

const logoClouds = [
  {
    image:
      "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    link: "",
  },
  {
    image: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
    link: "",
  },
  {
    image: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
    link: "",
  },
  {
    image: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
    link: "",
  },

  {
    image: "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
    link: "",
  },
  {
    image: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
    link: "",
  },
];

export const LogoClouds = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="overflow-hidden grid grid-cols-[100%_100%]">
          <div className={`w-full flex  flex-nowrap ${s["logos-slide"]}`}>
            {logoClouds.map((item, idx) => (
              <a key={idx} className="ml-8">
                <img alt="image" src={item.image} className=" object-contain" />
              </a>
            ))}
          </div>

          <div className={`w-full  flex  flex-nowrap ${s["logos-slide"]}`}>
            {logoClouds.map((item, idx) => (
              <a key={idx} className="ml-8">
                <img alt="image" src={item.image} className=" object-cover" />
              </a>
            ))}
          </div>
        </div>

        <div className=" mt-10 logos overflow-hidden grid grid-cols-[100%_100%]">
          <div
            className={`w-full flex flex-nowrap ${s["logos-slide-invert"]}  `}
          >
            {logoClouds.map((item, idx) => (
              <a key={idx} className="ml-8">
                <img alt="image" src={item.image} className=" object-contain" />
              </a>
            ))}
          </div>

          <div
            className={`w-full  flex flex-nowrap ${s["logos-slide-invert"]} `}
          >
            {logoClouds.map((item, idx) => (
              <a key={idx} className="ml-8">
                <img alt="image" src={item.image} className=" object-cover" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
            <span className="hidden md:inline font-product">
              Over 2500 companies use our tools to better their business.
            </span>
            <a href="#" className="font-semibold text-blue-500 font-product">
              <span
                className="absolute inset-0 font-product"
                aria-hidden="true"
              />{" "}
              Read our customer stories <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
