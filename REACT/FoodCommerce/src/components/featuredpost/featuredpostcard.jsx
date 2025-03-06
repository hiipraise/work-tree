import CommentIcon from '../../assets/icon/comment'
import DateIcon from '../../assets/icon/date'
import MoreIcon from '../../assets/icon/learnmore'

const FeaturedpostCard = ({ image, link1, link2, link3, name, desc, date, comment, button}) => {
  return (
    <div className='flex flex-col'>
        <img className='w-full h-80 object-contain block'
            src={image} 
            alt={`${name}`} 
        />
        <div className='flex flex-col gap-4 px-5 py-5 shadow-md -mt-[20px]'>
            <ul className='flex gap-4 text-grey'>
                <li className='text-brandedblue'>{link1 || "google"}</li>
                <li>{link2 || "trending"}</li>
                <li>{link3 || "new"}</li>
            </ul>
            <div>
                <h1 className='text-slate text-xl pb-3'>{name || "name"}</h1>
                <p className='text-grey font-sm text-sm pr-4'>{desc || 'description'}</p>
            </div>

            <div className='flex gap-7 text-sm text-grey'>
                <div className='flex items-center gap-2'> <DateIcon/> <p>{date || "date"}</p></div>
                <div className='flex items-center gap-2'> <CommentIcon/> <p>{comment || "comment"} comments</p></div>
            </div>
            
            <div className='flex items-center gap-5'>
                <p className='font-bold text-grey text-md'>{button || "learn more"}</p>
                <MoreIcon className= 'text-brandedblue w-6 h-6'/>

            </div>
        </div>
    </div>
  )
}

export default FeaturedpostCard