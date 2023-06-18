const linkButton = document.getElementById('nextbutton');
let currentId = 1
function startNavigation() {
    linkButton.classList.remove("hidden")
    currentId = 1
    linkButton.querySelectorAll("a")[0].href = "#2"
}
function navigate(event) {
    if (currentId === 6) {
        linkButton.classList.add("hidden")
    }
    linkButton.querySelectorAll("a")[0].href = `#${currentId + 1}`
    currentId++
}