import PropTypes from "prop-types";
import RightArrow from "../assets/RightArrow";

const Button = (props) => {
  const onHover = () => {
    document.getElementById(props.id).style.transform = "translate(10px,0px)";
  };
  const offHover = () => {
    document.getElementById(props.id).style.transform = "translate(0px,0px)";
  };

  const onClick = () => {
    if (props.url === undefined) {
      return;
    }

    window.location.href = props.url;
  };

  return (
    <>
      <button className="p-5 ps-7 pe-7 flex justify-center items-center uppercase font-bold font-['Basic, sans-serif'] rounded-md bg-primary" onMouseEnter={onHover} onMouseLeave={offHover} type={props.type} onClick={onClick}>
        {props.text}
        <div id={props.id} className="ms-2 transition duration-300 ease-in-out">
          <RightArrow />
        </div>
      </button>
    </>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.number.isRequired,
};

export default Button;
