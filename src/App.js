
import React from 'react';
import './app.sass'

import FirstScene from './FirstScene';
import Website from './Website';
class App extends React.Component {

  constructor(props){
    super(props)
    this.state= {loading:false}
  }

  delay_func(){
    setTimeout(() => {
      document.querySelector('.first-scene').classList.add('hide')
      document.querySelector('.website').classList.remove('hide')
    }, 7000);
    
  }
componentDidMount(){
  document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    this.setState({
      loading:true
    })
    this.delay_func()
   
  })
  
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
        
         {/* <div className="App">
         <Website/>
         </div> */}
    </>
  );
}
}
export default App;
