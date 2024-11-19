// Callback Hell Examples
function placeOrder(orderId, callback) {
    setTimeout(() => {
        console.log(`Order ${orderId} placed.`);
        callback(orderId);
    }, 1000);
}

function processPayment(orderId, callback) {
    setTimeout(() => {
        console.log(`Payment processed for order ${orderId}.`);
        callback(orderId);
    }, 1000);
}

function preparePackage(orderId, callback) {
    setTimeout(() => {
        console.log(`Package prepared for order ${orderId}.`);
        callback(orderId);
    }, 1000);
}

function shipPackage(orderId) {
    setTimeout(() => {
        console.log(`Order ${orderId} shipped.`);
    }, 1000);
}


// placeOrder(123, (orderId) => {
//     processPayment(orderId, (orderId) => {
//         preparePackage(orderId, (orderId) => {
//             shipPackage(orderId);
//         });
//     });
// });
