let n = 5;

for (let i = 1; i <= n; i++) {
    let pattern = "";

    for (let j = 1; j <= n - i; j++) {
        pattern += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += "*";
    }

    console.log(pattern);
}