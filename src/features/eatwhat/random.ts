export function randomInt(maxExclusive: number) {
  if (maxExclusive <= 0) return 0
  try {
    const arr = new Uint32Array(1)
    crypto.getRandomValues(arr)
    return arr[0] % maxExclusive
  } catch {
    return Math.floor(Math.random() * maxExclusive)
  }
}

export function randomId(prefix = "id") {
  return `${prefix}_${Date.now().toString(36)}_${randomInt(1_000_000).toString(36)}`
}

