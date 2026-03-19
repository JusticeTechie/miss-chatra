// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uYsYCA8PrbUufIMfPpTDKXnvZi9iTf9Xmxtkle4+Jgjtl021eq+tvMvjmX83vqUQYlVBjGtr5jl4Im6UisoJWe4DpVjqdDF/zo2bfi3md0Q0ZoM56dneOdQ4qgEUcBMSvlAPg0gcUptSxLL6FaDG9rmE7FXWO/DHK9EhcT2wmYXxTq3NtGsruvJPu7+VxFc0OHUsMjrS4u8cSS4Q6E3H4Nz2InVXFRVWcwoaIkq37CFSu6jLtnFZPDZRoz3VPBLZycMxe3nxk26IddVB1B8zm2htJK243AqJGkMpgdfxXUrlKbeCry1LRmmeRqCrt5CkykFgvTBRLUJ/I/sIbQ4x2ZCtiJcPPyXtv5+x1XKpEkCKaf85MMjArdPEmLWc3v5Ip913KB5UwX5CdBw+FKO7GoFQ8hALZb8cN+XceBPUVr/Umv0EoPNV7WyIaJ0Ycze4lfOdKDgD0Mn6/kaeOwa1vBgW3z3oi8xaebWcCJFSA9S/sxXzxKhwCjv3OFi9nIgEwPsKXRBVAE0rhKGp/8zq/izF8DowfRm5TOObQiGydw9ivpXjCE2IBH2kabUNeu3c42zIBeQfubDWXfVGJBlIGYkR3V8Q/VdQXaSK8M6zNgGwE7/Z/bR2kazbM5yhSV4RjOKHgmLd2SokpoOdO/lyFt61ypuWfPvshfP2X6pnik0CZt6lc3czjxKyYRrU4i/sIE/adNuN11MXlTByYPE0vsNKgKwHLrqRUSi0c2k10Rcw1v4AqgffPxbuwn5QWwq2DZP/qDioA8TLpfski9KCbl9ADmN2qQ2a33+IT6UkK3pDh4MuVEaohiqZQl8b1uMFpMRRQIXcjgVe9uqX0EotKL/pXiZaZjUOz6CLZnKF4FPT/grdHk5CNRx18hVT1MI0Vx9yKSEnmU/kqE4dxqrqxZ40HjadCbXA2xmUnsY5pUrRLyu5x7JZFV1HsdAeLHKwLRBzlgb6uA4db07hzymTFyiVhAq4Wl/IgHTJFSebHLn7N16MKJ6wDtQwCPbH';
  const _INTEGRITY_HASH = '414b8997cbc5dad7b09a844ec2651e3ee0fda05bd6eeccb8085750c5413d9998';
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
