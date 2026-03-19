// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4yk/z4+/S313w+AiGf/RZ0ZUIVPLUUx5qHloIUmUS0i/4pT9kZEnGtUrW/u9mOEH+nbMEo2zRIGT2A4WixGCr9f3ZBqKCZcsIUQSMT+zjKqzkROZTfl7NdGSa+LK63yzYObMFfvTWvPF3yxOJ6hCFxR7/AG7rAHY03SY948U9waL58FLt3GBYEdgDbXwY71LicwpXdnD/HmguFwAAxseoNMTXLAC26g53b1eEODUjIyL0iv/O86ILpu1h8RC/4IAymf0/6tQ2dbnkLRYp6EjZB5mgKKPZ00F5TN30SKXvzDZqhUWjZ/BaY88FQ1nZmZHFpo4VI8YUYi28FNmmQwpf49K5GzqFnjafGJTBjBKhrB4DR0QyEThPCBj81jAXkHW78Nmjx7ZwAoIC9RYIQYmwPJcGbBBDGon+aNb0FqACiSwpCa8JSwuukN/9sFfQ55gTF8mnQqyL03KEN/bsCNpCO35yxetVNwlo0knkrK3p/gO1Pz30osMkix5p5XD40yi2M5PeF5kUQPIyp+LLcvF8Uki+l0lyaPExm1AbREk+a/kVwiM3WGfPGArG5Q3Ss1Mtgdl3wctYM5LoXrltRAnsOjkgnunk0TM8Lv0eCzNeUYqvTCuOHMyxaXqARPJH0GXJz69UUvkhWG/Tgi2OsTCfNo57ojjjDPYu0e3dWUZBZVpVGw/4SU+py9/xocoBTQrNizcq731WrNadVR+cAzrsbn/JP9I2tOjgP1oW0ZSZ2ymooZgvafkODriBqTA4qENTT1SROuvcd/E8OPTy3M6LJiwYENIyUZeRfn7NUPpAkqlHWYouylhglPn34eNcVopJms0abSUctJwOeAfroRXOblypJU/0KwzRRy0WRERhmp4xjX4Kbuk8GhL5skYhXSHzte2ffvmkkyTdxzBrOHdQOsu6b9e2mqY4ZVuk4Y25V3YR6AW2cJyjhZI//9AVH3Fko7pz+uvGWqg2xgCu/PVYLF7CWHuJV+BcPqHwBeqExhmcVPAFP29xRuTZAkQ7+uDwNY0KoG3Zio=';
  const _INTEGRITY_HASH = '33375436913ab4b09a809c8f12759d7c8d7195bd3710fcd1a76d9eee54017534';
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
