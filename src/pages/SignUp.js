import Form from '../components/formComponents/form';
import { FormProvider } from '../context/FormContext';
import '../App.css';

function SignUp () {
  return (
  <FormProvider>
    <Form/>
  </FormProvider>
  )
}

export default SignUp;