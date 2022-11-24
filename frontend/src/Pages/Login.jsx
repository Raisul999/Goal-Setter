import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify'
import {reset, login} from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    
  })

  const { email, password} = formData;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, isLoading, isSuccess, isError, message} = useSelector((state)=>state.auth)

  useEffect(()=>{
    if(isError){
      toast.success(message)
    }
    if(isSuccess||user){
      navigate('/')
    }

    dispatch(reset())

  },[user, isSuccess, isError, message, dispatch, navigate])
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {

    e.preventDefault();

    const userData = {
      email,
      password
    }

    dispatch(login(userData))

  }

  if(isLoading){
    return <Spinner />
  }

  return (
    <div>

      <section className="heading">
        <h1>
          <FaSignInAlt/> Login 
        </h1>
        <p>Please enter your credentials</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>

          <div className="form-group">
            <input type="email" className="formcontrol" id="email" name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input type="password" className="formcontrol" id="password" name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block" >
                Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login;