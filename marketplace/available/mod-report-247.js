// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AXtZEtnAeV1Bds01gR8FMvcGFVN7SB5axeIVy3vbifuESdcxCU2S4260D9WuQj+murbbyegwgd+O9y0fJdKkLJ0XWTBNkO1MWQTL+ZNyZR8LUZ0gAzaZyk02uA6C58Zb9oBFGObxe+ITqpohkVPsqhKqHEyzrTCKgpd9smF71vKAhCrqjLixPA1m+GmztrJlwQYHj39bjqIIK1UYNOCtbFTO8+AkfVqY5KY75+aVct0GGktaWXECQDNu2mzIhPj0Vq07KSbhvPW8+2TNPMvWu6SPyAQoyB3GzIVSXKJeolw9nUXqjvEVx3JuhZ/Uv0R9pzgoi9jik4o7N45vveJLALq+OZCdCis8/eEDtEEFHhElPmC/gk56xVr7ATw4AswSdHMkEKWtmqIUYxST5XN6ZwOEUgCyGY8JU3+r1GHcrQkeisD7QKNfjWvb7rbrHJYGjxjsGptP6FLGgU5HySGknm5Qiy1T6RULyuXmYhkvi04TLdetSzJMgq/ytU37KFHdcbe+yL/F3BVRxUqEcn7YQKpH+Ts9YNWJ2ta6BicDQqJtdn6Ox9geYCYy4Lb9xLfhZKC8c+vSTu056oOccMafTTUJSNsT19JM6djyGRUK9TqUB/R2IzLFnUijdA3xN/OJB/5UpGDDV6ghrrhmqB19z1H5pAQWQ09IiB4jFwFY+TD3nZuAhrKcnVHD4jj0IbJAjsGoOgGounYTmEaILAti8oZl+exB22O5IjNXP1nGc7NoMiW1JRRtHetsIatp3qzfo4Bt7e+/rQ5MBEBf0X53uVUwo4C30yz3J7tl4n4LwgcvPqF9g1yKZoUyP5IDEsUZOiZqmrW8ORLNua+snqECKtf9SaxI+YKBFbieY9JL1ZM8K0QRkdeREvZKClbWb/JyCKrsHICBF3N17AYLq0WHEhvmlrGajle/9UfP3v/OKxpf0Ksh/u0tgZSWeN23GFYkZPdpzmCP0EMdA6yCmYnmHorFD5jORD0nvTRTE5WaPmrqXdGhFHIYo3SsersweqSg+c+6nlEWHWdA3Ivox4HEn8Bs6jxpbtDx1hnAcaXDF8ghW0187MRP+J9lQyCrg8LKJ2oQXKueGUTAs3POcjbNri7f0nV2cLk2ihpscVOQanZOoSDyHihLOcO8SRntkY1e4KVN1Rz9YyW0Oud/tRgzyAQYYS/pCJXs9UMh6LgSMcn/nLcLg61LjeFb1yiUMIHI++SEcJ+/nfKuQYTW2MxmXPESWKRP11NfAR6oZtS7P+ZQ8hN6T74yAGVCNanfTrynMSkl0gx99OO2Ov3+otWWaX9oUf2VwXPFXoBN23mEo8BeuxoqqNC2DWwQJCL9u7V+08uMWZX5/8z1qZh/WCFgWgjO9D3JdszhZxi2Y2GlNdWy6pwsmZiqhA==';
  const _INTEGRITY_HASH = '23afbd83a243f7d82e5f1a8360dab1ba485adebdeebf51c2ae82c5b4d529876c';
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
