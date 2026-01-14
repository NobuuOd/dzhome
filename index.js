let massive = [2, 3, 6];
let proizvedenie = 1;
function calce(massive) {
    for (let i = 0; i < massive.length; i++) {
        proizvedenie *= massive[i];
    }
    console.log(proizvedenie);
}
calce(massive);