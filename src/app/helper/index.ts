export const starArray = (rating: number) => {
  const starArray = []
  const [whole, part] = parseFloat(String(Math.round(rating * 2) / 2)).toString().split('.')

  for (let i = 0; i < Number(whole); i++) starArray.push(100)
  if (part) starArray.push(50)
  for (let i = Number(whole); i < (part ? 4 : 5); i++) starArray.push(0);
  return starArray
}

export const setStar = (value: number) => {
  switch (value) {
    case 100:
      return '/fullStar.svg'
    case 50:
      return '/halfStar.svg'
    default:
      return '/empty.svg'
  }
}