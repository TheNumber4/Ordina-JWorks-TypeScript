class Hello {
    private message: string;
    constructor(greeting: string) {
        this.message = greeting;
    }
    replaceMessage() {
        document.getElementById("welcome-text").innerHTML = this.message;
    }
}

let hello = new Hello("Hello");

hello.replaceMessage();
console.log('Test');