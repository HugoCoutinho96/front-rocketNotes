import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react"; 
import { useAuth } from "../../hooks/Auth";

export function Profile(){

    const {updateProfile, user} = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    async function handleUpdate(){
        const user = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword,
        }

        await updateProfile({user})
    }

    return(
        <Container>
            <header>
                <Link to="/"><FiArrowLeft/></Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/hugocoutinho96.png" alt="foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" id="avatar"/>
                    </label>
                </Avatar>

                <Input icon={FiUser} type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
                <Input icon={FiMail} type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <Input icon={FiLock} type="password" placeholder="Senha atual" onChange={e => setOldPassword(e.target.value)}/>
                <Input icon={FiLock} type="password" placeholder="Nova senha" onChange={e => setNewPassword(e.target.value)}/>

                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}