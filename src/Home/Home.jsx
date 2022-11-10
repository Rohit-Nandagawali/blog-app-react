import "./Home.css"

const Home = () => {

    const handleClick=()=>{
        console.log('i am clicked');
    }
    return ( 
        <div className="Home">
            <h1>homepage</h1>
            <button onClick={handleClick}>click me</button>
        </div>
     );
}
 
export default Home;