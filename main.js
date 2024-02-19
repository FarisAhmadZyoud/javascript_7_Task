let counters = [0, 0, 0, 0];
document.querySelector('.button-container').onclick = function(e) {

  const buttons = document.querySelectorAll('.button');

  for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === e.target) {
         console.log(this);
         console.log(e.target);
          counters[i]++; 
          const counterSpan = document.querySelectorAll('.button-container span')[i]; 
          counterSpan.textContent = counters[i]; 
          break; 
      }
  }
};
