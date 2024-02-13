import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";

export function Profile(){
    return(
        <Container>
            <header>
                <a href="#"><FiArrowLeft/></a>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/hugocoutinho96.png" alt="foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" id="avatar"/>
                    </label>
                </Avatar>

                <Input icon={FiUser} type="text" placeholder="Nome"/>
                <Input icon={FiMail} type="text" placeholder="Email"/>
                <Input icon={FiLock} type="text" placeholder="Senha atual"/>
                <Input icon={FiLock} type="text" placeholder="Nova senha"/>

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}