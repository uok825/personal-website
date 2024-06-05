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
        <div className="flex flex-row justify-center space-x-8">
          <div className="flex flex-col max-w-sm items-center justify-between flex-1 h-full">
            <Image
              src="/typescript.svg"
              alt="TypeScript Logo"
              className="rounded-full border-2"
              width={150}
              height={150}
            />
            <div className="px-6 py-8 flex flex-col flex-1 justify-between">
              <div className="font-bold text-2xl mb-4 text-center">
                TypeScript / JavaScript
              </div>
              <p className="text-white text-center flex-grow">
                My “main” interested programming languages, I've worked with it
                for about two and half year. I've used it in the front-end with
                Nextjs & React, ExpressJS & NestJS for API's, NodeJS for
                backend.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm items-center justify-between flex-1 h-full">
            <Image
              src="/solidity-blue.svg"
              alt="Solidity Logo"
              className="rounded-full border-2 items-center justify-center"
              width={150}
              height={150}
            />
            <div className="px-6 py-8 flex flex-col flex-1 justify-between">
              <div className="font-bold text-2xl mb-4 text-center">
                Solidity
              </div>
              <p className="text-white text-center flex-grow">
                I've been using Solidity about two years. I’m enjoying coding
                contracts. Build some products and join lot of hackathons.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm items-center justify-between flex-1 h-full">
            <Image
              src="/sqlite.svg"
              alt="SQLite Logo"
              className="rounded-full p-1 border-2 items-center justify-center"
              width={150}
              height={150}
            />
            <div className="px-6 py-8 flex flex-col flex-1 justify-between">
              <div className="font-bold text-2xl mb-4 text-center">SQLite</div>
              <p className="text-white text-center flex-grow">
                I've used SQLite for about two years. I've used it in the
                Postgre SQL on backends also in the HackFS23 finalist project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
