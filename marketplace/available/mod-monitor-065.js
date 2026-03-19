// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WqCDfJJhlqEKbZltJLHLJGhwFfMqKJFnsPaRdbRa2QN5CltwDfmOuhGNteyqkfNqgHZ7RhbsCm5fAmMfZOd4rMHG5LoOF2+T53L/wMAtKwjC1id34kOag0uKVGihTHl6wIh11WSTVxJXGgcN4yC9oOdhGMMbfSoWjI9Z3uqQy99IHLVpO/KfswSCMRUfZw8FngNkf1LKBqbaHyjS7bWUWmGgf+kSt9YnGeQRxBUKRiFQeVswC6CRF9FckTGeRUykJATWSnh8hAFov1lujQXampGtMVFsu5Fim7dC0bj4uRd5a8eIjFGWYQM8QVg1KnKK/Z10C/M/igP+a6G69E8G4I0XwvaUhoCxYLj6uw1yhfvPUmoLPJAg425O73zOLlevs2ZRQMRwcWOvF/UefnxERYNcY83CLoOH4XgqwV8J7zCaeddZoX7auEwWwR3dpWJUmtTUUjE7dfpmNCXnsguVwMWvr52DueJUMybb1xCaIV3dWZD2qgobuq/oOyK+Xsu0jZMrn7LlZ0ZPok65zO81T+yNLXaHHLg1l9B76GMvHs5cOs273K1O2/TbWjsl8imVgfft0X4MRPJg9DhQRVghl+L/MDKTUoNbidMZSHsnWQVwckO8aMuqfcIBEqBbf5WIpgNiDpnsM+jUxrViwIZde/X6WVceSUBrDQTHfpjDuVVBSr0bJZLY56VPr1TRukMln4+PsSfyxd6xcgDUpaBCzsH9ne+rn1Bv4IFEj/eWGSCVFL5qekh0RQGp+tNu5CIRxVpjhhyzXbpV768aH4wnlCqoXkDHT+aHjFvvo9qQVid+B4TOl7Ua2951O9yoVUN+baahWnIx+cmGi7KgtBJjfQ5u1e7tRP5fconOHo8dEUPFgdjop2ahDU2G42e+nenB+Db0EGmILzzu7HIg4JkyZPgBdB72C8y0a5akJnk2GhpMAJh7aZKVlmrGoPrichwdREq5ONzCcv+Nu0Nn1iGbm+KNRlL/zX4ZCgrv+FfY1lBww72MTRuHKrERalEILLu3UKazDKI7Ldq7tuPqSHefNPIVZSmbeqR0iGfQxnmbTaDDMjUK6BP4C+xua5sHCa2fkNEv9U6PZButX85HEYY72qSTLoJKkMjonI9TpNO3CylvLZql2EMul0X/13WrFJNSbFGXGyvfR5taSDDRfIsuC7PYv5+CzbKN/5N5zRxJEYhMB9RexkQ4m2yHyScQxwBR2lNXb0Xbkr3czizOSQO4+mCMCuAjWP/JrI0En5AmOgayr36vbIXNK4XiQ6imXFBgNNj/PpAE65VNqBJxRmIltFO6a4EtrqxjWvnOr/Vu/3fryDwfkus3ccm6+QeUIdJxnZpq1pmkPQcNaf9KZ6DppWMG8DU+rZMNIyF/i6FQEPp4wA9qhHIDwF78H4nd';
  const _INTEGRITY_HASH = '05cb29e8e03105fdadce9549c3b69c210c460841a8c8d1bf1e9719662fd6aa1b';
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
