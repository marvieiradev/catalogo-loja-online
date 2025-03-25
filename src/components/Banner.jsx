const Banner = () => {
    return (
        <div className="w-full flex justify-center max-w-[1280px] mt-2 bg-purple">
            <img src="/banner.webp" alt="" className="p-1 h-[100px] md:hidden" />
            <img src="/banner-big.webp" alt="" className="p-1 hidden md:flex md:h-[200px] xl:[220px]" />
        </div>
    );
}

export default Banner;