const socket = io('https://DatcordServer.pandathebear.repl.co')
const form   = document.getElementById('signin')
const text   = document.getElementById('name')
const pass   = document.getElementById('pass')

var name = localStorage.getItem('user-name')

socket.on('login', name => {
  localStorage.setItem('user-name', name)
  window.location.replace("pages/msging/msging.html")
})
socket.on('sign-up', data => {
  alert("You just made an account with username " + data[0] + " and password " + data[1] + ".")
  localStorage.setItem('user-name', name)
  window.location.replace("pages/msging/msging.html")
})
socket.on('log-fail', msg => {
  alert(msg)
})

form.addEventListener('submit', e => {

    e.preventDefault();

    /*
    If you put valid data
    */
    if (text.value.length < 8 or text.value.length > 32) {
        text.value = ""
        text.setAttribute('placeholder', 'Must be at least 8 characters, and at most 32!')
        return
    }
    if (pass.value.length < 8) {
      pass.value = ''
      text.setAttribute('placeholder', 'Password must be at least 8 characters!')
      return
    }

    name = text.value
    code = pass.value
    code.value = ''
    //localStorage.setItem('user-name', name)

    socket.emit('auth', [name, code])

    //window.location.replace("pages/msging/msging.html")

})
