const execTimeout = (time = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const exec = async () => {
  await execTimeout()
  console.log('exec timeout 1')

  await execTimeout()
  console.log('exec timeout 2')

  await execTimeout()
  console.log('exec timeout 3')
}

exec()