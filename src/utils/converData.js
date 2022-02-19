export const ConvertDate = date => {
    if(!date) return ''
    const dateNumber = new Date(date).getDate()
    const dateToday = new Date().getDate()
    date = date.split(/[TZ]/g).slice(0,2)
    date[0] = date[0].split('-').join('/')
    if(dateNumber == dateToday) {
        date[0] = 'today'
    }else if((dateToday - dateNumber) == 1){
        date[0] = 'yesterday'
    }
    date[1] = date[1].split("").slice(0,5).join('').split(':')
    date[1][0] = +(date[1][0] - 3)
    date[1] = date[1].join(':')
    return date.join(' ')
}