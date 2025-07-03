import { useState } from "react"

const Elseif = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>change</button>
            {
                count == 0 ? <h2>Condition 01</h2>
                    : count == 1 ? <h2>Condition 02</h2>
                        : count == 2 ? <h2>Condition 03</h2>
                            : count == 3 ? <h2>Condition 04</h2>
                                : count == 4 ? <h2>Condition 05</h2>
                                    : null
            }
        </div>
    )
}
export default Elseif