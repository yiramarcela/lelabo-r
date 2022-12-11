import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Alaune } from "./components/Alaune";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { Expo } from "./components/Expo";
import "./App.css";
import { Submenu } from "./components/Submenu";
import { Nosmembers } from "./components/Nosmembers";
import { Information } from "./components/Information";
import Lesalon from "./components/Lesalon";
import { Crudarticle } from "./components/Crudarticle";
import Devenir from "./components/Devenir";
import { Bg } from "./components/Bg";
import useListBase from "./hooks/useListBase";
import { TABLE_NAME, viewType } from "./api/config";
import { Footer } from "./components/Footer";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const aboutUsData = useListBase(TABLE_NAME.information);
  const baseArticles = useListBase(TABLE_NAME.articles, viewType.edv);

  const toggleMenu = () => setIsOpenMenu(prev => !prev);
  const filterInformationPage = field => aboutUsData.filter(data => data.Name === field)[0];

  return (
    <Router>
      <Bg />
      <div className='App'>
        <Navbar toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
        <Menu
          baseArticles={baseArticles}
          toggleMenu={toggleMenu}
          isOpenMenu={isOpenMenu}
        />
        <Routes>
          <Route
            exact
            path='/submenu'
            element={<Submenu isOpenMenu={isOpenMenu} />}
          />
          <Route
            exact
            path='/'
            element={
              <Alaune
                baseArticles={baseArticles}
                isOpenMenu={isOpenMenu} />
            }
          />
          <Route
            exact
            path='/lesalon'
            element={
              <Lesalon
                isOpenMenu={isOpenMenu}
                baseArticles={baseArticles}
                aboutUsData={aboutUsData}
                filterInformationPage={filterInformationPage}
              />
            }
          />
          <Route
            exact
            path='/Auprogramme'
            element={<Expo isOpenMenu={isOpenMenu} />}
          />
          <Route
            exact
            path='/services'
            element={
              <Lesalon
                isOpenMenu={isOpenMenu}
                baseArticles={baseArticles}
                aboutUsData={aboutUsData}
                filterInformationPage={filterInformationPage}
              />
            }
          />
          <Route
            exact
            path='/Lacommunautee/nos'
            element={<Nosmembers isOpenMenu={isOpenMenu} showArtists />}
          />
          <Route
            path='/Apropos'
            element={<Information isOpenMenu={isOpenMenu} />}
          />
          <Route
            path='/Apropos/equipe'
            element={<Nosmembers isOpenMenu={isOpenMenu} />}
          />
          <Route
            path='/Apropos/contact'
            element={
              <Information
                isOpenMenu={isOpenMenu}
                data={aboutUsData}
                filterData={filterInformationPage}
                pageKey='Contact'
              />
            }
          />
          <Route
            path='/Apropos/dons'
            element={
              <Information
                isOpenMenu={isOpenMenu}
                data={aboutUsData}
                filterData={filterInformationPage}
                pageKey='Dons'
              />
            }
          />
          <Route
            path='/Apropos/history'
            element={
              <Information
                isOpenMenu={isOpenMenu}
                data={aboutUsData}
                filterData={filterInformationPage}
                pageKey='Histoire'
              />
            }
          />
          <Route
            path='/Apropos/mission'
            element={
              <Information
                isOpenMenu={isOpenMenu}
                data={aboutUsData}
                filterData={filterInformationPage}
                pageKey='Mission'
              />
            }
          />
          <Route
            path='/newarticle'
            element={<Crudarticle isOpenMenu={isOpenMenu} />}
          />
          <Route
            path='/lacommunautee'
            element={
              <Lesalon
                isOpenMenu={isOpenMenu}
                baseArticles={baseArticles}
                aboutUsData={aboutUsData}
                filterInformationPage={filterInformationPage}
              />
            }
          />
          <Route
            path='/lacommunautee/devenir'
            element={
              <Devenir
                isOpenMenu={isOpenMenu}
                data={aboutUsData}
                filterData={filterInformationPage}
                pageKey='Devenir membre'
              />
            }
          />
          <Route
            path='/ressources'
            element={
              <Lesalon
                isOpenMenu={isOpenMenu}
                baseArticles={baseArticles}
                aboutUsData={aboutUsData}
                filterInformationPage={filterInformationPage}
              />
            }
          />
          <Route
            path='/presse'
            element={
              <Lesalon
                isOpenMenu={isOpenMenu}
                baseArticles={baseArticles}
                aboutUsData={aboutUsData}
                filterInformationPage={filterInformationPage}
              />
            }
          />
        </Routes>
      </div>

      <script src='./data/ATmembres.js'> </script>

      <Footer aboutUsData={aboutUsData} filterData={filterInformationPage} />
    </Router>
  );
}

export { App };
