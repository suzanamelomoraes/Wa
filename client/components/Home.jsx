import React from 'react'
import { Container, Header, Divider, Image, Grid, Segment } from 'semantic-ui-react'

const inlineText = <div >
  <Header 
    textAlign='center' 
    style={{ 
      fontSize: '30px', 
      textShadow: '1px 1px #000000', 
      color: '#ffffff' }}
  >
    <Header.Content>
      Nou te rourou <br/>
      Naku te rourou <br/>
      kia ora ai te iwi
    </Header.Content>
  </Header>

  <Divider inverted />

  <Header 
    textAlign='center' 
    style={{ 
      fontSize: '30px', 
      textShadow: '1px 1px #000000', 
      color: '#ffffff' }}
  >
    <Header.Content>
      With your food basket  <br/>
      and my food basket <br/>
      the people will thrive
    </Header.Content>
  </Header>
</div>

const mahiText = 
  <div>
    <Header
      textAlign='center'
      style={{
        fontSize: '30px',
        textShadow: '1px 1px #000000',
        color: '#ffffff' }}
    >
      <Header.Content>
        Taking and <br /> Offering Mahi
      </Header.Content>
    </Header>
  </div>

const communityText = 
  <div>
    <Header
      textAlign='center'
      style={{
        fontSize: '30px',
        textShadow: '1px 1px #000000',
        color: '#ffffff' }}
    >
      <Header.Content>
        Empowering communities
      </Header.Content>
    </Header>
  </div>

const exchangeText = 
  <div>
    <Header
      textAlign='center'
      style={{
        fontSize: '30px',
        textShadow: '1px 1px #000000',
        color: '#ffffff' }}
    >
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
        }}
      >
        {inlineText}
      </Image>
    </Container>

    <Divider inverted />

    <Header style={centerStyle} size='huge'> Getting Started </Header>

    <Divider inverted />
      <Grid style={centerStyle}>
        <Grid.Column mobile={12} tablet={8} computer={4}>
          <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
            Mahi
          </Header>

          <Container >
            <Image
              style={{ 
                opacity: 0.5,
                width: '100%',
                height: '250px',
                backgroundImage: `url(${'images/placeholder.jpg'})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap' }}
            >
              {mahiText}
            </Image>
          </Container>

          <Segment size='huge' textAlign='center' style={{fontSize:'1.25rem', height:'14em', marginBottom:'2em'}}>
            <p>Taking its literal meaning, mahi is the act of working or doing.</p>
            <p>
              Wā uses Mahi to facilitate the give and take between people in the community —
              members exchange wā/time when a mahi is offered or completed.
            </p>
          </Segment>
        </Grid.Column>

        <Grid.Column mobile={12} tablet={8} computer={4}>
          <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
            Community
          </Header>

          <Container >
            <Image
              style={{ 
                opacity: 0.5,
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
              {communityText}
            </Image>

          </Container>

          <Segment size='huge' textAlign='center' style={{fontSize:'1.25rem', height:'14em', marginBottom:'2em'}}>
            <p>Wā is a community-based platform aiming to build strong connections between people.</p>
            <p>Become more aware of the skills you have and what you can offer and discover what people around you can offer in return.</p>
          </Segment>
        </Grid.Column>

        <Grid.Column mobile={12} tablet={8} computer={4}>
          <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
            Exchange
          </Header>

          <Container >
            <Image
              style={{ 
                opacity: 0.5,
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

          <Segment size='huge' textAlign='center' style={{fontSize:'1.25rem', height:'14em', marginBottom:'2em' }}>
            <p>Exchange the gift of time with people in your community.</p>
            <p>
              Use your time to do the things that really matter to the people around you 
              and make your life richer by letting other people give you their time.
            </p>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Home
