
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useContextGlobal } from "./Components/utils/global.context";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound";


function App() {
  const {themeState} = useContextGlobal()
  const clase = 'App, ' + themeState.clase
  return (
      <div className= {clase}>
          <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='/dentist/:id' element={<Detail/>}/>
          <Route path='*' element={<NotFound/>}/>

        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
