import Typewriter from "typewriter-effect";
import Academic from "../components/Academic";

const Navbar = () => {
  return (
    <>
      <div className="ms-16 me-16 p-8 flex justify-between items-center max-md:m-0 max-md:text-xs max-lg:m-0 max-lg:text-md">
        <h1 className="font-bold font-['Basic, sans-serif'] uppercase select-none text-white">
          {
            <Typewriter
              options={{
                strings: ["Rizky Muhammad Yusuf", "Froxayn"],
                autoStart: true,
                loop: true,
              }}
            />
          }
        </h1>
        <div className="flex justify-center items-center space-x-3">
          <h1 className="font-semibold font-['Basic, sans-serif'] normal-case select-none text-white">
            {
              <Typewriter
                options={{
                  strings: ["Looking for internship", "Looking for projects", "Looking for partnership", "Looking for ❤️ :)"],
                  autoStart: true,
                  loop: true,
                }}
              />
            }
          </h1>
          <Academic />
        </div>
      </div>
    </>
  );
};

export default Navbar;
