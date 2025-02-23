document.addEventListener("alpine:init", () => {
    Alpine.data("nameGenerator", () => ({
        names: ["Khoi", "Leo", "Thomas", "Natty", "Osmand", "Jess", "Aaron", "Jude", "Sam", "Rami"],
        randomName: "Click the button to see a name!",
        generateName() {
            this.randomName = this.names[Math.floor(Math.random() * this.names.length)];
        }
    }));
});