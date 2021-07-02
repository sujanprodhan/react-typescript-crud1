import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="basic-form">
        <div className="input-form">
          <form>
            <input
              type="text"
              name="name"
              placeholder="Enter course name..."
              required={true}
              className="input"
            />
            <input
              type="text"
              name="name"
              placeholder="Enter course duration..."
              required={true}
              className="input"
            />
            <input
              type="text"
              name="name"
              placeholder="Enter course teacher"
              required={true}
              className="input"
            />
            <input
              type="submit"
              value="Add Course"
              className="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
