import { Container, Form, Background } from "./styles";
import {FiMail, FiLock} from "react-icons/fi"
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/Auth";

export function SignIn(){
    const data = useAuth()
    console.log(data)
    return(
        <Container>
            <Form>
                <h1>Rocket Note</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Faça seu login</h2>

                <Input type="text" icon={FiMail} placeholder="Email"/>
                <Input type="password" icon={FiLock} placeholder="Senha"/>

                <Button title="Entrar" />

                <Link to="/register">Criar Conta</Link>
            </Form>
            <Background/>
        </Container>
    )
}