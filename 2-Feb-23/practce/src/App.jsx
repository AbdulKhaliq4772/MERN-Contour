import { useState } from "react";

function App() {
  const [value, setValue] = useState({
    fname: "",
    lname: "",
    message: "",
    car: "",
    isChecked: false
  });

  let handleChange = (e) => {
    const value = 
    e.target.type === "checkbox" ? 
    e.target.checked : 
    e.target.value
    setValue(
      { ...value, [e.target.name]: value }
    );
  }

  return (
    <>
      <form action="">
        <label htmlFor="">
          fname:
          <input type="text" name="fname" onChange={handleChange} />
        </label>
        <label htmlFor="">
          fname:
          <input type="text" name="lname" onChange={handleChange} />
        </label>
        <label htmlFor="">
          Message:
          <textarea
            name="message"
            value={value.message}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          pick a car:
          <select name="car" value={value.car} onChange={handleChange}>
            <option value="petrol">petrol</option>
            <option value="mercedes">mercedes</option>
            <option value="toyota">toyota</option>
          </select>
        </label>
        <label htmlFor="">
          Checkbox:
          <input
            type="checkbox"
            name="isChecked"
            value={value.isChecked}
            onChange={handleChange}
          />
        </label>
      </form>

      <h1>Name: {value.fname} {value.lname}</h1>
      <p>message : {value.message}</p>
      <p>is it checked. {value.isChecked ? "yes" : "no"}</p>
    </>

  );
}
export default App;