import DownloadIcon from "../../assets/icon/download";

const PopularProductII = ({ image, name, pricebd, pricead, sales }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div>
        <img src={image} alt={`${name}`} />
      </div>

      <div className="flex flex-col gap-5 text-center">
        <h3 className="text-slate text-sm font-semibold">{name || "name"}</h3>
        <div className="flex justify-center items-center gap-2 text-center">
          <DownloadIcon />
          <p className="text-grey font-medium">
            {sales || "no of sales"} sales
          </p>
        </div>
        <small className="text-itemgray font-bold">
          ${pricebd || "price before discount"}{" "}
          <span className="text-itemgreen">
            ${pricead || "price after discount"}
          </span>
        </small>
      </div>
    </div>
  );
};

export default PopularProductII;
