# ManageMyScheduleBot

A lightweight Telegram bot and companion web UI to help create, manage, and track events directly within Telegram. This repository contains the web front-end pages and client-side scripts used for sharing invitations and managing events.

## Features

- Create and share event invitations
- View and manage event lists from a simple web UI
- Copy and share invitation links (WhatsApp, Telegram, Facebook)
- Static, easy-to-host HTML/CSS/JS pages for the dashboard and event views

## Tech stack

- HTML5
- CSS
- JavaScript

## Repository structure

- index.html — landing / overview page
- dashboard.html — dashboard UI
- events.html — event list view
- create-events.html — create event form
- invite.html — invitation sharing UI
- styles/ — stylesheets
- scripts/ — client-side JavaScript
- images/ — image assets

## Getting started

Prerequisites
- A modern web browser
- (Optional) A static file server for local testing (recommended)

Clone the repo

```
git clone https://github.com/mafindijr/managemyschedulebot.git
cd managemyschedulebot
```

Run locally

- Open index.html in your browser
- Or serve the files with a static server:

```
# using npm package `serve`
npx serve .
```

Notes about the Telegram bot backend

This repository appears to contain the front-end pages only. To integrate with a Telegram bot you will need a backend service that interacts with the Telegram Bot API (BotFather token). Typical backend responsibilities include:

- Managing event data (database or in-memory store)
- Receiving user commands or callbacks from Telegram
- Generating shareable invitation links used by the front-end pages
- Hosting the bot (polling or webhook configuration)

If you want, I can add example instructions or a starter backend (Node.js or Python) for connecting these pages to a Telegram bot.

## Customization

- Update styles in the styles/ folder
- Replace placeholder invite links in invite.html
- Add real screenshots to images/ and reference them in the README

## Contributing

Contributions are welcome. Open an issue or submit a pull request with improvements.

## Contact

GitHub: https://github.com/mafindijr

(There is no license file in this repository. Add a LICENSE if you wish to specify usage terms.)