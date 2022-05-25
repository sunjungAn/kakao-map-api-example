
   
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './Header';
import KakaoMap from './Pages/KakaoMap';

function App() {
  
  return (
    <div className='App'>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<KakaoMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;