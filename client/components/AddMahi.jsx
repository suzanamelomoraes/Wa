import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addMahi } from '../api/tasks'

import { getCategories } from '../actions/categories'
import { getOfferings } from '../actions/tasks'
import { getUser } from '../actions/user'
import {
  Modal,
  Form,
  Header,
  Button,
  Dropdown,
  Image
} from 'semantic-ui-react'

export class AddMahi extends Component {
  state = {
    assigner: this.props.id,
    title: '',
    category: '',
    hours: 0,
    description: '',
    modalVisible: false
  };

  componentDidMount () {
    this.props.getCategories()
  }

  closeModal = () => {
    this.setState({
      title: '',
      category: '',
      hours: 0,
      description: '',
      modalVisible: false
    })
  }

  handleSubmit = () => {
    this.setState({
      modalVisible: false
    })
    const { assigner, title, category, hours, description } = this.state
    addMahi({
      assigner,
      title,
      category,
      hours,
      description
    })
      .then(() => this.props.getUser())
      .then(() => this.props.getOfferings())
  }

  handleChange = e => {
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
    const { categories } = this.props
    const selectedCategory = data.value
    const category = categories.find(
      category => category.name === selectedCategory
    )
    this.setState({
      category: category.id
    })
  }

  render () {
    const { modalVisible } = this.state
    const { categories } = this.props
    const options = categories.map(category => ({
      key: category.id,
      value: category.name,
      text: category.name
    }))

    const balance = this.props.user.balance

    return (
      <Modal
        as={Form}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        open={modalVisible}
        size="tiny"
        trigger={
          <Button
            color="green"
            id="addMahi"
            size='massive'
            style={{
              position: 'fixed',
              bottom: '10px',
              padding: '10px',
              margin: '10px' }}
            onClick={this.viewModal}>
            Add Mahi
          </Button>
        }
      >
        <Header as="h1" color="brown" verticalalign="middle">
          <Image
            verticalAlign="middle"
            floated="right"
            size="small"
            circular
            src="/images/avatar01.png"
          />
          Add Mahi
        </Header>

        <Modal.Content>
          <Form.Input
            label="Title"
            name="title"
            id="mahiTitle"
            onChange={this.handleChange}
            required
            type="text"
            placeholder="Name your Mahi"
          />
        </Modal.Content>
        <Modal.Content>
          <Form.Field
            control={Dropdown}
            placeholder="Select a category"
            name="category"
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
          <Form.TextArea
            label="Description"
            name="description"
            id="mahiDescription"
            onChange={this.handleChange}
            required
            type="text"
            placeholder="Describe your Mahi"
          />
        </Modal.Content>
        <Modal.Content>
          <Form.Input
            label="Time in Hours"
            name="hours"
            id="hours"
            onChange={this.handleChange}
            required
            type="number"
            min="1"
            max={balance}
            placeholder="Add the time you need"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            icon="close"
            labelPosition="right"
            content="Close"
            onClick={this.closeModal}
          />
          <Button
            onSubmit={this.handleSubmit}
            id="submit"
            type="submit"
            labelPosition="right"
            color="green"
            icon='smile outline'
            content="Add Mahi"
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    user: state.user
  }
}
const matchDispatchToProps = {
  getCategories,
  getOfferings,
  getUser
}

export default connect(mapStateToProps, matchDispatchToProps)(AddMahi)
