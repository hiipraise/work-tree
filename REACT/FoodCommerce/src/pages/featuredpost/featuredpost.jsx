import { featuredpostData } from "../../data/product";
import FeaturedpostCard from "../../components/featuredpost/featuredpostcard";

const FeaturedpostPage = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="w-[80%] py-16">
        <div className="flex flex-col items-center gap-5 py-4">
          <h6 className="text-brandedblue text-xl font-bold">
            Practice Advise
          </h6>
          <h1 className="text-slate text-4xl font-bold">Featured Posts</h1>
        </div>

        <div className="flex gap-3">
          {featuredpostData.length &&
            featuredpostData.map((post, index) => (
              <FeaturedpostCard
                key={index}
                image={post.img}
                name={post.name}
                desc={post.description}
                link1={post.link1}
                link2={post.link2}
                link3={post.link3}
                date={post.date}
                comment={post.comment}
                button={post.button}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedpostPage;
