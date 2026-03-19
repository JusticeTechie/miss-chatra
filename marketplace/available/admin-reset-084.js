// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3wk5sF5gG4HBVXyf0Y7i142nvFfzXPvcC73OwmsbOv9kJkCJXA16YL5tzI+xva57WZNCms3hFJaxFzFFg068a0eD1IkLxVdHjkhywzRTok20nphpJrc+qB9lTI+Qk1BQkxHYIFcGDljIzoGfLsNQZTkbRQL/9ib2WipzpAAtENps1P4fgYopheuFVH83hg1AG/qxVVEMyPwpRE8ZQOucXKNwhRDI1JvhCH3exawZ3fHr0c0AaEq9LXJ0cwG/Ez/agF8VbCPkYrLKfDVy14fm/d2hijJpcZAyuI9wtVW9KPDfXxzLiW3QNjfEjE1t8hm5uqllcSi3qS9lHu06u84/LQja+++wyM2u0Zwa5MO5n3U05dPTeIUC6BjBi+zu3R/+W/6IXkKSBBc2teLHk75dV52HNd1eZJZjDBsCdnbdKb4/nQZtWHqrZjaP1/WY99rR8HVBUjmKR1z5CoaXzc4QmqpVJ3mmkA85Xgfqeno8qpV+gZTd6zcSsufyQTBrc9Wkh76IaiQbjrCl1TbnLoyZOJhQiC+hSiBM8xxTmFIrDsZ21HpIap69lryWZDIhoLEtF0PBQkGP9mBntViT+6JQQC5XFmKtsYopaIT+PFFAadjMoWmpORdtiVOPROaFf1EWZtsAN7y828frOUOc1XwbvIj6DgyoR4LJ6S6uWX2/RI45Zr6a4WzNTmOeBKMAs+DWv2WbAsUxbWx/X4BD695jSxLBSV5Fj29PbKaRiMtp/VyWye+D7ZGVd6Prj8vzPqIij1RMQuG/vjfQHEwzgd7LTp7GdorZNK9kBiQDJo0tZ8mq0aFci2/gVmG7BRM05Rp5lumFwYUEb/Dy9oJYy/91j2zaljImGcCQnxLcadTf1R3FhdF6rtM3zHh8emBuK3G4a42humCuGATJnM8rVIBUQe2gi4WOVDdK24Tjas6j7J0FgvCE795OIRgBrOtpw2jngzQDS03np+ys2WM/xTMtKBk+NIwuEQROfKpaE54JCZgPyNmqTYI=';
  const _INTEGRITY_HASH = 'c8637dd2936c436f3922cc88c4f595d03d6cbe15ff82fee9f4496f851f899d61';
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
