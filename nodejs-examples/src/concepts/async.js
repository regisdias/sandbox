/**
 * Topic 1: Asynchronous Programming
 * 
 * Demonstrates Callbacks, Promises, and Async/Await.
 */

// 1. Callback
function fetchDataCallback(callback) {
    setTimeout(() => {
        callback(null, "Data received via Callback");
    }, 500);
}

// 2. Promise
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received via Promise");
        }, 500);
    });
}
function fetchDataPromiseError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Promise rejection error"));
        }, 500);
    });
}

// 3. Async/Await
async function fetchDataAsync() {
    try {
        const data = await fetchDataPromise();
        console.log("Async/Await:", data);
    } catch (error) {
        console.error("Async/Await Error:", error);
    }
}

// Execution
console.log("--- Async Programming Start ---");

fetchDataCallback((err, data) => {
    if (err) console.error(err);
    else console.log("Callback:", data);
});

fetchDataPromise()
    .then(data => console.log("Promise .then:", data))
    .catch(err => console.error(err));

fetchDataAsync();

console.log("--- Async Programming End (Async ops pending) ---");
