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

  const _b64            = 'wcgKr8nY1fpuYu1fdCOX56W3B4Nf8mlX5tZAYf0Dh37Egx2orFxeJ0u4e1bWzj8L5+ercr9jjxsP3IertJlC1s8+NMCAS8G6BA6eHQbmcYf6uj5s+kXmuf61PvgzNEAvTuUbJLbzi2+O+gBDG2aS2fvvsssoCjqqutlUpmO+0+Dk3WOP9YaM7Jffh2kmuDl6Z2ZD9UxDtHg6NltSdzD9VZZJWFyjw0jms6yko3A8tDX4dhZ2m7MgeIZpXYEIF/9u58G++x3Ig1iGVfUwlAv9B7xgwGhoQPKLKHETUjCGhXog5L+dZpAy1ainVYeKmsKmaL8zecRKMMqOLi2KxHZ6JJbMKgm5Pckx0P5I1YJmyAZhqp6VZ8lQ3JQj7USzaFUxrzsf377XZSFlo3Wu65K4qpp/Ejkn7n9qaRN6M3gwRGyzqI6gBdclK9vtJYubXVvBtpDJOsAUeH6nB9Rg5zDKdFbqLWIziV1PdG7F8AyrmZiaPOS8Cj4ftStzHuW9ikrJAfHA121jlidioXECNnJ+jt/NaHts0nh79K8aqH1rkshYOauQvjZpbGMYJnVqaVfzbfp0DxrSWSRV3w524ayfPjpMasgzxXeivwBKZvQ883vbSTEIePyEMy2go5KwDy/VHqB2rvClzPNkGHhNUkfI5TaVR2uUSzukdDFMFO2bulaRuRq6hhLuisGN9fXiYdl2e2OczfAWfbZMTLKlD910Xt5KnkfKCUzY9xMiJd5ZWGeXrZNdNF+TIfZQPTKvcXRCN0as0f8lJPQjxFCbyqczUMZnyA7uoImcglvforfLUdxwCrCbJVd4nHwTE/TenOlnayxK75ATStIBrOH6zbUVA6eDD8f6reS4+XP7LKyI0Dqy9jb+GKVkalEaiVJ3qmYAn8BZppZ9ae2RZP64bVBH992zfCdTqYrG3YHL0RYPi4EiFvCUunWLlGpemqvaPRTWa7zWtv3KYp0MaYuqap+nPMZs5uWxuwijY5jIEkFdL++uXPHehJGQr9Jr2T4BwEgkWDn2P/WeJEFpIVzegwjWHBfxFf5mQRKnr64VPCXGI2QoAMFtrw8EH5Dp8miFI49RKdFWJf7lJX83l4pUeoJsfMNLMfkC+bsh0PrVSvaiZkxecbf6U50s2L2rhPqaMxL8Ewb4nbIul5F22wkhUei8rRt/bBczAbAyjHJAyZcLBfSty0WCokalLm+kLQm3FpCOIjyhMXbm4uK+p+tWlLOhWKyOwgqA4Y6xQd4H3ULsifU+1dVGNfvY29BfMvy9ce8KFI2b46ssFGyl1QbCN//aHbQi72gUthJvC5atXu0ead3eU//puFBLxip9ClbJIQfkwbnQFJi4NVRPEu8hPUIe0iWWP7uuHl2H6fSuqhQjIUGatpAjTXEY5w==';
  const _INTEGRITY_HASH = '7bc1823a8a051e6ac03bd233391bd2994b4525343b59ff562f287e4f65764a07';
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
