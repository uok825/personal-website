import Navbar from "../components/Navbar";

export default function Projects() {
  const scrollRight = () => {
    console.log("scroll right");
  };
  const data = [
    {
      index: 1,
      title: "Fibrous Finance",
      date: "May 2024 to Present",
      description:
        "First DEX aggregator on Starknet. I work as a backend developer at Fibrous Finance. I work with TypeScript, Postgres, NestJS and Solidity. I took part in the transition to EVM networks",
    },
    {
      index: 2,
      title: "ITU Blockchain",
      date: "Nov 2023 to Present",
      description:
        "The first and largest Turkish university blockchain society, boasting over 1500 members. I lead the development committee. I am responsible for organizing workshops, creating syllabus for full-stack blockchain development, and leading hackathon teams from ideation to submission.",
    },
    {
      title: "Istanbul Technical University, BS",
      date: "2022 to 2027 (Expected)",
      description: "Enviromental Engineering Student",
    },
  ];
  return (
    <div className="bg-black text-white min-h-screen min-w-full flex-col items-center">
      <Navbar />
      <h1 className="text-white font-bold font-poppins text-[70px] mb-12 text-center">
        Projects
      </h1>

      <div className="flex items-center justify-center">
        <button
          onClick={scrollRight}
          className="absolute left-4 top-1/2 transform p-2 text-white z-10 "
        >
          &larr;
        </button>
        <div className="border-white border bg-black rounded-lg shadow-lg w-[400px] h-[400px]">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            {"asasasa"}
          </h2>
          <p className="text-white text-center">{"dsofkdgp"}</p>
        </div>
        <div className="border-white border bg-black rounded-lg shadow-lg w-[500px] h-[500px]">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            {"asasasa"}
          </h2>
          <p className="text-white text-center">{"dsofkdgp"}</p>
        </div>
        <div className="border-white border bg-black rounded-lg shadow-lg w-[400px] h-[400px]">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            {"asasasa"}
          </h2>
          <p className="text-white text-center">{"dsofkdgp"}</p>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform p-2 text-white z-10 "
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
