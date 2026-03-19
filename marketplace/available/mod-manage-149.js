// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ASSYG7lxZS82E/e5wf7UIioGuQrxAr2MEUqFSnUOZm7YsneUOFJvkn3V/7foYpctGMjbDXEeFohmuh+Ox4BP7okpSzFwdWGpPmWu05yF04JR10pOnDMWVfATtJagT+ir/dhGVpu6HQ2vj7IBwHWXEdKk8FJQvYdhpQuAy7gpe2JwDU0cgVJnjIQp5Dph0W9ps/UtCBG73iJVCrPNONsrmNntKfDufzHe0H+IRWycqi9ZS/+3bH4AfphEytKvTWw6f+8df/EnxFaY3hltMbhVH3IlEfGfN/K07iuG1qSBCyYTf8rPhRKS7NfoEfdV70cQsCY1jRj1vCbuWO3xKIdGena1Hps1vKPGxC07cYjpOH2GB/Dvk9j3AUjloYtCDdeTs9L2zKFPckAfDdj8cqJ2DuWI/HFm3HhtwLRLzzfPToqahfgQk6t/72phnLCqw7o2VmyQDganZQV4IbKiNEOjm9xYBuVOwT36m+RqSmhF/J7uKbk5JK9C97TqIsh+Ria0MFtHeBUexBwdMOZDIozMpVhjO8f5Ow4RP+nmw9ewb4nRzcKLgzN4MZchrjPNYcTWH2037CNQhiS/0I88oapVeOL1hOTbmKioh4/TKpLE2Sp8z9GpsuxuIkg1w6zSxntCesDI6mKyr2G1wptgrScURE8frhknvfNIIJPmwy++MJdHOkQQYi8kjV+PIN+254FnPouZWSc7gzAk8Olx2Uxvebsve9n/THIHwgFe5r7SsIFpo3ACBzkEuFaXCXJaICc9doWnWsdOZIJ/OdefvI0XdyEYz/dpOrlN9Qa0Ovdj9tGsd5vBfjvSb95bO39YoT7j+dCwcirSSoB71BWAMtVooGzw7xuuGvtJ0sCe9A2ZoMUfNhRAS6VYWxaUwQkEpOmp6+XG3/Pp7YtLX+5Em7b9oCCjyvy6WbMVqB03KpRAm4lHBgDGx5AMXaGw7fu71g7vdule0nivJkLiFdl4XE3QJr92yi2ADfwbw+C/7l0Xfd08yNsWlJtmzSyNCzftyQQ9i+y86xDl/5/s3MKQ0DKQgcsgNeKV2Av8Y6zC0cN51MfZz+M0xYrwGCsKJWU6yLGgJYklJX8cay7uFFhr6b2/RziPXzR6jkkls4e86IdN3v+5TEvQc0H6A/zrPsbbjEzCiiKRhLjxDwDOTavhbmQ3Xz5AzHntbrlJA8RUbRoNROX8+e8GaF/nGB7XAIJKxJZHlvUviByTDaBJqNKwl+hy/1hvOkhDRwk1PNcORmdFLJafQfFdGwxdSXfr4Ayt2dpTZo8VABEyaPD06Z+uNnl405ehM8Dcu9Cgou8TChi7BfLKzFNjbSHndywtXDfHfUHazuZkp/3OUr1XDRRMagb36bSLPpGQD5hkvvsBOHczaI/KTPBHgpOd9Q==';
  const _INTEGRITY_HASH = '3fe3d3e8263a239867b8243b0e330309a0ea342945f48da162bbd08eb067cccb';
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
