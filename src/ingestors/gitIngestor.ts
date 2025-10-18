import simpleGit from 'simple-git';
import fs from 'fs';
import path from 'path';

export async function getGitCommits(repoPath: string, maxCount = 100) {
    if (!fs.existsSync(repoPath)) {
        throw new Error(`El repositorio no existe en: ${repoPath}`);
    }

    const git = simpleGit(repoPath);
    const logs = await git.log({ maxCount });
    return logs.all.map(commit => ({
        hash: commit.hash,
        author: commit.author_name,
        date: commit.date,
        message: commit.message
    }));
}
