import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CardBlog } from "./CardBlog";

export const HeroSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-8 grid md:grid-cols-[70%_25%] mt-24 md:gap-[5%]">
      <div className="w-full">
        <img
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/blog_post_v03_revised.width-1874.format-webp.webp"
          alt="banner"
          className="w-full object-cover h-[600px] rounded-bl-3xl"
        />
        <div className="md:pl-16 relative -top-24">
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden p-10">
            <a
              href=""
              className="font-product p-2 text-sm text-blue-500 hover:bg-blue-200 transition-all rounded-full"
            >
              Inteligencia artifical
            </a>
            <h2 className="text-gray-900 font-product font-bold text-3xl mt-4">
              La era de la IA: expandir el potencial creativo del marketing
            </h2>
            <p className="text-gray-500 font-product mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              obcaecati.
            </p>
            <button className="rounded-full p-2 flex items-center justify-center transition-colors bg-white hover:bg-slate-100 mt-4 group">
              <ArrowRightIcon className="size-6 text-gray-900 group-hover:text-blue-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="py-8 grid">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </section>
  );
};
