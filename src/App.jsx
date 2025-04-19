import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import MainBody from './components/MainBody';
import Sidebar from './components/Sidebar';



function App() {

  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <MainBody/>
      </div>
     
      <Footer />
    </>
  )
}

export default App
