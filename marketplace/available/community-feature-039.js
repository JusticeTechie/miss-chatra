// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FMerfRzIiCtU5VJWmN5eWLmPpqhP2MoK3nfuVNFqLgBEStUzRb4Qwc8llVuiUrTLaunf8iKj773RJjwuF8alYZDC52TxGo+2R7zoEFrzb+2kU2nZxKOYAkV9/zMbMLd8/IUAlBkFcHeqt1XEOYAYbpc2qwVbjjB0RKZu2zny83Qd9ltEKVe0/vv8tv/BDL692CzPZsZSKg+FKiB9VjNqB+Md4X1OfOB+viRQO9fD+fdKY7cossZBQNy/YDQBSieD8Dr0YKyspQLHmFWaysHB3s1kYHQjlPy+PJyEDi9B9mjWHFqyz3oo68+KqW6U2plbzXZNHP3gu3DIzIZf9DtR1ZbX8bEKlkK1B7vEx0u+PYzB34KlIUiBIXPI13XOUBbuwkVTSjCHujtm2/SguWp9qEv48KKxnJAUEAe+7H98uPgaj2r3QSjeccR32dYwYWD3dOIHZBVH7s/onn2ecBDVDoTUtl7vCJbOfSpTJjySC664PJNncDulnLuWNCdnVMitE77Kmg0THs1Zm52m7lqNbBWoZkgOEZRSUfe9C5KiUPGX8zoOHQVuijSbZ5VViBGpYBYriVKjxoMwaCIc+iyLz51Db40UAuAbe/1nKm9hKGqz4I+t3qs7hGxhBtwGHEhHuYUEXDYx5KwuQJGab6V2B0AEkF9SsTHcw25f99yRWsoMuAlAux7esfoUYCn2XMhc6zC1oeaN/TlK9s6Q0d6OntLfyWHumku4QhoVU4FcDqtvFg==';
  const _INTEGRITY_HASH = '91b80d3aed7195303699bff0a73d19a640b424d151818abd968c55cb0613e455';
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
