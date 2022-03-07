import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "./components/Home.js";
// import Contact from "./components/Contact.js";
import Projects from "./components/Projects.js";
import NavBar from "./components/NavBar.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
        <Switch>
          {/* Home = About Me */}
          <Route path='/' exact element={<Home/>} />
          <Route path='/Projects' element={<Projects/>} />
          {/* <Route path='/Contact' element={<Contact/>} /> */}
        </Switch>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;
