/**
 * Topic 3: Event Loop & Non-Blocking I/O
 * 
 * Demonstrates execution order: Sync -> Microtasks (Promises/process.nextTick) -> Macrotasks (setTimeout/setImmediate)
 */

console.log('1. Start (Sync)');

setTimeout(() => {
    console.log('6. setTimeout (Macrotask)');
}, 0);

setImmediate(() => {
    console.log('7. setImmediate (Macrotask - Check Phase)');
});

Promise.resolve().then(() => {
    console.log('4. Promise (Microtask)');
});

process.nextTick(() => {
    console.log('3. process.nextTick (Microtask - high priority)');
});

console.log('2. End (Sync)');

/**
 * Expected Order:
 * 1. Start
 * 2. End
 * 3. process.nextTick
 * 4. Promise
 * 6. setTimeout (Timer Phase)
 * 7. setImmediate (Check Phase)
 * Note: setTimeout and setImmediate order can vary depending on I/O cycle context, but generally Timer runs before Check loop.
 */
