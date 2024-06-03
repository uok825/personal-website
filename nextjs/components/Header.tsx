"use client";

export default function Header() {
  return (
    <header className="bg-black ">
      <div className="flex text-white justify-between items-center ml-12 mr-12">
        <a
          href="/#/"
          className="hover:underline text-2xl font-bold font-montserrat"
        >
          {" "}
          utkuomer.eth{" "}
        </a>
        <div className="flex items-end justify-end">
          <a
            href="/#/stack"
            className="hover:underline font-montserrat font-thin p-3"
          >
            Stack
          </a>
          <a
            href="/#/experience"
            className="hover:underline font-montserrat font-thin p-3"
          >
            Experience
          </a>
          <a
            href="/#/projects"
            className="hover:underline font-montserrat font-thin p-3"
          >
            Projects
          </a>
          <a
            href="/#/contact"
            className="hover:underline font-montserrat font-thin p-3"
          >
            Contact
          </a>
          {/*           <Link href="https://github.com/uok825" target="_blank">
            <Image
              src="github.svg"
              alt="GitHub"
              width={35}
              height={35}
              className="rounded-full mb-1"
            />
          </Link> */}
        </div>
      </div>
    </header>
  );
}
