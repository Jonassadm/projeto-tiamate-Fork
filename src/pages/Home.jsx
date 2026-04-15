import Banner from "../components/Banner";
import banner from "../assets/banner-1.png";

const Home = () => {
    return (
        <>
            <Banner
                texto={"Um café quentinho aqui na Tiamate muda o dia."}
                imagem={banner}
                posicao="direita"
            />
        </>
    );
}

export default Home;