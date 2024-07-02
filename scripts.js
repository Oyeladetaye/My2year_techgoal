
document.addEventListener('DOMContentLoaded', function() {
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
        
        document.getElementById('currentTime').textContent = utcTime;
        document.getElementById('currentDay').textContent = dayOfWeek;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 60000); // Update every minute
});
    