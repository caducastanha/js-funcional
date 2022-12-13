function ordenar(array) {
  return [...array].sort();
}

const nums = Object.freeze([4, 2, 3, 5, 1, 6]);

const ordernados = ordenar(nums);

console.log(nums);
console.log(ordernados);