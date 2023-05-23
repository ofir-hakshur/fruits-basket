import { FruitsBasket } from './components/FruitsBasket/FruitsBasket';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <FruitsBasket />
    </>
  );
}

export default App;
