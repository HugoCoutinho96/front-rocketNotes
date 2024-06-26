import { Container, Links, Content } from "./Details"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tags } from "../../components/Tags"
import { ButtonText } from "../../components/ButtonText"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services"

export function Details(){

  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja excluir a nota?")

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNotes()
  },[])
  return (
    <Container>
      <Header/>
      {
        data &&
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove} />
            <h1>{data.title}</h1>

            <p>
              {data.description}
            </p>

            {data.links &&
            <Section title="Links úteis">
                <Links>
                  {data.links.map(link => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="blank">{link.url}</a>
                    </li>
                  ))}
                </Links>
            </Section>}
            
            {data.tags &&
            <Section title="Marcadores">
              <div>
                {data.tags.map(tag => (
                  <Tags key={tag.id} title={tag.name} />
                ))}
              </div>
            </Section>}

            <Button title="Voltar" onClick={handleBack}/>
          </Content>
        </main>

      }
    </Container>
  )
}