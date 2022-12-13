// setTimeout(() => {
//   console.log('Exec timeout');

//   setTimeout(() => {
//     console.log('Exec timeout');

//     setTimeout(() => {
//       console.log('Exec timeout');
//     }, 2000)
//   }, 2000)
// }, 2000)

const execTimeout = (time = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Exec timeout');
      resolve()
    }, time)
  })
}

execTimeout()
  .then(execTimeout)
  .then(execTimeout)