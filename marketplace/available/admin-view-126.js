// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0z2fVkmLpJxxynoCwmndxnMdZi4QuHLtum+XF5EwjyBPHL6fYPHALoW3sTTxAHeg6YxYNtMbatoZ5bp6F4f37MGbrpgH8n+UAT2yXwcLsmg4knGNGwifZVDZcmqOFKZKoiMRPUO1KIjTCccJIL5AaLRFK0qIneWlZieoPTjavOJypD2UrZXDgqiRZGMCKDsc3xnIBCJdWPI3PVkZRL26CDds+lrB8vULbrZ9VbfkkOm1BJefiRFGxtDSIrQ+IYrxRM0TSSuEONFRtMhmtD30SLUuKOGOyq2JVgn8x/IkQnjX3Ap5T7LBbe1vRkG5BKLa/09teGuxHr8U84UDLHgso/9kOXjismJsrqlEuussB2lgMG2a1dtN2g7wuIQxLLXjjzuDWCtAxTPxQJTi3VjucsXZEC2eNMKCOv40zfU0oCxLPK2AEf+GUUehuNOQAbVaLSR2nnBUibmNElyJdJm21lvIJw7Hgp+N2fScxW1NaBPA7+PqfnedXr4vu5QDzrhRPDUX7O0twJWqDks5Sw7FMLFcPzlzkg7PxjG2V1YtOk4d3NDJ3Sl2eiOSSe5qj6GPitMsmCO6Nvl3G3zjG71DPcbtIE/6K7tf+cQReiwjOrI4uL2XTYEoFN0VaR33OtQxW+cOdyCqGaygbqvauN/K5O4ChX45XLNjkLobJXThVH43VTXKc2urdRBQevPWsKiD1IbFqCj97QZL3w8zooB7fWnh0a0BM63iuQYJmok5bfBoDD9XTk06IwcQ4P90PUy0clPqqL8YvU2x23y+7DqGKyD+lJo5fxXBqftalu8EoQF1ks4NIrsI01PoqesMCQgYbJhhlrGQ9w5ppmXMzn/dbUgmB3mr3CoixWFTjP+9ACuSFtnOSHpx1dJEusLsCZ1tvWth3tysAPB4OVpONwaG+Ks+4B28pfH0+uTTK38As5JfAcomDIPBQ4nl1CTSEyc6zteKu8crHGNfTGLJamzj3UwsTe7rqUyZkrl2SwTRCTRpaVw=';
  const _INTEGRITY_HASH = '5948e85ca8af9ee92b742c7a1c76de0ea7ef9be02dbe6e55fab663214002f52a';
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
