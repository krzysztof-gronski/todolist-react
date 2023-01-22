import axios from "axios";

export const getSampleTasks = async () => {
// return [
//   {
//     "content": "Dołączyć do projektu grupowego",
//     "done": false,
//     "id": "BA2qeO6lM8OXKG3g3WsKT"
//   },
//   {
//     "content": "Przygotować CV",
//     "done": false,
//     "id": "3QEQgZgbbXhIT9ve1bNB_"
//   },
//   {
//     "content": "Wyszukać oferty na justjoin.it",
//     "done": false,
//     "id": "gog7VXspvDV2r5tRrQEJb"
//   }
// ];

  // const response = await axios.get("/todolist-react/sampleTasks.json");
  // if (response.statusText !== "OK" || typeof response.data !== "object") {
  //   new Error(response.statusText);
  //   return false;
  // }
  // return response.data;

  const response = await axios.get("/todolist-react/sampleTasks.json");
  if (response.statusText !== "OK") {
    new Error(response.statusText);
  }
  return response.data;

};
