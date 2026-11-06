export default (value) => {
    const date = new Date(value)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-UK', options)
} 