import { popularII } from '../../data/product';
import PopularProductII from '../../components/popular/popularproductII';
import "./mostpopular.css"

const MostPopularII = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-10">
        <div className="w-[75%] flex flex-col md:flex-row items-stretch">
    
    
            <div className="bg-neutral flex flex-1 flex-col justify-center items-center gap-8 p-6 order-1">
                <div className="flex flex-col text-center font-medium gap-4">
                    <strong className="text-slate">MOST POPULAR</strong>
                    <small className="text-grey">
                    We focus on ergonomics and meeting you where you work. Its only a keystroke away.
                    </small>
                </div>

                <div>
                    {popularII.length &&
                    popularII.map((product, index) => (
                        <PopularProductII
                            key={index}
                            name={product.name}
                            image={product.img}
                            sales={product.sale}
                            pricebd={product.pricebd}
                            pricead={product.pricead}
                        />
                    ))}
                </div>

                <div className='flex gap-2'>
                    <div className='py-2 px-2 rounded-full bg-brandedblue'></div>
                    <div className='py-2 px-2 rounded-full bg-itemgreen'></div>
                    <div className='py-2 px-2 rounded-full bg-orange'></div>
                    <div className='py-2 px-2 rounded-full bg-slate'></div>
                </div>
            </div>

            
            <div
            className="h-[90vh] flex-[3] w-full bg-cover bg-center bg-no-repeat order-2 burgereater"
            
            >
            </div>

        </div>
    </section>


  )
}
export default MostPopularII