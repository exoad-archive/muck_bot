import { callTken } from '../../../../keys/keys.js'

export function randomMuck() {
    var arr = [
        "hop on muck",
        "muck time bruh",
        "HOP ON MUCK PLS",
        "hop on muck man",
        "pls hop on muck",
        "muck"
    ];
    return arr[Math.floor(Math.random()*arr.length)];
}

export function tokenCall() {
    return callTken();
}