const p = new Promise((resolve) => {
  resolve(['Cadu', 'Lari', 'Samuel', 'Karol'])
})

p
  .then(data => data[0])
  .then(name => name[0])
  .then(char => console.log(char))
  .finally(() => console.log('fim'))