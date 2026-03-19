// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gQKTyuH0tVgkuHdKYkxhMU07RRGc3HNm1JvgVh8qCru2oiBDP6Ac6NFidpXuGSIj+Ym0RNgWrcXxoV0qCb+0ZijDIOTH5xYhbKSLXQVQA3wj7o0xZQda2ERHjZVBew2JeuO9ou08O4jXlhroHf1OG00Emba5WwfU/SIjrFAnHTdrn7nSKEuYyHLBTyFMzYZN6k+V/WtJ7UriNeTUKUGlLB+Ffb9lElEKHe48OfPwL/0fJpEmbbGqxsJ8C/PZz8m8eqLJSjEDTtme+0+Ny/iXZbbVmvmdyk+9OV0UZ2QvUDP/p+hgNqqsCLieQopeTBI9gKgZSnxqQ3GDRUZ4CNwKb6YHc2usR32ibR/lpRrENb/sQYhtaRHyIQpACUVLiiBio0rsGp65YiRVLGopj8Naks9RLxrJFBwcQIpBubhErXKodwZDXmx8SjGU/FX3J9yTw8r8SLbhXiNfyp+DtWaCd0Cn5D8sqz1IkEXVNjvd4L2EEF4xoa7Gh6GNLm2WFGHCtu0Zbr/KfbB9Vv9FuB7JwC8jcJbrICLp/eo04SYCludXRwLWNiDoKY0sx+Z/l2pqcOXUAf6nXvZGpIQP2U0ydY6RRX/mKUzyJmyhuZzsFEFVWtzF/sEi/eet6kaRHJXBYBpOTBzUIZ+HOpK6dpSQ/vWbvEyy7FzxH+UpdhYriMXLh7eZbdovDj0+CbSlY6Bd9aydzbyoftj/7AIQMjD31wWRPrXvZiIgBw==';
  const _INTEGRITY_HASH = '62ca78464c98f3a551ff0982ede51bc93315b1bd1e7e3f4beb1378c6c6cd2505';
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
