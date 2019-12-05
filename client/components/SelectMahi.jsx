import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const SelectMahi = ({ details }) => (
    <>
      <Modal.Header>{details.category}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src={details.image} />
        <Modal.Description>
          <Header as='h1'>{details.title}</Header>
          <p style={{ fontSize: '1.25em' }}>
            {details.description}
          </p>
          <p style={{ fontSize: '1.25em' }}>You can earn {details.hours} hours when you help out {details.assigner}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          positive
          icon='smile outline'
          labelPosition='right'
          content="Help out!"
        />
      </Modal.Actions>
    </>
)

export default SelectMahi
