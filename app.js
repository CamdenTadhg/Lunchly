/** Express app for Lunchly. */

const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

// Parse body for urlencoded (non-JSON) data
app.use(bodyParser.urlencoded({ extended: false }));

nunjucks.configure("templates", {
  autoescape: true,
  express: app
});

app.use(routes);

/** 404 handler */

app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.render("error.html", { err });
});

module.exports = app;

// 2) add fullName method
// 1) write save reservations method

// 14) add search functionality
// 13) add functionality to display best customers
// 12) learn about getters and setters
// 11) create hidden notes functionality
// 10) turn fullName into a getter
// 9) create a getter/setter for numGuests
// 8) create a getter/setter for startAt
// 7) create a getter/setter for customerId
// 6) add a field for middle name
// 5) add a feature to edit existing reservations
// 4) show most recent reservation for customers on customer listing page (should also show customers with no reservations)
// 3) Learn about moment.js and change customer detail page to show most recent reservation with pretty version
// 2) write tests for a template-based Express app
// 1) add full-text search
