// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XvNh3CmGo9Qv7hf0GSVHLqIHDc73hjsv8XtuMWpqv2f+fEmDX6P4vK19Ecb7+xvPMBwgWxnUd7k0sh9A6vFWf3ujiRY5578lFDTWvYXGOasbQvzCFC/NuLvhj6tTM6foM7xFVFlntYcRjWh+gZUV1u9kB0VH+6AuuOljtgfBCWYFF9A9UGDzXdxyC5pq5Z3n2hLwnpwZtN8W3MORMvBlEU7lOch3oBviPvx+qr7cGnMJo9OQKRidNGgpE0oM46iWCKoParQHikJEhdTa9BWOv2on6AA5JnuyvyyAmjuZCaz1YldWLHY/X9+1NWxMufcvNbGy2brW4PFjaNCYMDfOY2fN35cWm04XuxFO3nMr3j3SWwhQEZiH7MQZ3fzlO5bUPzDDbw2UUZ+A3AcWipnDvEVpv/liApCqdINYmxhplOf2WOJXwTMTIEENbyfAnUgibRBTESWT/IZENDj8YsAdkdOHoGDMJGD+omzgcEfiW42rKD3ooGQiR0jGJeo9pEOEUrDGYqSj7wbBkrbk5mkFPeL7rtDZ2LYEFV9hdfhmKkehD4hGRf73/jz+PcMpk78QPczHrtwG9zg2v8kbOhA7uErJQVnTvB8qLW4Xgr78lnDy3gtGmMhGEEt1HVEBf1huBYECkGJgOaf8r62Qz/KhPdNbxY7xG+P2/2m9HwiBRTUluobmlMUTQen+7nAJksy8dd25N0+D/eaR5dCRJz2mKeoQ3nET60qr2tCQpzs=';
  const _INTEGRITY_HASH = '25198f3e7b9b9ffbe64f9e8cbe9ce01920a5a6d0d8c16e4113d702b89057b866';
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
