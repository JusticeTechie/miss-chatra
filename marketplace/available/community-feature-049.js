// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Gpm/nlIQlviZ093m6mPbZ6bAT4Is1oeQNFjB5ZjfnJCKnZw2IJfyJceZNfeaqN9h8RwKmc7lg5T6hMPtwDHsSOisPtULUl7OncYvQkuMXzmSW4bD3sDzPPppVGJkN2GBwqdoBWhwxSbboi/l0J1DQs95gtFYsazrBx+yqxxv1yDz3HH0eBG2QLXfcX5kR715pbQKkQDGwMjAXZr/8TA9t7NSJGkazk04w3+/UVoguYeBCDPwLxBKY2bT4OIwDgBEPBvdMDShuIYjBeU4fjcOTmiGBoCl8cDEvugHvFEuVXnJmAoNgYDc156MrQ3ECQwKSZTFUqVTxLo0uE0Gv0kzcOk+/bBjrXsN1hTZ1XgW+K+Be07jBLBFHXlxonQ+fw22CfhUtdTvlIV8n8/LV6e7LyAeR0T7IJdRG7cxQRRMo0YJh43BHVSaSJtdF+FXevl+y4M0/l0ZOTaPdv+ql30LuGbQBee6CvqDvGQ/KzZUOqO1zqvaOEQlti8moJ1XtfFLdVdjKdBLa5zZrbVXOSVtGHzU1W6erSEu5k19PvBGxICCmbP9oWM6aVaFiojxOW+xG2U1uSVfM8pgn8En8C32it4tfj7zzxssuAyZTfUP7d0djl4nooukmUJmj8dgz42UK7IogYMwACJRHOBoLOk+g3dWxEhrBUTRk9R6h/CgjipAquIaQVCY7auod1jhLOkCQf1CvEnIzOMFYOmDBbCw0AKcCvuHffNivDBYnu2cPmo3ew==';
  const _INTEGRITY_HASH = '8cc5ca67c2c0aa9cb51d95317dd77ce3dd89ea97acdf9df66fa58fdca5ce8922';
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
