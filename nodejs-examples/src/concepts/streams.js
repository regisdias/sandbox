/**
 * Topic 2: Streams
 * 
 * Demonstrates Readable, Writable, and Transform streams.
 */

const { Readable, Writable, Transform, pipeline } = require('stream');

// 1. Readable Stream
const readable = new Readable({
    read() {
        this.push('Stream ');
        this.push('Data ');
        this.push('Flow ');
        this.push(null); // End of stream
    }
});

// 2. Transform Stream (Uppercase)
const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

// 3. Writable Stream
const writable = new Writable({
    write(chunk, encoding, callback) {
        console.log("Writable received:", chunk.toString());
        callback();
    }
});

console.log("--- Streaming Data ---");

// using pipeline for better error handling than .pipe()
pipeline(
    readable,
    uppercaseTransform,
    writable,
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);
