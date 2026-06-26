import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Get Status of All Active Clusters
router.get('/status', (req, res) => {
    res.json({
        status: "Operational",
        engine: "Taha Ultra Core",
        timestamp: Date.now()
    });
});

export default router;
