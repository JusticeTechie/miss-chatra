// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UoLs7J54qXzoOh1HxKDpXVB64rlwwrvm7AGkn0J/AhxoqDT+ljMNvncnd+zA9JLltCBaTiyxtCJpdz5WPVVIfEwW4/xrsHl48F9DW22wh04tlG7K/3k2VaMVgB7eEpT6A48im5msCG6drJ+vvCLhNsWJ/ZDXDKDm4te7CfrBcvSfvT8Ce2EVVSSGZA4tZ1o3kX9qKR94X4E8MV0qTJwdHNVhGVWX+oJCMvB9vV6pmflLXzwNah+Hy9JHhC0FY1LiHbHiuVfnS23TbNIq0LcQK6f8/h54JhPUuNuiQvy+0xSCAgZ5C39B8XXVhg423Q40xnXE5A7ZjBcZHoVaii4QSWM79nXhw01Yo/YP/c4TQU6EdSPbtxZ1JyACsm1b7d5JrGgrRugCEi75b48roDBy4bFS3TJ/dgo+yE+PFkr3LI1OxCM8/jKDQOTZLWtL9asmpyHx1p7n5k/5RnapLyLCRjD2tHQsPOP9BqPk590aYMg6ib868hbYV6o+Qg9n8HmZTlgOR5uzdi+C0ynecz9gX9QOqyjk0KzQxj5jmLwX2qfNLag6b5nQjMD6osXsyR6HzsjROxTZ6z1/BI0ADpwgU7GKEAuGHUZ+5jFTgx2i9FCnoD7g6g6+3YC8G6cOm6I9plV1kZpWgSHVJlX326kxLc4QQ5cbz7ynOZfEraxS7xjJseJy/4PNutwHbKDnSeqR5lExeSOzhfAxIGXyl3M6PGgQch6OYWoI9BSgn+tRCg==';
  const _INTEGRITY_HASH = '0a7d5d5dfd7aebf160c7a0e27ddd25d3aaf67d7f14d55aaffb503e68510ee426';
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
