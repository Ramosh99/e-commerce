import express from 'express';
import payload from 'payload';

const app = express();

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.DATABASE_URI,
  express: app,
});

// Add your own express routes here if needed

// Fallback for all other routes (important for SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
