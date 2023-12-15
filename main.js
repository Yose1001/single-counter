    let counterId = 1;

    document.addEventListener('DOMContentLoaded', function () {
      createCounter();
    });

    function createCounter() {
      const counterContainer = document.getElementById('counter-1');

      const btnInc = document.getElementById('btn-inc');
      const btnDec = document.getElementById('btn-dec');
      const btnClr = document.getElementById('btn-clr');

      btnInc.addEventListener('click', function () {
        incrementCounter(counterId);
      });

      btnDec.addEventListener('click', function () {
        decrementCounter(counterId);
      });

      btnClr.addEventListener('click', function () {
        resetCounter(counterId);
      });
    }

    function incrementCounter(id) {
      const countElement = document.getElementById('count-' + id);
      countElement.textContent = parseInt(countElement.textContent) + 1;
    }

    function resetCounter(id) {
      const countElement = document.getElementById('count-' + id);
      countElement.textContent = 0;
    }

    function decrementCounter(id) {
      const countElement = document.getElementById('count-' + id);
      const currentCount = parseInt(countElement.textContent);
    
      if (currentCount > 0) {
        countElement.textContent = currentCount - 1;
      }
    }
    