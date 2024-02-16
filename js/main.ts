const input = document.querySelector("#input")! as HTMLTextAreaElement;
const code = document.querySelector("#code")! as HTMLTextAreaElement;
const button = document.querySelector("#button")!;
const output = document.querySelector("#output")! as HTMLTextAreaElement;

const run = () => {
    console.log("started running")
    let out_str = "";
    let input_lines = input.value.split("\n");
    let readline_l = 0;
    const println = (s: string) => { out_str += `${s}\n`; output.value = out_str };
    const readline = (): string => {
        return input_lines[readline_l++]
    }
    const main = new Function("println", "readline", code.value);
    main(println, readline);
    console.log("finished running")
};

button.addEventListener("click", run);

export default 0;