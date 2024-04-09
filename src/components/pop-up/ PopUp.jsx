import { useState, useEffect } from 'react';
import {WhatsAppIcn} from "../../assets/icons/index.js";
import {TelegramIcn} from "../../assets/icons/index.js";
import './PopUp.css';

const Popup = () => {
    const [showNotification, setShowNotification] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNotification(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const closeNotification = () => {
        setShowNotification(false);
    };

    return (
        <div className={`cookie-notification ${showNotification ? 'show' : ''} z-20` } >
            <div className="flex justify-between">
                <div className="flex items-center">
                    <a href="https://wa.me/message/DNXUJ4NVDLSXL1?src=qr"><img className="w-10 h-10" src={WhatsAppIcn}
                                                                               alt=""/></a>
                    <a href="https://t.me/@vnzhvisatoeu"><img className="w-10 h-10" src={TelegramIcn}
                                                              alt=""/></a>

                </div>
                <p>
                    +49 152 10 22 5079
                </p>
            </div>
            <TheForm onClick={closeNotification} >
                Получить предложение
            </TheForm>
        </div>
    );
};

export default Popup;