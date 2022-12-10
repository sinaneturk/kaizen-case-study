import './App.css';
import Promotions from './pages/promotions/componnet.promotions'
import PromotionDetails from './pages/promotion-details/component.promotion-details';
import { Route, Routes } from 'react-router-dom';
import DahaWallet from './pages/daha-wallet/componnet.daha-wallet';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Promotions />} />
        <Route path="/daha-wallet" element={<DahaWallet />} />
        <Route path="/campaign/:SeoName/:Id" element={<PromotionDetails/>} />
      </Routes>
      
    </div>
    );
}

export default App;
