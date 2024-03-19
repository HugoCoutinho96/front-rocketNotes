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
    const [tagsSelected, setTagsSelected] = useState([])
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])

    function handleTagsSelected(tagName){
        const alreadySelected = tagsSelected.includes(tagName)
        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tags => tags != tagName)
            setTagsSelected(filteredTags)
        }else{
            setTagsSelected(prevState => [...prevState, tagName])
        }
    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags()
    }, [])

    useEffect(() => {
        async function fetchNotes(){
            try{
                const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
                setNotes(response.data)
            }catch(error){
                console.log(error)
            }
        }

        fetchNotes()
    }, [search, tagsSelected])

    return(
        <Container>
            <Brand><h1>Rocketnotes</h1></Brand>

            <Header/>

            <Menu>
                <li>
                    <ButtonText 
                        title="Todos" 
                        $isActive={tagsSelected.length === 0}
                        onClick={() => setTagsSelected([])} 
                    />
                </li>
                {
                    tags && tags.map( tags => (
                        <li key={tags.id}>
                            <ButtonText 
                                title={tags.name}
                                onClick={() => handleTagsSelected(tags.name)}
                                $isActive={tagsSelected.includes(tags.name)} 
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo título" 
                    icon={FiSearch}
                    onChange={e => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    {
                        notes && notes.map(note => (
                            <Note
                                key={String(note.id)} 
                                data={note}
                            />
                        ))
                    }
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>
    )
}