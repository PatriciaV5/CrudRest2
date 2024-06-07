// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './funcionario.css';

const Funcionario = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))  
    };

  return (
    <div className="app-container">
      <div className="form-group">
        <label>Código</label>
        <input type="text" placeholder="Seu Nome"  {...register ("codigo")} /> 
      </div>

      <div className="form-group">
        <label>Departamento</label>
        <input type="text" placeholder="Seu Departamento"  {...register ("departamento")} />
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input type="password" placeholder="Sua Senha"  {...register ("senha")} /> 
      </div>

      <div className="form-group">
            
            <button onClick={() =>handleSubmit(onSubmit)()}>Criar Conta</button>
      </div>

    </div>
  )

}

export default Funcionario;