import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/Pricing/Pricing';
import AssignmentMarks from './Components/AssignmentMarks/AssignmentMarks';
import PhoneBar from './Components/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-6xl font-bold underline">This is a big big header</h1>
      <p>This is a paragraph</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>

    </div>
  );
}

export default App;
