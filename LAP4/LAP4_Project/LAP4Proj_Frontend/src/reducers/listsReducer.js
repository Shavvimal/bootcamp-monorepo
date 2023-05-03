const initState = {
  loading: false,
  result: [
    {
      name: "Italy Trip",
      id: 1,
      thumb: "M20.56 3.91C21.15 4.5 21.15 5.45 20.56 6.03L16.67 9.92L18.79 19.11L17.38 20.53L13.5 13.1L9.6 17L9.96 19.47L8.89 20.53L7.13 17.35L3.94 15.58L5 14.5L7.5 14.87L11.37 11L3.94 7.09L5.36 5.68L14.55 7.8L18.44 3.91C19 3.33 20 3.33 20.56 3.91Z",
      colour: "#833AB4",
      list_pins: [1, 2, 7, 3, 4],
      user_id: 1,
    },
    {
      name: "Restaurants",
      id: 2,
      thumb: "M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z",
      colour: "#FD1D1D",
      list_pins: [2, 8, 9, 1],
      user_id: 1,
    },
    {
      name: "Greece Trip",
      id: 3,
      thumb: "M20.56 3.91C21.15 4.5 21.15 5.45 20.56 6.03L16.67 9.92L18.79 19.11L17.38 20.53L13.5 13.1L9.6 17L9.96 19.47L8.89 20.53L7.13 17.35L3.94 15.58L5 14.5L7.5 14.87L11.37 11L3.94 7.09L5.36 5.68L14.55 7.8L18.44 3.91C19 3.33 20 3.33 20.56 3.91Z",
      colour: "#833AB4",
      list_pins: [3, 4, 5, 6],
      user_id: 1,
    },
    {
      name: "East London Bars",
      id: 4,
      thumb: "M9.5 3C7.56 3 5.85 4.24 5.23 6.08C3.36 6.44 2 8.09 2 10C2 12.21 3.79 14 6 14V22H17V20H20C20.55 20 21 19.55 21 19V11C21 10.45 20.55 10 20 10H18V8C18 5.79 16.21 4 14 4H12.32C11.5 3.35 10.53 3 9.5 3M9.5 5C10.29 5 11.03 5.37 11.5 6H14C15.11 6 16 6.9 16 8H12C10 8 9.32 9.13 8.5 10.63C7.68 12.13 6 12 6 12C4.89 12 4 11.11 4 10C4 8.9 4.89 8 6 8H7V7.5C7 6.12 8.12 5 9.5 5M17 12H19V18H17Z",
      colour: "#FCB045",
      list_pins: [2, 6, 7],
      user_id: 1,
    },
  ],
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_LISTS":
      return { ...state, result: action.payload, error: false };
    case "ADD_USERNAME":
      return { ...state, username: action.payload, error: false };
    case "RESET":
      return {
        ...state,
        id: action.payload[0],
        name: action.payload[1],
        thumb: action.payload[2],
        error: false,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default listReducer;

// type: "LOAD_LIST",// payload: [{question: "What is my name?", correctAnswer:"Humza", incorrectAnswers:["Shav", "Polina", "Sammie"]}]
// type: "ANSWER_SUBMIT",// payload: "Humza"

// {type: "LOAD_LISTS", payload:[{ name: "London Trip", id: 4,  thumb: "fas fa-hiking fa-3x"}, { name: "Restaurants", id: 5,  thumb: "fas fa-hiking fa-3x"}]}
