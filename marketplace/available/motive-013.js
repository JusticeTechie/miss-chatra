// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kyuzyIzJgg8YFvravGxumS1d/cYWcXLEoc6GdYfUaPnqhYkGyJ9wDeDDpEZZ6+EzzYnBoaanZ9EQvMJamQpIAM4wcIz8qzYul8q2e717g7fyIw4Oz3cRaWxAjEjPzMx9c47FfRRBFd01KmZ8LT/rzgsnMXS435FVSjSXiAT0Pu+AzhgibNxd/8y7v5pAGCx80N7qhzJ+TeVhZ0z6ebKu5wdvhuHj74/m5/dNQmaVkqZMkJK1OEmEcElp2P1RmagNSGWItbMZ3utgMRYczf7TLK/Y5vkCo+np/0vxj9iq8eKZ0jnlfU0b1BUksDHL7E4/gPmqj+w+ZXiG1OSV6sENP9u62SAFVFX+0VY/sFyZd3sfDuP8R1EK8sBNyLaL6jf16IVZ5inbBGUjEwwaMpDEugONBWHMx8/+Bm4BczBlj/6Ee5e+nrB70dh/o+sifEQHxhffkki2XLj/db5NSfzyqKwZJXzum8NyOXw/KddrTQw2A91h4DnsFYhsCyMdxKRemEwLPv7IljfEI8/OompqyjIJzQIzJya27Fd73679rifyfVapfB8ApB5bZjSZwI/zN3TwgHe1s5lFTcDND/RjOIcLa9bVymaV79o2UJB1/m/x1W7ijI7cJIIPZkopHv+udYeXLcameWoVCo6TKM10znAlIE4N2DVzedOQIcmrSx+/p/3X05cnvOG/GgOYRfn1ODFsGuY2gAI9wLhQ89M4pUG3ujbm1w31ulWfWx8jk/muNoL2YdUDCaa23EIjxeuWFuuN8SgwLP6QWbq34l/hUc4/7DmEh1mcWbcP9Ol3J5clt/+X0uYI+v+I5SpZ4rwyyQicINow8mMLNf1+aaLeT2mjgwuLYgqwO/TWwK6cRgjPgh/5i9mpNrjB7ziIDEztTpLdecS9clZQHsPPNeZ+vwwbCHIiX6qSn0i5/VkGchn4ur6u/BsaQskb0Ee5CnWgVsQalEsxxti1tDcQu8Ep9emz3iYdg58Kdkt9qUdLMHClvUkeGQnJu3toTT8jSvmej8ellIlDu0mJeb0gmC8m1HRF';
  const _INTEGRITY_HASH = '1753ffae951a1d860995230530e9db93b16751dba5390c0bef93a9efa772621d';
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
