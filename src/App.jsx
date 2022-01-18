import "./App.css";

import { useState } from "react";
import { ReactSortable } from "react-sortablejs";

const App = () => {
  const [stateOne, setStateOne] = useState([]);

  const [stateTwo, setStateTwo] = useState([
    { id: "red-rectangle" },
    { id: "green-ellipse" },
  ]);

  return (
    <div className="app-window">
      <p className="figure-counter-title">
        Фигур в зоне для перетаскивания: {stateOne.length || 0}
      </p>

      <ReactSortable
        className="top-box-sortable"
        list={stateOne}
        setList={setStateOne}
        group="groupName"
        animation={200}
        delay={2}
      >
        {stateOne.map((item) => (
          <div key={item.id} className={item.id}></div>
        ))}
      </ReactSortable>

      <ReactSortable
        className="bottom-box-sortable"
        list={stateTwo}
        setList={setStateTwo}
        group="groupName"
        animation={200}
        delay={2}
      >
        {stateTwo.map((item) => (
          <div key={item.id} className={item.id}></div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default App;
