import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, success, officeSuccess, friendlyCollective, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 , luba , julia } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Главная" },
    { href: "#about-us", label: "О нас" },
    { href: "#products", label: "Миграционные страны" },
    { href: "#contact-us", label: "Контакты" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Преобрели внж' },
    { value: '500+', label: 'Доверяют нам' },
];

export const products = [
    {
        imgURL: success,
        name: "Успех",
    },
    {
        imgURL: officeSuccess,
        name: "Доверие",
    },
    {
        imgURL: friendlyCollective,
        name: "Внж за короткий срок",
    },
    {
        imgURL: shoe7,
        name: "Ключ к успеху",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Надежные партнер",
        subtext: "Мы сотрудничаем с проверенными и надежными партнерами в сфере получения ВНЖ. Наши партнеры - это лицензированные агентства и специалисты с многолетним опытом работы в области оформления документов для пребывания в Европе. "
    },
    {
        imgURL: shieldTick,
        label: "Быстрое получение",
        subtext: "С нами вы можете быть уверены в быстром получении ВНЖ всего за 4 недели. Наша команда экспертов знает все тонкости процесса и обладает необходимыми ресурсами для оперативного оформления вашего документа."
    },
    {
        imgURL: support,
        label: "Лояльность клиентов",
        subtext: "Доверие и удовлетворенность клиентов - наш главный приоритет. Мы гордимся высоким уровнем лояльности среди наших клиентов, которые выбирают нас снова и снова для получения ВНЖ в Европе. "
    },
];

export const reviews = [
    {
        imgURL: julia,
        customerName: 'Ю́лия Бори́совна Нава́льная',
        feedback: "Юлия - российская общественная деятельница и политик. Будучи женой Алексея Навального, упоминалась в ряде СМИ как «первая леди российской оппозиции."
    },
    {
        imgURL: luba,
        customerName: 'Любо́вь Эдуа́рдовна Со́боль',
        feedback: "Люба - До 2021 — юрист <Фонда борьбы с коррупцией>(ФБК) , в том числе в рамках проекта <РосПил> (2011-2018), член Координационного совета российской оппозиции (2012-2013)."
    }
];


export const footerLinks = [

    {
        title: "Разделы",
        links: [
            { name: "Главная", link: "/home" },
            { name: "FAQs", link: "/" },
            { name: "О нас", link: "/" },
            { name: "Миграционные странны", link: "/" },
            { name: "Контакты", link: "/" },
        ],
    },
    
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },

];