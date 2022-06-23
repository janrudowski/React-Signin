import React, { useState } from 'react';
function Form(props) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    showPassword: false,
    date: '',
    gender: 'male',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  function togglePassword() {
    setFormData((prevForm) => {
      return {
        ...prevForm,
        showPassword: !prevForm.showPassword,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.signIn(formData);
  }
  return (
    <main>
      <h1 className='header'>Getting Started</h1>
      <h3 className='title'>
        Create an account to continue and connect with the people.
      </h3>
      <div className='form-container'>
        <div className='buttons-container'>
          <button className='loginwith-button'>
            <img className='icon' src='/images/google-icon.svg' alt='google' />
            Log in with Google
          </button>
          <button className='loginwith-button'>
            <img className='icon' src='/images/apple-icon.svg' alt='apple' />
            Log in with Apple
          </button>
        </div>
        <fieldset className='or-fieldset'>
          <legend>
            <span>OR</span>
          </legend>
        </fieldset>

        <form className='login-form' onSubmit={handleSubmit}>
          <div className='input-container'>
            <img className='icon' src='/images/at.svg' alt='email' />
            <input
              onChange={handleChange}
              value={formData.email}
              name='email'
              type='text'
              placeholder='Your Email'
            />
          </div>

          <div className='input-container'>
            <img className='icon' src='/images/smile.svg' alt='smile' />
            <input
              onChange={handleChange}
              value={formData.name}
              name='name'
              type='text'
              placeholder='Your Name'
            />
          </div>

          <div className='input-container'>
            <img className='icon' src='/images/lock.svg' alt='lock' />
            <input
              onChange={handleChange}
              value={formData.password}
              className='password'
              name='password'
              type={formData.showPassword ? 'text' : 'password'}
              placeholder='Create Password'
            />
            <img
              onClick={togglePassword}
              className='icon show-password'
              src='/images/eye.svg'
              alt='eye'
            />
          </div>

          <div className='side-by-side'>
            <div className='input-container'>
              <img className='icon' src='/images/calendar.svg' alt='calendar' />
              <input
                value={formData.date}
                onChange={handleChange}
                name='date'
                type='text'
                placeholder='Date of birth'
              />
            </div>

            <div className='input-container'>
              <img className='icon' src='/images/male.svg' alt='male' />
              <input
                id='male'
                type='radio'
                name='gender'
                value='male'
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              <label htmlFor='male'>Male</label>
              <input
                id='female'
                type='radio'
                name='gender'
                value='female'
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              <label htmlFor='female'>Female</label>
            </div>
          </div>
          <button className='submit'>Sign Up</button>
        </form>

        <div className='footer'>
          <span className='footer-text'>Already have an account?</span>
          <span className='footer-text blue'>Sign In</span>
        </div>
      </div>
    </main>
  );
}

export default Form;
