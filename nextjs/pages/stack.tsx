import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Stack() {
  return (
    <div className="bg-black text-white min-h-screen min-w-full">
      <Navbar />
      <div className="p-10">
        <h1 className="text-white font-bold font-poppins text-[70px] mb-12 text-center">
          Stack
        </h1>
        <div className="relative flex items-center justify-center w-full mt-40 h-fit">
          <div className="flex flex-row justify-center items-center space-x-6 overflow-x-hidden transition-transform duration-500">
            <div className="relative bg-white rounded-3xl shadow-lg w-[450px] h-[450px] p-12 transition-transform duration-500 transform">
              <img
                className="rounded-xl mx-auto scale-[2] mt-10"
                src="typescript.svg"
              ></img>
              <h2 className="text-3xl font-bold mb-2 mt-16 text-center text-gray-900">
                TypeScript / JavaScript
              </h2>
              <p className="text-gray-700 text-center leading-6 text-[18px] flex-grow pl-1 pr-1">
                My “main” interested programming languages, I've worked with it
                for about two and half year. I've used it in the front-end with
                Nextjs & React, ExpressJS & NestJS for API's, NodeJS for
                backend.
              </p>
            </div>
            <div className="relative bg-white rounded-3xl shadow-lg w-[450px] h-[450px] p-12 transition-transform duration-500 transform">
              <img
                className="rounded-xl mx-auto scale-[2] mt-10"
                src="solidity.svg"
              ></img>
              <h2 className="text-3xl font-bold mb-2 mt-16 text-center text-gray-900">
                Solidity
              </h2>
              <p className="text-gray-700 text-center leading-6 text-[18px] flex-grow pl-1 pr-1">
                I've been using Solidity for about two years. I have built some
                products and joined many hackathons. I have intermediate skills
                and experience with smart contracts, dApps, and blockchain
                technology. I also like learning new techniques and improving my
                skills.
              </p>
            </div>
            <div className="relative bg-white rounded-3xl shadow-lg w-[450px] h-[450px] p-12 transition-transform duration-500 transform">
              <img
                className="rounded-xl mx-auto scale-[2] mt-10"
                src="sqlite.svg"
              ></img>
              <h2 className="text-3xl font-bold mb-2 mt-16 text-center text-gray-900">
                SQLite
              </h2>
              <p className="text-gray-700 text-center leading-6 text-[18px] flex-grow pl-1 pr-1">
                I use SQLite regularly and have been using it for about two
                years. I have used it with PostgreSQL on backends and in the
                HackFS23 finalist project.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
