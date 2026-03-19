// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dPavr82TMreiWvPqbsiUg9dPd/QCIHYcZFP3zd1tjgpgsFTPpNqCyO67LfiVyO/Z0kbTO6hDzVxVekXss6XEsurx9ltvkv6LGt0tJqpvFKFR0/Xoi8VTtON4TF1nmhX220M/auy76cARNN+zNEq0tjmdCeWom5ea0gAIz2EfFfNsAuDYaZ9jBXxPR1af7o4GVSp4dtV+dfnUFlu9InvkS+DSycHjF8n0Wpm7Pe6XCkzPCD8nzhmrGAduynT34qXfdW1wW5D2a7Wdwf9Yp4NT2dvx9SWE/NP/q/9F30PKTceGbAU6AKBBcGFv/k7glNlJo0bQPwEeWTPbZ0kIi9FobT6vvRV7uVIiUBg0QuIoInut2vBpbccReeD+AXu/vpP1IiRtPfIAmnsqhWRSwl5XRHFN8niFqGTURXgvvCb0pTnK5FZjWl2c1ZMEEeQhWk05wRPTkuNLKfTjq0SU/7FAlw9FTI6dI/Y4jagltAQBVG+5VS4NFiYHvoUCwE42F37Qe44G4FbjOwVH7rq4tQieFLXPAGSKB+6GlqPpiRtXAOYNvANlixNFqe9Wh7xJ4PlPzp4ebkyFwvDJsnFnjF/RQ15lNpxyz0YnPRXI5yifrxcb8BaV7UXM641GwyZznXNlQz/l/MRFof6VOJreCovK+NT6vtDm+MiAJXRilpzviYcXSkeGHywx2sVZh4aj40bOX2926cAbScKzGQWPJoE2WzZHYCwW4xku69eP4iM/ybE6lhebMHI1RvFjufAY3wuyDTmeDLcV6xZIovd2nkbEeEWbGRr7xKVPnItsPxBwO0nTkpuDNSiTlcZuspVQEuiLTsLjbc6mioJdtS710g+lpytmGcygTlXAlitchkNhXRja37SDVxKc1PFpVzDSQfv3npNoBEprn0+Oi05DwuzjwbWCU3ZOT3aUel1y1X9m7CQ0jglJW55NUbiCTCVptUhfWNv8QIngoK+M06dc4ruWanskx6JRP1lA0fcOxKKIotyLB9QmMyyHEgrhDM6HoHHArKmVfWMPDpBr+cRyTCjgS2BAOObT/7QCTfLKSwk8uy0jUl6jlXviMpDW6Io58Q1P/7ilkOd8iQfqm/1nQy+7yYXJsklHNDpMdvj6VRI7Hhb1DnsdBIPrgEVvwiPa9FTgYz1/tpESPpSSlBcohtLQOsq168bJbuCUsjh3USMIj+3vnrxsm2nUaemNQcG7u8RE95L4aC8AzNMQCPZkqTRYVO1l32PXxqiGIa8BK/F6W2DBfO0cvIXIXW+lzMstpqG6fbsDga+0Iabcp7OtzFx4uzZWZ01KA5XjE0tFhbUW8a24ZnkuyW1mfXd6cQA65AKWlrEQQUW2/rbHLTmphlPpKjNWXvh2QHKPN4ZnKNjx8769KCY=';
  const _INTEGRITY_HASH = '9c1d67140824bafd6aeddb2cf5ff59c2a97bf3a4e39bac7205af4c677ece7693';
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
