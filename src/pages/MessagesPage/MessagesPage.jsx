import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

import { LuSendHorizonal } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const socket = io(`${process.env.SERVER_URL}`);

const MessagesPage = () => {
  const newMessageRef = useRef();

  const { chatUsername } = useParams();
  const username = useSelector((state) => state.user.username);

  const [messages, setMessages] = useState([]);
  const [chatSenders, setChatSenders] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchChatsSenders = async () => {
      const res = await fetch(`${process.env.SERVER_URL}/chats/${username}`);
      const { uniqueSenders } = await res.json();
      setChatSenders(uniqueSenders);
    };

    fetchChatsSenders();
    socket.emit("listen myself", { username });

    return () => {
      socket.off("listen myself");
    };
  }, [username]);

  useEffect(() => {
    socket.emit("join chat", { room: chatUsername, username });

    socket.on("previous messages", ({ messages }) => {
      setMessages(messages);
    });

    socket.on("message accepted", (messageObj) => {
      if (messageObj.user === chatUsername || messageObj.user === username) {
        setMessages((messages) => [
          ...messages,
          { content: messageObj.message, sender: messageObj.user },
        ]);

        setChatSenders((chatSenders) => {
          const updatedChatSenders = chatSenders.filter(
            (item) => item !== chatUsername,
          );
          return [chatUsername, ...updatedChatSenders];
        });
      } else {
        setNotifications((notifications) => [
          ...notifications,
          messageObj.user,
        ]);
        setChatSenders((prevChatSenders) => [chatUsername, ...prevChatSenders]);
      }
    });
    setNotifications((notifications) =>
      notifications.filter((notification) => notification !== chatUsername),
    );

    return () => {
      socket.emit("leave chat", chatUsername);
      socket.off("message accepted");
      setMessages([]);
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
      <div className="flex h-fit w-48 flex-col gap-4 bg-gray-50 px-3 py-2">
        {chatSenders.map((chatSender) => (
          <Link to={`/messages/${chatSender}`} key={`${chatSender}`}>
            <div className="flex items-center gap-2">
              <img className="h-10 w-10" src="user-icon.png" />
              <span>{chatSender}</span>
              {notifications.includes(chatSender) ? (
                <div className="h-4 w-4 rounded-full bg-blue-500 shadow-lg"></div>
              ) : (
                ""
              )}
            </div>
          </Link>
        ))}
      </div>
      {chatUsername && (
        <div className="flex h-full w-full flex-col gap-4 bg-gray-100 p-6">
          <div className="flex flex-col gap-3 rounded-2xl bg-gray-50 p-6">
            {messages.map((message, index) => (
              <div
                className={`w-fit rounded-full p-3 ${message.sender === username ? "bg-sky-200" : "self-end bg-gray-200"}`}
                key={index}
              >
                {message.content}
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
      )}
    </div>
  );
};

export default MessagesPage;
