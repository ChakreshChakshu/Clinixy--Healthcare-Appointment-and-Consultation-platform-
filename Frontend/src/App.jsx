import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/health")
      .then((res) => {
        setMessage(res.data.status);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Clinixy backend is not running");
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Clinixy</h1>
      <p style={{ color: "green" }}>{message}</p>
    </div>
  );
}

export default App;
