import util from "@/data/utils";
const Footer = () => {
    return (
        <>
            <div className=" bg-white rounded-t-xl max-w-[1280px]">
                <div className="flex justify-center items-center p-4">
                    <div className="flex flex-col md:flex-row md:justify-around w-full gap-4">
                        <div className="flex flex-col justify-center items-center md:items-start gap-2">
                            <h2 className="font-semibold text-primary text-base lg:text-lg">Precisa de ajuda?</h2>
                            <a href="/guia-de-medidas" className="text-sm lg:text-base">Guia de Medidas</a>
                            <a href={util.telNumber} target="_blank" className="text-sm lg:text-base">Fale com a gente</a>
                        </div>

                        <div className="flex flex-col justify-center items-center md:items-start gap-2">
                            <h2 className="font-semibold text-primary text-base lg:text-lg">Contatos</h2>
                            <a href={util.instagram} target="_blank" className="text-sm lg:text-base">Redes Sociais</a>
                            <a href={util.msgPersonalizada} target="_blank" className="text-sm lg:text-base">Peça uma arte personalizada</a>
                        </div>

                        <div className="flex flex-col justify-center items-center md:items-start gap-2">
                            <h2 className="font-semibold text-primary text-base lg:text-lg">Segurança</h2>
                            <img src="/site-seguro.png" alt="site-seguro" className="max-w-[180px]" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-2">
                    &copy; 2024 - 1UP Store
                </div>
            </div>
        </>
    );
}

export default Footer;