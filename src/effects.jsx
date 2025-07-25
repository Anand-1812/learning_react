import { useEffect } from "react";
import { createConnection } from "./chat";

const serverUrl = 'https://localhost:5174';

export default function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    // cleanup
    return () => connection.disconnect();
  }, [roomId]);

  return <h3>Welcome to the {roomId} room!</h3>
}


