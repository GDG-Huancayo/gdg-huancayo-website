const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
];

export const OurBlog = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl ">
          <h2 className="text-3xl font-product tracking-tight text-gray-900 font-bold">
            Descubre nuestro blog
          </h2>
          <p className="mt-4 text-base  font-product text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            alias perspiciatis, maxime dicta accusamus modi laboriosam
            repudiandae fugit.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 px-8 pt-8 pb-80 sm:pb-48 lg:pb-[350px] group  cursor-pointer"
            >
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.4] group-hover:scale-110 transition-all"
              />
              <h3 className="mt-3 text-xl font-semibold leading-6 text-white font-product">
                <a href={post.href}>
                  <span className="absolute inset-0 font-product" />
                  {post.title}
                </a>
              </h3>
              <p className="text-base text-white mt-4 font-product opacity-80">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid nihil sunt, ducimus facilis, vero sequi provident
                eligendi amet blanditiis nobis officia.
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
