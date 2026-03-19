// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NgbJ/9NKKbKOTP/3vl6kkVh/5pWtHeYuNcfgIC7CzByA0vbyC+7kNTKF/VH64WVFIizCn+LBtVwkaUKgkGrTUQXupdyiW8zwH3Gjpw+3k8jcTCIISWRvvDlRSbICZolgwg0k5GSGG/lMZovggP9VXF10BphNIILpODJO9XETMYXPADq2arMurvzUYVS1DUHRfahrcuwZtq4LU80C+DiwA5wmW23qXwqivQ0JE7+q641LGpwnmv/qHYBcnttEVV13MPPNh/G1PfrmODJTeOzMyYjY50iY0rD2PYzcnPkvK/Tx5tDgFeh2VFU4zlnBOBKV1CYHtz0v6WriqIRtLazfmb20hb2uEA40KH7xCR17huKIA22X1/JMnW/Tz7kN13eiuNz3S6mI7qKegCZsipyWlS+aVZW1R1c2yLbuHFWakRhrKVzYhgbVMccKeaJrQ8yKZ8lZeGtPgvHicUs0rr1Ssu1/Ducy2O5PVpI6NkgqIaetQMFUfVj/E/hY/AME23S7T4lP+wMvZPJhJFChfzbB9D6gXYQFiL0yCpibhqIuPzPW9TKw+VpAMUBhImslCAbAV19g';
  const _INTEGRITY_HASH = 'a6aad278a7d8d6d7382a279bf5173f47a243496e4815983998e08e67117c0a66';
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
