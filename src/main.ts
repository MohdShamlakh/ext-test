let btn1: HTMLElement | null = document.getElementById("clk-btn");

btn1?.addEventListener("click", () => {
  if (btn1) {
    btn1.innerHTML = "Hello World";
  }
});
