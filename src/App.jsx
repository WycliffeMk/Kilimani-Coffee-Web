import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Menu from "./components/Menu"
import Review from "./components/Review"
import Product from "./components/Products"
import Footer from "./components/Footer"

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
        <div id="products">
          <Product/>
        </div>
        <div id="review">
          <Review />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
