import React from 'react'
import { Container, Header, Divider, Image } from 'semantic-ui-react'

const inlineText = <div>
  <Header as='h1' textAlign='center'>
    <Header.Content>
    Nou te rourou <br/>
    Naku te rourou <br/>
    kia ora ai te iwi
    </Header.Content>
  </Header>
  <Divider inverted />
  <Header as='h1' textAlign='center'>
    <Header.Content>
      With your food basket  <br/>
      and my food basket <br/>
      the people will thrive
    </Header.Content>
  </Header>
</div>

const Home = () => (
  <>
  <Container
    style={{ width: '100%',
      marginTop: 75
    }}
  >
    <Image
      style={{
        poistion: 'absolute',
        width: '100%',
        height: 720,
        margin: 0,
        padding: 0,
        opacity: 0.5,
        backgroundImage: `url(${'images/placeholder.jpg'})`,
        backgroundSize: 'cover',
        fontWeight: 'normal',
        marginBottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {inlineText}
    </Image>
  </Container>

  </>

)

export default Home
