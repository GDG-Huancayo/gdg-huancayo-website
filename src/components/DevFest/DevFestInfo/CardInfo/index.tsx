interface Props {
  title: string;
  message: string;
  icon: string;
}
export const CardInfo = ({ title, message, icon }: Props) => {
  return (
    <div className="px-10 pt-12 py-20 shadow-lg border border-gray-100 rounded-2xl bg-white w-full max-w-sm">
      <img src={icon} alt="icon" className="size-14 object-cover" />
      <h2 className="font-product font-medium text-gray-900 text-3xl mt-10">
        {title}
      </h2>
      <p className="font-product text-gray-500 text-base mt-4">{message}</p>
    </div>
  );
};
