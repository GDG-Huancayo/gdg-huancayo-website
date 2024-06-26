export const ActionSection = () => {
  return (
    <section className="w-full flex items-center justify-center py-24 sm:py-32">
      <div className="max-w-6xl w-full rounded-3xl bg-slate-100 px-24 py-24 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col  items-center justify-center">
          <div>
            <h2 className="font-product text-3xl text-gray-900 font-bold">
              {" "}
              Ponte en contacto con nuestro equipo de asistencia
            </h2>
            <p className="font-product text-base text-gray-500 mt-2">
              Haz preguntas sobre el examen y la certificación de Educador de
              Google de nivel 1 y encuentra las respuestas.
            </p>

            <a
              href="#"
              className=" mt-8 block w-fit rounded-full py-3 px-10 bg-blue-500 text-center font-bold leading-6 text-white font-product transition-colors text-sm"
            >
              Unirme ahora
            </a>
          </div>
        </div>
        <div className="gap-8 grid">
          <div className="p-6 rounded-3xl cursor-pointer bg-slate-100 hover:bg-slate-200 transition-colors">
            <h3 className="text-2xl font-medium font-product">
              Consulta sobre la privacidad y las políticas de los exámenes
            </h3>
            <a
              href="#"
              className=" block w-fit mt-4 rounded-full font-bold text-sm leading-6 py-2 px-4 text-center  text-blue-500 font-product transition-colors hover:bg-blue-200"
            >
              Más información
            </a>
          </div>
          <div className="p-6 rounded-3xl cursor-pointer bg-slate-100 hover:bg-slate-200 transition-colors">
            <h3 className="text-2xl font-medium font-product">
              Consulta sobre la privacidad y las políticas de los exámenes
            </h3>
            <a
              href="#"
              className=" block w-fit mt-4 rounded-full font-bold text-sm leading-6 py-2 px-4 text-center  text-blue-500 font-product transition-colors hover:bg-blue-200"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
