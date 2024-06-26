import { UserCount } from "./UserCount";

export const ActionSection = () => {
  return (
    <section className="">
      <UserCount />
      <div className="w-full my-8 mx-auto max-w-6xl rounded-full bg-blue-200 mt-20 px-6">
        <div className=" py-16 px-8 max-w-5xl mx-auto">
          <h2 className="text-5xl text-gray-950  font-product text-center font-bold">
            ¿Te gustaría unirte a nuestra
            <br />
            comunidad?
          </h2>
          <div className="flex gap-4 mt-8 items-center justify-center w-full flex-wrap">
            <button className="text-base block rounded-full  leading-6 py-4 px-10  font-product bg-blue-500 text-white transition-colors font-bold">
              Únete a Nosotros
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
