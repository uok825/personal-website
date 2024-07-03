import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen min-w-full">
      <Navbar />
      <div className="p-6 sm:p-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white font-bold font-poppins text-[40px] sm:text-[50px] md:text-[70px] mb-6 sm:mb-12 text-center">
            Contact
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center justify-center">
              <a
                href="https://x.com/utmrklc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="x.svg"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  alt="x icon"
                ></img>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="https://github.com/uok825"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="github.svg"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  alt="GitHub icon"
                ></img>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/utkuomer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="linkedin.svg"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  alt="LinkedIn icon"
                ></img>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="mailto:utkuomerkilic@protonmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="mail.svg"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  alt="Mail icon"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
