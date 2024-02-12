import {Container, Brand, Menu, Search, Content, NewNote} from "./styles"
import { FiPlus, FiSearch } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"

export function Home(){
    return(
        <Container>
            <Brand><h1>Rocketnotes</h1></Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isActive /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="NodeJs" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>

            </Content>

            <NewNote>
                <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>
    )
}