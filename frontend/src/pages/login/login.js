import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import './login.css'

export default function Login() {
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      window.location.href = '/'
    }
  }, [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [_, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()

  function handlelogin(e) {
    e.preventDefault()

    axios.post("http://localhost:3001/Login", { email, password })
      .then((result) => {
        const userLogin = result.data;
        if (userLogin.message !== "Login Failed") {
          console.log("Login successful");
          setCookies("access_token", userLogin.token)
          window.localStorage.setItem("userInfo", JSON.stringify(userLogin.user))
          navigate('/');
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((err) => {
        alert("Couldn't login");
      });
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handlelogin}>
          <input required type="text" placeholder='name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
          <input required type="email" placeholder='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input required type="password" placeholder='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' className='btn login-btn'>Login</button>
          <p>Don't have an Account? <Link to='/Register'>Register</Link></p>
        </form>
      </div>
    </div>
  )
}
