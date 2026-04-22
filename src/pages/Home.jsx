import Banner from "../components/Banner";
import banner from "../assets/banner-1.png";
import Introducao from "../components/Introducao";
import Valores from "../components/valores";

const Home = () => {
    return (
        <>
            <Banner
                texto={"Um café quentinho aqui na Tiamate muda o dia."}
                imagem={banner}
            />
            <Introducao />
            <Valores />
        </>
    );
}

export default Home;