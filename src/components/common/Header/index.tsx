import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useScroll } from "@/hooks";

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Productos", href: "#" },
  { name: "DevFest 2024", href: "#" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [previousScrollY, setPreviousScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const {
    position: { y: currentScrollY },
  } = useScroll();

  useEffect(() => {
    const hasScrolledDown = currentScrollY > previousScrollY;
    const isAboveThreshold = currentScrollY < 400;

    if (hasScrolledDown && isAboveThreshold) {
      setIsHeaderVisible(false);
    } else if (hasScrolledDown) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }

    setPreviousScrollY(currentScrollY);
  }, [currentScrollY]);

  return (
    <header
      className={`bg-white fixed w-full z-50 shadow rounded-b-3xl transition-all ease-linear duration-300 ${
        isHeaderVisible ? "-top-[500px]" : "top-0"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image src={logo} alt="logo" className="size-10 object-contain" />
            <span className=" font-product text-gray-500 font-bold">
              GDG Huancayo
            </span>
          </a>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium leading-6 text-gray-500 font-product"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only font-product">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex gap-4">
          <a
            href="#"
            className=" block rounded-full font-bold text-base leading-6 py-3 px-10  text-blue-500 border  font-product transition-colors"
          >
            Acceder
          </a>
          <a
            href="#"
            className="block rounded-full py-3 px-10 bg-blue-500 text-base font-bold leading-6 text-white font-product transition-colors "
          >
            Comenzar ahora
          </a>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <Image src={logo} alt="logo" className="size-10 object-contain" />
              <span className=" font-product font-bold text-sm text-gray-500">
                GDG Huancayo
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-sm font-product font-medium leading-7 text-gray-500 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className=" block rounded-full font-bold text-sm leading-6 py-3 px-10 text-center  text-blue-500 border  font-product transition-colors"
                >
                  Acceder
                </a>
                <a
                  href="#"
                  className=" mt-4 block rounded-full py-3 px-10 bg-blue-500 text-center font-bold leading-6 text-white font-product transition-colors text-sm"
                >
                  Comenzar ahora
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
