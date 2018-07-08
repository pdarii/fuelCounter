import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            km: 0,
            for100: 0,
            price: 26,
            count: 1,
            litres: 0,
            result: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.calculatePrice = this.calculatePrice.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
        const obj = {};
        obj[event.target.name] = +event.target.value;
        this.setState(obj);
        this.calculatePrice();
    }

    calculatePrice() {
        const count = this.state.count;
        const for100 = this.state.for100;
        const km = this.state.km;
        const price = this.state.price;
        const litres = km * for100 / 100;
        const result = litres * price / count;

        console.log(this.state)
        this.setState({ litres, result });
    }

  render() {

      const litres = this.state.litres;
      const result = this.state.result;

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <div className='container'>
              <div className='row'>

                  <Form>
                      <FormGroup row>
                          <Label for="km" sm={6}>Кілометрів проїхано:</Label>
                          <Col sm={6}>
                              <Input
                                  type="text"
                                  name="km"
                                  id="km"
                                  placeholder="Км проїхано"
                                  value={this.state.km} onChange={this.handleChange} />
                          </Col>
                      </FormGroup>

                      <FormGroup row>
                          <Label for="for100" sm={6}>Росхід на сотню:</Label>
                          <Col sm={6}>
                              <Input type="text" name="for100" id="for100" placeholder="Росхід на сотню"
                                     value={this.state.for100} onChange={this.handleChange}/>
                          </Col>
                      </FormGroup>

                      <FormGroup row>
                          <Label for="price" sm={6}>Ціна за літр:</Label>
                          <Col sm={6}>
                              <Input type="text" name="price" id="price" placeholder="Ціна за літр"
                                     value={this.state.price} onChange={this.handleChange}/>
                          </Col>
                      </FormGroup>

                      <FormGroup row>
                          <Label for="count" sm={6}>Кількість людей:</Label>
                          <Col sm={6}>
                              <Input type="text" name="count" id="count" placeholder="Кількість людей"
                                     value={this.state.count} onChange={this.handleChange}/>
                          </Col>
                      </FormGroup>

                      <h1>Витрачено {litres} літрів, отже по {result} грн з людини</h1>

                  </Form>



              </div>
          </div>


      </div>
    );
  }
}



export default App;
