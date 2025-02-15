import { useEffect } from "react"


const BasicEffect = () => {
  useEffect(() => {
    console.log("Component mounted")
  })

  return (
    <div>
      <h1>Check Console</h1>
    </div>
  )
}
export default BasicEffect