// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ncvKS8BJLmqQ2+zUpmFafkk4gp8+7ASrBMksEokePrhaQlh0r3t9gSSqfT0h8/LKeknll/1O9i6jjOFLiPu7eJ6tZkjLlO3bDKFPRuEJW0TbmCIA0teGrxJ7pi72G6QcwilnEQotIQ+lUse1JAnA1uEKK+KqSpJwqrE5lGOKkjZu+wfUZoRs+V69XW4Wo3fUR88e6LAHxWtz/eZTLh+RHdMc0rV9yoOFFlU1aS4mdl8ViER1X0rxtKrBXrv5qkK9XyllcUkxAMnddrM6bz/rmdyg6qsnn0MkecYO04CB7B5X8NXAWHUWT0vGfTwLIzf6rBL9Me0gaz1BSurJ70PNhg20d87ofwFUx8RcGJWlipmv1DRFKGoMzVkvjyr75MvjQRcXCfxJ0ogz73sf/ccpvpl/8S4mo4i42x9gHOhRA3cYycQvJjjKasGN9wpoed0cBlycVEOTV8mXJNjOXVavN51ugfEtATt/nkvljeiAFXXhrVtdDV3XMaDGjON+7NXly5XmF7yuQS04LmAYDZeaTnT3X2C8PdbBHa2EOXkTBia525v4TIoKSlhYTOEUvWd7nMhd8e/9P/BIti5hzgbbgIvExyKI2vogw7s0RdMEC8bzDONtQS1fUANPt0/MUCeLnkfWo6qHVzuFwEtg54Q1gdZ1IMbqEZ6ZzRqgCtt++W4+MMk96O4QR0JUNNnL+Yk0KWOCjyGDiiCsKfXjje0e9mOKSg5FXNSg7dZ/4qYFXVcAPYbRQA1D2QgmQBSqXi1LPsgW1rB0pVri4J1MMbICUxRbAyoBi9nzO3GcUyHWsJk5lU5zFAgWdJiahLqSMEYf2jhL5irn3LFNiXFREN0fefIAjWHfmnozEcAIlRiLH+W9T+JljOm+r5BEAU43/lK0NAUWFCWocY4Q5z1hORyGqGr1BUTPdtUxG8+E5LwgpLEzhdFoRKUVvlJx00GXTX6eE9yYWzOYhVhsZ3uwBbg2lVqqgRgHIaeOi5EJGKkP8Tgz9gsHld3SDG+mW9OpD6/wj1ROkglvpMEq7oya2cFXhi3gp/cjdGx/NXM3dFxpIU+5zVWGKyKG1JGSgNwbvfQk2Kxbv+qkp/V7Kz7a/vl8vPBMqkHo/g/b75ti1Le9Gw/KWODvNFohvnMt5aV39QxuUb23WIaHTAH99jImbmOMb62RIGGEZHZdDpRbvei8yzQIHp/7HyavfyYOUiDdkjbmSe8uyza5';
  const _INTEGRITY_HASH = '1c192b08d5f59606f58abe0bdc971d34b04d524adcedd88dc097469fa91b91ec';
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
