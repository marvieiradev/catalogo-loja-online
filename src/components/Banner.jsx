const Banner = () => {
    return (
        <div className="bg-primary w-full flex justify-center max-w-[1280px] mt-2">
            <img src="/banner.webp" alt="" className="p-1 h-[150px] md:hidden" />
            <img src="/banner-big.webp" alt="" className="p-1 hidden md:h-[200px] xl:[220px]" />
        </div>
    );
}

export default Banner;