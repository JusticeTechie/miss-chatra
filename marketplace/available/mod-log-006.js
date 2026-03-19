// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+PWHZY6nw3gG+ZwkdDhWPijgLhSEQLbfciLFsHY8dNKzFlIzxXifzuX51FEJn47i6NJChGJuYxKQGp1xngu/I0i7X4HjE5tuVqpNxX+C2Lr5QeZaqExyeVwyXRNj5mfgmh/FjpcwDj+X3BLifcWD6ProWypF7fILQLvEROlRR7cN3f2qqldV9dYQ4WAlAVvdK2x53G425kND30Wh/zDzbxrAoROVvbWtqgjlz1b/RWkzbZLenUKoBnIp0dwAGo7FCdxsGNXVe2R9HS5jtD8VK5+BpBkbVLFPUSxSpt+1vmodKfzd5E+I5w2z9AuzqWG2DHu886qTZmb+esI9VwpqTA70vDP5duyt+2JBichLFIrEaOT++ckcVgIyr7fa4MdL/6Lw6hi56l01gBG4OMG/sfES7s0yqOEGSJ+ySMcXG4q1Qh7Ww9fA0i2IaTnwmpBMvE5VQRjzXThUZsVIcSrYwCy4V73NBp8GvbJGGtSb7+Yn+qVIYqv3Ofo7S3ELz4z6ZRnlVgiAj9NPXrNlVMyQUTcEpiNUhTUaeGZ5c5ClE+90SiPq8EVmHvGAg3+t4unN/LmE7GBmlh5yFFqYunco4PyDrputdtA8AY6HbA5kvNLPhyzZHkS96nu+U/nXAgKMNFVm4l+8M1kkdBAVG/bnz4BCSXkq2Z7v5DMPJN8Mo2dMw3hq37xj05ClUDFA7F+3UX/y5ehoMK+RPPuWUtYAnWfz3JQcEcG451kY6ZzW9C7rdZ9AosTNypM4WNR84K/oA0ep6s4GOL+DC0MmmcmvR9zQPEj5ruvOKGY2p1e6mdbmRBzHRhdqIT2/9irDJOk9vbcFNnrdSQKLlbgoEMmF0csnIwVVDXZlbS3xLkwdZe4pI+YtaLnCO0AsIFShXWhiuYsrZRhZhqCsCn5FydFe23SN9pBPkTnjNY/55/2h+JoKq0YaKdhdiu7XSYDmwo3ravoUXMBHIlg8tY0IfaiojKfIuHVs/oyMi0n1yHjbpZckQHuJ5Bu66lRutnjpJGK1MzTZcV32d7ZfQGLzWzgepI5pYA7+JWhwDzBGeRHd/ncMx2snWn+oCpMCBfxuucBsMN14SVcS3hPxDDf7eHccgTH+x96jKqGlll7xha8JVENsrPCZA+L84gXe21KsvzdiisAAb7ah0m/BgoHi4lr21WMU8xe/uyAqU4Jax6fXQpft3ZYImzgVo6X95wXTeQuNY0AVw5QaVfATo2y2258dqc2yI9itWdYGD6mFueP28QQfeIWYsLqQEeucHu2JHyWaDTn4CNKbYU9fTcknXJWHPFemGN811uoHouE71AqIXEvCj9yap3pQhQyQNK0GhHV1';
  const _INTEGRITY_HASH = 'd2d75c7f937899d6257c908e215e2a27608198768c72e2bdde17d2ea67cda2f3';
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
