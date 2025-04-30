import Navbar from "../components/Navbar";

export default function Experience() {
  return (
    <div className="bg-black text-white min-h-screen min-w-full">
      <Navbar />
      <div className="p-6 sm:p-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white font-bold font-poppins text-[40px] sm:text-[50px] md:text-[70px] mb-6 sm:mb-12 text-center">
            Experience
          </h1>
          <div className="flex flex-col max-w-2xl w-full items-start justify-between flex-1 h-full divide-y">
            <div className="flex flex-col items-start justify-between flex-1 h-full">
              <div className="font-bold text-2xl sm:text-3xl mb-2 sm:mb-4 mt-2 text-left">
                Fibrous Finance
              </div>
              <div className="font-normal text-xl sm:text-2xl mb-2 sm:mb-4 ml-4 sm:ml-6 text-left">
                Backend Developer - May 2024 to Present
              </div>
              <p className="text-white text-lg sm:text-xl font-light ml-6 sm:ml-12 mb-2 ">
                First DEX aggregator on Starknet. I work as a backend developer
                at Fibrous Finance.
                <p className="font-normal">
                  I`m currently working with TypeScript, Postgres, NestJS,
                  Redis, Grafana, and Solidity. Building indexers and maintain
                  the indexers.
                </p>
              </p>
            </div>
            <div className="flex flex-col items-start justify-between flex-1 h-full">
              <div className="font-bold text-2xl sm:text-3xl mb-2 sm:mb-4 mt-2 text-left">
                Pharus
              </div>
              <div className="font-normal text-xl sm:text-2xl mb-2 sm:mb-4 ml-4 sm:ml-6 text-left">
                Lead Developer - July 2024 to April 2025
              </div>
              <p className="text-white text-lg sm:text-xl font-light ml-6 sm:ml-12 mb-2">
                Pharus is dedicated to providing the most up-to-date and
                reliable information on blockchain technology, Web3, and the
                world of DeFi. Using data-driven, objective analysis methods,
                Pharus informs its followers and helps them navigate these
                innovative fields.
                <p className="font-normal">
                  I worked with NextJS, Solidity and SQL.
                </p>
              </p>
            </div>
            <div className="flex flex-col items-start justify-between flex-1 h-full mt-4">
              <div className="font-bold text-2xl sm:text-3xl mb-2 sm:mb-4 mt-2 text-left">
                ITU Blockchain
              </div>
              <div className="font-normal text-xl sm:text-2xl mb-2 sm:mb-4 ml-4 sm:ml-6 text-left">
                Head of Development - Nov 2023 to June 2024
              </div>
              <p className="text-white text-lg sm:text-xl font-light ml-6 sm:ml-12 mb-2">
                The first and largest Turkish university blockchain society,
                boasting over 1500 members. I lead the development committee. I
                am responsible for organizing workshops, creating syllabus for
                full-stack blockchain development, and leading hackathon teams
                from ideation to submission.
              </p>
            </div>
            <div className="flex flex-col items-start justify-between flex-1 h-full mt-4">
              <div className="font-bold text-2xl sm:text-3xl mb-2 sm:mb-4 mt-2 text-left">
                Istanbul Technical University, BS
              </div>
              <div className="font-normal text-xl sm:text-2xl mb-2 sm:mb-4 ml-4 sm:ml-6 text-left">
                Environmental Engineering Student - 2022 to 2027 (Expected)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
