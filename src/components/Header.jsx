import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className="bg-marron-black text-marron-white px-33.75 py-7.5 flex justify-between text-lg items-center">
            <nav className="flex items-center gap-13.75 *:hover:text-yellow *:duration-200">
                <img src={logo} alt="Tiamate Coffee" />
                <a href="/">Home</a>
                <a href="/nosso-cafe">Nosso Café</a>
                <a href="/franquia">Franquia</a>
                <a href="/contato">Contato</a>
                <a href="/cardapio">Cardápio</a>
            </nav>
            <a href="" className="bg-marron-white-2 text-marron-black-2 font-semibold py-4 px-6 rounded-md hover:bg-gold duration-200">Seja um Franqueado</a>
        </header>
    );
}

export default Header;