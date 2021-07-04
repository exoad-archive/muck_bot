import { callTken } from '../../../keys/keys.mjs'

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
export function noCall() {
    var arr = [
        "bruh type something",
        "cant use an empty command",
        "look at the list of commands bruh",
        "blind",
        "commands list is as follows bruh"
    ];
    return arr[Math.floor(Math.random()*arr.length)];
}

export function returncontext(y) {
    if(y == 3) {
        return "hop on muck"
    }
    return ""
}