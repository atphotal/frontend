import { useState } from "react"

function Chat() {
  const [input, setInput] = useState("")
  const [reply, setReply] = useState("")

  async function sendMessage() {
  try {
    const res = await fetch("https://backend-kdvl.onrender.com/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input })
    })

    // Check if response is OK
    if (!res.ok) {
      throw new Error("Server error")
    }

    const data = await res.json()
    setReply(data.reply)

  } catch (err) {
    console.error(err)
    setReply("Error: Backend not responding or limit exceeded")
  }
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