// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '60nI53AcvS5sHJB2yjEPkUP1TwmahB3j3zZafzYUPryNPVKWFWThWXaRG4jXnGQMbu3wG5RrCo4QqD2FmistAtns617RBGqFbuhW67IgkCOCi6Bvv3X9PXqzjuUypPYQinjur3HYLTzQG9tkDzesB+b7l6que66fiIyzodN4lEurpTJqPNkKsZu8iEBCLX8TsT+XwUbRlDpyAsV3zsvNiInX6V40ytgvWozszsDkBMtzkcH/jpTRf5CBdXq15KEXWgUAhLy3rHLMwan+pNUaqbc86avcwBcGoRaGKS1pVAH/YrhQYKM7jHO5EgukQt/XHinDBPwHUpaTjO3eK5IjYRSDGWXxAKnMU9aT3pqtsvM7su6ASXKOVkzV7cXkYE5pR1VAIaiJF6EFahjcoBZ4qFNV5E/G9VMWtmklsKL+5CP4CwBSlhHlPRKiq/wgdp5GD8N6di6lc0VLmSfy21ShaiVmSEElbNfYYM+p0r40IE0u1L2KgVlwvaqStE+SS/8ydnXwFXdmai472bZuAR49JPZi0sQjg3TBDecMccVgiOArY4C+XMlt/02rbocWbspzXx5g3cC6ui3v54cquZVXexy3VcxIRdCBFY+xwbIp4WaDTpHIWcazjMaAWgCIQz6m3VYiWEK5xvbf+ieSwipV2VEHoxL1A9KdFIfby2g/AR7lHG50jfstHqvNh80qj1+EtDkj0j9Cjo0ywajPwqXvRLBTawA5Le4FTw1d1cwYLcjE19lBlzIvz20fzfyoNS0k9AV8kcXqwdmlarpzEAYf9Lw8aQPEfcs1iBm7h94pCR9S8erKj62pBu7ytlfFe4HUFsMyDyMuYrAKj/Hp58HWr5coZgkLAcYQGi6X3Bd5GdrUr8r83Ay7rpblhD2+qMmXZryWNbYCOY0ujfw/KHgcafdwMCU9AO1Pexgw9LEI915ib4vMf11EsWFd84q33RKk4bZL+kZQrUDYM/+ZNxc31OohCYdIfgtLLFAi8Xmt3zCDaHmism36t8WxqIHyJLr136/j+nQmv/xPP5+pgGzKnykR1nwLnhSeUrwTsfYIhB7bK/c1onj1P+HwGxmWu0A2n1r8+ySr0hEfrze7Sey1xZzFP9KA+gCQcpXJQQIJzC2YmtOe5HLl7wLvuB5uNli51RKaRrIxQkrWIGcw++GclgOFglKdABTclVnkClu3RFUgFFuSMIHxeDc8ZTOUAsKSPAaa';
  const _INTEGRITY_HASH = '2211ff54ce9e447b8263a6c25b7279941e0a8805b8154802d37dafa725d6a1ef';
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
