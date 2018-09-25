import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    let p1=20
    let p2=30

    return (
      
          <div className="App">
               <p>Lets try JSX here</p>

               <h1>P1 Value: { p1 }</h1>
               <h1>P2 Value: { p2 }</h1>
               <h3>The Sum is:</h3>

               <h1>{ p1+p2 }</h1>

               <h3>Okay! lets try true false:</h3>

               <h1>{ p1 ? p1:'Kono data nai' }</h1> {/*//p1 a jodi kono data thake 
                                                    //i.e true hoyy tahole ei <h1>
                                                    //tag er vitore p1 boshbe, otherwise
                                                    //kono data nai print korbe*/}   

          </div>
        
     

      
    );
  }
}

export default App;
