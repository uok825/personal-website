import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div
      className="bg-black text-white min-h-screen
        "
    >
      <div className="w-full">
        <Navbar />
      </div>
      <div className="flex flex-col items-start justify-center p-6 space-y-4">
        <h1 className="text-white font-extrabold font-poppins text-[60px] mt-[203px] ml-12">
          hi!
        </h1>
        <h2 className=" text-white font-light font-poppins text-[50px] ml-12">
          my name is <span className="font-bold">Utku Ömer</span>
        </h2>
        <p className="text-[50px] ml-12">
          and i'm a <span className="font-light">&lt;developer/&gt;</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
