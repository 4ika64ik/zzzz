const OurWork = () => {
    return (
        <section className="flex px-6">
            <div className="flex flex-col md:justify-center md:items-center w-full my-8">
                <div>
                    <div className="main font-monserrat my-10 px-4">
                        <h3 className="heading">Наши условия к работе</h3>
                        <div className="container">
                            <ul>
                                <li>
                                    <h3 className="title font-semibold">
                                        {" "}
                                        Заработная плата:
                                    </h3>
                                    <p>
                                        от 15 до 21 евро в час, в зависимости от квалификации и опыта работы.
                                    </p>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="title font-semibold">
                                        Предоставление жилья:
                                    </h3>
                                    <p>
                                        Наша компания набирает в свою команду новых специалистов с опытом и без. Мы
                                        стремимся к совершенству во всем, что мы делаем. От нас своевременная оплата,
                                        приятные условия работы - от вас желания работать
                                    </p>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="title font-semibold">
                                        Прием сотрудников:
                                    </h3>
                                    <p>
                                        мы готовы принимать как специалистов со значительным опытом работы, так и тех,
                                        кто только начинает свою карьеру в строительной отрасли. Мы ценим мотивацию и
                                        готовность к обучению.
                                    </p>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="title font-semibold">
                                        Предоставление питания:
                                    </h3>
                                    <p>
                                        наша компания обеспечивает питание для сотрудников во время рабочего дня.
                                    </p>
                                    <span className="circle"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
