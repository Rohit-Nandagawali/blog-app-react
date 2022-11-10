import { useState } from "react";
import "./Home.css"

const Home = () => {
    // we can assign new value to the variable but changes will not affect on the webpages
    // we can change the state of the variable using useState hook
    // const [varibale, functionToSetVariable] = useEffect(initial value)

    const [name,setName] = useState('rohit')

    const handleClick=()=>{
        setName('mothit')
    }
    return ( 
        <div className="Home">
            <h1>homepage</h1>
            <p>{name}</p>
            <button onClick={handleClick}>click me</button>
        </div>
     );
}
 
export default Home;