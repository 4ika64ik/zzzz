import {roundedOne} from "../../assets/icons/index.js";
import {roundedTwo} from "../../assets/icons/index.js";
import {roundedThree} from "../../assets/icons/index.js";
import {roundedFour} from "../../assets/icons/index.js";
import TheForm from "../../components/form/TheForm.jsx";
const Etapes = () => {
    return (
        <>
<div className="flex justify-center">
            <div>
                <p className=" text-center text-[40px] lg:text-4xl font-bold mb-8">Этапы <span className="text-blue-700"> работы</span></p>
                <div>
                    <div className="flex items-center">
                        <p className="flex items-center gap-2 ">
                            <img className="w-12" src={roundedOne} alt="rounded"/>
                            <p className="">
                                Подготовка документов и формирование досье
                            </p>
                        </p>
                    </div>
                    <p className="flex items-center gap-2 mt-2">
                        <img className="w-12" src={roundedTwo} alt=""/>
                        <p>Регистрация досье в органах миграционного контроля</p>
                    </p>
                        <p className="flex items-center gap-2 mt-2">
                            <img className="w-12" src={roundedThree} alt=""/>
                            <p>Получение сертификата о гражданстве и европейского паспорта</p>
                        </p>
                        <p className="flex items-center gap-2 mt-2">
                            <img className="w-12" src={roundedFour} alt=""/>
                            <p>Изготовление внутренних документов гражданина ЕС</p>
                        </p>
                </div>
            </div>
        </div>
        <div className="mt-12">

<TheForm label="Оставить заявку" />
        </div>
        </>
        
    );
};

export default Etapes;
