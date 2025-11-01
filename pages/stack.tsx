import Navbar from "../components/Navbar";

export default function Stack() {
  return (
    <div className="bg-black text-white min-h-screen min-w-full">
      <Navbar />
      <div className="p-6 sm:p-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white font-bold font-poppins text-[40px] sm:text-[50px] md:text-[70px] mb-6 sm:mb-12 text-center">
            Stack
          </h1>
          <div className="flex flex-col max-w-2xl w-full items-start justify-between flex-1 h-full divide-y">
            <div className="flex flex-col items-start justify-between flex-1 h-full">
              <div className="font-bold text-2xl sm:text-3xl mb-2 sm:mb-4 mt-2 text-left">
                TypeScript / JavaScript
              </div>
              <p className="text-white text-lg sm:text-xl font-light ml-6 sm:ml-12 mb-2">
                My &quot;main&quot; interested programming languages, I&apos;ve worked
                with it for three years. I&apos;ve used it in the
                front-end with Next.js & React, ExpressJS & NestJS for
                API&apos;s, NodeJS for backend. Built various kind of indexers for blockchain to feed data to frontends and smart contracts.
              </p>
            </div>
            <div className="flex flex-col items-start justify-between flex-1 h-full">
              <div className="font-bold text-2xl sm:text-3xl mb-2 sm:mb-4 mt-2 text-left">
                Solidity
              </div>
              <p className="text-white text-lg sm:text-xl font-light ml-6 sm:ml-12 mb-2">
                I&apos;ve been using Solidity for three years. I
                have built some products and joined many hackathons. I have
                skills and experience with complex smart contracts, dApps, and
                blockchain technology. Built Name Service, Router contracts.
              </p>
            </div>
            <div className="flex flex-col items-start justify-between flex-1 h-full mt-4">
              <div className="font-bold text-2xl sm:text-3xl mb-2 sm:mb-4 mt-2 text-left">
                SQL
              </div>
              <p className="text-white text-lg sm:text-xl font-light ml-6 sm:ml-12 mb-2">
                I use SQLite regularly and have been using it for about two
                years. I have used it with PostgreSQL on backends to store and
                manage data efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
