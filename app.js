'use strict';
(()=>{
    function clock() {
        const d = new Date();
        const year = d.getFullYear();
        const mt = d.getMonth() + 1;
        const dt = d.getDate();
        const dayNum = d.getDay();
        const weeks = ['日','月','火','水','木','金','土'];
        const day = weeks[dayNum];

        const month = mt < 10 ? '0' + mt : mt;
        const date = dt < 10 ? '0' + dt : dt;

        const clockDate = document.getElementById('clock_date');
        const todayDate = `${year}年${month}月${date}日` ;
        clockDate.textContent = todayDate;
        
        const hr = d.getHours();
        const min = d.getMinutes();
        const sec = d.getSeconds();

        const hour = hr < 10 ? '0' + hr : hr; 
        const minute = min < 10 ? '0' + min : min; 
        const second = sec < 10 ? '0' + sec : sec;

        const currentTime = `${hour} : ${minute} : ${second}`;
        const clockTime = document.getElementById('clock_time');
        clockTime.textContent = currentTime;
    }

    setInterval(clock,1300);
    


})();