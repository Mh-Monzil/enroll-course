import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import data from './data.json';

function App() {
  const courseData = data;
  console.log(courseData);
  return (
    <div className="App">
      <Header course={courseData}></Header>
      <Main details={courseData}></Main>
    </div>
  );
}

export default App;
