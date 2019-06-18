import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Layout from '../components/layout'
import Cms from '../components/cms'
import containerStyles from "./portfolio.module.less"

// Components configured. This can come from a database...
const available = ['cms', 'fend']

export default class Design extends Component {
  state = { components: [], active: [] }
  // Toggle component
  toggleComponent = (nome) => {

    //Reseting active and components array to show one component at a time
    const active = [], components = []
    const subFixed = document.querySelector('#cms')
    while (subFixed.firstChild) subFixed.removeChild(subFixed.firstChild)

    // Add or remove from list
    let i = active.indexOf(nome)
    if (i > -1) active.splice(i, 1)
    else active.push(nome)

    // Create loadables. THIS IS THE MAGIC!
    active.map(m => {
      return components.push(Loadable({
        loader: () => import('../components/'+m),
        loading: () => <div>Loading { m }...</div>,
      }));
    });
    this.setState({ ...this.state, components, active })
  }
  render() {
    const { components } = this.state
    return (
      <Layout>
        <div className={containerStyles.navsec}>
          { available.map((name, i) => (
            <div key={i}>
              <input type="submit" value={name} onClick={e => this.toggleComponent(name)} />
            </div>
          ))}
        </div>
        { components.map((item, i) => {
          let Module = components[i]
          return <Module key={i} />
        }) }
        {/* Default component to avoid showing an empty page */}
        <Cms />
      </Layout>
    )
  }
}
