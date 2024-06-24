export const CardPrice = () => {
  return (
    <button className="bg-white rounded-2xl border border-gray-200 p-6 grid place-items-center pb-16">
      <div className="flex items-end justify-end w-full">
        <span className="size-4 border border-gray-300 rounded-full"></span>
      </div>
      <span className="text-blue-500 bg-blue-200 rounded-full font-product text-center py-1 px-2 text-sm mt-4">
        OFERTA A
      </span>
      <h3 className="uppercase text-blue-500 font-product text-5xl font-bold mt-8">
        USD $350
      </h3>
      <p className="font-product text-blue-500 font-bold text-center text-sm">
        de crédito en Google Ads
      </p>
      <p className="text-gray-500 font-product mt-4 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima
        tempore blanditiis. Quis optio non pariatur ullam voluptate quibusdam
        minima! Voluptatem, eius minima perferendis ut eaque dolore similique
        nam distinctio.
      </p>
    </button>
  );
};
