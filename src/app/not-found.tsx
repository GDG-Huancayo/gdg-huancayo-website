"use client";
import { Footer, Header } from "@/components/common";

function NotFound() {
  return (
    <>
      <Header />
      <main className="my-48">
        <div className="w-full max-w-6xl mx-auto ">
          <h2 className="text-[450px] text-center text-sky-100 font-product font-bold leading-[380px]">
            Oops
          </h2>
        </div>
        <div className="grid md:grid-cols-2 w-full max-w-4xl mx-auto gap-10">
          <div className="w-full h-full ">
            <h2 className="text-gray-900 mt-10 font-bold text-5xl font-product">
              Lo sentimos, sucedio un error.
            </h2>
          </div>
          <div className="w-full h-full ">
            <p className="text-lg text-gray-500 font-product">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              soluta totam maxime labore natus eos excepturi optio dolore?
              Mollitia enim iure soluta vel blanditiis nostrum non similique
              obcaecati sunt facere!
            </p>
            <a
              href="#"
              className="flex  w-fit mt-10 rounded-full py-3 px-10 bg-blue-500 text-base font-bold leading-6 text-white font-product transition-colors "
            >
              Comenzar ahora
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default NotFound;
