import "./Avatar.css";
import PropTypes from "prop-types";

function Avatar({ isBot }) {
  const url = isBot
    ? "https://i.pravatar.cc/150?img=3"
    : "https://i.pravatar.cc/150?img=5";

  return <img className="avatar" src={url} alt="user avatar" />;
}

Avatar.propTypes = {
  isBot: PropTypes.bool,
};

export default Avatar;
