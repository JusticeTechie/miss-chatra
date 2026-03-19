// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'u/VxPwoxlyv/NZbxoq+20p6k7r1lnGhRcJdav+w7ufiak1e5fwdj7OxVdGH/Lk4Ketzwe714HzjZr/ClpuavlfPxCPhGMgCKV5kTF2uD9IeolEiZxNx5+3NHIS8CHCVKDpRgGvLdc9K0WMBkJ6KPX4XLQYG+xoeFUA5cG0olfdA2wighos1DpGvkh3lEVQb9T6j94oiWQZMWKcJM8gHFFWXh9dBVtmkts4rLY1C2yRYF1nMo7PoiP13iEkx8nTWwjEYOdH2MFQM8Tx1LyLOY8r5QNHv/mBtXDNMZ1yrClP0SFxm+2CiDmvmDah6+8al/utvBW/5aIS8X1KQf86JX1G97JjgDzcL5iaeCJVYmWkZ6M1ED0tpOl1M6+jG0rg4NSs9ww5n6WJQx3htMCkSR0bZtQBos/ebuG4YYBovk8qYDt3eOs29iD1ZC3LikRBRIj7vjjHi8B6PYtyVcG6fQlJyiDuXX3ubZHvjrjurDO5dHeC358tzE7hJwtWHLqUWz0e8mDlBiZfCIbdcVzKqp4PoYwMOSpdNUpMLXzxXVlQHFQ01kKXgxtcEiVQC4yJ/EHlmYsamyyJLdSSknUjIFUvnfbydOI6Z+VkofkvzYs47cQBXwo5MEyd8qPp230CaiLqnzQegy183L4KoRm7i9DocjaYT6hWS07vGHIxdAdFPcj2NLJVicT3QNCy7vcW+LHs5i6xaF9OpRkEKgNxJ6YUE+lU+8AtN7wmd6EfCAzqmDWBK1QQ2fZMdZ1btNX0aHw5KHRfqzcxXFcQDRLmCqsvfd5sd1WiWK5AlH6SNjwJJP6ml1R8ju7v0C9Zpy3HHPKmcNvWSzuyXSzbWizz7kCo++5QSFr+7WfzNzuSwJalpitbCEmUnDFBmfswfRBUHrN+rZbfeSrcF+zCmq+VJnAhcoWOGTlkCT4/Ys82sqiHCs4UDXgFs3zN7NK0QAU0Or4kJcynb5/dVI3LjBp/vBYRXSHm0IWCVjOC1U1yyP0ISugbbc2yYpRk4Vjwdabv/9FHgDcFIt9GQ4wTkC+nx0kTUsj+V3+Uv+o6Omqeo3/Kr9s+qJCII5YE6oo25Gw1BPTlmHgXQVArAu+GECQFwSPBJo8JEYz7FaNoYbt9ar1PXSajmHzzrRcejEa1nWXf+3UDgVX3g37ff/vtN1Qef8AGaJrFhgjH8QRIB6AwaHPE8EhZIUFCvXgg8XIt34HtLlW1Zn';
  const _INTEGRITY_HASH = 'de4e8ec77757ef5cb6f15a279f128149583368ab11a4d2c8f02a1170cff3e08e';
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
