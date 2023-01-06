import { Client } from "discord.js";

export default class Bot extends Client {
  constructor() {
    super({ intents: ["Guilds"] });
  }

  run() {
    this.login(process.env.DISCORD_TOKEN);
  }
}
