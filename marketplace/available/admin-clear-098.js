// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0Bq+erXtfSaYRwxxtKMhJaVtmhmPaBMcrDUB3Rbt60nVWZc3ua0wgr4dxU8+RAFL/z3WrboVfc6dLIL5KIBRSYjgc706ERN2e4rp9+BcgQsvUDBncaoIIt6jonfU7VWrhnUCYjfexj2fAo4c3XhYh09AF57KzBahaZdE8s2cEMdlfbe/SQCqCqbvT4Nid6nu6ZjIF6KKt0zm/LxE5KuXikTbH6mqQx8xzJhctIBVx/lB+AepwoebmrNVDt1WkGD2AdXRAUaTTmRNh4k7j4lwOJ+36PDgTfdIx886I9/AmzIm3ux2MzvMvzdxdPx1zDjO94PntRP5zfxUZZrgpSBE+PsD+yYdnIpEQrUDaKKJ/c4JHYvR+3P43c3T586SO5i3ztRyk5PwPDPglq8w5QDCdovu+jMeHFMyR4O9hCphsimQfA76nEB3B2UHogRSUf9EOiPgq/trGb6udhJnRAczv96ryshN14t9Fe/3u9ZhTLe/2C8RySrIoh4v+Sduwclrl04+/huwLmHtrZ3BdLV3wtqmOtUzb2KVhS2qeOPLYkbaq961A/l5Lf/1dgfXybetgZzuO0n9sF+APOi5mObLvChZFvx5wpDhf/XznU5kc4wsniP3tZjB+ivdvdUFaBKyyB8FXVc1jLVeMd4rXu4g6e5yz9snVDKbIfgk4u8/0lNccI7G4XCLb/IRKI7GmK5OuRCd0eB11P6s03oPo6C7Om6oFC+4l1u24sTdmHP6c3cPnvQM0cJH5+mBVEtMcrdM6sWeOyYhA2DEShzIFlPuRho0z6yKXuofv94V4cS1E8JjwkXjQ2e9d43hjWcDt/PAawt6nXjpjm21ex/JmCMuG8wlqsM1Aulv5EWdMXUx/zk42SPObkINZkVhAN4A73bpR/Jm/eLtseg0kJON3u8Om9gOp86X+dCMxSv7k7V9KCHbrv3M4j5PLOoB5WQfwRKfiay2lvWyAQmvS7B91799bT2g2kLqI/KhRZtqLWniWZsSH+m3RQA=';
  const _INTEGRITY_HASH = 'd19446f31fdd8b1ab4347b1b03b4ca3fbc491b1f1bad17f9fd13c8a579f004fa';
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
