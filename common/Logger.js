/*eslint-disable */
export function debugLog() {
  if (process.env.REACT_APP_DEBUG === "false") {
    return;
  }
  console.log(...arguments);
}
