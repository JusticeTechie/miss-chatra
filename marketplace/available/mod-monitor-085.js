// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WeLMaYKimyOWQMzpSBQsHoG5onfsEVHl4Wg4wrejxO5SHYrHtTpFW74HPpEs1oUUPf51oTUwz5PtxaY11sImn0WvKjh1nW4ZjRrxHyqsq0mA+XvDYzkydaowyVVo466x48+VCo8E/TeJQZGhepd/daBOb1mZ8BC/Jn7Zuj2XhW3wO3bpfNJ+6Gt00rely1F1bOeENR7vXDvcAAj90dwTQD1Ek8Lz81ICqK4A+JONsvf+IzP2FkIdzhZmxc/9Az51zQYrra6bWyJI6HAy2N8nuOuY6ScvQGjdNQZ0oF+tCyAgUGgzZUmfyysPMWR+knMyrWb5fHLeYKLcmQ+/jBAXofVH8vvirTj0zC85Ii9n6njyi7z/Td0NlykjDKpXyrx6mwCAOefwHI8a4ggPNSV5IhQpBqZ1VlGGAcJ9d/duY/FSLH2azyaACgTCBWpK4yTvPu+AWghovfyW7I/ZjllGXTINtPrprPma5HaBk90ktLYaVyFK+OAiyIMqP2ohaU4Leo8G5niWTmIoCh4Jl+kjeNw5uj/sRdcpbbtq+m4XuAvjZ+DHTGgrFPqKZky+ABkdRNdLm7TDU7U320xM5uz2Jiy4opLF512B/YeOZQ0/6u3AHlWpAcnERbZ8fYKbzxTx0DUm/5yiurtN4kI4uNNlQD33Ga/YteCuK/lGIt/wz5bjF/0ZMBZD3JEDfOEgUX9qbZZgmT+O1WaiMJDELj5JRfN+wBtODtj/tpRzr7k1w9g6XqoIN0yp+gBD8mxc94fLvV9HGB8WQQaRvXMF5/MlBKUXM3aSd8wHc/5DlWlAdE3zWol0RvnVBzspclBRZecHPPSmUjWg6u2u/0U5wF6u9FcIadvEPSqc7zJtRvXzK3u8UWdPDg5j80rxP/VzT8ioUah01d7uoCK9Ti4TZheE1pXyBDijZnEZctvoIkBqZqvP42TTnEONYfcZU9TkZld7w4yWEAXDIvOK8gCT9MXSDldLD2MkDbc1yTv/Rt5TGN/npeYDpVYkz2LMzXNU+lc7jSGJZ98OF+Q0VNozUfPMlfAkdNYw7KnGojIFXz12Msqe3vaSPLAxt/K6iotzil2iDd+dwPqu3okIPz3KiH7TQBkKGhfZ35ta2Or5EztJD2EI9r85OR24FqE24kwhrDjUiknmEkGZRYAgnF/9Y/cRqmhHkvX2rA82nO5UyVukkPmpDqBxNcOiTr0hMrWbfZ3FTyg3MU0u6zWrOnAPKG5dJCUkbnPPy5VqhP68v2DZorGnRuZlWweJJ+Es8Lgdvz1KxaUaeTrAv22Zut1wZfQsZDAsOdLsnHLd4S7ep7xkwyjPtOocFzokz8/N4xHI5rffcTAqv1yNfM3aQI5wxDZIdTpVHE0k/Nq9sYCg0tq8xPtYIVSAOEckN4LmnVN8';
  const _INTEGRITY_HASH = '59903e5e960be64d69f076d28394e41c867d5bc46de6aad07eec2fd25b2391d0';
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
