class Form {
    constructor() {
        this.title = createElement("h2");
        this.nameField = createInput("Name");
        this.PlayButton = createButton("Play");
    }

    display() {
        background(BackGroundOpener);

        this.title.html("Stick Runner Mania");
        this.title.position(400, 100);

        this.nameField.position(400, 200);
        this.PlayButton.position(500, 250);

        this.PlayButton.mousePressed(() => {
            this.title.hide();
            this.nameField.hide();
        })
    }

    hide() {
        this.title.hide();
        this.PlayButton.hide();
        this.nameField.hide();
    }
}
