import Form from './formComponents/form';
import { FormProvider } from './context/FormContext';
import './App.css';

function App() {
  return (
    <>
     <FormProvider>
       <Form/>
     </FormProvider>
    
    </>
  );
}

export default App;
