/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "love",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}yotsuba`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/4TLYvKWI2mgAAAPo/nakano-yotsuba-smile.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `⚡ *ᒪᗝᐯᗴ ᗷᗝ丅* ⚡\n\n🍀 *Description: A WhatsApp Bot With Rich NSFW features based on ᒪᗝᐯᗴ ᗷᗝ丅.*\n\n🌐 *OFFICIAL BOT URL: https://github.com/yashcybrot* \n\n 🌟 *INSTAGRAM: https://instagram.com/mr._hacktivist* \n\n 👾 *BOT URL:https://github.com/yashcybrot* \n`,
			}
		);
	};
}
