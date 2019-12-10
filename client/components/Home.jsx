import React from 'react'
import { Container, Header, Divider, Image, Grid, Segment } from 'semantic-ui-react'

const HeaderText = ({ children }) => (
  <Header
    textAlign='center'
    style={{
      fontSize: '30px',
      textShadow: '1px 1px #000000',
      color: '#ffffff' }}
  >
    <Header.Content>
      {children}
    </Header.Content>
  </Header>
)

const Description = ({ title, imageURL, imageText, children }) => (
  <>
    <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
      {title}
    </Header>

    <Container >
      <Image
        style={{
          opacity: 0.5,
          width: '100%',
          height: '250px',
          backgroundImage: `url(${imageURL})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap' }}
      >
        {imageText}
      </Image>
    </Container>

    <Segment size='huge' textAlign='center' style={{ fontSize: '1.25rem', height: '14em', marginBottom: '2em' }}>
      {children}
    </Segment>
  </>
)

const inlineText =
  <div >
    <HeaderText>
      Nou te rourou <br/>
      Naku te rourou <br/>
      kia ora ai te iwi
    </HeaderText>

    <Divider inverted />

    <HeaderText>
      With your food basket  <br/>
      and my food basket <br/>
      the people will thrive
    </HeaderText>
  </div>

const mahiText = <HeaderText>Taking and <br /> Offering Mahi</HeaderText>
const communityText = <HeaderText>Empowering communities</HeaderText>
const exchangeText = <HeaderText>Using Wa/Time as a currency</HeaderText>

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap'
}

const Home = () => (
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
        <Description
          title='Mahi'
          imageURL='images/placeholder.jpg'
          imageText={mahiText}
        >
          <p>Taking its literal meaning, mahi is the act of working or doing.</p>
          <p>
            Wā uses Mahi to facilitate the give and take between people in the community —
            members exchange wā/time when a mahi is offered or completed.
          </p>
        </Description>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Description
          title='Community'
          imageURL='images/hands.jpg'
          imageText={communityText}
        >
          <p>Wā is a community-based platform aiming to build strong connections between people.</p>
          <p>Become more aware of the skills you have and what you can offer and discover what people around you can offer in return.</p>
        </Description>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Description
          title='Exchange'
          imageURL='images/tomatoes.jpg'
          imageText={exchangeText}
        >
          <p>Exchange the gift of time with people in your community.</p>
          <p>
            Use your time to do the things that really matter to the people around you
            and make your life richer by letting other people give you their time.
          </p>
        </Description>
      </Grid.Column>
    </Grid>
  </>
)

export default Home
