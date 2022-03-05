import axios from 'axios'

export const getTodayMaterial = () => {
    const date = new Date()
    const day = date.toLocaleDateString('en-US', { weekday: 'long' })
    return new Promise((resolve, reject) => {
        axios
            .get(`https://genshin-app-api.herokuapp.com/api/generalinfo/materials/${day}`)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export const getCharacterDetail = name => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://genshin-app-api.herokuapp.com/api/characters/info/${name}?infoDataSize=all`)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}
