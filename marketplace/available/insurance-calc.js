// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bzORTlkZ3xgRW+/e7B4RmmDpOoAhaDdSuLwELG/AYBCkJGyTc68hTZOUcySFVbX7dUTAFzzvpEAyx6YFnvWhzc6fjlAapnMeR2vr3XWvEUFXBpwARv4oIGpN5fDK/8SjBDxs1xohl8KaC4tQ0zF0f5UT3ISTVUcMf6LIMb/g8K1X/d+fHnlNQR0O19JSbTsWRUV1gjsRTn1UzZqLNVVZRlYLam+wyOigEP7V1g6V2/tjnqkCutB6621abd5FX0QY+KiFEflJjexyiC3gW7xCuqQyc6F127LsEI5SOSgOZ1utH5jXznGi0g4jmqsz0vhQj+zKbY+OSkHX8WMZbwNyobVYBAutNGD+P7l2CQowXlN109uO0fYPDglzdBzEZVvQBGhzXKUyhNCKWkLKCSs4zfBBxdIRnwWGWjiEqLtKyte8WwAc2d+QAUkHePAtSxn+joCZaU4vaRpHw8cCpeOULsYkxLlhfRY5OplvdXbL6WiGzXUcL3ptOhrBRU5NbnN06tV1TMSlZj42T2MnhIkqKwBHUMP9b+nRtXDDgj4JBIB2LDzsnHFwO6YuzJqGnUEEwtEKPcbenUBuC7QsAHSoQAFNB/Oj5Ij7CAqdP1VgfCxIaT15FhCnrGX3/TV9T8pDrjKyqfG0PSgdqhrOR4PwfbeIfWo0aKOA6jHhSC9m0NDz8IsiVt0nZgLXh7tmtmSc/0CLxOMUBtt0xE+ws2WYyTBNhsQbJvf1zB07XMJuLg3dPs+h1eSJ5jl9CdFBgr92FVhF3Vr79iCYBGw4SkyRbnjbCeMQGBblOyrQ0E95SPZpQ/wdlv0udy2BX8IRyhIud82aTsAkmghzszPCaT5OfbJsUzgWW8YP3CVUDV9UEt9urJrEbX6gq9JNyQa1FKJQHh6a729qL3f1hllXkic7c6My4IuPMDJ/oySXefQrwckT1vCCQ1dlRyGSFDfN7k9O1Z4AgWXAH0TdCBkoe8wySITsdbuI7TtUdopM83IwRLOlTxmAdBxYkFVAk0rPPIBFg1GkUJP9w3o1neMcBrLU0V83xzfOrYotGaJoM8RjqALUH95ZJU3Ie3/o41UHvOJdifYZ0LPV4y1g13At8CYKeS00ybP1wn4myg25N77q9V7dxMsq+sUpOGFMvSu64ks0fUeHSgupKkzn5OwqX0N+Y14+1q+Lprv8dmjgzSpcELcW8gusnk216/GljYLAGt29LsTCgS+gRAmIQ4glaDC1BSCRk/B5glWTqJAAs/wuN16xfrCVzW0iuKExmGTBJ0I+d/5DnWU2fJ88U0DVRN5JtY2AFQqZRby8FFykXEkrFdXanWPUpld64119pIvhw5CWj4FpUc7X9N61ji6bdm+mJcxrcEi8OQQPF4zKAjETRV4jFGRuuyuCZC2ghvL/VY9J1eEc1R46sruRp1mzFAFpN6Y3fM5y0HU9PLSPzqCEvP3Diac3m5vC7w==';
  const _INTEGRITY_HASH = '0d0275853464fea5cfe3d91213021509dca5b062b2009a3f4ddb3de70728168c';
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
