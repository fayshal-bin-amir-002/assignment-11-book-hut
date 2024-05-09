const Banner = () => {
    return (
        // <div className="py-6 md:py-8 lg:py-12 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
        //     <div>

        //     </div>
        // </div>
        <div className="hero h-[650px] rounded-lg overflow-hidden bg-heroBg">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 w-full">
                <div className="hero-content text-center lg:text-left text-white lg:w-1/2">
                    <div className="md:max-w-lg">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold">Welcome to Your Digital <span className="text-[#8DECB4]">Library</span></h1>
                        <p className="mb-5 opacity-80">Streamline your library experience with our intuitive system. Access, organize, and explore vast collections effortlessly. Welcome to seamless reading and learning.</p>
                        <button className="btn bg-[#41B06E] border-none text-white text-lg">Explore</button>
                    </div>
                </div>
                <div className="">

                </div>
            </div>
        </div>

    );
};

export default Banner;