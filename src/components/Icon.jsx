import anime from "animejs";
import PropTypes from "prop-types";

const Icon = ({ id, id1, src, name, level, desc, color }) => {
  addEventListener("scroll", () => {
    const wScroll = window.scrollY;
    if (wScroll >= 1356 && wScroll <= 1400) {
      anime
        .timeline({
          easing: "easeInOutQuad",
          duration: 1500,
        })
        .add({
          targets: document.getElementById(id1),
          width: "100%",
          update: function (anim) {
            const progress = anim.progress;
            if (progress >= 0 && progress <= 20) {
              document.getElementById(name).innerHTML = "Newbie";
              document.getElementById(id1).innerHTML = "1/5";
            } else if (progress >= 21 && progress <= 40) {
              document.getElementById(name).innerHTML = "Beginner";
              document.getElementById(id1).innerHTML = "2/5";
            } else if (progress >= 41 && progress <= 60) {
              document.getElementById(name).innerHTML = "Skillful";
              document.getElementById(id1).innerHTML = "3/5";
            } else if (progress >= 61 && progress <= 80) {
              document.getElementById(name).innerHTML = "Experienced";
              document.getElementById(id1).innerHTML = "4/5";
            } else if (progress >= 81 && progress <= 100) {
              document.getElementById(name).innerHTML = "Master";
              document.getElementById(id1).innerHTML = "5/5";
            }
          },
        })
        .add({
          targets: document.getElementById(id1),
          width: `${Math.floor((level / 5) * 100).toString()}%`,
          update: function () {
            if (desc) {
              document.getElementById(name).innerHTML = desc;
              document.getElementById(id1).innerHTML = `${level}/5`;
            }
          },
        });
    }
  });

  return (
    <>
      <div id={id} className="m-5 p-3 flex justify-normal items-center outline outline-2 outline-[#5f5390] rounded-lg space-x-3 select-none">
        <div className="flex justify-center items-center">
          <img src={src} alt="" className="w-14 rounded-full" />
        </div>
        <div className="w-full flex flex-col justify-normal space-y-2">
          <h1 className={`font-bold font-['Basic, sans-serif'] capitalize text-md ${color}`}>{name}</h1>
          <div
            id={id1}
            className="w-0 p-2 flex justify-center items-center font-bold font-['Basic, sans-serif'] text-white
            bg-primary"
          ></div>
          <h1 id={name} className={`font-bold font-['Basic, sans-serif'] capitalize text-md text-white`}>
            {desc}
          </h1>
        </div>
      </div>
    </>
  );
};

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  id1: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Icon;
