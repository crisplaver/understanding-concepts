import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const App = () => {
  const ref = useRef({
    submit: () => {},
  });

  const handleClick = () => {
    ref.current.submit();
  };

  return (
    <div>
      <Form ref={ref} />
      <button onClick={handleClick}>Apply</button>
    </div>
  );
};

const Form = forwardRef((_, ref) => {
  const [value, setValue] = useState("");

  useImperativeHandle(
    ref,
    () => ({
      submit: () => {
        console.log(value);
      },
    }),
    [value]
  );

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
});

export default App;
