import './App.css';
import Parent from './components/Parent'

function App() {
  return (
    <div className="App" style={{backgroundColor:'black', height:'100vh'}}>
      <h1 style={{backgroundColor:'rgb(0, 153, 255)', textAlign:'left', paddingLeft:'5vh',
      paddingTop:'15px', paddingBottom:'15px', marginTop:'0', marginBottom:'25px'}}>Home</h1>
      <Parent />
      {/* asdf */}
    </div>
  );
}

export default App;
