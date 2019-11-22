export function isNull(inVar) {
  if (typeof inVar === "undefined") {
    return true;
  } else if (typeof inVar === "string") {
    if (inVar === "") {
      return true;
    }
  } else if (typeof inVar === "object") {
    if (inVar.length === 0) {
      return true;
    }
  } else if (Number.isInteger(inVar)) {
    if (inVar < 1) {
      return true;
    }
  } else if (inVar === null) {
    return true;
  }

  return false;
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
