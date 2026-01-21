/**
 * Topic 12: Real-World Problem Solving
 * 
 * Scenario: Process a large log file line-by-line, transform data, and save to a new file.
 * Constraints: Memory efficiency (Streams), Robust Error Handling.
 */

const fs = require('fs');
const readline = require('readline');
const { Transform, pipeline } = require('stream');
const path = require('path');

// Mock data generator for the example
const inputFile = path.join(__dirname, '../../.tmp/large_input.log');
const outputFile = path.join(__dirname, '../../.tmp/processed_output.log');

// Ensure tmp dir exists
if (!fs.existsSync(path.dirname(inputFile))) {
    fs.mkdirSync(path.dirname(inputFile), { recursive: true });
}

// Generate mock file
fs.writeFileSync(inputFile, "INFO: User 1 logged in\nERROR: Database fail\nINFO: User 2 logged out\n");

console.log("--- Starting Real-World Processing Task ---");

// 1. Create Read Stream
const readStream = fs.createReadStream(inputFile);

// 2. Transform Stream (Filter Errors and format as JSON)
const processLogStream = new Transform({
    objectMode: true, // We will work with line chunks if we used split2, but here strictly raw buffer
    transform(chunk, encoding, callback) {
        // Simple buffer processing to string for demo
        const lines = chunk.toString().split('\n');
        let result = '';

        lines.forEach(line => {
            if (line.includes('ERROR')) {
                const log = {
                    level: 'ERROR',
                    message: line.replace('ERROR: ', ''),
                    timestamp: new Date().toISOString()
                };
                result += JSON.stringify(log) + '\n';
            }
        });

        this.push(result);
        callback();
    }
});

// 3. Write Stream
const writeStream = fs.createWriteStream(outputFile);

// 4. Pipeline for reliable execution
pipeline(
    readStream,
    processLogStream,
    writeStream,
    (err) => {
        if (err) {
            console.error('Processing Pipeline Failed:', err);
        } else {
            console.log('Processing Pipeline Succeeded. Check .tmp/processed_output.log');
        }
    }
);
