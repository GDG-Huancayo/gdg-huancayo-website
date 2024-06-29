export const OverviewSection = () => {
  return (
    <section className="max-w-6xl w-full mx-auto px-6 py-24 sm:py-32 lg:px-8 ">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className=" flex items-start">
          <div>
            <h2 className="font-product text-3xl font-bold text-gray-900">
              Overview
            </h2>
            <p className="font-product text-base text-gray-600 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              dolorem voluptas quis vel atque blanditiis aperiam amet soluta,
              porro quae! Rem cum beatae odio, praesentium at distinctio
              voluptas repellendus iusto!
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-3xl bg-gray-100 p-8">
            <div>
              <h3 className="text-gray-900 text-xl font-medium font-product">
                Pricing
              </h3>
              <p className="text-gray-500 text-sm font-product mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque quia, iure unde fugit, optio magnam aspernatur autem.
              </p>
              <h3 className="text-gray-900 text-xl font-medium font-product mt-8">
                Capacity
              </h3>
              <p className="text-gray-500 text-sm font-product mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque quia, iure unde fugit, optio magnam aspernatur autem.
              </p>
              <a
                href="#"
                className=" block rounded-full mt-8 w-fit font-bold text-sm leading-6 py-3 px-10 text-center  text-blue-500 border  font-product transition-colors bg-white"
              >
                Unirme ahora
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        <div className="h-[720px]">
          <img
            src="https://storage.googleapis.com/next21-assets/event-assets/24/partner-summit/overview/tri-block/tri-block-primary.2023-12-18.webp"
            alt="img"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="h-[720px] flex flex-col gap-6">
          <img
            src="https://storage.googleapis.com/next21-assets/event-assets/24/partner-summit/overview/tri-block/tri-block-secondary-one.2023-12-18.webp"
            alt="img"
            className="w-full h-full rounded-3xl object-cover"
          />
          <img
            src="https://storage.googleapis.com/next21-assets/event-assets/24/partner-summit/overview/tri-block/tri-block-secondary-two.2023-12-18.webp"
            alt="img"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
