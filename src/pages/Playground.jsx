import React, { useEffect, useState } from 'react'

const Playground = () => {
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)


    const increseCountHanlder = ()=>{
        const latestCount = count + 1
        setCount(latestCount)
    }

    useEffect(()=>{
        console.log('useEffect called')
        setCount(333)
        setTotal(0)
    }, [total, count])

  return (
    <div>
        <div>Count: {count}</div>
        <br />
        <button onClick={increseCountHanlder}>++</button>
    </div>
  )
}

export default Playground