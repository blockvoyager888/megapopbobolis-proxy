(Modified from [https://github.com/IceTank/mineflayer-proxy-inspector](https://github.com/IceTank/mineflayer-proxy-inspector))
# Megapopbobolis Base Proxy
Official secure custom proxy for [2b2t.group](2b2t.group)'s megapopbobolis base.
High level Minecraft proxy with Node.js API.
Works with 1.12.2

# Install
1. Install [git](https://git-scm.com/)
2. Install [yarn](https://yarnpkg.com/) (npm may not work)
2. Run `yarn` to build the proxy

# Features
- Restrict player to base area
- Ban actions such as having TNT or using flint & steel
- Bot death handling (Spawn to secure spot, and kick player)
- World persistance (World is loaded from the bots memory when joining)
- Real time packet interception and editing
- 'Spactator' mode. See the bot running around as a fake player.
- Multi player support. Can give control off the connection to any connected client.

# FAQ

Q. I got the "too many packets in a bundle" error, how do I fix this?
A. There is no clear solution right now, but usually relogging works.