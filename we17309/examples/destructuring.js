function useState(count) {
  let state = count;
  function getState() {
    return state;
  }
  function setState(newCount) {
    state = newCount;
  }
  return [getState, setState];
}
const [count, setCount] = useState(0);
const button = document.querySelector("button");
button.addEventListener("click", () => {
  setCount(count + 1);
  console.log(count);
});
