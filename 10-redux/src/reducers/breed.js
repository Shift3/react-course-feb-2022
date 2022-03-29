export default function breed(state = "Seattle, WA", action) {
  switch (action.type) {
    case "CHANGE_BREED":
      return action.payload;

    default:
      return state;
  }
}
