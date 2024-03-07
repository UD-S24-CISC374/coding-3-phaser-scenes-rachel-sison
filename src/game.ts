import Phaser from "phaser";
import { CONFIG } from "./config";
import MainScene from "./scenes/mainScene";
import winterScene from "./scenes/winterScene";
import springScene from "./scenes/springScene";

window.addEventListener("load", () => {
    const game = new Phaser.Game(CONFIG);
    game.registry.set("score", 0);
    console.info("Started main game:", game);
});
