import { CardBenefit } from "./CardBenefit";

const cards = [
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/da1578163571057.63e818f6386a7.jpg",
    title: "YouTube Create y otras formas de mejorar tu contenido.*",
  },
  {
    img: "https://developers.google.com/static/community/images/accelerators.jpg",
    title: "Empareja tus dispositivos favoritos y envía contenido.",
    invert: true,
  },
  {
    img: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Más protección contra spam y phishing.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="mx-auto max-w-6xl py-24 md:py-32">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 font-product mx-auto text-center">
          Los beneficios de nuestra comunidad
        </h2>
        <p className="mt-4 text-gray-500 font-product max-w-[600px] mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          quibusdam voluptas perspiciatis autem libero impedit sit consequatur
          ipsum, asperiores sequi?
        </p>
      </div>
      <div className="mt-24 grid gap-10">
        {cards.map((item) => (
          <CardBenefit
            img={item.img}
            title={item.title}
            key={item.title}
            invert={item.invert}
          />
        ))}
      </div>
    </section>
  );
};
