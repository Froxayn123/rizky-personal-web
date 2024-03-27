import { useState } from "react";
import ChevronLeft from "../components/ChevronLeft";
import ChevronRight from "../components/ChevronRight";
import { certificates } from "../data/certificates";

const Certificate = () => {
  const Certificates = [];
  const [curr, setCurr] = useState(0);

  for (let i = 0; i < certificates.length; i++) {
    Certificates.push(<img src={certificates[0].img} />);
  }

  const prev = () => {
    setCurr((curr) => (curr == 0 ? Certificates.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr == Certificates.length - 1 ? 0 : curr + 1));
  };

  return (
    <>
      <section id="certificate">
        <div className="ps-24 pt-14 pe-24 flex flex-col space-y-8 max-md:p-2 max-md:pt-6 max-lg:p-6">
          <div className="space-y-5 max-md:text-center max-md:space-y-2">
            <h1 className="font-semibold font-['Basic, sans-serif'] uppercase select-none text-end text-4xl text-[#5f5390]">certificates</h1>
            <h1 className="font-bold font-['Basic, sans-serif'] uppercase select-none text-7xl text-white text-end max-md:text-4xl">acquired</h1>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <button onClick={prev} className="p-4 rounded-full shadow bg-[#5f5390] text-white">
              <ChevronLeft />
            </button>
            <div className="flex justify-center items-center overflow-hidden relative">
              <div className="w-[1007px] flex transition-transform ease-out duration-500 " style={{ transform: `translateX(-${curr * 100}%)` }}>
                {Certificates}
              </div>
            </div>
            <button onClick={next} className="p-4 rounded-full shadow bg-[#5f5390] text-white">
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificate;
