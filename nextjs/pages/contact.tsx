import Navbar from "../components/Navbar";

export default function Experience() {
  return (
    <div className="bg-black text-white min-h-screen min-w-full">
      <Navbar />
      <div className="p-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-white font-bold font-poppins text-[70px] mb-12 text-center">
            Contact
          </h1>
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center mx-auto">
              <a href="https://x.com/utmrklc" target="blank">
                <img src="x.svg" className="scale-[2] mx-auto"></img>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto">
              <a href="https://github.com/uok825" target="blank">
                <img src="github.svg" className="scale-[2] mx-auto"></img>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto">
              <a href="https://www.linkedin.com/in/utkuomer/" target="blank">
                <img src="linkedin.svg" className="scale-[2] mx-auto"></img>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto">
              <a href="mailto:utkuomerkilic@protonmail.com" target="blank">
                <img src="mail.svg" className="scale-[2] mx-auto"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
