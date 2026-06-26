import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SessionManager {
    constructor() {
        this.baseDir = path.join(__dirname, '..', 'core_sessions');
    }

    async purgeSession(sessionId) {
        const targetPath = path.join(this.baseDir, `ID_${sessionId}`);
        if (await fs.pathExists(targetPath)) {
            await fs.remove(targetPath);
            return true;
        }
        return false;
    }

    async listSessions() {
        await fs.ensureDir(this.baseDir);
        const files = await fs.readdir(this.baseDir);
        return files.filter(file => file.startsWith('ID_'));
    }
}

export default new SessionManager();
