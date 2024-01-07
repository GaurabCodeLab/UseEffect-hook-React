import { useState, useEffect} from 'react';

function App(){
const [time, setTime] = useState(0);
useEffect(()=>{
  const id = setInterval(()=>{
    setTime(time+1);
  }, 1000)
return ()=>{
  clearInterval(id);
  console.log("clean-up function called")
}
},[time])
  return(
    <>
   <h1>Timer is : {time}</h1>
    </>
  )
}

export default App;


// when useEffect runs after initial render then first old cleanup function runs then useEffect callback function runs
