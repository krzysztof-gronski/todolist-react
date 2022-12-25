import {createSlice} from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: { tasks: [{a:1}], },
    reducers: {
        addNewTasks:			
            ({ tasks }, { payload }) => {
                tasks.push(payload);
            },
    },
});		
export const { addNewTask } = tasksSlice.actions;			
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;