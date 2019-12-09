import React from 'react'
import { Container, Header, Divider, Image, Grid, Segment } from 'semantic-ui-react'

const inlineText = <div >
  <Header textAlign='center' style={{ fontSize: '30px', textShadow: '1px 1px #000000', color: '#ffffff' }}>
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
      the people will thrive
    </Header.Content>
  </Header>
</div>

const mahiText = <div>
  <Header
    textAlign='center'
    style={{
      fontSize: '30px',
      textShadow: '1px 1px #000000',
      color: '#ffffff' }}>
    <Header.Content>
taking and offering mahi
    </Header.Content>
  </Header>
</div>

const comunnityText = <div>
  <Header
    textAlign='center'
    style={{
      fontSize: '30px',
      textShadow: '1px 1px #000000',
      color: '#ffffff' }}>
    <Header.Content>
empowering communities
    </Header.Content>
  </Header>
</div>

const exchangeText = <div>
  <Header
    textAlign='center'
    style={{
      fontSize: '30px',
      textShadow: '1px 1px #000000',
      color: '#ffffff' }}>
    <Header.Content>
Using Wa/Time as a currency
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
  <Container style={{ width: '100%', marginTop: 60 }}>
    <Image
      bordered
      style={{
        poistion: 'absolute',
        width: '100%',
        height: 720,
        margin: 0,
        padding: 0,
        opacity: 0.5,
        backgroundImage: `url(${'images/waitangi.jpg'})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
      {inlineText}
    </Image>
  </Container>

  <Divider inverted />
  <Header style={centerStyle} size='huge'> Getting Started </Header>
  <Divider inverted />
    <Grid colums='equal' style={centerStyle}>
      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
        Mahi
        </Header>
        <Container attached>
          <Image
            style={{ opacity: 0.5,
              width: '100%',
              height: '250px',
              backgroundImage: `url(${'images/placeholder.jpg'})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap' }}>
            {mahiText}
          </Image>
        </Container>
        <Segment attached size='huge' textAlign='center'>
          <p>
            In literal sense mahi is the act of working or doing, Wa uses Mahi as a concept of offering a task. we need 5 lines here bruh.  we need 5 lines here bruh.  we need 5 lines here bruh.  
          </p>
        </Segment>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
        Community
        </Header>

        <Container attached >
          <Image
            style={{ opacity: 0.5,
              width: '100%',
              height: '250px',
              backgroundImage: `url(${'images/hands.jpg'})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap' }}
          >

            {comunnityText}
          </Image>

        </Container>

        <Segment attached size='huge' textAlign='center'>
          <p>
            communtiy based platform that aims to build a strong connection with those around you, become more aware of the skills you have and what others have to offer
          </p>
        </Segment>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
        Exchange
        </Header>

        <Container attached>
          <Image
            style={{ opacity: 0.5,
              width: '100%',
              height: '250px',
              backgroundImage: `url(${'images/tomatoes.jpg'})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap' }}
          >

            {exchangeText}
          </Image>

        </Container>

        <Segment attached size='huge' textAlign='center'>
          <p>
            using your time to do the things that really matter
            time to do what you want to and doing the things that you cant do
            Once mahi has been completed you exchange Wa/time with
          </p>
        </Segment>
      </Grid.Column>
    </Grid>

  </>

  )
}

export default Home
