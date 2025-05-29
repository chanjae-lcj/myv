// src/pages/Vtubers.js
import { useEffect, useState } from "react";

function Vtubers() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // API 호출
    fetch("/api/vtubers")
      .then(response => response.text()) // 백엔드에서 String 반환하니까 .text()로 받음
      .then(data => setMessage(data))
      .catch(error => {
        console.error("Error fetching data:", error);
        setMessage("Error loading data");
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Vtubers Page</h1>
      <p className="text-lg">{message}</p>
    </div>
  );
}

export default Vtubers;
