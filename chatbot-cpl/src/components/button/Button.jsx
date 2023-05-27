import { ChatContext } from "../../utils/context/Chat.js";
import { useContext } from "react";
import "./Button.css";
import PropTypes from "prop-types";

function Button({ message, chat, setChat, setMessage }) {
  //const { chat, setChat } = useContext(ChatContext);
  function handleClick() {
    const tempChat = chat;
    tempChat.push({ id: chat.length + 1, type: "user", val: message });
    setChat(tempChat);
    setMessage("");
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
