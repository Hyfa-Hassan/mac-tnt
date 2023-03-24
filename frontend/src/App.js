import logo from './logo.svg';
import './App.css';
import './BookingForm.css';
import { Header } from './components/Common/Header';
import { Topbar } from './components/Common/Topbar';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Common/Footer';
import { Search } from './components/Common/Search';
import { Scrolltop } from './components/Common/Scrolltop';
import { TopSidebar } from './components/Common/TopSidebar';
import { Preloader } from './components/Common/Preloader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import { HotelsPage } from './pages/HotelsPage';
import { TourPackages } from './pages/TourPackages';
import { Destination } from './pages/Destination';
import { Faq } from './pages/Faq';
import { Contact } from './pages/Contact';
import { Authentication } from './pages/Authentication';
import {Flight} from './pages/Flight';
import { SingleTour } from './components/Common/SingleTour';
import { SingleDestination } from './components/Destination/SingleDestination';
import BookForm from './components/BookingForm/BookForm';
import { Tandc } from './Tandc';
import { Privacy } from './Privacy';
function App() {

  return (
    <>
     <Topbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="about" element={<AboutPage/>}/>
      <Route path="hotels" element={<HotelsPage/>}/>
      <Route path="tours" element={<TourPackages/>}/>
      <Route path="destination" element={<Destination/>}/>
      <Route path="faqs" element={<Faq/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='authentication' element={<Authentication/>}/>
      <Route path='flight' element={<Flight/>}/>
      <Route path='details' element={<SingleTour/>}/>
      <Route path='single-destination'element={<SingleDestination/>}/>
      <Route path='enquire-form' element={<BookForm/>}/>
      <Route path='tandc' element={<Tandc/>}/>
      <Route path='privacy' element={<Privacy/>}/>
    </Routes>
    </BrowserRouter>

    <div className="App">
        {/* <!-- preloader --> */}
        <Preloader/>
        {/* <!-- .end preloader -->
        {/* <!-- Topbar --> */}
       
        {/* <!-- Topbar -->
        <!-- Navbar --> */}
        <Header/>
        {/* <!-- Navbar -->*/}
        
        <Footer/>
        {/* <!-- Footer -->
      
        {/* <!-- Top Sidebar -->*/}
        <TopSidebar/>
        {/*<!-- Search Wrapper --> */}
        <Search/>
        {/* <!-- Search Wrapper -->
        
        {/* <!-- Top-Sidebar --> */}
        <TopSidebar/>
        {/* <!-- Top-Sidebar --> */}
        
        {/* <!-- Scroll-top --> */} 
        <Scrolltop/>
        {/* <!-- Scroll-top --> */}
        
    </div>
    </>
  );
};

export default App;
