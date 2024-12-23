import Button from "../components/Button";

const Jumbotron = () => {
  return (
    <>
      <section id="jumbotron">
        <div className="ms-24 me-24 pb-4 space-y-24 max-md:m-0 max-md:p-5 max-md:space-y-72 max-lg:m-0 max-lg:p-5">
          <div className="flex justify-between items-start max-md:flex-col max-md:space-y-8">
            <h1 className="font-bold font-['Basic, sans-serif'] capitalize text-8xl select-none text-white max-md:text-4xl max-md:text-center max-lg:text-6xl">full stack web developer enthusiast</h1>
            <p id="p1" className="font-['Basic, sans-serif']  select-none text-slate-400 text-justify">
              I used to design and build a website for personal and company, people often describe my work as magic
            </p>
          </div>
          <div className="max-md:space-y-8 space-y-20 max-lg:space-y-6">
            <div className="max-md:flex justify-center items-center">
              <Button id="rightArrowTalk" text="Download CV" type="button" url="https://drive.google.com/file/d/1pWaWE7v6n-dVH1B9ihYDLrHu3g2PqvB5/view?usp=sharing" />
            </div>
            <div className="max-md:flex justify-center items-center">
              <h1 className="font-['Basic, sans-serif'] capitalize text-md select-none text-slate-400">Based in Bandung, Indonesia</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
