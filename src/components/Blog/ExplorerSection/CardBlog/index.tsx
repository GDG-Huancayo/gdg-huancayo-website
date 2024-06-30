interface Props {
  post: {
    id: number;
    title: string;
    href: string;
    description: string;
    imageUrl: string;
    date: string;
    datetime: string;
    category: { title: string; href: string };
  };
}
export const CardBlog = ({ post }: Props) => {
  return (
    <article
      key={post.id}
      className="flex flex-col items-start justify-between border rounded-3xl relative overflow-hidden"
    >
      <div className="relative w-full">
        <img
          src={post.imageUrl}
          alt=""
          className="aspect-[16/9] w-full  bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
      </div>
      <div className="max-w-xl px-6 pb-10">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={post.datetime} className="text-gray-500 font-product">
            {post.date}
          </time>
          <a
            href={post.category.href}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 font-product"
          >
            {post.category.title}
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 font-product">
            <a href={post.href}>
              <span className="absolute inset-0 font-product" />
              {post.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 font-product">
            {post.description}
          </p>
        </div>
      </div>
    </article>
  );
};
