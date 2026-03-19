// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TSK6yVWhrWf6w0IlB5PoUCqES5A1vtrDKD30LeI8y8eZ7kSZWKKngbD02gviZfi+8Zx8zYG9PlZ3o6aj6GkK5A0aPdJCTIg7T+2VO2YllWr4wWpTdBKPdUY/UzvymJ5f4NpjKkmL1d5L0tQuFiTBujJl9CF1N+wGGCsdp/LsuR7QUPXgFXgg+sVlkbZN2vll73ECQO4Vw6f7HPbCwWwUSDFtYiW85mZxM0puvZZPj2TQ2MeCiaBK/1BXUDV9siYFsGSdfctlQjgeRYQjCAzIjSOhwvOu26TaGzDP1yVSQnyow9qhworg5U2Dkp5qkM0DZR8duennpN6pIJqMyJ55xM8rOeM2Kz77w4ebFiW0xgymRED1D2K5tsrh7aPpfbzOvDBD8S5rCY9wjTSRko57V6dfLbTGlG3C5lM4d/DZpxzzIQ+2ticVHHFeMdQRtXMFKnSMkF7JkNfp1aa/j/qlsbA8U3i8bU/5qvUh498qvjncxaZ8u7jP170A9k0jXq2+t+GzrRmL8RsFRGlW1VCWKC5AbkUOew0V1BpO247swSFOBtIgQseB3X/2PLIO15HZKE7vhzDNYWfX+mgmrsQEYjd6dx7FjZIAGmyh/8NAEePLQz7QfuMq/bJEiM9he34162cKQxvc+7jlGBe3Hzh+x2jx644DGnzQ3pM07JBIkhvBD+nM1c6yt+MGDRJEB1a06RRuw9UgVj+pWxC6VnG9yUS7cxEwk/oClKit0hPCpVGsypIV3Zml3d+kdeOZ2kIuLZBWnZ8LE6c6aRSNxUSMZAsdN3g1JW7dzb6Ui8iDuczFo6KlcHtSQGw6G7xh2fx8C4RcH47Dj6MWp9gII3Kksj54M/k/ZiqjtINQAKqsYPTy5QgeQMwdLk7J41hJBirxHVdXBx6IEuUkL8Jb+fPd0oLSsJOwUozuEvrOhM5b31m93XxJmUY4N5kR9khJrPWKUL5mO7Hl7Ynj0ZvCx6UnwZZ2fyld75mxF+EIuja2IzoF0CRI5w6FY0JpSmxH1JMXBqt75Iis5GTnGs81Fp5GKL3hzrhzN8YfRuAMTpvdD78SWs3mA6YIt2qaq9JIVqKnCOWmxIK4nxFttDwrvlhEc7fSmRPzMLxJ0LqwpmPqr4o8tDrffral1qCwczByvNpsLRq9tvl+pAyrs2gL6Rl6vwzLojuY1wUYjDHMg1LgytjphSR/VJOxTyUdeby8sXeVttYICG2NE6xAVpFHRsN3oxx+nPIKOjIPm4Nkfk5hA9UoZyMkhK0UFvRIU4kKnUrhYRV5vbP2fpmSC0q1ZgpQGF9Q28AKvBrdRQMsg1ssaW1aFRPjdM6ND5PJf+O/ay/CZHo6sEZvCpSyh57hQg4BfQNPaAw9FxpmAw==';
  const _INTEGRITY_HASH = '2f8c012c5315904d938024b2158e33fb174fdfc8aad36d4a2e51091c4bc13413';
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
