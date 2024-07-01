import { ClipboardDocumentCheckIcon } from "@heroicons/react/16/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const CategorySection = () => {
  return (
    <section className="bg-gray-100 my-24">
      <div className="mx-auto max-w-6xl py-24 grid grid-cols-[30%_65%]">
        <div>
          <span className="flex items-center justify-start gap-2 mb-6">
            <ClipboardDocumentCheckIcon className="size-6 text-gray-900" />
            <span className="text-gray-900 tracking-wide text-sm uppercase font-product font-bold">
              CATEGORIA
            </span>
          </span>
          <h2 className="text-3xl text-gray-900 font-product font-bold">
            Todo sobre "desarrollo web"
          </h2>
          <p className="text-base text-gray-500 font-product mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
            ad? Maiores ducimus voluptates facere dolore.
          </p>

          <a
            href="#"
            className="group-hover:bg-slate-200 flex items-center gap-2 rounded-full mt-8 w-fit font-bold text-sm leading-6 py-1 px-2 text-center  text-blue-500 font-product transition-colors bg-slate-100 hover:bg-blue-200 "
          >
            Unirme ahora
            <ArrowRightIcon className="text-blue-500 size-4" strokeWidth={3} />
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
};
