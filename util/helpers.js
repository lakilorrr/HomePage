export const showSingers = singerList => {
    if (singerList.length === 1) return singerList[0].name
    const arr = []
    for (let item of singerList) {
        arr.push(item.name)
    }
    return arr.join('/')
}
export const getSessionStorage = (name) => {
    const val = sessionStorage.getItem(name)
    if (val) {
        return JSON.parse(sessionStorage.getItem(name))
    } else {
        if (name === 'topList') {
            return []
        }
        return {}
    }
}