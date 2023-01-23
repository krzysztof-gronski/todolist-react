import axios from "axios";

export const getSampleTasks = async () => {
  const response = await axios.get("/todolist-react/sampleTasks.json");
  if (response.statusText !== "OK") {
    new Error(response.statusText);
  }
  return response.data;

  // const response = await axios.get("sampleTasks.json");
  // alert(response.statusText);
  // if (response.statusText !== "OK" || typeof response.data !== "object") {
  //   new Error(response.statusText);
  //   return [];
  // }
  // return response.data;
};
