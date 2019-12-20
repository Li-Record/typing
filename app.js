(function() {
  const typingStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  const typing = document.getElementById('typing');
  function cursorFlicker () {
    const cursor = document.querySelector('.cursor');
    setInterval(() => {
      cursor.classList.toggle('cursor_active');
    }, 500);
  }

  function runTyping (str,time) {
    let len = str.length;
    let outputStr = '';
    let speed = time / len;
    
    for(let i = 0; i < len; i++){
      setTimeout(() => {
        outputStr = str.slice(0, i + 1);
        typing.innerHTML = outputStr + '<span class="cursor"></span>';
        cursorFlicker();
      }, i * speed)
    }
  }
  (function(time, resetTime) {
    runTyping(typingStr, time);
    setInterval(() => {
      runTyping(typingStr, time);
    }, time + resetTime);
    
  })(4500, 3000);
  
  
})();