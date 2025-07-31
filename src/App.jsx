import {useState } from "react";
import "./App.css";
import ChatRoom from "./effects";
import Image from "./dataFetch";

export default function App() {

  // how to use effects

  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <label>
          Choose the chat room:{' '}
          <select
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
          >
            <option value="general">general</option>
            <option value="music">music</option>
            <option value="travel">travel</option>
          </select>
        </label>

        <button onClick={() => setShow(!show)}>{show ? 'close chat' : 'Open chat'}</button>
        {show && <hr />}
        {show && <ChatRoom roomId={roomId} />}
      </div>
      <div>{Image}</div>
    </>
  );
}
