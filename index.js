let  generateArrayOfCharsFromAscii  = (from, to) => {
    const n = []
    for (let i = from; i <= to; i++) {
      n.push(i)
    }
    return n
  }

const rsg = (length = 10,upperCase = false,lowerCase=true,specialChars=false,numbers=true) => {

    let genFrom = []
    if(upperCase) genFrom = genFrom.concat(generateArrayOfCharsFromAscii(65, 90))
    if(lowerCase) genFrom =genFrom.concat(generateArrayOfCharsFromAscii(97, 122))
    if(numbers) genFrom = genFrom.concat(generateArrayOfCharsFromAscii(48, 57))
    if(specialChars) genFrom = genFrom.concat(generateArrayOfCharsFromAscii(33, 47)).concat(generateArrayOfCharsFromAscii(58, 64)).concat(generateArrayOfCharsFromAscii(91, 96)).concat(generateArrayOfCharsFromAscii(123, 126))

    const random = []
    for (let i = 0; i < length; i++) {
        const luckyChar = genFrom[Math.floor(Math.random() * genFrom.length)]
        random.push(String.fromCharCode(luckyChar))
    }

    return random.join('')
    
}


module.exports = rsg