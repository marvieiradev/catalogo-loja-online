import ButtonWhatsappVar
    from "./ButtonWhatsappVar";
const PersonalizedArt = () => {
    return (
        <>
            <div className="pt-6 w-full flex justify-center">
                <div className="flex flex-col items-center justify-center mx-4 p-4 bg-primary/30 rounded-xl max-w-[720px] w-full">
                    <p className="text-dark font-semibold  text-base lg:text-lg">Não achou o que procurava?</p>
                    <p className="text-dark text-base lg:text-lg">Que tal uma arte personalizada?</p>
                    <div className="pt-2 w-full">
                        <ButtonWhatsappVar text="peça uma arte personalizada" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonalizedArt;