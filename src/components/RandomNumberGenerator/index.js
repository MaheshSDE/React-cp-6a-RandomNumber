// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onChange = () => {
    /*  this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    })) */
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onChange}>
            Generate
          </button>
          <p className="count-style">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
