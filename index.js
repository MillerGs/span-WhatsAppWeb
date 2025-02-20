/**
Modifica las variables message, times y delay;
También puedes modificar la línea 21;
Copia y pega el codigo en la consola del navegador // Ingresa a WhatsAppWeb y selecciona el chat deseado. Luego presiona Enter.
**/
(function sendMessages() {
    let message = "Cuenta regresiva: "; // Mensaje a enviar
    let times = 5; // Número de veces a repetir
    let delay = 1000; // Tiempo entre cada mensaje (en milisegundos)

    let textBox = document.querySelector("div[contenteditable='true'][data-tab='10']");
    if (!textBox) {
        console.log("No se encontró la caja de texto del chat.");
        return;
    }

    let sendMessage = (count) => {
        if (count === 0) return;

        textBox.focus();
        document.execCommand("insertText", false, message + count); // Insertar texto correctamente
        textBox.dispatchEvent(new Event("input", { bubbles: true })); // Simular entrada

        setTimeout(() => {
            let sendButton = document.querySelector("button span[data-icon='send']")?.closest("button");
            if (sendButton) {
                sendButton.click(); // Hacer clic en el botón de enviar

                setTimeout(() => {
                    sendMessage(count - 1); // Llamar recursivamente hasta completar el bucle
                }, delay);
            } else {
                console.log("No se encontró el botón de enviar.");
            }
        }, 500);
    };

    sendMessage(times);
})();
