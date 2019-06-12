import React, { Component } from 'react';
import Map from '../src/components/Map/Map'
class App extends Component {
  state = { 
    currentUser: {}
   }




   
  render() { 
    return ( 
      <div>
        <h1>HIIIII</h1>
        <Map />
      </div>
     );
  }
}
 
export default App;
