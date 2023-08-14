import "./App.css";

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
              <div className="cards">Cards</div>
              <div className="card-1">Card 1</div>
            </div>
            <div className="col-3">
              <div className="very-important">Very Important to Me</div>
            </div>
            <div className="col-3">
              <div className="important">Important to Me</div>
            </div>
            <div className="col-3">
              <div className="not-important">Not Important to Me</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
