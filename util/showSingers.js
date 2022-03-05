export const showSingers = singerList => {
    if (singerList.length === 1) return singerList[0].name
    const arr = []
    for (let item of singerList) {
        arr.push(item.name)
    }
    return arr.join('/')
}
