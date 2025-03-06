
const PopularUse = ({no, heading, subheading}) => {
  return (
    <div className='flex gap-4 w-[20vw]'>
        <div className='text-red text-4xl font-extrabold pt-3'>
            <h1>{no || "number"}</h1>
        </div>

        <div className='w-[13vw]'>
            <p className='text-slate text-lg font-semibold'>{heading || "How to use"}</p>
            <small className='text-grey text-md font-medium'>{subheading || "description"}</small>
        </div>
    </div>
  )
}

export default PopularUse