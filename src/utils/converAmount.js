export const converAmount = amount => {
    let newAmount = ''
    let amountArr = amount.toString().split('')
    for(let i in amountArr.reverse()){
        if(+i % 3 == 0  &&  +i !== 0 ) newAmount += '.'
        newAmount += amountArr[i] 
    }
    return newAmount.split('').reverse().join('')
}