import { createSlice }  from  '@reduxjs/toolkit'
import { uniq } from 'lodash';

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        turn: 'x',
        gameArray: [
            '( )','( )','( )',
            '( )','( )','( )',
            '( )','( )','( )'
        ],
        p1MovesState: {
            array: [
            '','','',
            '','','',
            '','',''],
            position: 0,
            value: ''},
        p2MovesState: {
            array: [
            '','','',
            '','','',
            '','',''],
            position: 0,
            value: ''},
        isPlayableState: true,
        
                  
    },
    reducers: {
        p1MovesReducer: (state,action) => {
            state.p1MovesState.array[action.payload.position] = action.payload.value;
            state.gameArray[action.payload.position] = action.payload.value;
        },
        p2MovesReducer: (state,action) => {
            state.p2MovesState.array[action.payload.position] = action.payload.value;
            state.gameArray[action.payload.position] = action.payload.value;
        
        },
        isPlayableReducer: (state, action) => {
            state.isPlayableState = action.payload
        },
        turnReducer: (state, action) => {
            state.turn = action.payload
        },
        // gameArrayReducer: (state,action) => {
        //     state.gameArray[action.payload.position] = action.payload.value;
        // }
        
    }
    
});

export const {
    p1MovesReducer, 
    p2MovesReducer, 
    isPlayableReducer, 
    turnReducer,
    // gameArrayReducer
} = gameSlice.actions;

export const p1MovesSelector = state => state.game.p1MovesState;
export const p2MovesSelector = state => state.game.p2MovesState;
export const isPlayableSelector = state => state.game.isPlayableState;
export const turnSelector = state => state.game.turn;
export const gameArraySelector = state => state.game.gameArray;

export default gameSlice.reducer;
