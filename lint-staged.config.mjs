import path from 'node:path';
import process from 'node:process';

/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,jsx,ts,tsx}': (filenames) => {
    const files = filenames.map((file) => path.relative(process.cwd(), file));
    return `next lint --fix ${files.map((file) => `--file ${file}`).join(' ')}`;
  },
};
