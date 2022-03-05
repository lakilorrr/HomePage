import { useEffect, useState } from 'react'

export default function useDebounce(realTimeValue, delay) {
    const [debounceValue, setDebounceValue] = useState(realTimeValue)
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(realTimeValue)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [realTimeValue, delay])
    return debounceValue
}
