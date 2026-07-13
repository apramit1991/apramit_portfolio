import React from "react";
import ReactDOM from "react-dom/client";

import "@/styles/globals.css";
import "@/styles/chat.css";
import { ChatPage } from "@/pages/chat-page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatPage />
  </React.StrictMode>
);
