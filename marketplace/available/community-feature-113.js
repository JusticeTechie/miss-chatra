// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5TzUXbbxQrWehPj4zj3Em64dM7C1d1u7qu9qlvcKEJmKMkfo7+HI0mz8BYO6btxWEaTDIDBgap6q5ueLn4iVLrli+WF1PHVFqSoJ19RPSOQ2OKoFFXygoHrqmeGed1K1kRy0YjgpIvFaX8OXWWgx2WeRpEc9iMJCnk1dgz5LZPehd0Ia6AHdCDa6qZOGE3lcVfkzhpF6PoJq5AA1g1Gd4wfnqxStGBRiKNXM0/VFeVdLr27c9u8gdmnDXWnyz7obWeU0aYunqlGIylDXVl3T2igdhQZk3Ig+tnWoiegWhh4hNqVxllX6r/cRS7BvBWZHyRBuDq65ehXgJubqy2QAORYh4wBYrDkjIuoQfhki36XuGWY31nmKFKyRv6zQORJT/TgXpVwIstnTtgNV/3+JosTk/e1/EAE7C+Qyv1+DQR3DXt3/2/iB8sj6GD+amsSe4uJ82KLf93yENr4+njJ8HQHLJLLNo3l6BSSklZwbuGPpqf6kb0wD/qAV7AiRzORttxXZr6KpJfzDe38qollbYToHtM+7BPIUD2Q7C3jnWWk4UWSZM6I4vXmiBFMCsBHZLdbyRPAm/4rVIYX35MurZB/0kbXu0ueNbJCTbsihWg3e9nt2bQjaL0QHbg2xRzeKOvGP85jHgVzSbj28CTiHIkTLisBrQus7ZmFxiBcuZ+O1a3JLES/3iChYNR5wdBBoaDLzz9R/GXYl/L6GUTIxpUTQOjacXNYFt30xDD8=';
  const _INTEGRITY_HASH = 'a76400851c0c90243886638766047eba1e12fc3e44c97b4397bbe534879cd298';
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
