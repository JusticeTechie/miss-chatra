// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'y2m8HNb3KIuob2E3KWyU0w26D3xLb+hE+fjePlJQsdTOxU/Nhi26F8fsL6WA/cNmze0nSEqc3CeAwbP6kB1JSnm2OexVPQ7L9350CPdh5cWmj0q5y0fV80x/Gu/R9cuy2LzQyo3SimyGbt/qXTb85f/AqI+ew5G42zwctxszPMxYLr8PEXc6nSsBYBDEwxPrA26muTp5ULqRmxw9dFS0+S5ckqaBvHvwmwb3nnAz68BLvd+9y6Pd+L7LYHE1zMgDBTAVU/sgdRFWIQc6PVLbwg2wfG80N4n4bUBm1VFS2UYgN/oMNC2681LAuM8UP6RRJ2GyaeCPGmdZxcwL9IFhq8O9E7BHXz5TnMN7RRxjJUjRjJ8LjuGO5Lr0QeFKUbNd5nXccTQpDSeKabEsluK+lon+s/ygtfHTauycLlGUzdzC9GjWWD3UniM/wqHjvmuwgJvIEDwdAWty32unar1StBgEI8x+u738uzbjs7prDeUDnitoAj6bXctxhX6ZUKiP/9m7S0feombzMT6TcZ+jGJ8AWDqU/tJcQ8eiRJk/wMGi70mDNMB6pyKpx/D00N7Lb5fDzhqDGgttEHbhTgWzmdz4J2xQiBiSSSSOg3aZIO4RaaOxhLY+8XQAjTj7tAt6idmp1MEnQgk/P9FNvvfCgGEDtuUcQjFEwNZyJxrh35OwIJuQGD9kPJblUpj+zFMfvoVU276Y4cPEHv8IhwXif4eqqhnml7tAlXWBd6qmHeaKydd4jPY=';
  const _INTEGRITY_HASH = '4b69a7e71ef4702771e7698068cb63c47bd8c930d3621901fb9024e47a0f66ad';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
