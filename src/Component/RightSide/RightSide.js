import React, { useState } from 'react';
import styles from './RightSide.module.css';
import { useNavigate } from 'react-router-dom';

const RightSide = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('false');
  const [inputs, setInputs] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    check: isChecked,
  });

  function onChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const handleCheckBox = (e) => {
    setIsChecked(!isChecked);
    onChange(e);
  }

  const handleClickSubmit = () => {
    for (const value in inputs) {
      if (inputs[value].length === 0) {
        setError('true');
        return;
      }
    }
    if (!isChecked) {
      setError('true');
      return;
    }
    setError('false');
    localStorage.setItem('userDetail', JSON.stringify(inputs));
    navigate('/super-app-1/category');
  }

  const inputList = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      errormessage: 'Invalid Name',
      required: true,
    },
    {
      name: 'username',
      type: 'text',
      placeholder: 'UserName',
      errormessage: 'Invalid Username',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errormessage: 'Invalid Email',
      required: true,
    },
    {
      name: 'mobile',
      type: 'number',
      placeholder: 'Mobile',
      errormessage: 'Invalid Mobile No.',
      pattern: '^[0-9]{10}$',
      required: true,
    }
  ];

  return (
    <div className={styles.container}>
      <h2 style={{fontSize :'3.5rem', fontFamily: 'Single Day' , color : 'green' , textAlign:'center' }} >Super App</h2>
      <p style={{fontSize:'20px',textAlign:'center'}}>Create your new account</p>
      <form>
        {inputList.map((input, index) => (
          <div key={index} className={styles.input_box}>
            <input
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={inputs[input.name]}
              onChange={onChange}
            />
            <span className={error === 'true' ? styles.error : styles.span}>
              {input.errormessage}
            </span>
          </div>
        ))}

        <div className={styles.checkBox}>
          <input
            name="check"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckBox}
            required
          />
          <label htmlFor="check" style={{marginLeft:'10px'}}>Share my registration data with Superapp</label>
        </div>
        <span className={error === 'true' && !isChecked ? styles.error : styles.span}>
          Please check this box
        </span>

        <button type="button" onClick={handleClickSubmit}>SIGN UP</button>
      </form>

      <div className={styles.term_and_conditions}>
        <p>
          By clicking on Sign up, you agree to Superapp{' '}
          <a href='/'>Terms and Conditions of Use</a>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares, and protects your
          personal data, please read Superapp{' '}
          <a href='/'>Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}

export default RightSide;
