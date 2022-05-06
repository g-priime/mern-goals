import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text, img: file }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input type="file" name="avatar" id="avatar" onChange={changeHandler} />
        </div>
        {file && <div className="file-name">{file.name}</div>}
        {error && <div className="error">{error}</div>}

        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
