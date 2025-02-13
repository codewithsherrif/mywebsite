// import React, { useState, useEffect, useRef, useCallback } from "react";
// import {
//   ChatBubbleOvalLeftIcon,
//   PaperAirplaneIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// const LiveChatWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [sessionId, setSessionId] = useState(null);
//   const ws = useRef(null);
//   const chatEndRef = useRef(null);

//   // Initialize WebSocket connection
//   useEffect(() => {
//     const newSessionId = crypto.randomUUID();
//     setSessionId(newSessionId);

//     ws.current = new WebSocket(`ws://localhost:6000`);

//     ws.current.onopen = () => {
//       // Send INIT message to load chat history
//       ws.current.send(
//         JSON.stringify({
//           type: "INIT",
//           sessionId: newSessionId,
//         })
//       );
//     };

//     ws.current.onmessage = (event) => {
//       const { type, data } = JSON.parse(event.data);
//       switch (type) {
//         case "HISTORY":
//           setMessages(data);
//           break;
//         case "MESSAGE":
//           setMessages((prev) => [...prev, data]);
//           break;
//       }
//     };

//     ws.current.onerror = (error) => {
//       console.error("WebSocket error:", error);
//     };

//     ws.current.onclose = () => {
//       console.log("WebSocket connection closed");
//     };

//     return () => {
//       ws.current?.close();
//     };
//   }, []);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = useCallback(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, []);

//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;

//     const tempId = crypto.randomUUID();
//     const newMessage = {
//       id: tempId,
//       content: message,
//       sessionId,
//       timestamp: new Date().toISOString(),
//       isAI: false,
//       status: "sending",
//     };

//     // Optimistic update
//     setMessages((prev) => [...prev, newMessage]);

//     try {
//       ws.current.send(
//         JSON.stringify({
//           type: "MESSAGE",
//           content: message,
//           sessionId,
//           needsAIResponse: true,
//         })
//       );
//     } catch (error) {
//       console.error("Send failed:", error);
//       setMessages((prev) =>
//         prev.map((msg) =>
//           msg.id === tempId ? { ...msg, status: "failed" } : msg
//         )
//       );
//     }

//     setMessage("");
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition"
//       >
//         {isOpen ? (
//           <XMarkIcon className="h-6 w-6" />
//         ) : (
//           <ChatBubbleOvalLeftIcon className="h-6 w-6" />
//         )}
//       </button>

//       {isOpen && (
//         <div className="absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-xl">
//           <div className="h-96 flex flex-col">
//             <div className="flex-1 p-4 overflow-y-auto">
//               {messages.map((msg) => (
//                 <div
//                   key={msg.id}
//                   className={`mb-4 p-3 rounded-lg ${
//                     msg.isAI ? "bg-gray-100" : "bg-orange-500 text-white"
//                   }`}
//                 >
//                   <p>{msg.content}</p>
//                   <div className="mt-2 text-xs opacity-75">
//                     {new Date(msg.timestamp).toLocaleTimeString()}
//                     {msg.status === "sending" && " · Sending..."}
//                     {msg.status === "failed" && " · Failed to send"}
//                   </div>
//                 </div>
//               ))}
//               <div ref={chatEndRef} />
//             </div>

//             <form onSubmit={handleSend} className="border-t p-4">
//               <div className="flex gap-2">
//                 <input
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   placeholder="Type your message..."
//                   className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//                 <button
//                   type="submit"
//                   disabled={!message.trim()}
//                   className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg disabled:opacity-50"
//                 >
//                   <PaperAirplaneIcon className="h-6 w-6" />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LiveChatWidget;
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const ws = useRef(null);
  const chatEndRef = useRef(null);

  // Initialize WebSocket connection
  useEffect(() => {
    const newSessionId = crypto.randomUUID();
    setSessionId(newSessionId);

    const connectWebSocket = () => {
      ws.current = new WebSocket(`ws://localhost:6000`);

      ws.current.onopen = () => {
        console.log("WebSocket connection established");
        ws.current.send(
          JSON.stringify({
            type: "INIT",
            sessionId: newSessionId,
          })
        );
      };

      ws.current.onmessage = (event) => {
        const { type, data } = JSON.parse(event.data);
        switch (type) {
          case "HISTORY":
            if (Array.isArray(data)) {
              setMessages(data);
            } else {
              console.error("Invalid history data:", data);
            }
            break;
          case "MESSAGE":
            setMessages((prev) => [...prev, data]);
            break;
        }
        scrollToBottom();
      };

      ws.current.onerror = (error) => {
        console.error("WebSocket error:", error);
        // Attempt to reconnect after a delay
        setTimeout(connectWebSocket, 3000);
      };

      ws.current.onclose = () => {
        console.log("WebSocket connection closed");
        // Attempt to reconnect after a delay
        setTimeout(connectWebSocket, 3000);
      };
    };

    connectWebSocket();

    return () => {
      if (ws.current && ws.current.readyState === WebSocket.OPEN) {
        ws.current.close();
      }
    };
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const tempId = crypto.randomUUID();
    const newMessage = {
      id: tempId,
      content: message,
      sessionId,
      timestamp: new Date().toISOString(),
      isAI: false,
      status: "sending",
    };

    // Optimistic update
    setMessages((prev) => [...prev, newMessage]);

    try {
      if (ws.current && ws.current.readyState === WebSocket.OPEN) {
        ws.current.send(
          JSON.stringify({
            type: "MESSAGE",
            content: message,
            sessionId,
            needsAIResponse: true,
          })
        );
      } else {
        throw new Error("WebSocket is not open");
      }
    } catch (error) {
      console.error("Send failed:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === tempId ? { ...msg, status: "failed" } : msg
        )
      );
    }

    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleOvalLeftIcon className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-xl">
          <div className="h-96 flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-4 p-3 rounded-lg ${
                    msg.isAI ? "bg-gray-100" : "bg-orange-500 text-white"
                  }`}
                >
                  <p>{msg.content}</p>
                  <div className="mt-2 text-xs opacity-75">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                    {msg.status === "sending" && " · Sending..."}
                    {msg.status === "failed" && " · Failed to send"}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSend} className="border-t p-4">
              <div className="flex gap-2">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg disabled:opacity-50"
                >
                  <PaperAirplaneIcon className="h-6 w-6" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChatWidget;
