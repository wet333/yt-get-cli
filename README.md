# yt-get-cli
This Node.js application allows you to download all the videos in a YouTube playlist to your computer.

---

## Node.js
To get started with using `yt-get-cli`, a Node.js package for downloading YouTube videos and playlists, follow the steps below:

### Installation

1. Open a terminal or command prompt.
2. Run the following command to install `yt-get-cli` globally:

```bash
npm install -g yt-get-cli
```

### Usage

Once `yt-get-cli` is installed, you can use it to download YouTube videos or playlists.

To download a video or playlist, run one of the following commands in your terminal:

```bash
yt-get video "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
```
Replace `YOUR_VIDEO_ID` with the actual ID of the YouTube video you want to download.

```bash
yt-get playlist "https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID"
```
Replace `YOUR_PLAYLIST_ID` with the ID of the YouTube playlist you want to download.

### Output

By default, `yt-get-cli` creates a `/music` folder in the current directory and stores all downloaded `.mp3` files there. The downloaded files will have the same names as the corresponding YouTube videos or playlist items.
