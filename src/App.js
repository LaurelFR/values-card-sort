import "./App.css";
import CardGenerator from "./CardGenerator";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Values Card Sort</h1>
        </div>
        <div className="card-board">
          <div className="row text-center">
            <div className="col-3">
              <h5 className="cards">Cards</h5>
              <CardGenerator />
            </div>
            <div className="col-3">
              <h5 className="very-important">Very Important to Me</h5>
            </div>
            <div className="col-3">
              <h5 className="important">Important to Me</h5>
            </div>
            <div className="col-3">
              <h5 className="not-important">Not Important to Me</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
