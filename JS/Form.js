class Form {
    constructor() {
        this.title = createElement("h2");

        this.nameField = createInput("Name");
        this.PlayButton = createButton("Play");
        this.ResetButton = createButton("Reset");

        this.PlayerGreeting = createElement("h3");
        this.Wait = createElement("h3");
        this.nameGreeting = createElement("h3");
    }

    display() {
        background(BackGroundOpener);

        this.title.html("Stick Runner Mania");
        this.title.position(300, 100);

        this.nameField.position(300, 200);
        this.PlayButton.position(365, 250);
        this.ResetButton.position(750, 10);

        this.PlayButton.mousePressed(() => {
            this.hide();

            this.nameGreeting.html("Hello " + this.nameField.value());
            this.nameGreeting.position(320, 160);
            this.PlayerGreeting.html("Welcome to StickRunnerMania");
            this.PlayerGreeting.position(230, 200);
            this.Wait.html("Waiting For Players");
            this.Wait.position(280, 240);

            Count = Count + 1;
            player.update(Count);
        });

        this.ResetButton.mousePressed(() => {
            player.update(0);
        })
    }

    hide() {
        this.title.hide();
        this.PlayButton.hide();
        this.nameField.hide();
    }

    hideGreetings() {
        this.nameGreeting.hide();
        this.Wait.hide();
        this.PlayerGreeting.hide();
    }
}
