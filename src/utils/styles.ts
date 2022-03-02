export const getLinearGradient = (
  color1: string,
  color2: string,
  direction = "to right"
) => `linear-gradient(${direction}, ${color1}, ${color2})`
