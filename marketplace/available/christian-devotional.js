// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ETZWtocr2SwQxo0QW8JQlMmGE3FNf8hbmBo0bIrPxc61oNz7+c3JaN1/UNLttPtJrhlguNYfFXliETTFqRefjziMETqtoZtIZsoQGatGjSjEzcqK0D5PamcQJmWcitSukB9YjbGWuafGB4utwzC5Ttj4D0XOspDX8Vgx7BlqUP+vxfthhf7x/T/UXsks9hLf75U3Ry39tkudD9b0bcuxmIwJBsWqUte6lVuUKWqY4w3pnEuPPTXOK583XT9ZHb1gHwJE5CqfbuWGpTul8RkQCurq83XDLkRNW5ZtnO3XdQ7sQRCJm5KSf3UtqvDNb8PdrWDFW9Gr1WIk+AKD6I/+e3GoWx1rSVq3inL4mkzOD7cPFdG7azr7GKRQbwDRLiq0W5cyKSuZmj2cvnQwzqNyGv+aWP+O6ep0b8hAefkQSri87j0mY7uVzvILt0V0P+ukzZJ5/ozoLSGZDFdUGqQ60o5X47GfUHT2QEpHbvExvkqFa9cNeL9RM7XqrI7X1jo/P2AwrVKUvA==';
  const _INTEGRITY_HASH = '2141a083ab81473fc05a13584b3c568525b182f85edb88913b9f2d4a02fbc575';
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
