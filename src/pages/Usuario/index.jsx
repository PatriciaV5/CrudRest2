// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import { useState } from "react";
import api from "../../services/api";

const Usuario= () => {
  const[vnome,setNome] = useState('');
  const[vdescricao,setDescricao] = useState('');
  const[vpreco,setPreco] = useState('');


const handleSubmit = async () => {

  try{
    //const response = await api.post('Jack/InserirUsuarioFieb', {nome: nome, email: email, senha: senha, serie: null})
    const response = await api.post("/produtos", {nome: vnome, descricao: vdescricao, preco: vpreco})
    console.log(response.data)
  }catch(error) {
    console.log(error)
  }
}
  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input type="text" placeholder="Informe o Nome do Produto"  onChange={(e) => setNome(e.target.value)}/> 
      </div>

      <div className="form-group">
        <label>Descrição</label>
        <input type="text" placeholder="Descrição do Produto"  onChange={(e) => setDescricao(e.target.value)} /> 
      </div>

      <div className="form-group">
        <label>Preço</label>
        <input type="text" placeholder="Informe o Preço do Produto "  onChange={(e) => setPreco(e.target.value)} /> 
      </div>

      <div className="form-group">
            
            <button onClick={handleSubmit}>Cadastrar</button>
      </div>

    </div>
  )

  }

export default Usuario;