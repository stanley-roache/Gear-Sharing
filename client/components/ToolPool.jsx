import React from 'react'
import { connect } from 'react-redux'

import ItemInGrid from './ItemInGrid'

import {nameSort} from '../utils/sorting'

export class ToolPool extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      results: props.gear,
      filter: 'AVAILABLE'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetSearch = this.resetSearch.bind(this)
    this.runSearch = this.runSearch.bind(this)
    this.cancelSearch = this.cancelSearch.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit() {
    (this.state.term === '')
      ? this.resetSearch()
      : this.runSearch()
  }

  resetSearch() {
    this.setState({
      results: this.props.gear,
    })
  }

  runSearch() {
    this.setState({
      results: this.props.gear.filter(item => {
        const fullText = item.name + ' ' + item.description
        const regex = new RegExp(this.state.term, 'i')
        return fullText.match(regex)
      })
    })
  }

  cancelSearch() {
    this.setState({
      term: ''
    })
    this.resetSearch()
  }

  render() {
    let display = (this.state.filter === 'AVAILABLE') 
      ? this.state.results.filter(e => e.status === 'Available')
      : this.state.results

    return (
      <div className='toolpool-wrapper'>
          <input onChange={this.handleChange} type="text" value={this.state.term} name='term'/>
          <button onClick={this.handleSubmit}>Search</button>
          <button onClick={this.cancelSearch}>Cancel</button>
          <select onChange={this.handleChange} name="filter">
            <option value='AVAILABLE'>Available Now</option>
            <option value='ALL'>All</option>
          </select>
        <h1 className='title is-2'>TOOL POOL</h1>
        {this.props.err && <span className="has-text-danger is-large">{this.props.err}</span>}
        <ul>
          {display
            .sort(nameSort)
            .map(item => {
            return <ItemInGrid item={item} key={item.id} showToggle={false}/>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ gear: state.gear.gear, err: state.gear.errorMessage })

export default connect(mapStateToProps)(ToolPool)