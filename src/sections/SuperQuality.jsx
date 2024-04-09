
import { arrowRight } from "../assets/icons"
import { collective } from "../assets/images"
import TheForm from "../components/form/TheForm.jsx";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Экономия времени </span>
          <br />
          <span className="text-blue-700">усилий</span>
        </h2>
        <p 
        className="mt-4 lg:max-w-lg: info-text">
            Не тратьте время на изучение сложных миграционных процедур и бесконечные походы по инстанциям. Мы возьмем на себя все необходимые формальности.

        </p>
          <p className="mt-6 lg:max-w-lg info-text"> </p>
        <div className="mt-11">
            <TheForm label="Оставить заявку" />
        </div>
    </div>
    <div className="flex-1 flex justify-center rounded-2xl items-center">
      <img src={collective} alt="shoe8" width={570} height={522} className="object-contain rounded-2xl"/>
    </div>
    </section>
  )
}

export default SuperQuality;