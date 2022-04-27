var values = [8, 7, 6, 5, 4, 3, 2, 1];

function ordena() {
    let begin = 0;
    let end = 8;
    let tmp;

    for (vezes = 0; vezes < 8; vezes++) {
        for (pos = begin; pos < end - 1; pos++) {
            if (values[pos] > values[pos + 1]) {
                tmp = values[pos];
                values[pos] = values[pos + 1];
                values[pos + 1] = tmp;
            }
        }
    }

}
ordena();
console.log("Vetor Ordenado");
console.log(values);a