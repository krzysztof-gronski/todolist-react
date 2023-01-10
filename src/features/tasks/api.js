import axios from "axios";

export const fetchSampleTasks = async () => {
  const response = await axios.get("/todolist-react/sampleTasks.json");
  //alert(response.data);
  if (response.statusText !== "OK") {
    new Error(response.statusText);
  }
  return response.data;
};
