const theme = (state = "white", action) => {
  switch (action.type) {
    case "CHANGE-THEME":
      return action.theme;
    default:
      return state;
  }
};

export default theme;
