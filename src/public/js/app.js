const socket = new WebSocket(`ws://${window.location.host}`); // connect to server

socket.addEventListener("open", () => { // when connection is open
    console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
    console.log("Just got this: ", message.data, " from the server.");
})

socket.addEventListener("close", () => {
    console.log("Disconnected from Server ❌");
})