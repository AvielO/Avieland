import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

import { LuSendHorizonal } from "react-icons/lu";
import { Link, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const socket = io(`${process.env.SERVER_URL}`);

const MessagesPage = () => {
  const newMessageRef = useRef();

  const { chatUsername } = useParams();
  const username = useSelector((state) => state.user.username);

  const [messages, setMessages] = useState([
    { text: "לא אחי לא עשיתי כלום", right: true },
    { text: "מה נשמע", right: true },
    { text: "אני סבבה לגמרי אחי", right: false },
    { text: "מעולה אח שלי שמח לשמוע", right: true },
    { text: "יאללה ביי אח", right: false },
  ]);

  useEffect(() => {
    socket.emit("join chat", username);

    return () => {
      socket.off("join chat");
    };
  }, []);

  useEffect(() => {
    socket.emit("join chat", chatUsername);
    socket.on("message accepted", (messageObj) => {
      console.log(messageObj.user, messageObj.message, messageObj.date);
    });

    return () => {
      socket.emit("leave chat", chatUsername);
      socket.off("message accepted");
    };
  }, [chatUsername]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (newMessageRef.current.value) {
      socket.emit("message sent", {
        room: chatUsername,
        message: newMessageRef.current.value,
        user: username,
      });
      newMessageRef.current.value = "";
    }
  };

  return (
    <div className="m-4 flex">
      <div className="flex w-48 flex-col gap-4 bg-gray-50 px-3 py-2">
        <Link to={`/messages/AvielO`} key={"Aviel"}>
          <div className="flex items-center gap-2">
            <img className="h-10 w-10" src="user-icon.png" />
            <span>אביאל הגבר</span>
          </div>
        </Link>
        <Link to={`/messages/Bar`} key={"Bar"}>
          <div className="flex items-center gap-2">
            <img className="h-10 w-10" src="user-icon.png" />
            <span>בר הגבר</span>
          </div>
        </Link>
        <Link to={`/messages/loli`} key={"loli"}>
          <div className="flex items-center gap-2">
            <img className="h-10 w-10" src="user-icon.png" />
            <span>נועה הגבר</span>
          </div>
        </Link>
        <Link to={`/messages/Shaharon`} key={"Shaharon"}>
          <div className="flex items-center gap-2">
            <img className="h-10 w-10" src="user-icon.png" />
            <span>שחר הגבר</span>
          </div>
        </Link>
        <Link to={`/messages/Ronaldo`} key={"Ronaldo"}>
          <div className="flex items-center gap-2">
            <img className="h-10 w-10" src="user-icon.png" />
            <span>קרין הגבר</span>
          </div>
        </Link>
      </div>
      <div className="flex h-full w-full flex-col gap-4 bg-gray-100 p-6">
        <div className="flex flex-col gap-3 rounded-2xl bg-gray-50 p-6">
          {messages.map((message) => (
            <div
              className={`w-fit rounded-full bg-sky-200 p-3 ${message.right ? "self-end bg-gray-200" : "bg-sky-200"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={(e) => handleSendMessage(e)}
            className="flex items-center justify-center rounded-full bg-white p-2 text-4xl"
          >
            <LuSendHorizonal />
          </button>
          <input
            type="text"
            ref={newMessageRef}
            className="w-5/6 rounded-full p-2 text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
