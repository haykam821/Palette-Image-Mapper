#!/usr/bin/env node

const yargs = require("yargs");
const pim = require(".");

yargs.command("*", "", builder => {
	builder.option("output", {
		alias: "o",
	});
}, argv => {
	// soon™
});

yargs.argv;