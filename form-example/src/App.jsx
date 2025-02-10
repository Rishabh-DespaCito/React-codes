import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    text: "",
    checkbox: false,
    radio: "",
    select: "",
  });

  const handleChange = (e) => {
    //console.log(e.target);
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="form-container">
      <h1>Form Example</h1>
      <form>
        {/* Text Input */}
        <div>
          <label>Text:</label>
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
          ></input>
        </div>

        {/* CheckBox */}
        <div>
          <label>
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
            ></input>
            Checkbox
          </label>
        </div>
        {/* Radio Buttons */}
        <div>
          <label>Radio:</label>
          <label>
            <input
              type="radio"
              name="radio"
              value="option1"
              checked={formData.radio === "option1"}
              onChange={handleChange}
            ></input>
            Option1
          </label>

          <label>
            <input
              type="radio"
              name="radio"
              value="option2"
              checked={formData.radio === "option2"}
              onChange={handleChange}
            ></input>
            Option2
          </label>

          {/* Dropdown  */}
          <div>
            <label>Select:</label>
            <select
              name="select"
              value={formData.select}
              onChange={handleChange}
            >
              <option value="">-- Choose an option --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="form-data">
            <p>
              <strong>Checkbox:</strong>
              {formData.checkbox ? "Checked" : "Unchecked"}
            </p>
            <p>
              <strong>Text:</strong>
              {formData.text || "N/A"}
            </p>
            <p>
              <strong>Radio:</strong>
              {formData.radio || "N/A"}
            </p>
            <p>
              <strong>Select:</strong>
              {formData.select || "N/A"}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
