import { Link, Route, Routes, useLocation } from "react-router-dom"
import Home from "./components/Home"
import Details from "./components/Details"
import Create from "./components/Create";



function App() {

  const { search, pathname } = useLocation();
  console.log(search, pathname);

  return (

    <div className=" h-screen w-screen flex relative ">

      {(pathname != "/" || search.length > 0) && <Link
        to='/'
        className="absolute top-[3%] left-[18%] font-semibold text-zinc-700"
      >
        Home
      </Link>}



      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/Details/:id" element={<Details />}></Route>
      </Routes>



    </div>


  )
}

export default App
