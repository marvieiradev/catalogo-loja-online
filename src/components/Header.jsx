import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SidebarMenu from "./SidebarMenu";
import { House, Shirt, MessageCircle, Instagram } from "lucide-react";
import util from "@/data/utils";

const Header = ({ visivel }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    };

    const deleteStorage = () => {
        sessionStorage.clear();
    };

    return (
        <>
            <div className="sticky top-0 z-50 border-b border-solid border-slate-300 w-full p-3 bg-white rounded-b-xl max-w-[1280px]">
                <div className="flex flex-row justify-between w-full px-4 md:hidden">
                    <div className={`cursor-pointer ${visivel}`} onClick={handleNavigate}>
                        <ArrowLeft />
                    </div>
                    <div className="w-[50px] justify-center" onClick={deleteStorage}>
                        <a href="/catalogo">
                            <img src="/logo.svg" alt="" />
                        </a>
                    </div>
                    <SidebarMenu />
                </div>

                <div className="justify-between w-full px-4 hidden md:flex md:flex-row">
                    <div className="w-[50px] justify-center" onClick={deleteStorage}>
                        <a href="/catalogo">
                            <img src="/logo.svg" alt="" />
                        </a>
                    </div>
                    <div className="flex gap-2">
                        <a
                            href="/catalogo"
                            className="bg-slate-100 hover:bg-primary/10 px-2 py-1 font-semibold rounded-xl flex gap-2  text-sm hover:scale-[103%] text-primary items-center"
                            onClick={deleteStorage}
                        >
                            <House size={18} />
                            Início
                        </a>

                        <a
                            href="/guia-de-medidas"
                            className="bg-slate-100 hover:bg-primary/10 px-2 py-1 font-semibold rounded-xl flex gap-2  text-sm hover:scale-[103%] text-primary items-center"
                        >
                            <Shirt size={18} />
                            Guia de Medidas
                        </a>

                        <a
                            href={util.instagram} target="_blank"
                            className="bg-slate-100 hover:bg-primary/10 px-2  py-1 font-semibold rounded-xl flex gap-2  text-sm hover:scale-[103%] text-primary items-center"

                        >
                            <Instagram size={18} />
                            Redes Sociais
                        </a>

                        <a
                            href={util.telNumber} target="_blank"
                            className="bg-slate-100 hover:bg-primary/10 px-2  py-1 font-semibold rounded-xl flex gap-2  text-sm hover:scale-[103%] text-primary items-center"
                        >
                            <MessageCircle size={18} />
                            Contato
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
