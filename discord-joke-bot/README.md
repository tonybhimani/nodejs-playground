# Discord Joke Bot

This Discord bot tells funny Knock Knock jokes.

The foundation came from the discord-example-app by Shay DeWael - MIT LICENSE

https://github.com/discord/discord-example-app

I plan on adding in a question after the joke whether it was funny, or not!, and respond accordingly.

Also, randomizing the No Thanks selection when prompted to continue with the joke.

For you to get this running, start with this guide on Discord

https://discord.com/developers/docs/getting-started

Then if you're like me, someone without a public facing server, a reverse proxy, etc, read the part about ngrok

https://github.com/discord/discord-example-app

Quickie version assuming you have all the pieces in place

```
cd discord-joke-bot
npm install
npm run register
node app.js
ngrok http 3000
```

Once you have it running, in your Discord server just use the slash command `/joke` and get ready to laugh

Happy botting!