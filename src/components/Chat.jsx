import { useState } from "react"

function Chat() {
  const [input, setInput] = useState("")
  const [reply, setReply] = useState("")

  async function sendMessage() {
    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input })
    })

    const data = await res.json()
    setReply(data.reply)
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>

      <p>{reply}</p>
    </div>
  )
}

export default Chat