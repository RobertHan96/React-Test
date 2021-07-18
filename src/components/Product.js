import { Component } from 'react'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Nike Shoes',
      price: 119000,
    }
  }

  handleUpdate = () => {
    // this.state의 결과는 어떻게 될까? -> 병합됨, 이름인 Nike Shose는 남고, 가격만 변경
    this.setState({
      price: 5000,
    })
  }

  render() {
    return (
      <div>
        <span>Name: {this.state.name}</span>
        <span>Price: {this.state.price}</span>
        <button onClick={this.handleUpdate}>Update Product</button>
      </div>
    )
  }
}

export default Product