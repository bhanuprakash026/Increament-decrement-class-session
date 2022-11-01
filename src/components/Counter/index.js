import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncreased = () => {
    this.setState(prevState => {
      console.log(`Previous State Value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  onDecreased = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
    console.log('Decreased')
  }
  onReset = () => {
    this.setState(prevState => {
      return {count: 0}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncreased}>
            Increase
          </button>
          <button className="button" onClick={this.onDecreased}>
            Decrease
          </button>
          <button className="button" onClick={this.onReset}>
            Rest
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
