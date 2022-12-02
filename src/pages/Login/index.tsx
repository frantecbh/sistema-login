import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const Login = () => {

  const auth = useContext(AuthContext)

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')


  const handleLogin = async() =>{

      if(email && password){
        const isLogged = await auth.signin(email, password)

        if(isLogged){
          navigate('/private')
        }else{
          alert('nao foi possível fazer login')
        }

      }




  }

  return (

    <div>
      <h2>Login</h2>
      <input 
      type="email" 
      placeholder="Informe seu Email" 
      value={email}
      onChange={e => setEmail(e.target.value) }
      />

      <input type="password" 
      placeholder="Informe sua senha" 
      value={password}
      onChange={e => setPassWord(e.target.value)}
      />

      <button onClick={handleLogin}>Logar</button>
    </div>

  );
}

export default Login;