import Navbar from "../components/Navbar";

export default function Experience() {
  return (
    <div className="bg-black text-white min-h-screen min-w-full">
      <Navbar />
      <div className="p-10">
        <div className="flex flex-col items-left justify-center">
          <h1 className="text-white font-bold font-poppins text-[70px] mb-12 text-center">
            Experience
          </h1>
          <div className="flex flex-col max-w-2xl items-left justify-between flex-1 h-full">
            <div className="flex flex-col items-left justify-between flex-1 h-full">
              <div className="font-bold text-2xl mb-4 text-left">
                Fibrous Finance
              </div>
              <div className="font-bold text-xl mb-4 text-left ml-6">
                Backend Developer - May 2024 to Present
              </div>
              <p className="text-white text-l font-light ml-12">
                First DEX aggregator on Starknet. I work as a backend developer
                at Fibrous Finance. I work with TypeScript, Postgres, NestJS and
                Solidity. I took part in the transition to EVM networks
              </p>
            </div>
            <div className="flex flex-col items-left justify-between flex-1 h-full mt-4">
              <div className="font-bold text-2xl mb-4 text-left">
                ITU Blockchain
              </div>
              <div className="font-bold text-xl mb-4 text-left ml-6">
                Head of Development - Nov 2023 to Present
              </div>
              <p className="text-white text-l font-light ml-12">
                The first and largest Turkish university blockchain society,
                boasting over 1500 members. I lead the development committee. I
                am responsible for organizing workshops, creating syllabus for
                full-stack blockchain development, and leading hackathon teams
                from ideation to submission.
              </p>
            </div>
            <div className="flex flex-col items-left justify-between flex-1 h-full mt-4">
              <div className="font-bold text-2xl mb-4 text-left">
                Istanbul Technical University, BS
              </div>
              <div className="font-bold text-xl mb-4 text-left ml-6">
                Enviromental Engineering Student - 2022 to 2027 (Expected)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
