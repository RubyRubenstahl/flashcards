// import something here

// "async" is optional
var hDate = require("human-date");
const {date:qDate}= require('quasar')
export default async ({Vue}) => {
  Vue.filter("humanizeDate", function (date) {
  
  return qDate.formatDate(date, 'ddd MMM Do, YYYY');
    
});
}
