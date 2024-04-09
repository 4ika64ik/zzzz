import { Hero, CustomerReviews, Footer, PopularProducts, Services, SpecialOffer, SuperQuality, MapSectionp } from "../sections";
import Etapes from '../sections/etapes/etapes'
import Nav from '../components/Nav'

const Home = () => (
    <main className="realtive  overflow-hidden ">
        
        <section className=""><Hero/></section>
        <section  className="padding"><Etapes /></section>
        <section className="padding"><PopularProducts/></section>
        <section className="padding"><SuperQuality/></section>
        <section className="padding-x py-10"><Services/></section>
        <section className="padding"><SpecialOffer/></section>
        <section className="padding"><MapSectionp/></section>
        <section className="bg-black padding-x padding-t pb-8"><Footer/></section>
    </main>

);
export default Home;