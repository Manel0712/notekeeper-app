export const validateEnum = (note) => {
  if (note === "pending" || note === "in progress" || note === "done") {
    return true;
  }
  return false;
};
