import anime from "animejs";
import Button from "../components/Button";
import { useEffect } from "react";

const Jumbotron = () => {
  useEffect(() => {
    anime
      .timeline({
        easing: "easeInOutQuad",
        duration: 1000,
      })
      .add({
        targets: document.getElementById("bar1"),
        translateX: -350,
      })
      .add({
        targets: document.getElementById("p1"),
        opacity: 1,
      });
  });

  return (
    <>
      <section id="jumbotron">
        <div className="ms-24 me-24 space-y-20 max-md:m-6 max-md:space-y-80 max-lg:m-6 max-lg:space-y-6 max-lg:mt-0">
          <div className="flex justify-between items-start max-md:flex-col max-md:space-y-8">
            <h1 className="font-bold font-['Basic, sans-serif'] capitalize text-8xl select-none text-white max-md:text-4xl max-md:text-center max-lg:text-5xl">full stack web developer enthusiast</h1>
            <div className="relative md:w-[700px]">
              <div id="bar1" className="w-1 h-full bg-primary absolute end-0"></div>
              <p id="p1" className="font-['Basic, sans-serif']  select-none text-slate-400 opacity-0 text-justify">
                I used to design and build a website for personal and company, people often describe my work as magic
              </p>
            </div>
          </div>
          <div className="max-md:space-y-14 space-y-20 max-lg:space-y-4">
            <div className="max-md:flex justify-center items-center">
              <Button
                id="rightArrowTalk"
                text="Download CV"
                type="button"
                url="https://drive.usercontent.google.com/download?id=1r_6Jgd354eXrduaDeoqCuv2JDdhCB-45&export=download&authuser=0&confirm=t&uuid=883afbde-2d1a-40f9-85d4-21671742ee32&at=APZUnTXHgUhA9LHBIuNUNdwLjBse:1706003525823"
              />
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
