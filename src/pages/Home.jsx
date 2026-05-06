import Banner from "../components/Banner";
import banner from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import Introducao from "../components/Introducao";
import Valores from "../components/valores";
import Galeria from "../components/Galeria";
import Cardapio from "../components/Cardapio";
import FormLead from "../components/FormLead";

const Home = () => {
    return (
        <>
            <Banner
                texto={"Um café quentinho aqui na Tiamate muda o dia."}
                imagem={banner}
                aDireita={false}
                links={true}
            />
            <Introducao />
            <Valores />
            <Banner 
                texto={"Café Autêntico Chegou nosso café! Direto da fazenda."}
                imagem={banner2}
                aDireita={false}
                links={false}
            />
            <Galeria />
            <Cardapio />
            <FormLead />
        </>
    );
}

export default Home;