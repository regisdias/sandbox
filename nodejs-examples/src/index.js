const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const routes = require('./api/routes');
const userRoutes = require('./api/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Security Middlewares (Topic 10)
app.use(helmet());
app.use(cors());

// Rate Limiting (Topic 10)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(express.json());

// Routes
app.use('/api', routes);
app.use('/users', userRoutes); // Topic 6

// Global Error Handler (Topic 4 & 6)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!', details: err.message });
});

// Export for testing
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
