import { useState, useContext } from "react";
import Avatar from "./components/avatar/Avatar.jsx";
import Input from "./components/input/Input.jsx";
import Text from "./components/text/Text.jsx";
import Button from "./components/button/Button.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import "./App.css";
import { ChatContext } from "./utils/context/Chat.js";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { id: 1, type: "user", val: "Hi" },
    { id: 2, type: "bot", val: "How can i help you ?" },
  ]);
  return (
    <ChatContext.Provider value={{ chat, setChat }}>
      <Navbar />
      <div className="discussion">
        {chat.map((message) => {
          return (
            <div key={message.id}>
              {message.type === "bot" ? (
                <div key={message.id} className="messageDiscussionBot">
                  <div className="messageContainer">
                    <Text
                      message={message.val}
                      nameUser={message.type}
                      isBot={message.type === "bot"}
                    />
                  </div>
                  <div className="avatarContainer">
                    <Avatar isBot={message.type === "bot"} />
                  </div>
                </div>
              ) : (
                <div key={message.id} className="messageDiscussionUser">
                  <div className="avatarContainer">
                    <Avatar isBot={message.type === "bot"} />
                  </div>
                  <div className="messageContainer">
                    <Text
                      message={message.val}
                      nameUser={message.type}
                      isBot={message.type === "bot"}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="inputContainerGlobal">
        <Input message={message} setMessage={setMessage} />
        <Button
          message={message}
          chat={chat}
          setChat={setChat}
          setMessage={setMessage}
        />
      </div>
    </ChatContext.Provider>
  );
}

export default App;
