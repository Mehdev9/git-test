import { BrowserRouter, Route, Routes  } from "react-router-dom";
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import Navbar from './components/Navbar';
import FavView from "./views/FavView";

const App = () => {
  return (
    <BrowserRouter>
<Navbar/>


      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about/:id" element={<AboutView />} />
        <Route path="/favoris" element={<FavView />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;