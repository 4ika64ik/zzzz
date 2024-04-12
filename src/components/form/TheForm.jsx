import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './formInput.css'
import ReactPixel from 'react-facebook-pixel';

import axios from 'axios';

export default function TheForm({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nick, setNick] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const text = `Новая заявка по ВНЖ(1)!\nИмя: ${name}\nТелефон: ${phone}\nНик телеграма: ${nick}`;
            await axios.post('https://api.telegram.org/bot6806809280:AAFqNvMpRw2ZsyyuFIpzoLd331rvHR1y4mQ/sendMessage', {
                text,
                chat_id: '-1002107069189',
            });
            ReactPixel.track('Lead');
            setIsFormSubmitted(true);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (isFormSubmitted) {
            const timer = setTimeout(() => {
                setIsModalOpen(false);
                setIsFormSubmitted(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isFormSubmitted]);

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)} className={`
    flex justify-center items-center gap-2 px-7 py-4 border font-monteserrat text-lg leading-none
    ${
                backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` :
                    "bg-blue-700 text-white border-blue-700"
            } rounded-full ${fullWidth && "w-full"}
`}>

                {label}
                {iconURL && <img src={iconURL} alt="Arrowright" className="ml-2 rounded-full w-5 h-5" />}
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex w-full justify-center items-center z-50">
                    <div className="absolute backdrop-blur bg-opacity-50 inset-0"></div>
                    <div className="absolute bg-white p-8 rounded-lg shadow-md z-50">
                        <button onClick={() => setIsModalOpen(false)}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        {isFormSubmitted ? (
                            <div>
                                <h2 className="text-2xl text-center font-bold mb-4">Спасибо!</h2>
                                <p className="text-gray-700 text-center sm:w-full lg:sm:w-56 pb-4">Ваши данные
                                    отправлены. Мы свяжемся с вами в течение дня.</p>
                            </div>
                        ) : (
                            <div>
                                <div className="bg-animation text-xl lg:text-2xl font-bold sm:text-2xl">
                                    Форма для заполнения
                                </div>
                                <p className="text-gray-400  text-center sm:w-full lg:sm:w-56 pb-4">Проработка
                                    индивидуальных условий под каждого клиента</p>

                               
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label>
                                            <p className="text-gray-700 text-left font-semibold">Имя</p>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Имя"
                                            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 transition delay-75 duration-300 focus:outline-none focus:ring-2 ocus:ring-blue-400  focus:border-none md:w-80 "
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <label>
                                            <p className="text-gray-700 text-left font-semibold">Телефон</p>
                                        </label>
                                        <PhoneInput
                                            international
                                            defaultCountry="RU"
                                            value={phone}
                                            onChange={setPhone}
                                            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 transition delay-75 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none md:w-80"
                                        />
                                    </div>


                                    <div className="mt-6 flex justify-center">
                                        <button type="submit"
                                                className=" flex justify-center items-center gap-2 px-7 py-4 border font-monteserrat text-lg leading-none bg-blue-700 text-white border-blue-700  w-full rounded">
                                            Отправить
                                        </button>
                                    </div>

                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
