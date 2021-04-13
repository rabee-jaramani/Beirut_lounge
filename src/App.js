
import React from 'react';
import './app.sass'

import FirstScene from './FirstScene';
import Website from './Website';
class App extends React.Component {

  constructor(props){
    super(props)
    this.state= {loading:false}
  }


componentDidMount(){
  document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    this.setState({
      loading:true
    })
    setTimeout(() => {
      document.querySelector('.first-scene').classList.add('hide')
      document.querySelector('.website').classList.remove('hide')
    }, 7000);
    
  })
  // for first scene


}
render(){
  return (
    <>
    {
      this.state.loading ? 
        <div className="App">
            <FirstScene/> 
            <Website/>
        </div> :
        <h1>Loading</h1>
    }
        
    </>
  );
}
}
export default App;
