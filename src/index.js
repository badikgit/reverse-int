module.exports = function reverse (n) {
    return Number(String(n).split('').reverse().join(''))+(n<0?1:0);
}
