import Navbar from "./file/navbar";
import Home from "./file/Home";
import About from "./file/About";
import Photo from "./file/photos";
import Test from "./file/test";

const name = "Sardar Hussaini";
const url = "http://www.sardar.com";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <About />
        <Photo />
        <Test />
      </div>
    </div>
  );
}

export default App;
