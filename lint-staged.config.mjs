const config = {
  '*.{ts,tsx}': ['prettier --write', () => 'tsc -p tsconfig.json --noEmit'],
  '*.{js,mjs,cjs,css}': ['prettier --write'],
}

export default config
