
import './App.css';

function App() {
  const title = "welcome to the new blog"
  const likes = 50

  const person = 
  {
    name : "rohit",
    age : 19
  }
  const link = "https://facebook.com"

  return (
    <div className="App">


      <div className="content">
        {/* dynamic values in component */}
        <h1>{title}</h1>
        <p>liked {likes} times</p>
        {/* connot directly display object */}
        {/* <p>{person}</p> */}
        <p>Name : {person.name}, Age : {person.age}</p>

        {/* output multiple values */}
        {/* values */}
        <p>{15}</p>
        {/* string */}
        <p>{"this is a string"}</p>
        {/* expressions */}
        <p>{Math.random() *5}</p>

        {/* dynamic values in attributes */}
        <a href={link}>go to facebook</a>


      </div>
    </div>
  );
}

export default App;
