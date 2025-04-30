import Navbar from "../components/Navbar";

export default function Stack() {
  return (
    <div className="bg-black text-white min-h-screen min-w-full">
      <Navbar />
      <div className="p-6 sm:p-10">
        <h1 className="text-white font-bold font-poppins text-[40px] sm:text-[50px] md:text-[70px] mb-6 sm:mb-12 text-center">
          Stack
        </h1>
        <div className="relative flex items-center md:justify-center w-full mt-10 sm:mt-20 overflow-x-auto">
          <div className="flex flex-row items-center space-x-6 transition-transform duration-500">
            <div className="relative bg-white rounded-3xl shadow-lg w-[300px] sm:w-[350px] md:w-[450px] h-[400px] sm:h-[450px] p-6 sm:p-12 transition-transform duration-500 transform">
              <img
                className="rounded-xl mx-auto scale-150 sm:scale-175 md:scale-[2] mt-6 sm:mt-8 md:mt-10"
                src="typescript.svg"
              ></img>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 mt-10 sm:mt-12 md:mt-16 text-center text-gray-900">
                TypeScript / JavaScript
              </h2>
              <p className="text-gray-700 text-center leading-6 text-[14px] sm:text-[16px] md:text-[18px] flex-grow px-2">
                My “main” interested programming languages, I&apos;ve worked
                with it for about two and half year. I&apos;ve used it in the
                front-end with Nextjs & React, ExpressJS & NestJS for
                API&apos;s, NodeJS for backend.
              </p>
            </div>
            <div className="relative bg-white rounded-3xl shadow-lg w-[300px] sm:w-[350px] md:w-[450px] h-[400px] sm:h-[450px] p-6 sm:p-12 transition-transform duration-500 transform">
              <img
                className="rounded-xl mx-auto scale-150 sm:scale-175 md:scale-[2] mt-6 sm:mt-8 md:mt-10"
                src="solidity.svg"
              ></img>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 mt-10 sm:mt-12 md:mt-16 text-center text-gray-900">
                Solidity
              </h2>
              <p className="text-gray-700 text-center leading-6 text-[14px] sm:text-[16px] md:text-[18px] flex-grow px-2">
                I&apos;ve been using Solidity for about two and half years. I
                have built some products and joined many hackathons. I have
                skills and experience with smart contracts, dApps, and
                blockchain technology.
              </p>
            </div>
            <div className="relative bg-white rounded-3xl shadow-lg w-[300px] sm:w-[350px] md:w-[450px] h-[400px] sm:h-[450px] p-6 sm:p-12 transition-transform duration-500 transform">
              <img
                className="rounded-xl mx-auto scale-150 sm:scale-175 md:scale-[2] mt-6 sm:mt-8 md:mt-10"
                src="sqlite.svg"
              ></img>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 mt-10 sm:mt-12 md:mt-16 text-center text-gray-900">
                SQL
              </h2>
              <p className="text-gray-700 text-center leading-6 text-[14px] sm:text-[16px] md:text-[18px] flex-grow px-2">
                I use SQLite regularly and have been using it for about two
                years. I have used it with PostgreSQL on backends and in the
                HackFS23 finalist project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
