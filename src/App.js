import React from 'react';
import Todos from './components/Todos'

function App() {
  // state= {
  //   todos : [
  //     {
  //       id: 1,
  //       title: "Start Learning",
  //       completed: false
  //     }
  //   ]
  // }
  return (
    <div className="App">
     <Todos />
    </div>
  );
}

export default App;
