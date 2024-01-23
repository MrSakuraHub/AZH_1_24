import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import SignUp from './pages/SignUp';
import Wallet from './pages/Wallet';
import { FormProvider } from './context/FormContext';
import Form from './formComponents/form';

function App() {
  return (
    <FormProvider>
      <Form/>
    </FormProvider>
  );
}

export default App;
