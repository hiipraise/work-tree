
const PopularProduct = ({image, name, pricebd, pricead}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
        <div>
            <img 
                src={image} 
                alt={`${name}`} 
            />
        </div>

        <div className='flex flex-col gap-5'>
            <h3 className='text-slate text-sm font-semibold'>{name || "name"}</h3>
            <small className='text-itemgray font-bold'>${pricebd || "price before discount"} <span className='text-itemgreen'>${pricead || "price after discount"}</span></small>
        </div>
    </div>
  )
}

export default PopularProduct