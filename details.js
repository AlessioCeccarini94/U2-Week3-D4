const headersKey = "IKwwQwMZbAXvFycraVZOQg6Fr0wfcFeuP2bpaMYd5XR5p1egBlMswGIR"

const loadURL1 = "https://api.pexels.com/v1/search?query=hamsters"
JSON.stringify(loadURL1)

const loadURL2 = "https://api.pexels.com/v1/search?query=tigers"
JSON.stringify(loadURL2)

const url = location.search

const allParameters = new URLSearchParams(url)
