import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import Header from './components/Header';
import Footer from './components/Footer';
import MainBody from './components/MainBody';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <>
      <Header />
      <div>
        <Sidebar />
      </div>
      <MainBody/>
      <Footer />
    </>
  )
}

  <BrowserRouter>
      <App />
  </BrowserRouter>;

export default App
