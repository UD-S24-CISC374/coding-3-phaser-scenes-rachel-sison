import Phaser from "phaser";

export default class summerScene extends Phaser.Scene {
    constructor() {
        super({ key: "summerScene" });
    }
    create() {
        const score = this.registry.get("score");
        const { width, height } = this.sys.game.config;
        const screenWidth: number = Number(width);
        const screenHeight: number = Number(height);
        this.add
            .image(screenWidth / 2, screenHeight / 2, "summer")
            .setDisplaySize(screenWidth, screenHeight)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("fallScene");
                this.registry.set("score", score + 10);
            });

        this.add.text(350, 150, "Summer Scene");
        this.add.text(50, 50, "Score: " + score, {
            fontSize: "24px",
            color: "#000000",
        });
    }
}
