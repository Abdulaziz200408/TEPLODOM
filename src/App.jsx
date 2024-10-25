import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import Cart from "./Pages/Cart";
import Profil from "./Pages/Profil";
import Login from "./Pages/Login";
import AcsiyaTovar from "./Pages/AcsiyaTovar";
import New from "./Pages/New";
import Dastavka from "./Pages/Dastavka";
import Vozvrat from "./Pages/Vozvrat";
import Contact from "./Pages/Contact";
import Rootlayout from "./Pages/Rootlayout";
import Menu from "./Pages/Menu/Menu";
import Allcard from "./Pages/Allcard";
import PopulyarCard from "./Pages/Menu/PopulyarCard";
import AllCategory from "./Pages/AllCategory";
import AllpopulyarCard from "./Pages/AllpopulyarCard";
import Details from "./Pages/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route path="/" element={<Menu />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profil" element={<Profil />} />
          <Route path="login" element={<Login />} />
          <Route path="acsiya" element={<AcsiyaTovar />} />
          <Route path="new" element={<New />} />
          <Route path="dastavka" element={<Dastavka />} />
          <Route path="vozvrat" element={<Vozvrat />} />
          <Route path="contact" element={<Contact />} />
          <Route path="allcetory" element={<AllCategory />} />
          <Route path="allcard" element={<Allcard />} />
          <Route path="PopulyarCard" element={<PopulyarCard />} />
          <Route path="allPopulyarCard" element={<AllpopulyarCard />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
