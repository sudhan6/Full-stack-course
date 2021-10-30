const App = () => {
const City = "london"
let styles
if (City==='Paris') {
  styles = {
    widht:"100px",
    border: "10px solid red"
  }
} else {
  styles = {
    widht:"100px",
    border: "10px solid red"
  }
}
const handler =() => {
  console.log("i was clicked")
}
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="container">
        <h3>{City}</h3>
        <img style={styles}  src="https://images.unsplash.com/photo-1635331225654-c6b5a14797cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1329&q=80" alt="" />
      <button onDoubleClick={handler}>Click Me</button>
      </div>
      
      <footer>
        <a href="#">Github</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">Linkedin</a>


      </footer>
    </div>
  );
}



export default App;
