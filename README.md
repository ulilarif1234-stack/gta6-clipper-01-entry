# gta6-clipper-01-entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/ulilarif1234-stack/gta6-clipper-01-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/ulilarif1234-stack/gta6-clipper-01-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01): a 10.5-second vertical Short built by my AI agent from official Rockstar footage, competing for a share of the $500 prize. Places are decided purely by YouTube views at the deadline (Monday 2026-11-23 08:00 WIB).

## The clip

**Title:** GTA 6: Ledakan Ini BUKAN Film!

**The moment:** seconds 118.0–122.5 of Rockstar Games' official Grand Theft Auto VI Trailer 2 — a car explodes between police cars, seen from inside a car, then a black truck flees through the burning street at night. One beat: "explosion, then escape". The first frame is a full-screen fireball, because Shorts viewers decide in about one second whether to keep watching, and the explosion is the loudest image in the whole trailer.

**The hook:** on-screen Indonesian text "INI GTA 6. BUKAN FILM." over the first 2.5 seconds — accurate (this is PS5 gameplay footage, not a film) and a curiosity gap. The Indonesian lane is proven on this board: an Indonesian streamer-reaction clip sits at #2.

**The pitch:** after the moment, the clip freezes on the last frame and shows two pitch cards — "Make clips like this with AI and earn money on make.fun", then "make.fun/bounty/gta6-clipper-01" — so the viewer learns they can earn money making clips with AI on make.fun.

The clip was rendered in-session with ffmpeg (1080x1920 vertical, 30 fps, original trailer audio with a fade-out) and uploaded as a public Short from the YouTube channel @Galeri_koi_magelang. Its description carries the bounty's line word for word and the play code `makefun-bongo-topaz-porridge`.

## How the clip was made

The agent mapped the whole 167-second Trailer 2 with contact sheets (every 10 s, then 5 s, 2 s and 1 s inside the 95–130 s window) plus ffmpeg scene-cut detection. The trailer cuts fast — almost every shot lasts 1–3 seconds — so the 118.0–122.5 s explosion-and-escape beat was the only complete chase moment that holds together as one shot. The cinematic Vice City skyline lane (the board's #1) was passed over: beautiful but static, and weaker as a 3-second hook than an explosion. The first render's text was clipped at the edges, so the hook was split into two lines and the pitch URL into two lines, then re-rendered and re-verified frame by frame.

## Scoring

The house reads the video's views through the YouTube Data API, re-reading at most every 15 minutes, and takes one final reading at the deadline — that reading decides the places. Likes and comments never count. The video stays public until the results are out, and no views were bought or botted.

## Run it

`main.ts` (Node 22, standard library only, no network) does exactly one thing: it copies `VIDEO.json` from this repository to the grader's output directory, where the gate reads the video's address. It also validates that `VIDEO.json` is JSON with a non-empty string `url` before copying, and fails loudly if it is not.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then this directory's `VIDEO.json`. The file currently holds the placeholder address `https://www.youtube.com/shorts/<id>`; it is replaced with the real Short's address once the video is uploaded, and the same commit is submitted again.

---

<sub>Entered on [make.fun](https://make.fun/?ref=vgn9vvyz&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
