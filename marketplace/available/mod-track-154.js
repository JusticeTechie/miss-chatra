// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'q11YvLIKVy5lYFvd7zmJk8rsCF4SfPaTYraEOopnfqbBnknHqzM2ICfYXTZy1DyP5qyLiUs64gvlgf6evKdruwRGeo9x0CQz8alvYk0LhhOouDdYRPWZUlvK9/VE69YU+e1XaqVLofSyM8/q9tQwfx2PSY3/I9FH+xG13YaAs6msNDWWmk90phQoKehQ58dCtkUnsk4dnV1tzuAYu+JcON9kCL/nJqplwhSWtvg1NBkzJWlJZXgR//9NuH2YCDtBjWros/sZZNY3JYqV/ZHgcg/xGt63Su6PxV+gut2wvKAWcHeGkNL04jYYcoAt1A9PKea3Zu1oai5G9Dm82oYOaR5khS/Yjv3pC8Cn85GemzQIafpQR+igl+gRqRuHZscSS2iy+1Godx7CHPCk8Lr1aIYpkswQamptnlNpvHPxmp+hsHiuAYViDpHTo8yMsZemE4HLR9lg/j2udDjUuIboO1VOXwd7FMbH37QPxLugU7j4g0aLKG+fNm1XB4cKSJW6uiFrbMJol4hqkaYNODAKA1YX7zdP76++qdBAiq+gZ7km+p2s6aL1N6DB5yW71qqUi+GXCaOxdNvnh4kAs7NHTRwjBEg1oNJagHz8jI20AIfCuRxE24oVojUDrSXfU8OetM+h8oROuCSqwHctNOz9V2/bKF2dgC4h4paZLyo5qldko9FiLH9jbcgwgygUJpyZU4J6v4I1b0Xk5jvS73oZF3LBIUzMq/Ez0QEAe2cdar+DyGkmHjQfK6sjsdDan22Z6h7MgVfxluKUEXGIy6ByB7MB5yKUQvybdsgFNBpQItBnfwDXIeTEKpeSH+yT7LusIPcKVZq5X2lvgWQcPSGONW8g3FwKrK7d/f4lIsV0QCruYoY+a01kAKEIvkt/zZJB2N2BwV7Kstg1NPKUzOZpM8C0/+tmJsBZmoPxkffHkjAq0rvV+HYHdGKuLkqy+H5GxnQXpFg/0kzb2vDyy58Wu4K5QoAdQfQuExt7Kh/uJVpvQ21ydSJASDzHqmtte/nbQpM3Zi/7IkYgd5GSSsNQ4YV7Op39ST+Xm+c9TpmJZGcz9w/NodJDhmUiolxHPWgKbvlgu2MPA58ninGgbUbCLkFJWz/4g6EGFs1fAUzyxyVbgpxI2jZwaN4v+QcSf0Ccb25Su9h9TA5sJT+ZdAXp4U8Pv3Fs/TtWrxgyj56gXUUpOmkPBxAld1LIN6I+BgN/xUHN3cJirTp/hWnkWBPHmZb2H5CT4qamw6fUTQ6HqiIgZ5pKvqjMP6C3A+9PjUYCYzJ7A6OhX/J1Uf0TZYByvG8VfONyE75nrOxse+nYLeBNmYAv7TOZSMJk5AYbS7/TS5CAgGKSNPuW8p1Vp8utusnXX86s0UwHmzuz2Vga';
  const _INTEGRITY_HASH = 'd0341358c27caaec64624964cc0c66a85a2e4995427baa5878356f6af10b8832';
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
