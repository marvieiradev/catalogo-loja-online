const Button = (props) => {
    return (
        <div className={`btn text-white bg-gradient-to-r from-cyan to-violet hover:from-violet hover:to-cyan flex flex-row p-4 md:p-5 items-center justify-center rounded-3xl relative w-full cursor-pointer ${props.class}`} onClick={props.click}>
            <a href={props.href} target={props.target}>
                <div className="flex items-center justify-center">
                    <div className="absolute left-4 w-[32px] md:w-[38px]">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="">
                        <p className="uppercase text-center text-white font-bold text-md md:text-lg">{props.text}</p>
                    </div>
                </div>
            </a>
        </div >
    );
}
export default Button;