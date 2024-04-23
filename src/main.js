var container = document.getElementsByClassName('container');
var btn1 = document.getElementById("clk-btn");
var i = 0;
var randomList = ['You clicked me!', 'Oh, that hurts', 'STOP!', 'Yamete kudasai', 'Bro PLease!'];
btn1 === null || btn1 === void 0 ? void 0 : btn1.addEventListener("click", function (event) {
    if (btn1) {
        if (i = 0)
            btn1.innerHTML = 'Hello, World!';
        else
            btn1.innerHTML = randomList[Math.floor(Math.random() * 1000) % randomList.length];
    }
    i++;
    const caption = document.createElement('p');
    const textnode = document.createTextNode(`You Clicked Me ${i} time${i > 1 ? 's' : ''}`);
    caption.appendChild(textnode);
    // Hola






    document.getElementById("container").append(caption);
});
