import { default as React } from "react";
import './App.css';
import Bargraph from './components/bargraph.js';
import Piechart from './components/piechart';

function App() {
  return (
    <div>
      <Bargraph
        data={[{index: 0, date: 0, value: 15},
               {index: 1, date: 1, value: 45}, 
               {index: 2, date: 2, value: 25}]}
        width={300}
        height={200}
        top={20}
        bottom={30}
        left={30}
        right={0}
      />
      <Piechart
        data={[{index: 0, value: 40},
               {index: 1, value: 80},
              ]}
        width={200}
        height={200}
        innerRadius={60}
        outerRadius={100}
      />
    </div>
  );
}

export default App;
