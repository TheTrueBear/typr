if (name == "") {
    window.location.href = "msg.others.repl.co"
}

const msg_in = new Audio("../../../res/audio/ding.mp3")

function run() {
    // Sockets
    const socket = io('https://DatcordServer.pandathebear.repl.co')

    socket.on('msg', data => {
        console.log(data)

        addMessage(data)
    })

    // Code
    const tbox = document.getElementById("take-inp")
    const send = document.getElementById('send')
    const msgArea = document.getElementById("msg-cont")

    function addMessage(msg) {

        // Ping the person that is messagedd
        if (msg.includes("@" + name)) {
            msg_in.play()
        }

        // Set the text
        let text = document.createTextNode(msg)
        let br = document.createElement("br")

        msgArea.appendChild(text)
        msgArea.appendChild(br)

        msgArea.scrollTop = msgArea.scrollHeight

    }

    send.addEventListener('submit', e => {
        e.preventDefault()
        const msg = tbox.value
        socket.emit('send-msg', name + ":  " + msg)
        addMessage("You > " + msg)
        tbox.value = ''
    });
}

run()
