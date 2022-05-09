import axios from "axios";
var bodyFormData = new FormData();

const API_URL = "/api/goals/";
//const API_URL = "http://localhost:5000/api/goals/";

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
    },
  };

  bodyFormData.append('text', goalData.text);
  bodyFormData.append('avatar', goalData.avatar);

  console.log(goalData.avatar)
  const response = await axios.post(API_URL, bodyFormData, config);

  return response.data;
};

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + goalId, config);

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;
