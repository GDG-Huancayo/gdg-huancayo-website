export const CardBlog = () => {
  return (
    <div className="md:mb-8 mb-4 grid grid-cols-[60%_35%] md:grid-cols-2 items-center gap-4 bg-white rounded-3xl border p-6 md:p-0 md:border-none">
      <div className="flex flex-col w-fit">
        <a
          href=""
          className="font-product py-1 px-1 md:text-xs text-sm text-green-500 hover:bg-green-200 transition-all rounded-full w-fit"
        >
          Grupos de estudio
        </a>
        <h2 className="font-product font-medium text-gray-900 md:text-xs text-lg mt-1 p-1">
          NotebookLM se expande a nivel global con soporte para sitios web,
        </h2>
      </div>
      <img
        src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Spanish-Bento_Dark.width-1000.format-webp.webp"
        alt="img"
        className="md:h-[80px] h-40 md:w-36 w-full flex object-cover rounded-2xl"
      />
    </div>
  );
};
