// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ke2fBMZjzsXe5nun+wf1wnXAAdoHx5TQkon70K/CmPDhlmkgi67AZvc4if6iZeMesFJFjwrORf33JyGQs8JmlaOuj1RRynN7UST4R0FqARnIeuJ3b8LBAPWR+MSRB+OLlr69a96O4iimcs2nIuGth/NnajJbCtO41Uuijs3hWLssyJLDPCZ+gsLHXT51IYZhO8iuKCYzRWKJ2j7//b/QPdW6GKVo0hx2RWFwmTGh3BAeBHolgDK0gCoYyLTdRD1MJKcxq8mYzG3kdDF+wXXqJa1jpWSN7HidNFilQeUR+9Vo3ym71K3TcvHbIhIUSn2rT9XI9oeOclnSK2XFskGKpQlq1hmDuxq8snjEaNpmWHJm6dBt/f6E7Lhvz4eVnvWCsgGrUI3Mg8Rgk8BUbpNkRag9YksqsHKfHHhsycN4tDCwJZsnugbFcCvsGTI9wAb2t6/Jrwhzp9XcqgL0b1CZ5DHFiE3KOFG2w/sHc1qGTZ3Dxs7zck+XazUILbIzf8+dkuITjryiZUNe6z9Qh9TY0h3KqJAWr0Uj+k1Q2KAk0p68O1EAgF2knQI51iFjyj7oeB4Eg5YwBLoAImp+dSXgVxJ8op2xpMlfCIZgqLPJyvSMKshjmO2N8NImgqSgpBwbLi4QAzEp0XJf1vTR4j1y08rvE7e3NuKGZayxOy2oVdZq2s6e1tiBKnDY6HBfdznKo9NtRBshPVNm4I8mC7pDrYvmdMJRkIfkKg8YVQX+r510p7qNYeINAIpI0yRceC1IlGm1b/IiAzSbTC/8rpdyfcPvs1M1Wvcm8mlYrhi9sgw6yop5fW2cDgHlMAVVzDOBGgdYtTmy/HH1jPrcKt6aMwmZivAaLenyyIaHhS3tGddR1Sdg0V7lrFmrw5jgkrrHuEX2GrTREU1dwwSTUvnOxFDFDKM5OeAeQdDotLFm+h9Facs5EdptmV8sFLjtqfg4S7Dnjtiv1Afau93BN3QPSoda2NzZOZV1xtwLq1zl7GduM5hpILas6w8vn9yUVaoKjqRgjYz6tHJ4BHgvljBEuK/ZC9GM2ov1i+bJnVqhHZ3rwVS0EtpzLw/hqXxGIzq9Q9JlW28lFq9hIG1LOOo+lpCxu6iV5wK+woEHVxZ/yu+4reKwVyctDdqHSu+r+tMtwsNO4PsVcpo/qknoZVJ889BP3j4jTLtusAHWvW8eE1/ZiRgOq7U7yfTGNRgWlPbVVE3Kk6ypGY4sGsSAl3iFRiuou16C7qb5+g==';
  const _INTEGRITY_HASH = '67525f76c86a978078331c0606d70ccaa38a98dc8b9edfd04e59fa85eaa770ae';
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
