import React, { Component } from 'react'

import { Modal, Form, Header, Button, Dropdown, Image, Container } from 'semantic-ui-react'

export class AddMahi extends Component {
  state = {
    assigner: this.props.assigner,
    title: '',
    category: '',
    time: 0,
    description: '',
    modalVisible: false
  }

  handleSubmit = () => {
    this.setState({
      modalVisible: false
    })
  }

  handleChange =(e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  viewModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  handleSelect = (e, data) => {
    const selectedCategory = data.value
    this.setState({
      category: selectedCategory
    })
  }

  render () {
    const { modalVisible } = this.state
    const options = this.props.categories.map(category => ({
      key: category.key,
      value: category.categoryName,
      text: category.categoryName
    }))

    return (
      <Modal as={Form} onSubmit={this.handleSubmit} onChange={this.handleChange} open={modalVisible} size="tiny" trigger={<Button color='brown' onClick={this.viewModal}>Add Task</Button>}>

        <Header as="h1" color='brown' verticalAlign='middle'>
          <Image
            verticalAlign='center'
            floated='right'
            size='small'
            circular
            src='/images/avatar01.png'
          />Add Mahi
        </Header>

        <Modal.Content>
          <Form.Input label="Title" name="title" onChanage={this.handleChange} required type="text" placeholder="Name your Mahi" />
        </Modal.Content>
        <Modal.Content>
          <Form.Field control={Dropdown}
            placeholder='Select a category'
            name='category'
            fluid
            clearable
            label="Category"
            selection
            required
            onChange={this.handleSelect}
            options={options}
          />
        </Modal.Content>
        <Modal.Content>
          <Form.Input label="Description" name="description" onChanage={this.handleChange} required type="text" placeholder="Describe your Mahi" />
        </Modal.Content>
        <Modal.Content>
          <Form.Input label="Time in Hours" name="time" onChanage={this.handleChange} required type="number" placeholder="Add the time you need" />
        </Modal.Content>
        <Modal.Actions>
          <Button onSubmit={this.handleSubmit} type="submit" color="green" icon="time" content="Add Mahi" />
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AddMahi
