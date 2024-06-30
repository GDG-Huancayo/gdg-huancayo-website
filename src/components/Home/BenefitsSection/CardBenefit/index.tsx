interface Props {
  img: string;
  title: string;
  invert?: boolean;
}

export const CardBenefit = ({ img, title, invert = false }: Props) => {
  return (
    <div
      className={`grid gap-10 relative lg:grid-cols-2 rounded-3xl bg-gray-50 p-8`}
    >
      <div
        className={`w-full h-[425px] rounded-3xl overflow-hidden ${
          invert ? "order-2" : "order-1"
        }`}
      >
        <img src={img} alt="img" className="object-cover w-full h-full" />
      </div>
      <div
        className={`flex items-center justify-center ${
          invert ? "order-1" : "order-2"
        }`}
      >
        <div className="max-w-96 w-full ">
          <h3 className="text-3xl font-product font-bold text-gray-900">
            {title}
          </h3>
          <p className="text-gray-500 font-product mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            iusto accusantium alias. Nostrum expedita cumque perferendis facere
          </p>
        </div>
      </div>
    </div>
  );
};
