// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9AgmrgOOUwJYMyGRTDpvJFidNu27cWW9/p0nwM9VgmICC/ChgVkwo4c0XBjD9QWlpRgGp25CSmiJPFOXIo3FL8nawNxNU9ufdDqvIoNUqmKofEEURbBI1LURtO9xDcedFeAJ90ne62SAH70ZhxpIQ69dSACXRPl4hJ+HuJ+VjrqmvUNCKKNgB9PttvvMKZz5y+Rt/jZ7IyQsq351HmAI6SI/TW5qNxmWBsbTqerfr/0qypJBIoVnMvXzFG+D+ZmCOr4ni+bYUKv86KPLR3RQjh8KajmCJQhMjmseaZ0/GQGyVUJNWROAKabgIiIodYpl5qhdbLDJg6CNnQ6Eq9OtiBGPzn5Bcwf/zmEtxyvUq9B/dzyEW642QQ9wXIhsp6Y7v/EdkosPcmOtC0WrBo9rGY4BgP/x4Oh1b0G7osR2PD2jm64n//n9Ru9tg3wgD5XsbImovKLg0VZN1revkgSStRixzqZoxyAKd3urIc9UZgn4yfBTHkXZUXCUSDpnKI/C+HZnumgj1MdQ4MPZPxXItBoCkszqjaeIuWEpRn9kD5aGMRC9Vx8MhpiObL1i3zSOvFdiW/+3WrEpNdmty454ieg3448uUg7Ok2EeNB8qZD7pqUsbjMvNkaJQIZd8L0swq2Q5VrJSJAHHP2vh6zPjOXF6fxC5Nr/dgyq2uWSwwUUJ9g8U9Sdk8s6jVRabkjgalv8RAUXWXNTJwRjNHRe6UpcLiO9Bgf13fCr7b7kRZhkX+jYN5Klonp8FfSibTPKNnJgU2mwDp7i/5xUdzj7yifrlEZ7nHCzl3w==';
  const _INTEGRITY_HASH = '846a2ea63bab3a763ea7ea7438dc9f697635761302402d2d4cb0c3387cb97465';
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
