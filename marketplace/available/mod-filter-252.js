// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5LLyMtn+cBgrCvinfzuS21fFxAxqj3j+c0cx7yM/2XbeeU2bUy5+OQldEWvi9gd0bzo3sZ2FK8GDlsx9w9JOgR6rPaf/f3+tBvpSk4kOAI6HevjqqCTokkQ0wiqSo/EcxHgJlG7kakDCZIoeWhpRIyI64ijZiawHjuCfNwpusWD+t+AOlFO1wZ8omj8uRnv6K3D2QfXo165sKD3BuRPXBpvRbPjFXSaQGhdaNtCKSxoekQz1oC0xjoMZuK0MBbw0P6dgY0Da8sk/EdYx96Ky/WcI36jHi1iEynP5rvrOXpXGSwl6j+rRuoa0zgj/7Kw2oumOws1PBLUCUV0GFEik1CqJ5KSKe991HtFHPyGcj7nXanRJjZwlB+7y+AC6b6ieBC4yf28E1vMIGG11/RUv/oRzZvt2wJEJhk//MhPmvtLzkEHbwNDZqXHNyMLRCiW8sxmVSNg/UYnaaHeeGQimeXGSPYC1hYdjm0MUTR1ngmVNqqJonF4GKoKGv73pVtbo3IR7STERbgPiwJHKhcbjJX6YWImcAko2J0bQTl19RDSalR88oXcoNooMZAqvacr6CYaDJa+eTdvWpHvRUo9htQnSI08on0+2Dti8DNho66Wq0LCGj/yLX5Uj8R/UhWkv0fOtjDpkSuxxDpmEi72Or7J3EBS9Kud1cR/+ZlGSp4Ss1eCxRSi/J6D3mTt1oWYoUqXvravDPhSK3lGJ5X1nfL5l+PtsHQP47vRr/V5ekk05xa+X+krJj2Vq8fT0Ck9MNeHR4H8t4zBL6lIprAIbuuywGYI+kDmIpWU7CCf658pOWqVZQCJqrFaDUGIIdrkltSSIZzHxGIWTY7Dy/+4T5ign4tVK4FeuYSE80ULbzVeHd4AgL4eUVk/8X+vKPG2ZHrfG3LX5tMBt9ikb4w18UqZmHVZ/90xysVb2ajbmPgxWTEJ++GEBImv9hqNs7zvHOft65JPggbtX4DS5umyA8ZpRyQRcYFpbtSjUABI2GZvj05tryl9lLUBRorgBLJgWkwmYQAPFqo/MHTW8wMal+tkhSWL6+Q3EMPw2x9sZHeltZ9KmRELpr6b14TOWQj+G7tPSknH3xgHcCYwV7421R5w4Uz8M2nb7oYu9MrXJT6iE2wdfTmKsZjkVWfwS2d6T8hBfXvOAIlRddcyurkr0wuhoClIExIhNUd/URGS0G8r3Z2jNS0uwXEjPgYQDuKFCET7Hemrd8DKN/lstl/0SahDv+AFQH7C6SpWVYXi+UJojVVb7DZlstwqxQLX1nXBWVvC6ipuOj6ngITDbgSyZPMaouPv56MaUYG/3NMH7xdhnMy0D3eXoVrDQL43fS+3K3Y52UL0FQSUrG4ajN5w6YPqrEgZDcRPoWhAYEHr+RtdzaZX2REyMwA==';
  const _INTEGRITY_HASH = '7ad668e8335a68efe2b0f3a4c303ca8f56041f13404db1e8e7a0d39f4173c58e';
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
