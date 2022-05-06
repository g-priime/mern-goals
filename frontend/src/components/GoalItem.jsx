import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

//const imgUrl = "data:image/jpeg;base64," + BinaryToBase64(goal.img);
function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
}

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>

      <div>
        {goal.img.data.data ? (
          <img
            src={`data:image/jpeg;base64,${arrayBufferToBase64(
              goal.img.data.data
            )}`}
            alt=""
            className="img"
          />
        ) : (
          <>No image</>
        )}
      </div>
      <div>{goal.img.data.type}</div>

      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
    </div>
  );
}

export default GoalItem;
