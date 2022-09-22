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
      <br/>
      <p> </p>
      <input
        type="number"
        value={value}
        placeholder={props.placeholder} 
        onChange={handleChange}
      />
      
       { (value==props.max ||value==props.min) &&
        <div>
          <br/>
        <p class="text-danger text-content-center">min is :{props.min} and max is:{props.max}</p>
</div>
      }
    </div>
  );
};

export default App;
