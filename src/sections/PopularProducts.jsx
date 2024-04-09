import { products } from '../constants';
import PopularProductCard from '../components/PopularProductCard';
import { Link } from 'react-router-dom';

const PopularProducts = () => {
  return (
    <section 
    id='country' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5 '>
        <h2 className='text-[40px] leading-[40px] lg:text-4xl font-palanquin font-bold'>
          Что о нас  <span className='text-blue-700'>говорят</span> люди
          </h2>
          <iframe
            height="315"
            src="https://www.youtube.com/embed/lY8eaeCcEn8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
         <p className=' mt-2 font-montserrat text-slate-gray'>
         Мы гордимся тем, что все наши клиенты остаются довольными результатами наших услуг. Наша команда делает все возможное, чтобы обеспечить наших клиентов профессиональным и качественным обслуживанием на каждом этапе процесса получения ВНЖ. Доверьтесь нам, и мы поможем вам начать новую главу вашей жизни в Европе без лишних забот и стресса!
        </p>
        <div 
        className='
        mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
        sm:gap-4 gap-14 '>
         
        </div>
      </div>
      <Link to="/vnzh" className='bg-blue-700 text-white border-blue-700   flex justify-center items-center gap-2 px-7 py-4 border font-monteserrat text-lg leading-none
      rounded-full mt-12'>
      Страны для получения
      </Link >
    </section>
  )
}

export default PopularProducts