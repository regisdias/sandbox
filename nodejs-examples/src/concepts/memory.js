/**
 * Topic 5: Memory Management
 * 
 * Demonstrates memory usage inspection.
 */

function printMemoryUsage() {
    const used = process.memoryUsage();
    console.log("--- Memory Usage ---");
    for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
}

printMemoryUsage();

// Simulate memory allocation
let arr = [];
console.log("Allocating memory...");
for (let i = 0; i < 100000; i++) {
    arr.push({ data: new Array(100).fill("some data") });
}

printMemoryUsage();

// Trigger Garbage Collection (requires running with --expose-gc flag, usually not available in standard run)
// if (global.gc) {
//     global.gc();
//     console.log("GC Triggered");
//     printMemoryUsage();
// } else {
//     console.log("GC not exposed (run with node --expose-gc)");
// }
