import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Menu from "./components/Menu"

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div id="home">
          <Home/>
        </div>
        <div id="menu">
          <Menu/>
        </div>
        <div id="about">
          <About/>
        </div>
      </main>
    </div>
  )
}

export default App
