
import './app.sass'

import FirstScene from './FirstScene';
import Website from './Website';
function App() {

  // for first scene
setTimeout(() => {
  document.querySelector('.first-scene').classList.add('hide')
  document.querySelector('.website').classList.remove('hide')
}, 7000);
  return (
    <div className="App">
      <FirstScene/>
      <Website/>
    </div>
  );
}

export default App;
