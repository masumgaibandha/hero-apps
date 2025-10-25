import React from 'react';

const Banner = () => {
  return (
    <section className="bg-white">
      {/* Headline + Sub */}
      <div className="container mx-auto px-4 pt-8 md:pt-12">
        <h1 className="font-bold text-center leading-tight
                       text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-extrabold">
            Productive
          </span>{' '}
          Apps
        </h1>

        <p className="mt-3 md:mt-4 text-center text-sm sm:text-base md:text-lg text-[#334155]">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          <br className="hidden sm:block" />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        {/* Store buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 py-5">
          <a
            href="https://play.google.com/store/games"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-xl font-semibold px-5 py-3 w-full sm:w-auto"
          >
            <img
              src="https://i.ibb.co/fVqJt7G2/gp.jpg"
              alt="Google Play"
              className="w-6 md:w-7 mix-blend-multiply dark:mix-blend-screen"
            />
            <span>Google Play</span>
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-xl font-semibold px-5 py-3 w-full sm:w-auto"
          >
            <img
              src="https://i.ibb.co/KpzsH1kb/appstore.png"
              alt="Apple App Store"
              className="w-6 md:w-7 mix-blend-multiply dark:mix-blend-screen"
            />
            <span>App Store</span>
          </a>
        </div>

        {/* Hero image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/gMr9vxGh/hero.png"
            alt="HERO.IO product showcase"
            className="w-full max-w-4xl md:max-w-5xl px-4 md:px-0 object-contain"
          />
        </div>
      </div>

      {/* Stats strip */}
      <div className="w-full bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] mt-8 md:mt-10">
        <div className="container mx-auto px-4 py-8 md:py-10">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
            Trusted by Millions, Built for You
          </h2>

          <div
            className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12
                       text-center"
          >
            <div>
              <p className="text-white/90 text-sm md:text-base">Total Downloads</p>
              <span className="block font-extrabold text-4xl sm:text-5xl md:text-6xl text-white">29.6M</span>
              <p className="text-white/90 text-xs md:text-sm">21% more than last month</p>
            </div>

            <div>
              <p className="text-white/90 text-sm md:text-base">Total Reviews</p>
              <span className="block font-extrabold text-4xl sm:text-5xl md:text-6xl text-white">906K</span>
              <p className="text-white/90 text-xs md:text-sm">46% more than last month</p>
            </div>

            <div>
              <p className="text-white/90 text-sm md:text-base">Active Apps</p>
              <span className="block font-extrabold text-4xl sm:text-5xl md:text-6xl text-white">132+</span>
              <p className="text-white/90 text-xs md:text-sm">31 more will launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
