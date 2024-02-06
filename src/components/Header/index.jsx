import { Container, Profile } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/hugocoutinho96.png" alt="foto do usuário" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Rodrigo Gonçalves</strong>
                </div>
            </Profile>
        </Container>
    )
}