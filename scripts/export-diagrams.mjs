// Exports every diagrams/*.drawio to public/diagrams/*.svg with the draw.io desktop app (run: npm run diagrams).
import { execFileSync } from 'node:child_process';

const drawio = process.env.DRAWIO ?? 'C:/Program Files/draw.io/draw.io.exe';
const args = ['-x', '-f', 'svg', '--svg-theme', 'light', '--embed-svg-fonts', 'false', '-b', '10'];

execFileSync(drawio, [...args, '-o', 'public/diagrams', 'diagrams'], { stdio: 'inherit' });
