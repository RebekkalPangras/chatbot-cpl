import React from "react";
import { ChatContext } from "./utils/context/Chat.js";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatContext.Provider
      value={[
        { id: 1, type: "user", val: "Hi" },
        { id: 2, type: "bot", val: "How can i help you ?" },
      ]}
    >
      <App />
    </ChatContext.Provider>
  </React.StrictMode>
);
