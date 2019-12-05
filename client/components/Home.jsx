import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const inlineText = <h1 style={{
  textAlign: 'center',
  fontSize: '75px',
  verticalAlign: 'middle',
  margin: '50%',
  width: }}>
    Naku te rourou <br/>
      Nau te rourou <br/>
      ka ora ai te iwi
</h1>

const Home = () => (
  // image
  <>
<Container
  style={{ width: '100%', marginTop: 75 }}
>
  <Header
    as='h1'
    inverted
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
      verticalAlign: 'middle'
    }}
  >
    {inlineText}
  </Header>
</Container>
  </>
)

export default Home
