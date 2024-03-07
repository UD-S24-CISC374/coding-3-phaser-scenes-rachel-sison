import Phaser from "phaser";
import { CONFIG } from "./config";

window.addEventListener("load", () => {
    const game = new Phaser.Game(CONFIG);
    game.registry.set("score", 0);
    console.info("Started main game:", game);
});
