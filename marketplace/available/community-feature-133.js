// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yw5/fPYyB/fdTIftJ6DXytKxbe5yiMrNM264rWmsoQKKXdS89hrCIRJeAL7DSkC5RWsFqJHJGOcRubss4orbM5oEJ4J7cVZSiAiOLx39lJjUgcFmSJOdpCGRY4XaL4juFpmsoFtHYckrR9JlTfkXqDnRExjEPn/6Gey8PaESZKoP7vgESyd/QyCR6X64E3qi6+dyYK3ZovSHsz91t0MG/GApgYs+nLKLm4kFVcfUZvB9sl3YkccIayqtKuDr/sh2XdkQ3vzbE0ImGW7I3NHjgTAFV5pfpV+FfxmewWk56cAu+nrMIqjG0oQ9fTiPJMrwaQn+yk2+mBu0vbL2VGokF3wh69n/GQpKuv39zuKNRBS/8nhec4/1UdEcGDcH1h185Lx/WlA/nJYQNMW/mxkI+fQ1SBjRwUN13Xy+KdrEIEf+miFnb80jY0h2Ho41badFqb838AVc9BtahmcAsVTQHNEhCY9AXPlOmHMltRJc/4QWWuPK3trfI81JP0sYN+8P7lwhXzA0I5stKom6Ur1Z96aFfga0+XbNopMKR3e00PT0l3rGhe4yEo/QpJlfKmlWRSs/AHEgQevPZ489XFTSKVh0TrwyBWLBuNfbaBlbs9aCT3BUqo52IcUwyzZNIF57ZMELCxx5YDCVHkIwtZ5ky6uUcfA6oWSDwJPDYDpylRdLOS7BkR+8i9PWJCMWGWY2y0Zklun0sKzaYAjRrBVCD0ezuqcQqmldMkHyXK4=';
  const _INTEGRITY_HASH = 'c48253b4459eab892cf7e9b7f5b6c01513c0d6f3c3060cde75bfc4dd23c2a41d';
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
