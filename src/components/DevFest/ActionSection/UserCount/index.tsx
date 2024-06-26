export const UserCount = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-8 px-6">
        <div className="bg-green-100 rounded-full px-10 ">
          <p className="text-green-800 font-product font-bold text-[128px] bg-left-bottom leading-tight tracking-tighter">
            500
          </p>
        </div>
        <h2 className="text-gray-900 text-6xl font-medium font-product">
          usuarios registrados
        </h2>
      </div>
      <h3 className="text-2xl mt-4 font-product text-gray-900 text-center w-full">
        Activos en todo el Perú
      </h3>
    </>
  );
};
