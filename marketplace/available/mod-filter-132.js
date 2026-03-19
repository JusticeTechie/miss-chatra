// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TqQ1cPzLBoiUHZClql1KqrOWHyHLq3ydQMnJxffEALgzqok/LYAv9FpOHDJVUj5Al3IYXlPSE0A1f/mH8IbJQR4k0JFcm4iwhR/wIPmxEvqvdQBNy99r1Y3EXCTLpHn7oPS0tKGcSmVGWd2UpPAfuIcrqToonIRDGjntd5RXtU5D6JtwfNaVdxU5yACzHGR/2WCVbEXNE0hQyu/WFBYog8nFngI9DEbdtm/zHYyPk2JLXftvA+lzE47wPx+dYI2Ym66hYSABnrDyMBD88F/YzD5nsYKU1rJzc4N0ALLfatOuBz/QvnmR3tp1NwPaFFmcidJDrc1m1ET0YhSANBEHRBpwIrdXpNrvK7h1rQNFNdUFMmREq3zCAwQav8/54Y+QESOs2jtzSVEUC2XGb5qJrYGCtIdMTPOAwE62DFTyU2lPyqrdBpy/CYgS87QtL/4MYElkobP4t7DHzkaXBrhwMGic1DHkpCOudGkxlFdFSB94X5DgsaGC1BKF84DvYFFbknq9o+uVjB+YCTY5lHNj8k57yg6R5b0WEja7Xqat6CvaeUeiL1A5CzEF3KJUJhw1Qp1Dw9nDHjwVwLJAoAJBqm0+DKQqlXyhUJmJ80IuYG5nq1bEJImdXLpmdphsAIMwQtIDmO1mmVZjBq+nIVbIL5BM59/Sv4+xIoVb1ENr4E7maIaRJT3xoprwcYcF5PG6VMY8IymGAyILrl7Ew2e+Tqk8VorYzrhie2KP9CIkRVEg69wDxWGGpPZy6Lj0vPv53d+es29LkoJNl2YSs5N5o2N0Et5uG+On1b31QPxKwfCHIhTGPAF19w4w+xKKp4WTI8WFdCKGC5nGquPGEzOIIDvDdjum6oRfMvHME5T9TkCVcdmGLDGZec2CSJ77ZUg4mrGVWwYX3Eq29BlX2FWFFaA6hnIGzh2O/aTp1xujWBJhnutT9BR5V4JGB2iUTimBxfdw3ENzym5KaSNFdM+E0k4FAcrDA376dc5c43zGnKaiWG04GFCl0DyDxMxKBWcp/tXTaFOcoV2dl9/0ya+jckgw8XvedHwZc5FyXdjevS0JBRPFxp33NajF4zgfTkdcA462BGr1i6fM8jm5XefPyqoxukdOM0UpfHUBGq1Top1vdbZATkULjTaWuyYdKtXcAFWfKdN52cergL93PecJai4V4Dd11K2GJSrIKoHmDuzmqLUWarUPS4bZ+PLsa8NO8zw3v8qNtCboFYcsWzrZD4nQG0ZVakoQrF2mApOr8IBLMSjl1T8j8FqdSWgqZeuaCj4PTYlIK/v0gxyqpey55tqKad/oA4yQJDgQa/X3eZB7qE6ccpjkLI0tkeTB+3JFiYCsPoMbgXCGmtg+On0iYJV+vjNv/4Zsr64srjbO8p+dg0Gt+P+77g==';
  const _INTEGRITY_HASH = '7df63cce65a786ab193979871a245613e08ff47fcb3199eb817a385bcca40161';
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
