const input = document.querySelector("#input") as HTMLTextAreaElement;
const button = document.querySelector("#button") as HTMLTextAreaElement;
const output = document.querySelector("#result") as HTMLTextAreaElement;
button.addEventListener("click", () => {
    const content = input.value;
    const lines = content.split("\n");
    const height = lines.length;
    const width = lines.reduce((acc, c) => Math.max(acc, c.length), 0);
    {
        //全角環境版
        let result = "";
        result += "┏";
        for (let i = 0; i < width - 2; i++) {
            result += "━";
        }
        result += "┓\n"
        lines.forEach((s) => {
            result += "┃　";
            result += s;
            result += "　".repeat(Math.max(width - (s.length + 3), 0));
            if (0 <= width - (s.length + 3)) { result += "┃" };
            result += "\n";
        });
        result += "┗";
        for (let i = 0; i < width - 2; i++) {
            result += "━";
        }
        result += "┛";
        output.value = result;
    }
})