import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Card, Image, Button, Icon } from 'semantic-ui-react'

import SelectMahi from './SelectMahi'
import { changeActiveTask } from '../actions/tasks'

export class MahiSummary extends Component {
  state = {
    modalVisible: false
  }

  toggleModalView = () => {
    const { modalVisible } = this.state

    this.setState({
      modalVisible: !modalVisible
    })

  }

  render () {
    const { taskId, title, category, hours, description, image, assigner, changeActiveTask, activeIndex, mapVisible } = this.props
    const { modalVisible } = this.state

    return (
      <Card color={(taskId === activeIndex) ? "orange" : "grey"} >
        <Card.Content>
          <Image
            floated='right'
            size='small'
            src={image}
            id='mahiImage'
          />
          <Card.Header as='h1' id='mahiTitle'>{title}</Card.Header>
          <Card.Meta as='h3'id='mahiCategory'>Category <Icon name='columns' size='small'></Icon><br/><span>{category}</span></Card.Meta>
          <Card.Meta as='h3'>Hours <Icon name='time' size='small'></Icon><br/><span id='mahiHours'>{hours} hours</span></Card.Meta>
          <Card.Meta as='h3'id='mahiAssigner'>Needed by<br/><span>{assigner}</span></Card.Meta>
          <Card.Description id='mahiDescription'>
            {description}
          </Card.Description>
        </Card.Content>
        
        <Card.Content textAlign='center' extra>
          <div >
            <Modal 
              trigger={
                mapVisible 
                ? <Button 
                basic 
                color='green' 
                onClick={() => changeActiveTask(taskId)}>
                  View in Map
                </Button>
                : <Button 
                  basic 
                  color='green' 
                  onClick={this.toggleModalView}>
                    View Detail
                </Button>}
              open={modalVisible}
              >
              <SelectMahi 
                details={this.props} 
                closeModal={this.toggleModalView}/>
            </Modal>
          </div>
        </Card.Content>
      </Card>

    )
  }
}

const mapStateToProps = state => {
  return {
    activeIndex: state.tasks.activeIndex
  }
}

const mapDispatchToProps = {
  changeActiveTask
}

export default connect (mapStateToProps, mapDispatchToProps)(MahiSummary)
