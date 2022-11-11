export const tableData = (users, absensis) => {
    absensis.map((absensi) => {
        const user = users.find((users) => users.nip === absensi.nip)
        absensi['username'] = user.nama
        absensi['time'] = timeConvertToString(absensi.createdAt)
    })

    return absensis
}

const timeConvertToString = (time) => {
    const date = new Date(time)

    return date.toString()  
}

export const timeCompare = (time, timeComparison) => {
    const date = new Date(time)
    const dateComparison = new Date(timeComparison)

    console.log(date < dateComparison)
    if(date < dateComparison) 
        return 1
    else
        return -1
}