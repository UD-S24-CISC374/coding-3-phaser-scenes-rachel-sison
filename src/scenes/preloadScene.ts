import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("fall", "assets/img/fall.png");
        this.load.image("winter", "assets/img/winter.png");
        this.load.image("spring", "assets/img/spring.png");
        this.load.image("summer", "assets/img/summer.png");
    }

    create() {
        this.scene.start("MainScene");
    }
}
