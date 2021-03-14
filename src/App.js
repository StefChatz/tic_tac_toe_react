import logo from './logo.svg';
import './App.css';
import {
  p1MovesSelector,
  p2MovesSelector,
  isPlayableSelector,
  turnSelector,
  gameArraySelector,
  p1MovesReducer,
  p2MovesReducer,
  isPlayableReducer,
  turnReducer,
  // gameArrayReducer
} from './features/gameSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {checkWin} from './features/helper'

function App() {
  const dispatch = useDispatch();
  const p1Moves = useSelector(p1MovesSelector);
  const turns = useSelector(turnSelector);
  const isPlayable = useSelector(isPlayableSelector);
  const p2Moves = useSelector(p2MovesSelector);
  const gameArrays = useSelector(gameArraySelector);

  return (
    <div className="App">
      <header className="App-header">
      <p>Winner: {checkWin(gameArrays)}</p>

        <div>
          <button onClick={() => {
            // const tmpTurn = 'x'

            if (turns === 'x') {
              dispatch(p1MovesReducer({position: 0, value: turns}))
              dispatch(turnReducer('o'))
              
              // tmpTurn = 'o'
            } else {
              dispatch(p2MovesReducer({position: 0, value: turns}))
              dispatch(turnReducer('x'))
              // tmpTurn = 'x'
            }
            console.log(gameArrays[0], 'button 1')

          }}>{gameArrays[0]}</button>
          {/* {console.log(turn)} */}
          <button onClick={() => {
            if (turns === 'x') {
              dispatch(p1MovesReducer({position: 1, value: turns}))
              dispatch(turnReducer('o'))
            } else {
              dispatch(p2MovesReducer({position: 1, value: turns}))
              dispatch(turnReducer('x'))

            }
            console.log(gameArrays[1], 'button 2')

          }}>{gameArrays[1]}</button>
          <button onClick={() => {
            if (turns === 'x') {
              dispatch(p1MovesReducer({position: 2, value: turns}))
              dispatch(turnReducer('o'))
            } else {
              dispatch(p2MovesReducer({position: 2, value: turns}))
              dispatch(turnReducer('x'))

            }
            console.log(gameArrays[2], 'button 3')
            
            
          }}>{gameArrays[2]}</button>
        </div>
        <div>
        <button onClick={() => {
            if (turns === 'x') {
              dispatch(p1MovesReducer({position: 3, value: turns}))
              dispatch(turnReducer('o'))
            } else {
              dispatch(p2MovesReducer({position: 3, value: turns}))
              dispatch(turnReducer('x'))

            }
            console.log(gameArrays[3], 'button 4')

          }}>{gameArrays[3]}</button>
          <button onClick={() => {
            if (turns === 'x') {
              dispatch(p1MovesReducer({position: 4, value: turns}))
              dispatch(turnReducer('o'))
            } else {
              dispatch(p2MovesReducer({position: 4, value: turns}))
              dispatch(turnReducer('x'))

            }
            console.log(gameArrays[4], 'button 5')

          }}>{gameArrays[4]}</button>
          <button onClick={() => {
            if (turns === 'x') {
              dispatch(p1MovesReducer({position: 5, value: turns}))
              dispatch(turnReducer('o'))
            } else {
              dispatch(p2MovesReducer({position: 5, value: turns}))
              dispatch(turnReducer('x'))

            }
            console.log(gameArrays[5], 'button 6')

          }}>{gameArrays[5]}</button>
        </div>
        <div>
        <button onClick={() => {
            if (turns === 'x') {
              dispatch(p1MovesReducer({position: 6, value: turns}))
              dispatch(turnReducer('o'))
            } else {
              dispatch(p2MovesReducer({position: 6, value: turns}))
              dispatch(turnReducer('x'))

            }
            console.log(gameArrays[6], 'button 7')

          }}>{gameArrays[6]}</button>
          <button onClick={() => {
            if (turns === 'x') {
              dispatch(p1MovesReducer({position: 7, value: turns}))
              dispatch(turnReducer('o'))
            } else {
              dispatch(p2MovesReducer({position: 7, value: turns}))
              dispatch(turnReducer('x'))

            }
            console.log(gameArrays[7], 'button 8')

          }}>{gameArrays[7]}</button>
          <button onClick={() => {
            if (turns === 'x') {
              dispatch(p1MovesReducer({position: 8, value: turns}))
              dispatch(turnReducer('o'))
            } else {
              dispatch(p2MovesReducer({position: 8, value: turns}))
              dispatch(turnReducer('x'))

            }
            console.log(gameArrays[8], 'button 9')

          }}>{gameArrays[8]}</button>
        </div>
      </header>
      

    </div>
  );
}

export default App;
