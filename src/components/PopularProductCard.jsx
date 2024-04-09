import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
        src={imgURL}
        alt={name} 
        className="w-[280px] h-[200px] rounded-xl"
        />
        <h3 className='mt-2 text-2xl leading-normal font-semi-bold font-palanquin'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coFral-red text-2xl leading-normal'>{price}</p>
    </div>
  )
}
export default PopularProductCard