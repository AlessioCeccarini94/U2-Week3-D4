const headersKey = "IKwwQwMZbAXvFycraVZOQg6Fr0wfcFeuP2bpaMYd5XR5p1egBlMswGIR"
const loadURL1 = "https://api.pexels.com/v1/search?query=hamsters"
JSON.stringify(loadURL1)

const loadImg = function () {
  const loadBtn = document.getElementById("loadBtn")
  loadBtn.addEventListener("click", function () {
    fetch(loadURL1, {
      headers: { authorization: headersKey },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`Errore${res.status}`)
        }
      })
      .then((data) => {
        console.log(data)
        console.log(data.photos)
        const allImgs = document.querySelectorAll(".card img")
        allImgs.forEach((img, i) => {
          allImgs[i].setAttribute("src", data.photos[i].src.medium)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  })
}
loadImg()

const loadURL2 = "https://api.pexels.com/v1/search?query=tigers"
JSON.stringify(loadURL2)

const loadSecondImg = function () {
  const loadSecondBtn = document.getElementById("loadSecondBtn")
  loadSecondBtn.addEventListener("click", function () {
    fetch(loadURL2, {
      headers: { authorization: headersKey },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`Errore${res.status}`)
        }
      })
      .then((data) => {
        console.log(data)
        console.log(data.photos)
        const allImgs = document.querySelectorAll(".card-img-top")
        allImgs.forEach((img, i) => {
          if (data.photos[i]) {
            img.src = data.photos[i].src.medium
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  })
}
loadSecondImg()

const hide = function () {
  const hideBtns = document.querySelectorAll(".btn-outline-secondary")

  hideBtns.forEach((btn, i) => {
    btn.addEventListener("click", (event) => {
      console.log(hideBtns)
      card = event.target.closest(".card")
      if (card) {
        card.classList.add("d-none")
      }
    })
  })
}
hide()
