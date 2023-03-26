import { Routes , Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
