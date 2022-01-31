export function decodedResistorValue(colors: string[]) {
  const manufacturersColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
  const val1 = manufacturersColors.indexOf(colors[0]) * 10
  const val2 = manufacturersColors.indexOf(colors[1])
  const val3 = manufacturersColors.indexOf(colors[2])
  if(val3 === 0 ){
    return val1 + val2 + ' ohms'
  } else {
    if(val3 < 2) {
      return (val1 + val2) * 10 ** val3 + ' ohms'
    } else {
      return ((val1 + val2) * 10 ** val3) / 1000 + ' kiloohms'
    }
  }
}
