import TimeAgo from "javascript-time-ago";

// Load locale-specific relative date/time formatting rules.
import en from "javascript-time-ago/locale/en";

// Add locale-specific relative date/time formatting rules.
TimeAgo.addLocale(en);

// Create relative date/time formatter.
const timeAgo = new TimeAgo("en-US");

const { date: qDate } = require("quasar");
export default async ({ Vue }) => {
  Vue.filter("humanizeDuration", function(date) {
    return timeAgo.format(new Date(date));
  });
};
