// Call-back function
function add(a, b, callBack) {
    const res = a + b;
    callBack(res);
}
function showRes(res) {
    console.log(`Result: ${res}`);
}

// add(2, 3, showRes)

