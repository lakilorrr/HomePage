import axios from 'axios'
export const getSearchResult = (query, page) => {
    const url = `/cloudsearch?keywords=${encodeURIComponent(query)}&limit=15&offset=${(page-1)*15}`
    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getTopList = () => {
    return new Promise((resolve, reject) => {
        axios
            .get('/playlist/detail?id=19723756')
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}
