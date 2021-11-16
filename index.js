//const socket = io('https://DatcordServer.pandathebear.repl.co')
const form   = document.getElementById('signin')
const text   = document.getElementById('name')

var name = localStorage.getItem('user-name')

form.addEventListener('submit', e => {

    e.preventDefault();

    if (text.value.length < 8) {
        text.value = ""
        text.setAttribute('placeholder', 'Must be at least 8 characters!')
        return
    }

    name = text.value
    text.value = ""
    localStorage.setItem('user-name', name)
    window.location.replace("pages/msging/msging.html")

})
