import { CONFIG } from './config';
import { getGitCommits } from './ingestors/gitIngestor';
import { generateDocumentation } from './ai/docGenerator';

async function main() {
    console.log('📥 Analizando repositorio...');
    const commits = await getGitCommits(CONFIG.REPO_PATH, 100);

    console.log(`📊 Se analizarán ${commits.length} commits`);
    await generateDocumentation(commits);
}

main().catch(err => console.error('❌ Error:', err));