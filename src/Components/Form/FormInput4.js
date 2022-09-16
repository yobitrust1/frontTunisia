import {useState} from 'react';

const App = (props) => {
  

  const [value, setValue] = useState();

  const handleChange = event => {
    const value = Math.max(props.min, Math.min(props.max, Number(event.target.value)));
    setValue(value);
    props.onChangeText(value)
  };

  console.log(value);
  console.log(typeof value);

  return (
    <div>
      <input
        type="number"
        value={value}
        placeholder={props.placeholder} 
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
