import React from 'react'
import { Container, Header, Divider, Image, Grid, Segment } from 'semantic-ui-react'

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

const Home = () => {
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap' }
  return (
  <>
  <Container
    style={{ width: '100%',
      marginTop: 75
    }}
  >
    <Image
      bordered
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
<Header style={centerStyle} size='huge'> What to do? </Header>

    <Grid colums='equal' style={centerStyle}>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Header as='h3' attached='top' >
            This is the top
        </Header>
        <Segment attached>
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        </Segment>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Header as='h3' attached='top' >
This is the top
        </Header>
        <Segment attached>
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
        </Segment>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Header as='h3' attached='top' >
This is the top
        </Header>
        <Segment attached>
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
        </Segment>
      </Grid.Column>
    </Grid>

  </>

  )
}


export default Home
