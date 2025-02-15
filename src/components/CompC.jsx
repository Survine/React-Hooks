import { Data, Value } from "../App"
import { useContext } from "react"

const CompC = () => {

    const uname = useContext(Data)
    const uage = useContext(Value)

    return (
        <h1>
            My Name is {uname} and age is {uage}
        </h1>
    )
}
export default CompC