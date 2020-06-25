<p align="center"><img src="https://api.aposoftworks.com/storage/image/XFnODBKzBXfpcTmwgzILNBRHXpPgXZpMHxgPV9h2.png" width="256"></p>

> Not in working state yet

# Catbot

Cryptocurrency automatic trader bot, or just catbot. Is a modular bot that can work with any market API or strategy. Made to be easily expanded upon, this is a personnal project I intended to maintain public.

## Options

### Strategies

Strategies are functions that will return booleans in wheter the bot can buy or sell, they will be run everytime the bot updates the current currency price. They can be based on [market strategies](https://en.wikipedia.org/wiki/Trading_strategy) or you can make up your own.

### Sources

Sources are a adapter to market APIs, such as Binance. An interface to communicate with them without worrying about implementation.

### Extensions

Extensions are addons that you can attach to the main bot, we already bundle some out of the box, such as screenie and logger.

#### List of extensions

- screenie

Screenie allows you to follow up with your bot latest actions and statistics within the terminal window.

- logger

Logger makes sure you don't miss anything that happens within your bot. Such as buy logs, sell, balance, errors.