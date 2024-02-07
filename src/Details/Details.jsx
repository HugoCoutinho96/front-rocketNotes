import { Container, Links } from "./Details"
import { Header } from "../components/Header"
import { Button } from "../components/Button"
import { Section } from "../components/Section"
import { Tags } from "../components/Tags"

export function Details(){
  return (
    <Container>
      <Header/>

      <Section title="Links úteis">
          <Links>
            <li><a href="#">https://rocketseat.com.br/</a></li>
            <li><a href="#">https://rocketseat.com.br/</a></li>
          </Links>
      </Section>

      <Section title="Marcadores">
          <Tags title="React" />
          <Tags title="Express" />
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}