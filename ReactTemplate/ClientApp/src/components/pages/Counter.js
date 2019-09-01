import React, { useState } from "react";
import { observer } from "mobx-react";
import { Button } from "react-bootstrap";

import CounterStore from "../stores/CounterStore";

const Counter = observer(function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p>
        Session count: <strong>{CounterStore.count}</strong>
      </p>
      <p>
        Current count: <strong>{count}</strong>
      </p>

      <Button
        variant="primary"
        onClick={() => {
          CounterStore.incrementCounter();
          setCount(count + 1);
        }}
      >
        Increment
      </Button>
    </div>
  );
});

export default Counter;
