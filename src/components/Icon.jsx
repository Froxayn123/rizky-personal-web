import anime from "animejs";
import PropTypes from "prop-types";

const Icon = (props) => {
  addEventListener("scroll", () => {
    const wScroll = window.scrollY;
    if (wScroll >= 1356 && wScroll <= 1400) {
      anime
        .timeline({
          easing: "easeInOutQuad",
          duration: 1500,
        })
        .add({
          targets: document.getElementById(props.id1),
          width: 235,
          update: function (anim) {
            const progress = anim.progress;
            if (progress >= 0 && progress <= 20) {
              document.getElementById(props.name).innerHTML = "Newbie";
              document.getElementById(props.id1).innerHTML = "1/5";
            } else if (progress >= 21 && progress <= 40) {
              document.getElementById(props.name).innerHTML = "Beginner";
              document.getElementById(props.id1).innerHTML = "2/5";
            } else if (progress >= 41 && progress <= 60) {
              document.getElementById(props.name).innerHTML = "Skillful";
              document.getElementById(props.id1).innerHTML = "3/5";
            } else if (progress >= 61 && progress <= 80) {
              document.getElementById(props.name).innerHTML = "Experienced";
              document.getElementById(props.id1).innerHTML = "4/5";
            } else if (progress >= 81 && progress <= 100) {
              document.getElementById(props.name).innerHTML = "Master";
              document.getElementById(props.id1).innerHTML = "5/5";
            }
          },
        })
        .add({
          targets: document.getElementById(props.id1),
          width: props.level * 47,
          update: function () {
            if (props.desc) {
              document.getElementById(props.name).innerHTML = props.desc;
              document.getElementById(props.id1).innerHTML = `${props.level}/5`;
            }
          },
        });
    }
  });
  return (
    <>
      <div id={props.id} className="mt-5 p-3 w-80 flex justify-normal items-center outline outline-2 outline-[#5f5390] rounded-lg space-x-3 select-none">
        <div className="flex justify-center items-center">
          <img src={props.src} alt="" className="w-14 rounded-full" />
        </div>
        <div className="w-full flex flex-col justify-normal space-y-2">
          <h1 className={`font-bold font-['Basic, sans-serif'] capitalize text-md ${props.color}`}>{props.name}</h1>
          <div
            id={props.id1}
            className="w-[0px] p-2 flex justify-center items-center font-bold font-['Basic, sans-serif'] text-white
           bg-primary"
          ></div>
          <h1 id={props.name} className={`font-bold font-['Basic, sans-serif'] capitalize text-md text-center text-white`}>
            {props.desc}
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
