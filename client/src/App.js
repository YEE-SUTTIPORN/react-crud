
function App() {
  return (
    <div className="App container">
      <h1>Employee Information</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Age:
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Age"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Country:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Country"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Position:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Position"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Wage:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Wage"
            />
          </div>

          <button className="btn btn-success">Add Employee</button>

        </form>
      </div>
      <hr/>
      <div className="employees">
        <button className="btn btn-primary">Show employees</button>
      </div>
    </div>
  );
}

export default App;
