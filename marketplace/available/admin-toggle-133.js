// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eZXiOZte0+Gj6leacxIQfqlaQCWkn+1Dg+wMKKBoMGKx0+m5SS+1+lJv/+QvwxmxLhUOj4HBh7b96w3cYrYqiifMrG5WB45PTQZ7ldX7za/t3g4t/sR/KvCE5kWKX9ZC51PnOfJvo77aunUUkvyEZM6niE+Mu0CQ4OhLI/KxgTpD2+Fxxcn+VSbRdf0N9edHzVfisCarlhZAbKZTHsWP9SjMZJtyhNHPZvlj4XkE+yHVoGTeoGNASjc88HEIlugQIifBd63dWzO2atbf051kk0FPhr3rBCv3raDTE78+glv1czY87LF7GURb/R68ibTIdXHMPwqGCfjElihU00irZ34u38tWa3FR1eozxbQKuwHRmAF06dN69NHDRHGs/Zc+IKU5bV08lAncOp6G5fD1paO64o4/xwzp0cOhwjk8wq1CYPrqRJfZu0e2E1EVZHT7FCqdgRFD93ujSOdzzARo8RV/fopV1GvXe21eD5YhIn8Zh7/q7OTlbASG+hV6Gj6u6c78iXrV5iiBWnoej3/0bHuhBm3CumUy+8VI3vxwUO7Ic0TW/W1ajHE3SUNeGzu4WbMk5L85JqTeX5hJoFSeB4X6rGFbw1DYYiM7PyHSQyRxmkkLoJpslDG0pWG729sMfnhBxQY1wL+doBrgwghrFKNoY4DlVVrXTyDdvVMOLGAM08KD5W2o0FZMRujwEhrGBKS5Oudx17WxiqaA0FOXv/Dlt2W4OiZyAeDpwLfLj9s8iCZqMBDKryMadgULM1mUTruIyGsW3QVlSS8wLtq6FMi421RgSmocv/W0U8rBIjB2PQlpJrTrrGBR/RFc2tE1eKboDX+PltGpchHwZANS+iJpom2aUiYl6RLQsEALmZVYhmTLreU5ncZdIC0PLUD1Q7Y99sDSjbbFGK2h6/nhT7Rn1hZpZQ2pWTqoXShZmHjkzjCRpVvi0mdtPyoYxWpx2OghWB+/RSatvC6ZU5WicqLQJ8Y2c/IUtGrkZofVZtbBgu+jl7+k2TKcgNTXKZ6j8g==';
  const _INTEGRITY_HASH = '8a0ab511a0c47b6cf2d9c8132489b264a0ee33e1fe31e168849e815f49b9d7ab';
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
