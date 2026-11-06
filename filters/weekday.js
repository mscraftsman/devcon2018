export default (value) => {
    const date = new Date(value)
    const options = { weekday: 'long' }
    return date.toLocaleDateString('en-UK', options)
} 