import BestsellerCardIII from "../../components/bestseller_item/bestsellercardIII";
import { bestsellerDataIII } from "../../data/product";
import HooliICon from "../../assets/icon/hooli";
import LyftIcon from "../../assets/icon/lyft";
import CapICon from "../../assets/icon/cap";
import StripeIcon from "../../assets/icon/stripe";
import AwsIcon from "../../assets/icon/aws";
import BabyAntenna from "../../assets/icon/babyantenna";

const BestsellerProductIII = () => {
  return (
    <section className="bg-neutral flex w-full justify-center flex-wrap">
      <div className="flex flex-col w-[70%] py-10">
        <h1 className="font-bold text-xl text-slate">BESTSELLER PRODUCTS</h1>
        <div className="flex justify-evenly gap-10 py-5">
          {bestsellerDataIII.length &&
            bestsellerDataIII.map((product, index) => (
              <BestsellerCardIII
                key={index}
                name={product.name}
                image={product.img}
                desc={product.description}
                pricebd={product.pricebd}
                pricead={product.pricead}
              />
            ))}
        </div>

        <div className="flex justify-between items-center pt-20">
          <HooliICon />
          <LyftIcon />
          <CapICon />
          <StripeIcon />
          <AwsIcon />
          <BabyAntenna />
        </div>
      </div>
    </section>
  );
};

export default BestsellerProductIII;
