function useState(count) {
    let state = cou
  function getCount() {
    return count;
  }
  function setCount(count) {
    cou
  }
  return [count, setCount];
}
const [count, setCount] = useState(0);
const button = document.querySelector("button");
console.log(button);