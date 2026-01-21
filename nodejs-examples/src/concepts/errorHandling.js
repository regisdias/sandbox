/**
 * Topic 4: Error Handling
 * 
 * Demonstrates try/catch, promise rejections, and global handlers.
 */

// 1. Async/Await Error Handling
async function riskyOperation() {
    try {
        throw new Error("Something went wrong in async op!");
    } catch (err) {
        console.error("Caught in try/catch:", err.message);
    }
}

// 2. Unhandled Promise Rejection
function unhandledRejection() {
    Promise.reject(new Error("I was rejected and not caught!"));
}

// Global Handlers
process.on('uncaughtException', (err) => {
    console.error('GLOBAL uncaughtException:', err.message);
    // In production, you should typically exit the process here: process.exit(1)
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('GLOBAL unhandledRejection:', reason.message);
});

console.log("--- Error Handling Demo ---");

riskyOperation();

// Trigger unhandled rejection
unhandledRejection();

// Trigger uncaught exception (commented out to prevent crushing the demo runner unnecessarily, but shown for concept)
// throw new Error("This will crash the app if not caught by uncaughtException");

console.log("--- Demo continues ---");
