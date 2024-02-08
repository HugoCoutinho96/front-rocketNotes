import { Container, Links, Content } from "./Details"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tags } from "../../components/Tags"
import { ButtonText } from "../../components/ButtonText"

export function Details(){
  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Minima quam impedit, vel natus laborum et autem assumenda,
            doloremque debitis unde harum quas animi? Fugit laudantium
            magni excepturi rerum ex magnam?
          </p>

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
        </Content>
      </main>
    </Container>
  )
}