import axios from 'axios'

export const getVol = (category, word) => {
    const getUrl =
        category === 'All'
            ? `https://corpus.vocabulary.com/api/1.0/examples/random.json?maxResults=45&query=${word}`
            : `https://corpus.vocabulary.com/api/1.0/examples.json?maxResults=45&query=${word}&startOffset=0&domain=${category}`
    return new Promise((resolve, reject) => {
        axios
            .get(getUrl)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

