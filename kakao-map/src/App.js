
   
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import KakaoMap from './Pages/KakaoMap';

function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<KakaoMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;