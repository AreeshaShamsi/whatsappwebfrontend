import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
// import Download from './pages/Download';
// import NotFound from './pages/NotFound';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/signup" element={<SignUp />} /> 
         <Route path="/login" element={<Login />} />
        {/* <Route path="/download/:fileId" element={<Download />} />
        <Route path="*" element={<NotFound />} /> */} 
      </Routes>
    </Router>
  );
}

export default App;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [qrCode, setQrCode] = useState("");
//   const [availableSessions, setAvailableSessions] = useState([]);
//   const [selectedSession, setSelectedSession] = useState("");
//   const [number, setNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [copySuccess, setCopySuccess] = useState("");

//   const fetchSessions = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/sessions"
//       );
//       setAvailableSessions(res.data.sessions);

//       const sessionIds = res.data.sessions.map((s) => s.sessionId);

//       // Only auto-select first session if none is selected or current selected session no longer exists
//       if (!selectedSession || !sessionIds.includes(selectedSession)) {
//         if (res.data.sessions.length > 0) {
//           setSelectedSession(res.data.sessions[0].sessionId);
//         } else {
//           setSelectedSession("");
//         }
//       }
//     } catch (err) {
//       console.error("Failed to fetch sessions", err);
//     }
//   };

//   useEffect(() => {
//     fetchSessions();
//     const interval = setInterval(() => {
//       fetchSessions();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [selectedSession]); // add selectedSession to dependencies to avoid stale closure

//   const createSession = async () => {
//     setLoading(true);
//     setQrCode("");
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/create-session",
//         {}, // no sessionId sent, backend creates UUID
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       if (res.data.qr) {
//         setQrCode(res.data.qr);
//       } else {
//         alert(res.data.message || "Session restored");
//       }
//       fetchSessions();
//     } catch (err) {
//       alert(err.response?.data?.error || "Error creating session");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sendMessage = async () => {
//     if (!selectedSession) {
//       alert("Please select a session");
//       return;
//     }
//     if (!number.trim() || !message.trim()) {
//       alert("Please enter phone number and message");
//       return;
//     }
//     try {
//       await axios.post(
//         "http://localhost:5000/send-message",
//         {
//           sessionId: selectedSession,
//           number,
//           message,
//         }
//       );
//       alert("Message sent!");
//       setNumber("");
//       setMessage("");
//     } catch (err) {
//       alert("Failed to send message");
//       console.error(err);
//     }
//   };

//   const examplePayload = {
//     sessionId: selectedSession || "your-session-id-here",
//     number: "917302667115",
//     message: "Hello from Postman!",
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard
//       .writeText(JSON.stringify(examplePayload, null, 2))
//       .then(() => {
//         setCopySuccess("Copied!");
//         setTimeout(() => setCopySuccess(""), 2000);
//       })
//       .catch(() => {
//         setCopySuccess("Failed to copy");
//         setTimeout(() => setCopySuccess(""), 2000);
//       });
//   };

//   return (
//     <div className="container">
//       <h1>WhatsApp Multi-Sender</h1>

//       <div className="section">
//         <h3>Create New Session</h3>
//         <button onClick={createSession} disabled={loading}>
//           {loading ? "Waiting for QR..." : "Create Session"}
//         </button>
//         {qrCode && (
//           <>
//             <p>Scan QR in WhatsApp</p>
//             <img src={qrCode} alt="QR Code" className="qr" />
//           </>
//         )}
//       </div>

//       <div className="section">
//         <h3>Active Sessions</h3>
//         {availableSessions.length === 0 ? (
//           <p>No active sessions</p>
//         ) : (
//           <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
//             {availableSessions.map(({ sessionId, phoneNumber, pushname }) => {
//               const isSelected = selectedSession === sessionId;
//               return (
//                 <div
//                   key={sessionId}
//                   onClick={() => setSelectedSession(sessionId)}
//                   style={{
//                     cursor: "pointer",
//                     width: 100,
//                     height: 100,
//                     borderRadius: "50%",
//                     backgroundColor: isSelected ? "#4CAF50" : "#ddd",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     boxShadow: isSelected
//                       ? "0 0 10px 3px #4CAF50"
//                       : "0 0 5px 1px #aaa",
//                     userSelect: "none",
//                     textAlign: "center",
//                     padding: 10,
//                   }}
//                   title={`Session: ${sessionId}`}
//                 >
//                   <strong>{pushname || "Unknown"}</strong>
//                   <small>{phoneNumber || "No number"}</small>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h3>Send Message</h3>
//         <input
//           type="text"
//           placeholder="Receiver's phone number"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//         />
//         <textarea
//           placeholder="Your message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={sendMessage} disabled={!selectedSession}>
//           Send Message
//         </button>
//       </div>

//       <div
//         className="section"
//         style={{
//           marginTop: 30,
//           backgroundColor: "#f5f5f5",
//           padding: 15,
//           borderRadius: 6,
//           position: "relative",
//         }}
//       >
//         <h3>API Usage</h3>
//         <p>Send a POST request to:</p>
//         <code>http://localhost:5000/send-message</code>
//         <p>with JSON body:</p>
//         <pre
//           style={{
//             backgroundColor: "#222",
//             color: "#eee",
//             padding: 10,
//             borderRadius: 4,
//             overflowX: "auto",
//             whiteSpace: "pre-wrap",
//             wordBreak: "break-word",
//             maxHeight: 200,
//           }}
//         >
//           {JSON.stringify(examplePayload, null, 2)}
//         </pre>
//         <button
//           onClick={copyToClipboard}
//           style={{
//             marginTop: 10,
//             padding: "6px 12px",
//             cursor: "pointer",
//             borderRadius: 4,
//             border: "none",
//             backgroundColor: "#4CAF50",
//             color: "white",
//             fontWeight: "bold",
//           }}
//         >
//           Copy JSON
//         </button>
//         {copySuccess && (
//           <span
//             style={{
//               marginLeft: 10,
//               color: copySuccess === "Copied!" ? "green" : "red",
//               fontWeight: "bold",
//             }}
//           >
//             {copySuccess}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;  