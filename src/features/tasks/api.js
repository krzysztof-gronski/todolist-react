import axios from "axios";

export const getSampleTasks = async () => {
  const response = await axios.get("/todolist-react/sampleTasks.json");
  if (response.statusText !== "OK" || typeof response.data !== "object") {
    new Error(response.statusText);
    return false;
  }
  return response.data;
};
