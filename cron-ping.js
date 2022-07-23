const cron = require('node-cron');
// ...
//Schedule tasks to be on the server
cron.schedule('* * * * *', function(){
console.log('running a task every minute');
});
