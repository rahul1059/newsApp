import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import studentList from './students';

class App extends Component {
  constructor(){
    super();
    this.state = {
      studentList: studentList
    }
    this.removeStudent =  this.removeStudent.bind(this);
  }

  removeStudent(roll){
    const updatedList = this.state.studentList.filter(item => item.roll !== roll);
    this.setState({
      studentList: updatedList
    })

  }

  render() {
    return (
      <div className="App">
        {this.state.studentList.map(student =>
         <div>
              <h1>{student.name}</h1>
              <h4>{student.roll} {student.age}</h4>
              <button type="button" onClick={() => this.removeStudent(student.roll)}>Remove</button>
          </div>
          
        )}
      </div>
    );
  }
}

export default App;
