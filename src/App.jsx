import { FruitsBasket } from './components/FruitsBasket/FruitsBasket';
import { ToastContainer } from 'react-toastify';
import { AppContextProvider } from './App.context';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppContextProvider>
      <ToastContainer />
      <FruitsBasket />
    </AppContextProvider>
  );
}

export default App;
