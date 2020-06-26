import {
  CHECK_VENDOR,
  GET_TRUCKS,
  FAVE_TRUCKS,
  FILTER_TRUCKS,
  SAVE_TRUCK,
  REMOVE_TRUCK
} from "../actions/actions";

export let intitialState = {
  isVendor: false,
  allTrucks: [],
  filteredTrucks: [],
  myTrucks: [],
  faveTrucks: [],
};

export const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case CHECK_VENDOR:
      console.log(action.payload);
      return {
        ...state,
        isVendor: action.payload,
      };
    case GET_TRUCKS:
      return {
        ...state,
        allTrucks: action.payload,
        filteredTrucks: state.allTrucks,
<<<<<<< HEAD
        myTrucks: state.allTrucks,
=======
>>>>>>> b3871db8c3520d8dff582a4f20c1973f320e0c47
      };
    case FILTER_TRUCKS:
      return {
        ...state,
        filteredTrucks: action.payload,
      };
    case SAVE_TRUCK:
      return {
        ...state,
        faveTrucks: [...state.faveTrucks, action.payload]
      };
    case REMOVE_TRUCK:
      return {
        ...state,
        faveTrucks: action.payload
<<<<<<< HEAD
      };
=======
      }; 
>>>>>>> b3871db8c3520d8dff582a4f20c1973f320e0c47
    default:
      return state;
  }
};
