import "./Text.css";
import PropTypes from "prop-types";

function Text({ message, nameUser, isBot }) {
  return (
    <div className={isBot ? "containerTextBot" : "containerTextUser"}>
      <div className="user">{nameUser}</div>
      <div className="message">{message}</div>
    </div>
  );
}

Text.propTypes = {
  message: PropTypes.string,
  nameUser: PropTypes.string,
  isBot: PropTypes.bool,
};

export default Text;
