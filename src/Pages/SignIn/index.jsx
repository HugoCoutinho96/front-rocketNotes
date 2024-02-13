import { Container, Form, Background } from "./styles";
import {FiMail, FiLock} from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Note</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Faça seu login</h2>

                <Input type="text" icon={FiMail} placeholder="Email"/>
                <Input type="password" icon={FiLock} placeholder="Senha"/>

                <Button title="Entrar" />

                <a href="#">Criar Conta</a>
            </Form>
            <Background/>
        </Container>
    )
}