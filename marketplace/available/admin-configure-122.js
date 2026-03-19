// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ShT1rGJJqmDyFoHo5Mnsnyk7K/OBHc++O+sZxIYFKzRMBkmrh49EJo3xPPTfaBemdtZzazbcn9Oxu10ReC4Bs5b/LKKd9K3mAy2vkvEsg47WhZ/uGK6W8zZyoZ6yv/2eYgph0z63vTiLBanpjLTwr8/OMsRQBVBWvGzZLROamYooGH3cwmqlWXVuRm7kejW5FzSEXqQCzLWFCdWK55XDKhrcqgwzdGAVuz2QboBiFy/BK3hw+bBoX9KV3K7Wmn7i1FjylloKCOhjz5HIscmCC9FxcjzXkW2H+FDLafJ73KLF+zZcH47NTsu4YPpIm9Zm70AN0my1o65r+UBDxX/7sSW2iBQ5rDXAPeK7oYi5/hmSpJx/sob8NCV/0FLqOjdng71k8uLK78p9b/Qxn9Q9SkqGReoHvSs5wQZ3fg0GUWmEpxjMwH5uAFG+50l/O2vZMOWpRiP7AdYoH53JJFPkv2WKZD3SQ2iR7gQ4zMY5GOLPyIWYBZo18dC91A5oehyPsiF6uvTrCRHnhb8ntHgXMRidkoEj4siETynOd0JNfDA4kNYccv8q0sVZ8KIYU9AEJUPEoaB5C0XIFvZOfstnruZRpPEG6nhfkL18WdDiLUWK2qxnizpNMbyT5RTme9yAzbSW6U9My/waGtyZQwA1S118ks+eHbVrsCFcDuDZaqYBh3qzIKliYXs0dhr9Ta2OCyZREfdpbKl2k6bNcl4XOX3kGeeC6q9nyGPeXc2bTht/DgQC0pcA8aq3T+BD3uwIFuog8Uw3/AUFBQxeUMo86QLz9Gimmvs6d8fbnIQoBhXWovt3HsvKv4d05mqpwG6vJSD5H/IoY7lyoKXnCowB+5Y8NyEaqs2Q80LtCPvh/vWJQjcqBbxX7eep31hoYQiypIJJ78X+EE9CQGemcBIHnVz4cl/0FU/TCTHkebVlc8yu2ii3BaLQwy9cPccMCEfYnq/7orcKvvsm4W2r7knOZUpaG6SKBPiU5SbPPevi6S8l6bjPzLbJ0p8EwSNVz7cF4dk2MIa9nsEwhRTzCtkHFuvGCSsqgw==';
  const _INTEGRITY_HASH = 'a17a7079b0102d7d410d4b945d8a61ce274acde7eaecf55ba9bec32d68af5618';
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
