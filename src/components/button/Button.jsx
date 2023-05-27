import "./Button.css";
import PropTypes from "prop-types";
import { Fetch } from "../../utils/fetch/Fetch.js";

function Button({ message, chat, setChat, setMessage }) {
  function handleClick() {
    const res = Fetch("http://localhost:5000/recommand", "Post", {
      message: message,
    });
    const tempChat = chat;
    tempChat.push({ id: chat.length + 1, type: "user", val: message });
    setChat(tempChat);
    setMessage("");
    tempChat.push({ id: chat.length + 1, type: "bot", val: res });
    setChat(tempChat);
  }

  return (
    <button
      className="sendButton"
      type="button"
      onClick={() => {
        handleClick();
      }}
    >
      Send
    </button>
  );
}
Button.propTypes = {
  message: PropTypes.string,
  setChat: PropTypes.func,
  chat: PropTypes.array,
  setMessage: PropTypes.func,
};

export default Button;
