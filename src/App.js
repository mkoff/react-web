import React, { Component } from 'react'
import './App.sass'
import Car from './Car/Car.js'

class App extends Component {
  state = {
    cars: [
        {name: 'Mazda', year: 2018},
        {name: 'Audi', year: 2013},
        {name: 'Ford', year: 2012},
    ],
    pageTitle: 'Cars',
    showCars: true
  }

  // metods
  changeTitleHandler = (newTitle) => {

    this.setState({
        pageTitle: newTitle
    })

  }

  changeTextHandler = (event) => {
      this.setState({
          pageTitle: event.target.value
      })
  }

  onChangeNameCar = (name, index) => {
    const car = this.state.cars[index]
    car.name = name
    // Когда меняем состояние нужно создавать новый state
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
        cars: cars
    })
  }

  toggleCarsHandler = () =>{

    this.setState({
        showCars: !this.state.showCars
    })

  }

  deleteCar = (index) => {
    const cars = [...this.state.cars]
    cars.splice(index, 1)
    this.setState({
        cars: cars
    })
  }

  render() {
    const divStyle = {
        'color': 'red'
    }

    // const cars = this.state.cars

    let showCarsAll = null

    if(this.state.showCars){
      showCarsAll = this.state.cars.map((car, index)=>{
          return (
              <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
                  onChangeText={this.changeTextHandler.bind(this)}
                  onChangeNameCar={event => this.onChangeNameCar(event.target.value, index)}
                  deleteCar={this.deleteCar.bind(this, index)}
              />
          )
      })
    }

    return (
      <div className="App">
        <h1 style={divStyle} className="title">{this.state.pageTitle}</h1>
        <div>
            <button onClick={this.changeTitleHandler.bind(this, 'Change!')}>Change title</button>
            <button onClick={this.toggleCarsHandler}>Cars</button>
        </div>

        { showCarsAll }

      </div>
    );
  }
}

export default App;
