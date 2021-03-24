const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost"
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT || 3003

const URL = `${SERVER_URL}:${SERVER_PORT}`
export default { URL }
