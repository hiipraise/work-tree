import PopularProduct from "../../components/popular/popularproduct";
import PopularUse from "../../components/popular/popularuses";
import { popular } from "../../data/product";
import { uses } from "../../data/product";

const MostPopular = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-10">
      <div className="w-[75%] flex">
        <div className="flex bg-contain bg-center h-[90vh] flex-[2] bg-no-repeat dispatch">
        </div>

        <div className="bg-neutral  flex flex-1 flex-col justify-center items-center gap-9">
          <div className="flex flex-col text-center font-medium gap-4">
            <strong className="text-slate">MOST POPULAR</strong>
            <small className="text-grey">
              We focus on ergonomics and meeting you where you work. Its only a
              keystroke away.
            </small>
          </div>

          <div>
            {popular.length &&
              popular.map((product, index) => (
                <PopularProduct
                  key={index}
                  name={product.name}
                  image={product.img}
                  pricebd={product.pricebd}
                  pricead={product.pricead}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="flex w-[75%] justify-between py-10 gap-5">
        {uses.length &&
          uses.map((productUses, index) => (
            <PopularUse
              key={index}
              no={productUses.number}
              heading={productUses.name}
              subheading={productUses.description}
            />
          ))}
      </div>
    </section>
  );
};

export default MostPopular;
