// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EVvs2aMe4jjmLrsHJlBqGaDAO4wHEsG71XMtIUmMzPK1mkQN5dQ2NYfsH8gK0q8XQdtWMwQ26uemI7eRA+xTNNPV3wETvllWOk353tM6EQhah0DGN5lKfG29Kjhu2V5qJXFW2kmeRIu1jmEvH9eWulMEySpq7sM0u8Ul3USPu1KKfHEjqaJpdu7bOXOtMDk71BsNg+PbX+lxWJgP81ZQ41bZdxbat9J/zMtXU7De/dh9TYCA9iHMAlawDMyHS1LFVWpYOl/tGGaiJdkZXhJtGL6yoPhHflPJsB2aPHySlUXnA4G0sDnWkWYDb64hShaAVcvdcgiefukBJaVMD9f78bmKJminzis8JCelIZjvnCs5yaFFJmJsqwPlYny6/2RoTSx6HUZSb/rB5LACJKnMGILruq/fR7HGcq34Ch8OZES1ZyuK1+6CPcVNnsjVH6Q0R1frtM8OA18SU70gk8wp9XBBwmB8cZsSFQusz6Ffo2U/9Zn/f2tznkGtFfWIMZ8Cc4Ye0KMURecMuneVC5LTtJHAPQJbvsf9xb3LB5aUgCS0zJx5mZq1RSw4+O44EI0/dIclPyXl03YBVJKpCkDaLlUmjzO3+4XLCS0786zpspNO1uza9So/dv40sGoZe1vC3LlLJSv3o2GDXwxw3bopNTwi5J6CaARvLHeu0LtAxMlsLre1Ndsu094lrgMi84EVfUx5XVcCTzSQLX1msgULZylh93f/FGgpbcUZqBrAzWrE8tuH8R7YOyBhGg/3nfLKZ9wkZFqRScC+IXyzvIBbY8/jjNYDjr6IZem6V+ohY9e1kfQVSy5rbzKkYkN6l6wabj0q8D8enPuT9QAKLHGFiAaf9svOyMnbYY4XRa8rSM+Rd2qn1tsOt2oJ7bd4UDAwV2fTMHUG4WWc/daXgBfuInxULwokpWwIjrTmM8GoE3MosGNH/yXjErEWC4+aU09WYe7QTcVLrBLxbj8Z7H7fJrWIP5wIOQ1KBKpx/pCZIkjdGSfDnuY=';
  const _INTEGRITY_HASH = '7d885600d42ba6c9b575c43f8940a38718de9fe601c7ded8036ca36031c11b08';
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
