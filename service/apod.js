import axios from 'axios'

export const getAPODUrl = () => {
    const startDate = new Date()
    const dayNum = startDate.getDate() - 7
    startDate.setDate(dayNum)
    const formatDate = startDate.toISOString().substring(0, 10)
    return new Promise((resolve, reject) => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=_date=${formatDate}`)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}
