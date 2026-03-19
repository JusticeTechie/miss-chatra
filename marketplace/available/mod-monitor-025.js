// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L+X360lKWE8JELUVDr7btbUv/EWTsaxl9Jw9t+tL935Jdu9KGz4KUeJHdEG+VHULw1n5hDkRfygwO4S7nArWxljpn1u6r8sz1MZodXNacqM67JItjidRhhtdYZMVEFVKpNOQsJkqlUa8yZ0flUEMcpi06QLLVMtihgo2kpA0pncYD30P9+VCMLjar/APLV8MPqONrAxZ/9Z368RhcLAFxiBaFdsd1Mk9Ir9u8hBs411JoKtd4kWWY2PFC1pCCZOru1n9n06cFZbOhm6vQ74XSy/AUmauskHwFOJ1otSHNBEUCD+/sFXLp/TBrJDYL5qzibYj/itflHBaDn7ooysWt0vfto4bYIkHjqEpnWXCjUaLnLblo8b8k32vQBWAPGVQKgh9fTDvuEMcMGCvWmpO34LFczpYFvDXqaw0+j4MXcxY77wj802aVzw+YtjT3zcg1iXWDNXkHzX2PbGeea2Ivebsqz08HNQRnW7CkL+27luzSnV1gUYJcfcaNmhewXb89f7rGDRUCwySSp8ggj+N454Ru33wpFDgJoCB+ULzRdcQT1CQW0OpAo+3UJfJBD6I/rRWpEu39Hmhfnurfg23idcaaD93Zrvt3d7h91fPTwo0WuEeaf83JyefvXDWAZbNvSytSMln0NJQWGY7AaFUO1dr6Xcd8dlzotca+LUN3qrDQ2iOwlxfyUuTNrpk2ovqOMbqQM9PZw0tuXV2Zk6tUkhOw2p9L7PYNWtSa76TB5L3Chgm0NOHNeYLfo3RptImc3kjL8dx5XyiTPDUF7oY48Bjioz6Z5UlebaXLav5YVe7rAYOG40DLWYlFmkUJlsHih10OL6PvZetNMP9CBhZR8phJR5nKvu92dWis1KZiCaUxgYN9BnwS4oV9csq6DOzkS9aUeFbHSOps8a7AzJbpZOwLEsnh4zLZOvFmXMfJaqS4oMiPINF6I+6apLoi7QjrJ7f08z7JR/2H4iZQ7FVTJBGpfsghXUOWOaX+up4zLVptJMOFa/a7LTG2RcUV1/OmTGMaJFD/B4YCzPx4gVUSuLrA0TOPwrpYDpdj9qDB0KutJbZXe3Olww40l4F6/G85M+6xa5p+SOGyZXr40qWbFgDf8vxR1++FXYHHsI5+AUvOgA9B4lvg6wUn3/HWFiGG0IWQjJke45gzLZD1OkhkuIZkBILp25RGpaZslWABWUQyIMH4H+ZNZ6FalcWrKd9+68eOpcJKfgF8RKWh0v66fvQ5BCi6BgeqzgvPzFNwZcPw2Tc6K8taXVEJJg1gyTgV7l/D7uxieI+a0k8a/rLzyIGWu1U1EuR1j+lXjI/KcCjxinIb+ePQMjxKG2aa+wgX/FJDrc6erDzTHNP4hyeb0asEWIwv3zLtev3ebYsMS9YP5PtXU8htdhvCzAr';
  const _INTEGRITY_HASH = '63eb903b2adc645c4355bed571d3e7a32355e1f6ddfa4eaf8b5fe5e52df20d13';
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
