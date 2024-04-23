const btn1: HTMLElement | null = document.getElementById("clk-btn");
const randomList: string[] = ['You clicked me!', 'Oh, that hurts', 'STOP!', 'Yamete kudasai', 'Bro PLease!'];

btn1?.addEventListener("click", function (event: Event) {
    if (btn1) {
        if (btn1.innerHTML == 'Click Me')
            btn1.innerHTML = 'Hello, World!';
        else
            btn1.innerHTML = randomList[Math.floor(Math.random() * 1000) % randomList.length];
    }
});