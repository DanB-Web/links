import React from "react";

const App = () => {
  return (
    <div>
      <h2 className="heading-m">Large heading</h2>
      <h3 className="heading-s">Small heading</h3>
      <p className="body-m">Body medium</p>
      <p className="body-s">Body small</p>
      <div className="flex flex-col gap-4">
        <button className="btn-primary">Primary button</button>
        <button disabled={true} className="btn-primary">
          Primary button (disabled)
        </button>
        <button className="btn-secondary">Secondary button</button>
        <button disabled={true} className="btn-secondary">
          Secondary button (disabled)
        </button>
      </div>
    </div>
  );
};

export default App;
