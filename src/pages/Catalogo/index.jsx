import { Search } from "lucide-react";
import Header from "../../components/Header.jsx";
import prod from "../../data/db.js";
import { useState, useEffect } from "react";
import SearchResults from "../../components/SearchResults.jsx";
import Categoria from "../../components/Categoria.jsx";
import Footer from "../../components/Footer.jsx";
import Banner from "../../components/Banner.jsx";
import PersonalizedArt from "../../components/PersonalizedArt.jsx";

const Catalogo = () => {
    const produtos = prod/*.sort(function (x, y) {
        return x.favorito < y.favorito ? -1 : x.favorito > y.favorito ? 1 : 0;
    });*/
    const list = [];
    const [dados, setDados] = useState(JSON.parse(sessionStorage.getItem('dados')) ?? produtos);
    const showCategory = sessionStorage.getItem('categoria')
    const cat = sessionStorage.getItem('categoria')

    const handleInputChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        if (!value) {
            setDados(produtos);
            return;
        }

        produtos.map((prod) => {
            if (
                prod.nome.toLowerCase().includes(value.toLowerCase()) ||
                prod.nome.includes(value.toUpperCase()) ||
                prod.tag.toLowerCase().includes(value.toLowerCase()) ||
                prod.tag.includes(value.toUpperCase()) ||
                prod.categoria.toLowerCase().includes(value.toLowerCase()) ||
                prod.categoria.includes(value.toUpperCase())
            ) {
                list.push(prod);
            }
        });
        setDados(list);
        sessionStorage.removeItem('categoria')
    };

    const handleCategory = (category) => {
        setDados(produtos);
        produtos.map((prod) => {
            if (prod.categoria == category)
                list.push(prod);
        });
        sessionStorage.setItem('categoria', category)
        setDados(list);
    }

    const handleReset = () => {
        sessionStorage.removeItem('categoria')
        setDados(produtos);
    }

    useEffect(() => {
        sessionStorage.setItem('dados', JSON.stringify(dados))
    }, [dados])

    return (
        <>
            <div className="container">
                <div className="flex flex-col flex-1 min-h-screen items-center">
                    <Header visivel="opacity-0 pointer-events-none" />
                    <Banner />
                    <div className="min-w-full self-center md:min-w-[720px] px-4 mt-4">
                        <form>
                            <div className="relative justify-center">
                                <input
                                    className="w-full focus:outline-none border-2 border-gray-400 py-2 pl-10 pr-2 rounded-full text-gray-500 text-base font-medium bg-white placeholder:text-gray-300"
                                    placeholder="Pesquisar"
                                    type="search"
                                    onChange={handleInputChange}
                                />
                                <div className="absolute left-2 flex items-center justify-center top-2">
                                    <div className="absolute left-0 top-0">
                                        <div className="flex align-middle justify-center">
                                            <Search className="text-purple" size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="flex mt-4 px-4 w-full justify-center">
                        <div className="flex gap-2 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
                            <div onClick={handleReset}><Categoria title="Tudo" color={!cat ? "bg-primary" : ""} /></div>
                            <div onClick={() => handleCategory("Junino")}><Categoria title="Junino" color={cat == "Junino" ? "bg-primary" : ""} /></div>
                            <div onClick={() => handleCategory("Carnaval")}><Categoria title="Carnaval" color={cat == "Carnaval" ? "bg-primary" : ""} /></div>
                            <div onClick={() => handleCategory("Religiosos")}><Categoria title="Religiosos" color={cat == "Religiosos" ? "bg-primary" : ""} /></div>
                            <div onClick={() => handleCategory("Esportes")}><Categoria title="Esportes" color={cat == "Esportes" ? "bg-primary" : ""} /></div>
                            <div onClick={() => handleCategory("Diversas")}><Categoria title="Diversas" color={cat == "Diversas" ? "bg-primary" : ""} /></div>
                        </div>
                    </div>

                    <div className="mt-4 m-auto max-w-[1280px] w-full items-center place-items-center">
                        <SearchResults dados={dados} />
                        {(!dados || !dados.length) && (
                            <div className="w-full flex flex-col items-center space-y-4">
                                <p className="text-dark font-semibold text-base lg:text-lg">Nada encontado</p>
                            </div>
                        )}
                        <PersonalizedArt />
                    </div>
                </div>
                <div className="mt-4 m-auto w-full items-center">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Catalogo;
