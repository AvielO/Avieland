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

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //get old message
    //socket.on for each new message
    //join room
    console.log(chatUsername)
    // socket.on("get messages", (msg) => {
    //   setMessages((prevMessages) => [...prevMessages, msg]);
    // });

    // return () => {
    //   socket.off("new message");
    // };
  }, [chatUsername]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (newMessageRef.current.value) {
      socket.emit("send message", {
        room,
        message: newMessageRef.current.value,
      });
      newMessageRef.current.value = "";
    }
  };

  return (
    <div className="m-4 flex">
      <div className="flex w-48 flex-col gap-4 bg-gray-50 px-3 py-2">
        <Link to={`/messages/Noa`} key={"Noa"}>
          <div className="flex items-center gap-2">
            <img className="h-10 w-10" src="user-icon.png" />
            <span>אביאל הגבר</span>
          </div>
        </Link>
        <Link to={`/messages/Bar`} key={"Bar"}>
          <div className="flex items-center gap-2">
            <img className="h-10 w-10" src="user-icon.png" />
            <span>לולי הגבר</span>
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
          <div className="w-fit rounded-full bg-sky-200 p-3 text-left">
            <span>לא אחי לא עשיתי כלום</span>
          </div>
          <div className="w-fit rounded-full bg-sky-200 p-3 text-left">
            <span>מה נשמע</span>
          </div>
          <div className="w-fit self-end rounded-full bg-gray-200 p-3">
            <span>אני סבבה לגמרי אחי</span>
          </div>
          <div className="w-fit rounded-full bg-sky-200 p-3 text-left">
            <span>מעולה אח שלי שמח לשמוע</span>
          </div>
          <div className="w-fit self-end rounded-full bg-gray-200 p-3">
            <span>יאללה ביי אח</span>
          </div>
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

// return (
//   <div>
//     {!joinedRoom ? (
//       <form onSubmit={joinRoom}>
//         <input
//           value={room}
//           onChange={(e) => setRoom(e.target.value)}
//           placeholder="Room"
//           autoComplete="off"
//         />
//         <button type="submit">Join Room</button>
//       </form>
//     ) : (
//       <div>
//         <button onClick={leaveRoom}>Leave Room</button>
//         <ul>
//           {messages.map((msg, index) => (
//             <li key={index}>{msg}</li>
//           ))}
//         </ul>
//         <form onSubmit={sendMessage}>
//           <input
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             autoComplete="off"
//           />
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     )}
//   </div>
// );

export default MessagesPage;
