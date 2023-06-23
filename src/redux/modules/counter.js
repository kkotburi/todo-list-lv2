// action value
export const PLUS = "PLUS_ONE";
export const MINUS = "MINUS_ONE";

// action creator : action value를 return하는 함수
export const plusOne = () => {
  return {
    type: PLUS,
  };
};

export const minusOne = () => {
  return {
    type: MINUS,
  };
};

// export const minusOne = () => {
//   return {
//     type: MINUS_ONE,
//   };
// };

const initialState = {
  number: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counter;
