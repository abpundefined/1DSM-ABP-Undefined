
async function loadHeader() {
    const espacoDoMeuHeader = document.querySelector("#header-socket")
    const header = await fetch("../Layout/header.html")
    const headerText = await header.text()
    espacoDoMeuHeader.innerHTML = headerText
}

loadHeader()

async function loadFooter() {
    const espacoDoMeuFooter = document.querySelector("#footer-socket")
    const footer = await fetch("../Layout/footer.html")
    const footerText = await footer.text()
    espacoDoMeuFooter.innerHTML = footerText
}

loadFooter()