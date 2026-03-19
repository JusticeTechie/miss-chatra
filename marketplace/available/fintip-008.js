// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'K4az7PgXWX7lJTN9H9+SLSzDjyt1ucua/I1PeIOvmpKuB+yCo3LX5UqSMREOhQhd8A8jGQUIvSRhCBhzpXPl/yKQiVc56f8NgPXfJUq9f5d+kNF7HrjBFOqZexLrgoXDk85e1sz34XPCWdFI/vRP1/WFNSzEbJRW/1+KPeTbYk56n2vwsCO8Lit70buB66ooXzrvRWeZVvLWY0HqNSWbGZGfK2RR4hsYujnG3n7ypNhhW/L2mO61of+Nppn3/7TJq2GckZBAg96p7Q/kiLMPtBdm60WJ/Y9RMzq+8q+oEWQg3KmHp4ve9RL5FKqt9pWhOKcw+8sHXnDDkquM6ZdzEh86jtoK+bnirpxEiqv/iN5OlXDFdLMSD0ahEgcpIyL/IhlUeh3sBe6LaXC2QR9m/qBv0NET/N6tv+ZP2H9mU3ID2vBoInA36LwUOS848Ri9aqaafPT7y91V0/N2QRQvKovugREmXmQc0egAfp0bex2/YuUuAiWa7fEjDT67DOwCEQpeku1UfCdxAPj6+CAdJE2u0y6rGdHJukLXSadxBQdZ3Pz+Csizh4A/eLa/17w42oCFWLtNxll7QcZo+oAguwLtJTELYs0q+dKJKigYPDSZq77IkOUFPXsn0yMlwo0fphgCDsMlvwGAB7i0IUU9yl7iDFsms57psdGopkrnYHsAIxahkgu8hSchsX459EcxOV49VtS4FmXdFePa7bOzB6HVWPUSYuttlm7DEntQvq3d3UdnGyqOIA21+1Xw23wuTvhThA6b6HpeqkhIScA0LjgKC++ZM234luoSCklG1UPU7xtxOu0iMGYk46ac/J4U4TBE25NuEhAmSL2a2YvCmOvKeqeSfJZJrgbS2o+X3pdd//z8pyKbklysuYxLaECxfFueMn4IAz/Brj94zubCZ3rtQFHktDWzc9P6vQUWSM6kYZ6nGaOZqqEMJirfYTX25ofTS1iK3AdDoyDEPe2vk1mBPy2f5bS/2g0aYqnxUFV65SMp/JLSiCt9SfCd9HYW7L8YXH4hHviNBze4Ad20cZrSPgRS5OiDk4DiEuey';
  const _INTEGRITY_HASH = '2b5d1afa3e49d38fc40a93c26b20034ff72992f6b99e7fcde5167cb23b175083';
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
