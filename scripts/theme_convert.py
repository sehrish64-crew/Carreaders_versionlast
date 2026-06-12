from pathlib import Path

repls = {
    '#780000': '#fbbf24',
    '#5a0000': '#0369a1',
    '#a52a2a': '#0284c7',
    '#580000': '#1d4ed8',
    '#3a0000': '#0f766e',
    'from-[#780000] to-[#5c0000]': 'from-amber-400 to-sky-700',
    'from-[#780000] to-[#480000]': 'from-amber-400 to-sky-800',
    'from-[#780000] via-[#a52a2a] to-[#780000]': 'from-amber-400 via-sky-500 to-amber-300',
    'from-[#780000] via-red-800 to-black': 'from-amber-400 via-sky-700 to-slate-900',
}
updated = []
for path in Path('.').rglob('*'):
    if path.is_file() and path.suffix in {'.tsx', '.ts', '.jsx', '.js', '.css'}:
        text = path.read_text(encoding='utf-8')
        new = text
        for old, newv in repls.items():
            new = new.replace(old, newv)
        if new != text:
            path.write_text(new, encoding='utf-8')
            updated.append(str(path))
print('\n'.join(updated))
