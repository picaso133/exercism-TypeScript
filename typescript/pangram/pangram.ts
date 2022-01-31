export function isPangram(s:string):boolean {
  return (s.toLowerCase().match(RegExp(/([a-z])(?!.*\1)/g)) || []).length === 26;
}
