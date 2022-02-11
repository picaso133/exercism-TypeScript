export function hey(message: string): string {

  if (message.length === 0 || !message.trim())
    return "Fine. Be that way!"

  const question = message.trim().endsWith("?")
  const yell = message === message.toUpperCase() && /[a-z]/i.test(message)

  if (question && yell)
    return "Calm down, I know what I'm doing!"

  if (question)
    return "Sure."

  if (yell)
    return "Whoa, chill out!"

  return "Whatever."

}
