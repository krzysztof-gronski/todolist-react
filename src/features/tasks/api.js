import axios from "axios";

export const getSampleTasks = async () => {
  const response = await axios.get("/todolist-react/sampleTasks.json");
  if (response.statusText !== "OK") {
    new Error(response.statusText);
  }
  return response.data;
};
