#!/usr/bin/env node

const ytGet = require("yt-get");

function main() {
	const option = process.argv[2].toString();
	const URL = process.argv[3].toString();

	if (option === "playlist") {
		ytGet.downloadPlaylist(URL);
	}

	if (option === "video") {
		ytGet.downloadVideo(URL);
	}
}

main();
