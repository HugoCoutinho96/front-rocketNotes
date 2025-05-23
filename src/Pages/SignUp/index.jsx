import { Container, Form, Background } from "./styles";
import {FiMail, FiLock, FiUser} from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services"


export function SignUp(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
      }
 
    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!")
        }

        api.post("/users", {name, email, password})
            .then(() => {
                alert("Usuário cadastrado com sucesso!")
                navigate("/")
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message)
                }else{
                    alert("Não foi possível cadastrar")
                }
            })
    }

    return(
        <Container>
            <Background/>
            <Form>
                <h1>Text Note</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Crie sua conta</h2>

                <Input type="text" icon={FiUser} placeholder="Nome" onChange={e => setName(e.target.value)}/>
                <Input type="text" icon={FiMail} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                <Input type="password" icon={FiLock} placeholder="Senha" onChange={e => setPassword(e.target.value)}/>

                <Button title="Cadastrar" onClick={handleSignUp}/>

                <ButtonText title="Voltar para o login" onClick={handleBack}/>
            </Form>
        </Container>
    )
}