import React from 'react'
import { Container, Header, Divider, Image, Grid, Segment } from 'semantic-ui-react'

const inlineText = <div >
  <Header textAlign='center' style={{ fontSize: '30px', textShadow: '1px 1px #000000', color: '#ffffff'}}>
    <Header.Content>
    Nou te rourou <br/>
    Naku te rourou <br/>
    kia ora ai te iwi
    </Header.Content>
  </Header>
  <Divider inverted />
  <Header textAlign='center' style={{ fontSize: '30px', textShadow: '1px 1px #000000', color: '#ffffff' }}>
    <Header.Content>
      With your food basket  <br/>
      and my food basket <br/>
      the people will thrive test
    </Header.Content>
  </Header>
</div>

const Home = () => {
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
  return (
  <>
  <Container
    style={{ width: '100%',
      marginTop: 60
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
        // backgroundImage: `url(${'images/placeholder.jpg'})`,
        // backgroundImage: `url(${'images/tomatoes.jpg'})`,
        // backgroundImage: `url(${'images/hands.jpg'})`,
        // backgroundImage: `url(${'images/handHearts.jpg'})`,
        backgroundImage: `url(${'images/waitangi.jpg'})`,
        backgroundSize: 'cover',
        paddingLeft: 500,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {inlineText}
    </Image>
  </Container>

  <Divider inverted />

  <Header style={centerStyle} size='huge'> Getting started </Header>

  <Divider inverted />

    <Grid colums='equal' style={centerStyle}>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
        Mahi
        </Header>
        <Segment attached size='huge' textAlign='center'>
        Create a mahi to share with your community and select a mahi to help out
        </Segment>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
        Community
        </Header>
        <Segment attached size='huge' textAlign='center'>
        Contribute to the community by helping complete mahi
        </Segment>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
        Exchange
        </Header>
        <Segment attached size='huge' textAlign='center'>
        Once mahi has been completed you exchange Wa/time with
        </Segment>
      </Grid.Column>
    </Grid>

  </>

  )
}

export default Home
