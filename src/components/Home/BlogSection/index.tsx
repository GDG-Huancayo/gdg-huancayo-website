const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://diariodigital.ujaen.es/sites/default/files/imagen/2023-12/np_foto_Devfest_2023.jpg",
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://www.servicedoffice.com/logos/profile/e03d88a64daf39b8f5f07cf57a75ba6d.jpeg",
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/fKdtVN86DbHEfrSKdnzXz6.jpg",
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/googleExtendedIO4.original.jpg",
  },
];

export const BlogSection = () => {
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
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 px-8 pt-8 pb-80 sm:pb-48 lg:pb-[250px] group  cursor-pointer"
            >
              <div className="absolute w-full h-full  left-0 top-0 z-10 bg-gradient-to-b from-[#171717] from-10% to-transparent to-75%"></div>
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover  group-hover:scale-125 transition-transform duration-300 ease-in"
              />
              <h3 className="mt-3 text-2xl font-semibold leading-6 text-white font-product relative z-20">
                <a href={post.href}>{post.title}</a>
              </h3>
              <p className="text-base text-white mt-4 font-product opacity-80 z-20">
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
