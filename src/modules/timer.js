const timer = (deadline) => {
  const timerDays = document.querySelectorAll(".count_1>span");
  const timerHours = document.querySelectorAll(".count_2>span");
  const timerMinutes = document.querySelectorAll(".count_3>span");
  const timerSeconds = document.querySelectorAll(".count_4>span");

  let idUpdateCLock;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    let days = Math.floor(timeRemaining / 60 / 60 / 24);

    return { timeRemaining, days, hours, minutes, seconds };
  };
  const updateCLock = () => {
    let getTime = getTimeRemaining();

    const addZero = (elem) => {
      if (String(elem).length === 1) {
        return "0" + elem;
      } else {
        return String(elem);
      }
    };

    for (let i = 0; i < timerDays.length; i++) {
      timerDays[i].textContent = addZero(getTime.days);
      timerHours[i].textContent = addZero(getTime.hours);
      timerMinutes[i].textContent = addZero(getTime.minutes);
      timerSeconds[i].textContent = addZero(getTime.seconds);
    }

    if (getTime.timeRemaining < 0) {
      clearInterval(idUpdateCLock);
      timerDays.textContent = addZero(0);
      timerHours.textContent = addZero(0);
      timerMinutes.textContent = addZero(0);
      timerSeconds.textContent = addZero(0);
    }
  };
  updateCLock();

  idUpdateCLock = setInterval(updateCLock, 1000);
};

export default timer;
