import { ChatContext } from "../../utils/context/Chat.js";
import { useContext } from "react";
import "./Button.css";
import PropTypes from "prop-types";

function Button({ message }) {
  const chat = useContext(ChatContext);
  function handleClick() {
    chat.push({ id: chat.length + 1, type: "user", val: message });
    console.log('{ id: chat.length + 1, type: "user", val: message }', {
      id: chat.length + 1,
      type: "user",
      val: message,
    });
    console.log("chat", chat);
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
};

export default Button;
