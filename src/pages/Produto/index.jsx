import { Link, useParams, ScrollRestoration } from "react-router-dom";
import Header from "../../components/Header.jsx";
import { TriangleAlert } from "lucide-react";
import produtos from "../../data/db.js";
import Footer from "../../components/Footer.jsx";
import ButtonWhatsapp from "@/components/ButtonWhatsapp.jsx";
import util from "../../data/utils.js"
import { Sparkles } from "lucide-react";

const Produto = () => {
    const params = useParams();
    const produto = produtos.find((produto) => {
        return produto.id == params.id;
    });

    return (
        <>
            <div className="container">
                <div className="flex flex-col flex-1 min-h-screen items-center">
                    <Header />
                    <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:gap-6 lg:gap-16 max-w-[1280px] lg:mb-10">
                        {produto ? (
                            <div className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center">
                                <div>
                                    <div className="product-images relative overflow-hidden rounded-2xl md:w-[452px]">
                                        <div className="no-scrollbar flex aspect-square w-full snap-x snap-mandatory overflow-x-scroll rounded-lg bg-white shadow-sm md:h-[452px] md:w-[452px]">
                                            <div className="product-picture flex h-auto w-full flex-shrink-0 snap-center items-center justify-center p-4">
                                                <img
                                                    className="h-full w-auto rounded-lg"
                                                    src={`${util.baseUrl}${produto.imagem}`}
                                                    alt={produto.nome}
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        {produto.novo && (
                                            <div className="p-1 bg-primary text-white rounded-full text-xs md:text-base mt-2">
                                                <div className="flex justify-center items-center gap-1 animpulse">
                                                    <Sparkles className="w-[15px]" /> Arte Nova!
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-base md:text-xl lg:text-2xl font-semibold text-dark mt-3 lg:mt-0">
                                        {produto.nome}
                                    </h2>
                                    <div className="flex justify-between w-full pt-4">
                                        <div className="flex flex-col items-start justify-center">
                                            <p className="font-semibold text-dark text-sm lg:text-base">
                                                Preço
                                            </p>
                                            <p className="font-bold text-purple text-xl md:text-2xl">
                                                <span className="font-bold text-primary text-base md:text-lg">
                                                    R${" "}
                                                </span>
                                                00,00
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-end justify-center gap-2">
                                            <p className="font-semibold text-dark text-sm lg:text-base">
                                                Tamanhos disponíveis
                                            </p>
                                            <div className="flex gap-2">
                                                <div className="px-2 md:px-3 md:py-1 bg-purple rounded-full text-white font-semibold text-sm">
                                                    P
                                                </div>
                                                <div className="px-2 md:px-3 md:py-1 bg-purple rounded-full text-white font-semibold text-sm">
                                                    M
                                                </div>
                                                <div className="px-2 md:px-3 md:py-1 bg-purple rounded-full text-white font-semibold text-sm">
                                                    G
                                                </div>
                                                <div className="px-2 md:px-3 md:py-1 bg-purple rounded-full text-white font-semibold text-sm">
                                                    GG
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between w-full mt-2">
                                        <p className="font-semibold text-dark text-sm lg:text-base">
                                            Modelos disponíveis:
                                        </p>
                                    </div>
                                    <div className="pt-6 w-full">
                                        <ButtonWhatsapp text="pedir pelo whatsapp" produto={produto.id} nome={produto.nome} />
                                    </div>
                                    <div className="pt-4 space-y-2">
                                        <p className="text-base text-dark font-semibold">
                                            Descrição
                                        </p>
                                        <p className="text-sm text-justify">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, vero dolore! Corporis deleniti voluptate excepturi quaerat eveniet perferendis cumque, ipsa recusandae rerum a magni quisquam voluptatum animi porro nulla modi maxime dolores, obcaecati, sint cupiditate! Cupiditate dicta illo temporibus. Quam minima aliquam quas iste vel a explicabo consequuntur ea voluptate?
                                        </p>
                                    </div>
                                    <div className="pt-4 space-y-2">
                                        <p className="text-base text-dark font-semibold">
                                            Prazo de entrega
                                        </p>
                                        <p className="text-sm text-justify">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptas consequatur, necessitatibus nostrum molestiae eveniet quidem facilis quisquam, cum, ratione cupiditate eum delectus aperiam aliquid qui beatae repellendus iusto dolor.
                                        </p>

                                        <p className="text-sm text-justify">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, veniam? 🙋&zwj;♀️.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <>
                                <div className="w-full flex flex-col justify-center items-center space-y-3">
                                    <TriangleAlert className="text-red-600" size={50} />
                                    <p className="text-dark">Produto não encontrado!</p>
                                    <Link
                                        to="/catalogo"
                                        className="bg-primary text-white text-center p-2 font-semibold rounded-xl w-full text-sm hover:scale-[103%] mt-6"
                                    >
                                        Voltar
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                    <img src="/medidas.webp" alt="guia-medidas" className="max-w-[1280px] w-full md:hidden px-4" />
                    <img src="/medidas-big.webp" alt="guia-medidas" className="max-w-[1280px] w-full hidden md:flex" />
                </div>

                <div className="mt-4 m-auto w-full items-center">
                    <Footer />
                </div>
            </div>
            <ScrollRestoration />
        </>
    );
};

export default Produto;
