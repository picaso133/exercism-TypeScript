export function decodedValue(colors: string[]) {
    const manufacturersColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
    return manufacturersColors.indexOf(colors[0]) * 10 + manufacturersColors.indexOf(colors[1])
}
