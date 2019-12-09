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

  <Header style={centerStyle} size='huge'> Getting started </Header>

  <Divider inverted />

    <Grid colums='equal' style={centerStyle}>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
        Mahi
        </Header>
        <Container style={{ width: '100%' }}>
          <Image src='images/placeholder.jpg' fluid
            style={{ opacity: 0.5 }}
          />

        </Container>

        <Segment attached size='huge' textAlign='center'>
          <br></br>
          <p>
            in literal sense mahi is the act of working/perfomring, Wa uses Mahi as a concept of offering a task doing what the people need and helping the commuity hauiahauih
          </p>
        </Segment>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
        Community
        </Header>

        <Container style={{ width: '100%',
          height: '100%'
        }}>
          <Image src='images/hands.jpg' fluid
            style={{ opacity: 0.5 }}
          />
          {/* Create a mahi to share with your community and select a mahi to help out.
          </Image> */}

        </Container>

        <Segment attached size='huge' textAlign='center'>
          <p>
            a is very communtiy based platform as it aims to build a strong connection with those around you, become more aware of the skills you have and what others have to offer
            Contribute to the community by helping complete mahi
          </p>
        </Segment>
      </Grid.Column>

      <Grid.Column mobile={12} tablet={8} computer={4}>
        <Header as='h3' attached='top' textAlign='center' size='huge' style={{ backgroundColor: '#123b26', color: 'white' }} >
        Exchange
        </Header>

        <Container style={{ width: '100%',
          height: '100%'
        }}>
          <Image src='images/tomatoes.jpg' fluid
            style={{ opacity: 0.5 }}
          />
          {/* Create a mahi to share with your community and select a mahi to help out.
          </Image> */}

        </Container>

        <Segment attached size='huge' textAlign='center'>
          <p>      
            using your time to do the things that really matter

            exchaning time to do what you want to and doing the things that you cant do

            by offering an alternative to apprecaite and empower the communities

            Once mahi has been completed you exchange Wa/time with
          </p>
        </Segment>
      </Grid.Column>
    </Grid>

  </>

  )
}

export default Home
