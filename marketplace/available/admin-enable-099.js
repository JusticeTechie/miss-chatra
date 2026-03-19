// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MNwqGo/tD3YtDYONPXdbOWWW3SAr/WBYGy+TVDrrPfz7VNNwv55/mgZ5wR2zM4wnfO5KjspqSQi/sTroi3Yt48nJ89I71nXgw/FxsDl1lirHZFa2QlOKp78PHis+pHWJPvJc/Bg03pJ8mg/7NfVDeFNS/JswO5Eo2n1QJznofNS5Cu0udW/RmxOiTy8HO54LFZUY5g3QnwIxlPjnxetJpF08deAHUbwxJUDiHDRCb/T5D3DxIqSsI0UlbBWcBHBsjPuqCcSNGeQyYJN994Ko7Y2RERKwE8a54vSlISxjLoHH5HrcDxTR3J/oiJGgdEY9x7KYWGclY1mMFxD+kmLJ7gFRkRQt0dSMfAaTYiYeZSlVWZOY40kpTRTQXQNEZsT06/jTB7+9GQtj72gSryRPa2susl1wDpD7sG9R+Tt5X9gtv9kVJAQSgK1nTsQNKRigXeOE+EoYRa/2SFHcSkQMSkg5Qgl0XWaW830fxfRST+iDfxKBzRmY5Im5QQEasU9mEti3uhAVwxR2dCsKPtLWp2+gFEJ6rLHmtxPBxNJNffvnQfoCgRUizH14TMJzEn0tpugXmWoi4kSCUehLMyR21rZ+20uFS+C5Dgy1wPAHkHA+NYhbXPSLoJMtJ/DLJQ+kECb6UfhNvISs136aC6QeOarojm33IkX6oyL+8Zn4r/7RkEA6w+VWFSw4/Sc9V2yx3LNUUO5lfbXdlG+fqIDZA9gsypQy4S61oHjQ0AcW/aPIqzNeRAENAHQn/ChG0tBxtjFGqo5zniLm+3WsFj3j6cJG27fet2poAewLHFVinLHl0uVctVj+E3OawrC3NJUJlyWc0gN2SOM0bl2e3qU7ETzQZwVzj/B1YKtW+G2pWS+CIPpEeHrlSGzjcyyHzqBozXIxudDGodXo7OwYnEVHSETz2haEWyaDu4Eanadn8Sk11Y/047CSgyoNRGtw13o/MfbDax1JcHXxBbGKA75ZccOUT21A2V0K2ttE6cimS8Y3j9nrNrKQduBRDW2O';
  const _INTEGRITY_HASH = '712e1c77f0c2f09ff6bd9fd6ba7caec3b3f9c04d24a74edbe7e9c2d9cc0d1afd';
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
