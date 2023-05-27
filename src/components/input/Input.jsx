import "./Input.css";
import PropTypes from "prop-types";

function Input({ message, setMessage }) {
  return (
    <div className="containerInput">
      <img
        className="searchIcon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1000px-Search_Icon.svg.png?20181016161702"
        alt="search icon"
      />
      <input
        className="input"
        type="text"
        id="message"
        value={message}
        name="message"
        placeholder="Send a message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></input>
    </div>
  );
}

Input.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func,
};

export default Input;
