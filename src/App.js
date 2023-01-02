import './App.css';
import './reset.css';

import KeyboardFrame from './components/KeyboardFrame';
import KeyboardRow from './components/KeyboardRow';
import useWindowDimensions from './useWindowDimensions';

// TODO: make objects
const row1 = ["square", "square", "square", "square", "square", "square", "square", "square", "square", "square", "square", "square", "square", "rect1"];
const row2 = ["rect1", "square", "square", "square", "square", "square", "square", "square", "square", "square", "square", "square", "square", "square"];
const row3 = ["rect2", "square", "square", "square", "square", "square", "square", "square", "square", "square", "square", "square", "rect2"];
const row4 = ["rect3", "square", "square", "square", "square", "square", "square", "square", "square", "square", "square", "rect3"];
const row5 = ["square", "square", "square", "cmd", "space", "cmd", "square", "square", "square", "square"];

const rows = [row1, row2, row3, row4, row5];

const { height, width } = useWindowDimensions;


function App() {
  return (
    <body>
      <KeyboardFrame>
        {rows.map((row, index) => <KeyboardRow key={index} row={row}></KeyboardRow> )}
      </KeyboardFrame>
    </body>
  );
}

export default App;
