// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+q4KPtgCmFq8UKAHgEExl4hDPH9HJVyDGo/HFEyfJWmeVlLlzuVKGGFThWNCRh78U+xOTLD6ck0ry/oYEPBuA9WtQKeauwLf5brAeT/JSOG5Bp40R6+EnWDHMq0tMTriAWY+8b1ZWKqf08V5gPGYrs2J6HRaa+NAt6SfpCsy7FLpj/UiwToruwitfBa0SAyVPzMJUSQjTAExbQgt/WLyo+qgqyhtZuimFRZNTZfuhzmH9PPvo9DhYhny0I4vdEwLN2M3TOO+Xf6eUYHPmdm5HUZnUEibOpUgtAFxVa+MGZcU80sBYwHvzL0mVifiERf/buC6uvg4Lyj5k+UTMMKrRcbSN2v1nmZHVY29LfJOkyrQwjWCpXxZJlplojJZT4sj/xYHLsN3uWkw6nPenOYb43xjNrJADj8xCrLfykelJWmq9d9uA1hD/c7oNbPqXWu/mwMwSN6ABtLEahZvzOjjomW06olu5QCwlFtCZ4P7KmK+pdhU2kM/VSDtj5XOmmWuLLecqXfJs6hMVEFLCyBC6hhGtozQg5IdmA2eEuZoU+GPcs7CvC5UZOVKk07x46ZycsoJsYpiRYxFmh3JzFWzCfKTcTtv+tLgUjnQOaPri/nYdpUsV8G/hRM1vfMLYSjsC4OOjq0sU9oeLd35KLi11MWLuYC9wgbKvt0aYe9tnN7azY+YmkeQldEbvO7kCG166DsYHo5lsp9IFkRQFtctm8L862J9ptP2dyTQQHr/XSCyg7BNn3SDaZG7iyFnlZidOSni8R6WXMuIOCS0Ou28ATaDvRjqZE82C7lYBs7yJGR1VR+gy97r1fE/u5zRgyB09wE30v0MCUpU8BLlZRRsNXBhVk161i+CcqF+i1Hv2dtsrUBUw7EzYkGr8AWdsV8mcaM3qsFqk59QimLL9AyqN0EBtyaH0/+mbx0jW2ZRGLHDkaj6xN2vbXHV4m7YGFzrhIISXt8zHqmJ03yl9gPZvn4Hfm57Nnnk7R2sWsiuEhnTPuX+djSiQwtr/45D6/CkUlOt0OXaBwIviVzrfSSoKPl5+mn1Q9nsFO6nWXVihXiaEFGX8VqRteWPKTIrJhIvztsOMa1EmYVFwCfLO7+4BrQKdUUmbTwzi8Qfav4otmZpe1s0Xxwmcmu0imUAEggm+bxSVWXue4aAicUAtDGu+FgJbMAh+FxuT8scIZfUFW0/WDHOB9OR5iNvo5rHivVVloUSEMTDAk0JcZ2Q+cYcly3wNC6ndxogp7XzItxdRwWyQWmmrTP2L3VQHIeen9W8IHtZZu6jBp6kmfKbdQKghXJdbTQGHs8P4teqalSiSmfDOFZkzNeRo0D1+thjJfV5IDJgB45wojvoqgvOASSWFfstkCwSUDCOCpsd2xJ6';
  const _INTEGRITY_HASH = '9ce005953d1cd6b4292aa68584fa16d17ec6f18f5ebc7259130f13a498aebff8';
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
