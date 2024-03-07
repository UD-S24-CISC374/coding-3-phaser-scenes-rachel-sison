import Phaser from "phaser";

export default class winterScene extends Phaser.Scene {
    constructor() {
        super({ key: "winterScene" });
    }
    create() {
        const score = this.registry.get("score");
        const { width, height } = this.sys.game.config;
        const screenWidth: number = Number(width);
        const screenHeight: number = Number(height);
        this.add
            .image(screenWidth / 2, screenHeight / 2, "winter")
            .setDisplaySize(screenWidth, screenHeight)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("springScene");
                this.registry.set("score", score + 10);
            });
        this.add.text(350, 150, "Winter Scene");
        this.add.text(50, 50, "Score: " + score, {
            fontSize: "24px",
            color: "#000000",
        });
    }
}
