import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center p-6 space-y-4">
        <h1 className="text-white font-extrabold font-poppins text-[40px] sm:text-[50px] md:text-[60px] mt-[100px] sm:mt-[150px] md:mt-[203px] ml-4 sm:ml-8 md:ml-12">
          hi!
        </h1>
        <h2 className="text-white font-light font-poppins text-[30px] sm:text-[40px] md:text-[50px] ml-4 sm:ml-8 md:ml-12">
          my name is <span className="font-bold">Utku Ömer</span>
        </h2>
        <p className="text-[20px] sm:text-[30px] md:text-[40px] ml-4 sm:ml-8 md:ml-12">
          and I'm a <span className="font-light">&lt;developer/&gt;</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
