import inquirer from "inquirer"

export const entryPoint = async () => {
    const questions = [
        {
            name: "choice",
            type: "list",
            message: "Действие:",
            choices: [
                {
                    name: "Random module",
                    value: "random",
                },
                {
                    name: "Random swap module",
                    value: "random_swap",
                },
                {
                    name: "Bridge",
                    value: "bridge",
                },
                {
                    name: "Merkly",
                    value: "merkly",
                },
                {
                    name: "Baseswap",
                    value: "baseswap",
                },
                {
                    name: "Woofi",
                    value: "woofi",
                },
                {
                    name: "Uniswap",
                    value: "uniswap",
                },
                {
                    name: "Pancake",
                    value: "pancake",
                },
                {
                    name: "Odos",
                    value: "odos",
                },
                {
                    name: "Aave",
                    value: "aave",
                },
                {
                    name: "Mintfun",
                    value: "mintfun",
                },
                {
                    name: "L2Telegraph",
                    value: "l2telegraph",
                },
                {
                    name: "L2Telegraph Message",
                    value: "l2telegraph_message",
                },
                {
                    name: "Swap all stables to ETH",
                    value: "stable_to_eth",
                },
            ],
            loop: false,
        },
    ]

    const answers = await inquirer.prompt(questions)
    return answers.choice
}