"use strict";

if (process.env.NODE_ENV === "production") {
	module.exports = require("./doyourthingui.prod.cjs");
} else {
	module.exports = require("./doyourthingui.dev.cjs");
}
