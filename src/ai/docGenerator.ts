import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { CONFIG } from '../config.js';

const client = new OpenAI({ apiKey: CONFIG.OPENAI_API_KEY });

export async function generateDocumentation(commits: any[]) {
    const messages = commits.map(c => `- (${c.date}) ${c.author}: ${c.message}`).join('\n');

    const prompt = `
Eres un asistente que genera documentación técnica de sistemas.
Analiza los siguientes mensajes de commit y genera un documento técnico con:
1. Resumen del propósito general del sistema
2. Componentes principales detectados
3. Cambios arquitectónicos importantes
4. Riesgos y recomendaciones

Commits:
${messages}
`;

    const completion = await client.chat.completions.create({
        model: 'gpt-4.1',
        messages: [{ role: 'user', content: prompt }]
    });

    const outputDir = path.join(process.cwd(), 'output');
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

    const content = completion.choices[0].message?.content || 'No se generó documentación.';
    fs.writeFileSync(path.join(outputDir, 'architecture.md'), content, 'utf8');
    console.log('✅ Documentación generada en output/architecture.md');
}
