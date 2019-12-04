import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const Home = () => (
  // image
  <>
<Container>
  <Header
    as='h1'
    inverted
    style={{
      width: 1024,
      height: 320,
      display: 'inline-block',
      opacity: 0.5,
      backgroundImage: `url(${'images/placeholder.jpg'})`,
      backgroundSize: 'cover',
      fontWeight: 'normal',
      marginBottom: 0
    }}
  >
       Yooza
  </Header>
</Container>
  </>
)

export default Home

{ /* <div>
    <h1>
      Naku te rourou <br/>
      nau te rourou <br/>
      ka ora ai te iwi
    </h1>
  </div> */ }
