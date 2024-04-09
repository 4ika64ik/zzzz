import { offer } from "../assets/images"
import TheForm from "../components/form/TheForm.jsx";



const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
      <img src={offer} alt="" width={773} height={687} className="object-contain rounded-2xl w-full" />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="text-blue-700">Почему мы?</span>
        </h2>
        <p 
        className="mt-4 lg:max-w-lg: info-text">Вы знаете что наши основатели уже не первый год работают над улучшением жизни Русского народа, за эти года у нас собралась команда отличных юристов и специалистов по миграции
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
            <TheForm label="Связаться с нами"/>
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer