// convert amount to Notation money ej: 12000 to 12.000
export const converAmount = amount => {
    if(!amount) return ''
    let newAmount = ''
    let amountArr = amount.toString().split('')
    for(let i in amountArr.reverse()){
        if(+i % 3 == 0  &&  +i !== 0 ) newAmount += '.'
        newAmount += amountArr[i] 
    }
    return newAmount.split('').reverse().join('')
}