"""Rebuild the standalone lesson, including its pronunciation audio."""
from pathlib import Path
import base64
import re

root = Path(__file__).resolve().parent
html = (root / 'dist/index.html').read_text()
css = (root / 'dist/style.css').read_text()
app = (root / 'dist/app.js').read_text()
for audio in (root / 'dist/audio').glob('*.mp3'):
    encoded = base64.b64encode(audio.read_bytes()).decode('ascii')
    app = app.replace('audio/' + audio.name, 'data:audio/mpeg;base64,' + encoded)
html = re.sub(r'<link rel="stylesheet" href="style.css[^"]*">', lambda _: '<style>' + css + '</style>', html)
html = re.sub(r'<script defer src="(?:paragraphs|app)\.js[^"]*"></script>', '', html)
html = html.replace('</body>', '<script>' + (root / 'dist/paragraphs.js').read_text() + '</script><script>' + app + '</script></body>')
(root / 'U4带读.html').write_text(html)
print('Offline lesson rebuilt with embedded pronunciation audio.')
