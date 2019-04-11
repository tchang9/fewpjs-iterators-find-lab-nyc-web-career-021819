const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const firstWin = array.find(game => game.result === "W")
  return (firstWin ? firstWin.year : undefined)
}
