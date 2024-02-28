import { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./App.css"

function App() {
  const [input, setInput] = useState(false);
  const {register, handleSubmit, formState: { errors }} = useForm();
  const submitButton = (userInfro) => {
    console.log(userInfro)
    setInput(true);
  }
  
  return (
    <div className='flex'>
      <div className='child'>
      <div style={{backgroundColor: "green" , textAlign: 'center' , fontSize: "2rem", marginBottom:'20px'}}>{input == true ? 'Registration Successfull' : ''}</div>
      <form onSubmit={handleSubmit(submitButton)}>

        <div>
          <input 
          type="text" 
          placeholder="First Name" {...register('firstName', {
          required: "Do not keep input empty",})}/>
          
          <div style={{ color: 'red' }}>
            {errors.firstName ? errors.firstName.message : null}
          </div>
        </div>

        <div>
          <input type="text" placeholder="Last Name" {...register('lastName', {
          required: 'Do not keep input empty', })}/>

          <div style={{ color: 'red' }}>
            {errors.lastName ? errors.lastName.message : null}
          </div>
        </div>

        <div>
          <input type="email" placeholder="Email" {...register('email', { required: true,
          validate: (value) => {
          if (value.includes('@')) {
            return true;
          }
            return 'Invalid Email';
          },})}/>

          <div style={{ color: 'red' }}>
            {errors.email ? errors.email.message : null}
          </div>

        </div>
        <div>
          <input type="password" placeholder="Password" {...register('password', {required: true,
              minLength: {
                value: 5,
                message: 'Password must be more than 4 characters',
              },
              maxLength: {
                value: 20,
                message: 'Password cannot be more than 20 characters',
              },
            })}
          />

          <div style={{ color: 'red' }}>
            {errors.password ? errors.password.message : null}
          </div>

        </div>
        <input style={{backgroundColor:'green', border:'none', padding:'5px'}} type="submit" value={'Register'} />
      </form>
      </div>
    </div>
  );
}

export default App;