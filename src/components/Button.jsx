import { useState } from "react"

function Button() {
  const [data, setData] = useState("")

  async function handleClick() {
    const res = await fetch("http://localhost:5000/api/message")
    const result = await res.json()

    setData(result.message)
  }

  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      <p>{data}</p>
    </div>
  )
}

export default Button