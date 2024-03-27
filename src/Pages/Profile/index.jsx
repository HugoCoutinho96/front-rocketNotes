import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import avatarPlaceholder from "../../assets/avatarPlaceholder.png"
import { api } from "../../services";

export function Profile(){

    const {updateProfile, user} = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()
    
    function handleBack(){
        navigate(-1)
      }
 
    async function handleUpdate(){

        const updated = {
            name,
            email,
            password: newPassword,
            oldPassword
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({user: userUpdated, avatarFile})
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return(
        <Container>
            <header>
                <button onClick={handleBack}>
                    <FiArrowLeft/>
                </button>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" id="avatar" onChange={handleChangeAvatar}/>
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