import React from 'react';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import SigninScreen from './screens/SigninScreen'
import './css/navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'
import './css/body.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel CSS

import PartnerScreen from './screens/PartnerScreen'
import Beijing from './screens/Alumni/Beijing.js'
import Shanghai from './screens/Alumni/Shanghai.js'
import Hongkong from './screens/Alumni/Hongkong.js'
import Guangzhou from './screens/Alumni/Guangzhou.js'
import Shenzhen from './screens/Alumni/Shenzhen.js'
import Alumni from './screens/Alumni/Alumni.js'

import PrivateRoute from './auth/PrivateRoute';
import AdminPage from './screens/AdminPage.js';
import { useSelector } from 'react-redux';
import {AuthProvider} from './auth/AuthContext.js'
import SocialAdvisorScreen from './screens/SocialAdvisorScreen'
import AboutUsScreen from './screens/AboutUsScreen'
import IntroduceScreen from './screens/IntroduceScreen'
import ResearchDirectionsScreen from './screens/ResearchDirectionsScreen'
import TradingCompetition from './screens/TradingCompetitionScreen.js';
import SignUp from './screens/SignUp/SignUp.js';

import './css/App.scss';
import './css/PartnerScreen.scss';
import './css/Alumni/HongKong.scss';
import './css/Alumni/Guangzhou.scss';
import './css/Alumni/Beijing.scss';
import './css/Alumni/Shanghai.scss';
import './css/Alumni/Shenzhen.scss';

import { useMediaQuery } from 'react-responsive';

function AppContent() {
  // 定义屏幕宽度是否小于1400px的媒体查询
  const isLessThan1400px = useMediaQuery({ query: '(max-width: 1399px)' });
  const location = useLocation();

  // 根据屏幕宽度和路径设置 paddingTop
  // 首页：导航栏高度（大屏130px，小屏110px）
  // 其他页面：更大的padding（大屏144px，小屏75px）
  let paddingTop;
  if (location.pathname === '/') {
    paddingTop = isLessThan1400px ? '110px' : '130px';
  } else {
    paddingTop = isLessThan1400px ? '75px' : '144px';
  }

  return (
    <AuthProvider>
      <div className="app-container">

        <Navbar></Navbar>
        <main className="main-content" style={{ paddingTop }}>
          <Routes>
            <Route path = "/" element={<HomeScreen/>}></Route>
            <Route path = "/signin" element={<SigninScreen/>}></Route>
            <Route path = "/partner" element={<PartnerScreen/>}></Route>
            <Route path = "/SocialAdvisor" element={<SocialAdvisorScreen/>}></Route>
            <Route path = "/AboutUs" element={<AboutUsScreen/>}></Route>
            <Route path = "/ResearchDirections" element={<ResearchDirectionsScreen/>}></Route>
            <Route path = "/TradingCompetition" element={<TradingCompetition/>}></Route>
            <Route path="/TradingCompetition/sign-up" element={<SignUp />} />
            <Route path = "/Introduce" element={<IntroduceScreen/>}></Route>
            <Route path="/Alumni" element={<Alumni />}>
              <Route path = "/Alumni/Beijing" element={<Beijing></Beijing>}></Route>
              <Route path = "/Alumni/Hongkong" element={<Hongkong></Hongkong>}></Route>
              <Route path = "/Alumni/Shanghai" element={<Shanghai></Shanghai>}></Route>
              <Route path = "/Alumni/Guangzhou" element={<Guangzhou></Guangzhou>}></Route>
              <Route path = "/Alumni/Shenzhen" element={<Shenzhen></Shenzhen>}></Route>
            </Route>
            <Route path="/adminPage" element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            } />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </AuthProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
