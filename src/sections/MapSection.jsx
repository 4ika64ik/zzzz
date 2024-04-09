import MapComponent from "../components/Map.jsx";

const App = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 text-sm lg:gap-20 md:gap-20 px-0 ">
            <div className="info-text m-auto mt-4 max-w-lg text-left text-sm ">
               <div className="font-bold text-black mb-2"> Если у вас есть вопросы, мы всегда на связи!</div>
                <div className="text-sm lg:text-lg">
                    +49 152 10225079 <br/>
                    residencybridge@gmail.com <br/>
                    Mauerstraße 12, 10117 Berlin<br/>
                    Пн - Пт 09:00-17:00 <br/>
                </div>
            </div>
            <div className="mt-6 lg:mt-0">

                <MapComponent center={[51.505, -0.09]} zoom={13} />
            </div>
        </div>
    );
};

export default App;
