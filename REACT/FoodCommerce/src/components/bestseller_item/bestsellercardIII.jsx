const BestsellerCardIII = ({ name, image, desc, pricebd, pricead }) => {
  return (
    <div>
      <div className="flex flex-col gap-7">
        <img
          className="w-[100%] h-56 object-contain"
          src={image}
          alt={`${name}`}
        />
        <div className="flex flex-col gap-3 pl-5">
          <h2 className="text-slate font-bold text-base">{name || "item name"}</h2>
          <p className="text-grey font-medium">{desc || "Item description"}</p>
          <p className="text-itemgray text-md font-semibold">
            ${pricebd || "price before discount"}{" "}
            <span className="text-itemgreen">
              ${pricead || "price after discount"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestsellerCardIII;
