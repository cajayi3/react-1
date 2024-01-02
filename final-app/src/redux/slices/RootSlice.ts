import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        model: "Model",
        year: "Year",
        color: "Color",
        gas: 'Gas',
        mpg: "Mpg"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseModel: (state, action) => { state.name = action.payload },
        chooseYear: (state, action) => { state.name = action.payload },
        chooseColor: (state, action) => { state.name = action.payload },
        chooseGas: (state, action) => { state.name = action.payload },
        chooseMpg: (state, action) => { state.name = action.payload },

    }
})


export const reducer = rootSlice.reducer;
export const { chooseName, chooseModel, chooseYear, chooseColor, chooseGas, chooseMpg} = rootSlice.actions