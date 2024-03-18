import {Container, Brand, Menu, Search, Content, NewNote} from "./styles"
import { FiPlus, FiSearch } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { useState, useEffect } from "react"
import { api } from "../../services"

export function Home(){

    const [tags, setTags] = useState([])

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags()
    }, [])

    return(
        <Container>
            <Brand><h1>Rocketnotes</h1></Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isActive /></li>
                {
                    tags && tags.map( tags => (
                        <li key={tags.id}>
                            <ButtonText title={tags.name} />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: "React", 
                        tags: [
                        {   id: '1', name: "React" },
                        {   id: '2', name: "Express"}
                    ]
                }}
                    />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>
    )
}