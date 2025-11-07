const headersKey = "IKwwQwMZbAXvFycraVZOQg6Fr0wfcFeuP2bpaMYd5XR5p1egBlMswGIR"

const url = location.search
console.log(url)

const allParameters = new URLSearchParams(url)

const id = allTheParameters.get("id")
console.log(id)

const loadURL1 = "https://api.pexels.com/v1/search?query=hamsters"
JSON.stringify(loadURL1)

const loadURL2 = "https://api.pexels.com/v1/search?query=tigers"
JSON.stringify(loadURL2)
