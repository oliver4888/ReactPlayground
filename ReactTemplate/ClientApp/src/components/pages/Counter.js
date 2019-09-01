import React from "react";
import { observer } from "mobx-react";
import { Button } from "react-bootstrap";

import CounterStore from "../stores/CounterStore";

const Counter = observer(function Counter() {
  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p>
        Current count: <strong>{CounterStore.count}</strong>
      </p>

      <Button variant="primary" onClick={CounterStore.incrementCounter}>
        Increment
      </Button>
    </div>
  );
});

export default Counter;
