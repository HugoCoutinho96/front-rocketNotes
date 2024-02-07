import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from "react-icons/ri"

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/hugocoutinho96.png" alt="foto do usuário" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Hugo Coutinho</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}