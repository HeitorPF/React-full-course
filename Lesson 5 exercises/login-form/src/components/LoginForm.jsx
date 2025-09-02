import { useState } from "react"
import './LoginForm.css'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  function toggleShowPassword() {
    showPassword ? setShowPassword(false) : setShowPassword(true)
  }

  return (
    <div className="form-container">
      <div>
        <div>
          <input className="email-input" placeholder="Email"/>
        </div>
        <div>
          <input className="senha-input" placeholder="Password" type={showPassword ? 'Text' : 'Password'}/>
          <button className="botao-mostrar-senha" onClick={toggleShowPassword}>Show</button>
        </div>
        
      </div>

      <div>
        <button className="botao-login">Login</button>
        <button className="botao-sign-up">Sign up</button>
      </div>
    </ div>
  )
}