const inputText = document.getElementById('text-input')
const memeUploadBtn = document.getElementById('meme-insert')
const memeImage = document.getElementById('meme-img')
const memeText = document.getElementById('meme-text')

function insertText(e) {
    memeText.innerText = e.target.value
}
inputText.addEventListener('keyup', insertText)

function memeUpload(e) {
    let previewImg = URL.createObjectURL(e.target.files[0]);
    memeImage.innerHTML = `<img id="meme-image" src="${previewImg}">`
}
memeUploadBtn.addEventListener('change', memeUpload)

const buttons = document.getElementById('buttons')
const memeContainer = document.getElementById('meme-image-container')
function addBorder(e) {
    let theClass = e.target.id
    if (theClass !== 'buttons') {
        memeContainer.className = `${theClass}`
    }
}
buttons.addEventListener('click', addBorder)

const preloadedMeme = document.getElementById('pre-meme')
function addPreloadedMeme(e) {
    const getImg = document.getElementsByClassName('preview-img')[0]
    const theImg = e.target.src
    if (getImg === 'undefined') {
        getImg.src = theImg
    }
    if (getImg !== 'undefined') {
        memeImage.innerHTML = `<img src="${theImg}" id="meme-image" width="100%" height="100%">`
    }
}
preloadedMeme.addEventListener('click', addPreloadedMeme)