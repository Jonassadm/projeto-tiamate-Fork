import { useState } from "react"
import img1 from "../assets/valores-img1.png"
import img2 from "../assets/valores-img2.png"
import img3 from "../assets/valores-img3.png"
import img4 from "../assets/valores-img4.png"
import { BiX } from "react-icons/bi"

const Valores = () => {
    const [mostrarVideo, setMostrarVideo] = useState(false);
    return (
        <div className="p-33.75">
            {/* div que vai ter os tres blocos */}
            <div className="flex gap-40 *:flex-1">
                {/* bloco 1 */}
                <div>
                    <div className="flex items-center gap-4 mb-5">
                        <img src={img1} alt="" />
                        <h6 className="font-bold text-2xl text-marron-medio">Missão</h6>
                    </div>
                    <p className="text-marron-black-2">
                        Fornecer soluções, produtos e serviços de maneira clara e objetiva construindo relacionamentos duradouros com a comunidade, parceiros, colaboradores e sócios, através da criação de valores.
                    </p>
                </div>
                {/* bloco 2 */}
                <div>
                    <div className="flex items-center gap-4 mb-5">
                        <img src={img2} alt="" />
                        <h6 className="font-bold text-2xl text-marron-medio">Visão</h6>
                    </div>
                    <p className="text-marron-black-2">
                        Ser referência em inovação e estimular exponencialmente a nossa gestão de maneira diversificada, próspera e justa. Com devoção e disciplina em todas as nossas operações de negócio.
                    </p>
                </div>
                {/* bloco 3 */}
                <div>
                    <div className="flex items-center gap-4 mb-5">
                        <img src={img3} alt="" />
                        <h6 className="font-bold text-2xl text-marron-medio">Valores</h6>
                    </div>
                    <p className="text-marron-black-2">
                        Amor ao Trabalho - Organização - Disciplina - Inovação - Busca Contínua Pela Qualidade - Foco no Cliente
                    </p>
                </div>
            </div>
            <div className="mt-33.75">
                <h2 className="text-[50px] leading-15 text-marron-medio font-bold">Coisas boas acontecem àqueles<br />que gostam de café</h2>
                <img onClick={() => setMostrarVideo(true)} src={img4} alt="" className="w-full mt-20 rounded-2xl cursor-pointer" />
            </div>
            <div className={`w-full h-screen bg-black/85 fixed top-0 left-0  justify-center items-center duration-200 flex ${mostrarVideo ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div onClick={() => setMostrarVideo(false)} className="fixed top-10 right-10 text-white text-4xl cursor-pointer">
                    <BiX />
                </div>
                {
                    mostrarVideo && (
                        <iframe
                            width="1100"
                            height="600"
                            src="https://www.youtube.com/embed/RWCP7z8ufiA?si=HHlWuODVVW5404qI" title="YouTube video player"
                            referrerpolicy="strict-origin-when-cross-origin"
                            frameborder="0"
                            allowfullscreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    )
                }
            </div>
        </div>
    );
}

export default Valores;