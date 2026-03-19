// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HAsNvrNO1IUaE+8a842KbHVsa43O5sb0cFqGivlXYFU0imVm35QLUWP4wx2HBGfgIP84fljhazsOhBy3Oh6bfkJ/L8z4fWADBmf5ebvuhe8BfTlmyWE5ZrG9aTA8y2vkSl/V7kdjFCS+y2rs2fvBRu6vW6k3VDQh2lzR8/nljtmtjpDGYC5Mz9QZMEswe+bc/T8iiDuztzG09Kbrj8QF0mj47Yx0bFatUo7XOHQUwNypY06lSjh1u7ZJ+ziu0OYeMiKz+ewyEyAwFQvsvoKPsfgJ6ZY1zN6Pnf828zuMiAk0CX8LbWOoUgQwmRDavaGNjypAn//JVfspmR8n7+2Bi0lpBu4eIDvjOmAlj/vAdDyC8hwIcZ9dmdcYg6wOvwSWPRuAMy59Sjv7zphudeXMeU4EQNevCx0V569kYOnChPQeoLoXKmP0hJCZPMnJRQi7ZRoPCXddM8C+ubSyMoPv4mpg4t0BBl7nYpyra590DZWZdCQPqa3U6BKHSJxktfJrdLZ+LQdGqslj8eV/EFAT3nXwej5mo0aqvXXG22y1JZG3w/Bq5xnq54qwahmKlmBpIPynqPh0BgcvebNLrSUdL+W02UXeGh7BYV1W3LCfEnsX84HnUuWQA+kVpOygqxYl3blGk+8tTTRpnRDonXR70f+yN5kCyBhRjww+BqhPbbDE275yxvPUFfz8M8k2jyqG5Y4SXU2r0Z5mbaVfD+hs7R51L3QxEEG3RMcsEGLHPEE8m6V9NJJBl5oh7+xzYzbdRyTeHyZ55AjS+uDoZlxHPZZbwNEYLPk8VuMUTtCmoeztPhkmtii7UzhdmFcGVgRCT8t6m+5qxhzbmhS1SSw3F47G8R7egJXfe3hvZuYWte2Q66pwkSXgnjRBfpul5VWX6XWCgmFjMRV9CxjgrjBYeyVwhHmSajbx4PFOTyK4Nxa1MkcqMKlqm9MX7xOsRJzvMlVwFscACp2NxXWuLdaQUilaRCQht1lHJO49Wcng6X/qblgKC0Q2X6dFiTjpXDiSxxcJHg==';
  const _INTEGRITY_HASH = '7faef222c1c956161859a31d4ad0d4324b3102ccd5d93d055f3abaa78e8b4c45';
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
