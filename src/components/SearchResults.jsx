import { Link } from "react-router-dom";
import util from "@/data/utils";
import { Sparkles } from "lucide-react";

const SearchResults = ({ dados }) => {
    return (
        <div className="grid grid-cols-2 gap-x-3 gap-y-3 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-5 px-4">
            {
                dados.map((camisa) => (
                    <div
                        key={camisa.id}
                        className="flex flex-col bg-purple/20 border rounded-xl p-2 items-center gap-2 shadow-xs w-[167px] h-[260px] md:w-[200px] md:h-[290px] lg:w-[220px] lg:h-[310px] hover:shadow-lg place-items-center relative"
                    >
                        <Link to={`/produto/${camisa.id}`}>
                            <img
                                src={`${util.baseUrl}${camisa.imagem}`}
                                alt={camisa.nome}
                                loading="lazy"
                                className="flex aspect-square w-full justify-center rounded-lg object-contain align-middle"
                            />
                            <p className="uppercase line-clamp-2 h-9 overflow-hidden text-ellipsis text-xs md:text-sm lg:text-md text-center font-medium text-dark mt-2 mb-2 leading-2">
                                {camisa.nome}
                            </p>
                            <div className="bg-purple text-white text-center p-2 font-semibold rounded-xl w-full text-sm hover:scale-[103%]">
                                VER PRODUTO
                            </div>
                            {camisa.novo && (
                                <div className="top-1 right-1 absolute px-1 bg-primary text-white rounded-full text-xs">
                                    <div className="flex justify-center items-center gap-1 animpulse">
                                        <Sparkles className="w-[15px]" /> Nova!
                                    </div>
                                </div>
                            )}
                        </Link>
                    </div>
                )
                )}
        </div>
    );
}

export default SearchResults;