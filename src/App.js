import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import AOS from 'aos';

import Politics from './components/Politics/Politics';
import Sport from './components/Sport/Sport';
import Media from './components/Media/Media';
import Economy from './components/Economy/Economy';
import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import 'aos/dist/aos.css';
import './index.scss';

function App() {
  AOS.init();
  return (
    <BrowserRouter basename="/news-portal-app">
      <div className="container">
        <Header />
        <div className="main">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/media" element={<Media />} />
            <Route path="/economy" element={<Economy />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;