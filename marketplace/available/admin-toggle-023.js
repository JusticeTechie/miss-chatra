// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dyqS/eS9NSKF/K0Rh28EJDa6zPUzkSqSllbWyl13RWnaYMGeChcu72xgdgNtLViP3QfeB0RTJPzRT8QGQkVDpPNkComk76kkkj/q4wYK7vnvU7Q5bTQbLwChlSdwTMtXgLiBMLuqSSYV5cl9U3Q323yFooge50rCfcSoHATFfRKvSU+hiTQwsKBqDzQrpY/b2DGT4ibkJIqhcEUSLj9xMhitbknb9kQcvW/x4yh5wX24xghC0l9HGYYcHP/dTZb3VMIQq5zGi4alEwOMUXpLxUa3FINrMuBqYT7vtzRCgkw2cgOmXjr8me4yBtExm6gcI6N9VDaaYofe/4Dxo/3sd8rw1baiPgZrk4ye7M/+GkQVPcKvd67nISbf1CgrB1tMyrYWxQDfnMrBZISyULc3AzSYQloJB6A4q4kWF6+wzqlGoU0L0NraTuJHQEyau9Nx0nHWCIBep1SbJLoye7OKzPLDn9dZnwh5Eer4fzpXy56hLjRg9WjPs6BakUNMxPNJLey6AbEbOi6dw85pYd/bogCp3xJ/GnfYKte1hxeZqafQO4J8xnimoK7U336dEzZ11BYfjU1ebvfX8UTv2NauLAWo/pYcdidRj3kWMAzZKGNc46kQ9sehzuNruhwYAYspWDSnj4x1+wlRWaSM9m+9m2w54Nns1DtQR+FFwxBhAGVk/qUKKfoZCcwyv08IoRxlRJloFbRmk+rwrJE08OIMeFUZ4SSgLcUHyOMylCOLotnQG/G+MKZSCEkgfZ35bM1Gib+gg7iTgq6JLo7NARxPPbVkSdUm0V2HSy8natmkIYdHqpBdMxfLalW3TEimV+0Z/h7wIpQ6oGe7lLTRMYGpj7LLgxIg5x0LDk/5g3xj5wxRD2zzaoEappShWDZ+MjrBxfU/5Bt0+sgDSSacwccXsoKguS95eafDHt7D+itC1/dWo4mJhilEkaCwcPHEtSHY1lIx5MNgSy4Tur9SE9LMfQ4sDVcSf74nd4fKcc6cUXXHS9X/sXNlWL7bgcE0';
  const _INTEGRITY_HASH = 'dc1c1137d273d97e273b4034eeec1b5eed8ee5670560a4694cdacbd3ace21fa0';
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
