import { useState } from "react";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section" 
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";


export function New(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()
    
    function handleBack(){
        navigate(-1)
      }

    function handleAddLink(e){
        e.preventDefault()
        const link = newLink.trim()

        if(link === "")
         alert("Digite um link!")
        else{
            setLinks(prevState => [...prevState, link])
            setNewLink("")
        }
    }

    function handleAddTag(e){
        e.preventDefault()
        const tag = newTag.trim()

        if(tag === "")
         alert("Digite uma tag!")
        else{
            setTags(prevState => [...prevState, tag])
            setNewTag("")
        }
    }

    function handleRemoveLink(deleted, e){
        e.preventDefault()
        setLinks(prevState => prevState.filter(link => link != deleted))
    }

    function handleRemoveTag(deleted, e){
        e.preventDefault()
        setTags(prevState => prevState.filter(tag => tag != deleted))
    }

    async function handleNewNote(){
        if(!title) return alert("Digite o titulo da nota")
        if(!description) return alert("Digite a descrição da nota")
        if(links.length == 0) return alert("Coloque pelo menos um link na nota")
        if(tags.length == 0) return alert("Coloque pelo menos uma tag na nota")
        if(newLink) return alert("Você deixou um link para adicionar. Clique no simbolo de adicionar.")
        if(newTag) return alert("Você deixou uma tag para adicionar. Clique no simbolo de adicionar.")

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })

        alert("Nota criada com sucesso!")
        navigate("/")
    }

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText title="Voltar" onClick={handleBack}/>
                    </header>

                    <Input placeholder="Titulo" onChange={e => setTitle(e.target.value)}/>
                    <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)}/>

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={(e) => {handleRemoveLink(link,e)}}
                                />
                            ))
                        }
                        <NoteItem 
                            isNew
                            placeholder="Novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={e => handleRemoveTag(tag, e)}
                                    />
                                ))
                            }
                            <NoteItem 
                                isNew 
                                placeholder="Nova tag"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button title="Salvar" onClick={handleNewNote}/>
                </Form>
            </main>
        </Container>
    )
}