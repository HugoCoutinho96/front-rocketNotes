import { useState } from "react";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section" 
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";


export function New(){

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

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

    function handleRemoveLink(deleted, e){
        e.preventDefault()
        setLinks(prevState => prevState.filter(link => link != deleted))
    }

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Titulo" />
                    <Textarea placeholder="Observações"/>

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
                            <NoteItem value="react"/>
                            <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}