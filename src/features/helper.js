export const checkWin = (arr) => {
    if ( arr[0] === arr[1] && arr[0] === arr[2]) {
      return arr[0];
    }
    if ( arr[3] === arr[4] && arr[3] === arr[5]) {
      return arr[3]
    }
    if ( arr[6] === arr[7] && arr[6] === arr[8]) {
      return arr[6]
    }
    if ( arr[0] === arr[3] && arr[0] === arr[6]) {
      return arr[0]
    }
    if ( arr[1] === arr[4] && arr[1] === arr[7]) {
      return arr[1]
    }
    if ( arr[2] === arr[5] && arr[2] === arr[8]) {
      return arr[2]
    }
    if ( arr[0] === arr[4] && arr[0] === arr[8]) {
      return arr[0]
    }
    if ( arr[2] === arr[4] && arr[2] === arr[6]) {
      return arr[2]
    }
  }