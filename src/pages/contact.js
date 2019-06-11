import React from 'react'
import Layout from '../components/layout'
import containerStyles from "../pages/bio.module.less"

export default class IndexPage extends React.Component {
  state = {
    fullName: "",
    email: "",
    message:""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.fullName} ${this.state.email}!`)
  }

  render() {
    return (
      <Layout>
      <form onSubmit={this.handleSubmit}>
        <label>
          Full name
          <input
            type="text"
            name="fullName"
            value={this.state.fullName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Message
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Layout>
    )
  }
}
