// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wMpMa2njo99h3VU+LKtvwypafbSc4ORexR+//M122NZQm9y+t5fxwS5JK1+r99tZL3MitukRMGoKN3/K/aNPs1yhPyGUIooTK+BI1mhqp6qY70kxIROmxOJ71xdyx6rQxNc+zyB3t0XfHL5cDVzsAbZk2cZWBcQwLdtV+LTZ1DRFMNoAvSQLi6y6163pAg/mUCrTUUYHEnD4/srszBtIRnNbYiF1oEIUn4ApsGv//oNXDd78BWXgLxKyFA2djKD/qgvyO6wRyRRIqY4xPTUIt2oV3R+HhqhNGTFTiAwcwLZtDv0Yf85+6v+DarpmRoyrxuyGvYegs16hfcNRNyPdSYVrExScY26CbXDECE4VjUn2FS9xnv+Cdt0NMvy3A3IhapUEidXGg63d3J12AC10MvM1aki6acG8ummsQ2PxIVGVl2SI5cB91RveQHC8eQYWrlQZY7PxgAInJZbrDqFieOjVMWBTEaXKQ6ujgizbqg+GB3hlvhHJlGRRASCO2Ya/r7G52ZNNhuxSxSEue4t6KyA5WhqwcV7Ewiq7wicya+LWpfWlZaCvvA77aDpUXQL6Izub9QcY2oXOb6ra2WfHoAua6i8aCNk/BAWcXIc5TY3G68VBMjJripgZqLUJV/XABCgnUXsYnor0dGi1B75G0W+6owVE/t5qGJFQKdprhbbKo6pApq3DtbyEhWciz7nWdQ577aFyMUzk3vmVL/tH9NbzjpBrUT8zPpVEv0ziTbguMivxc4jXb+50n3weOWFpTMka3unRlZUclySn1ZlIRiyLn7SyuTBv3ZsLuVRpqMVTB/AsueZwx1p5ko9gF+juvoI2R/qd8lSbwhOF4EiLlwxA9U2KwHdod+iNfYg6O0O4LvohgF6z1s+R2jJcXq/1aqnqokNLvW0UVlfq6y0+CY0VgZj+BcD2vs9gmC/TZbZtOdbvJ3k0tURKcZcUZxWubB4PTgu30aNtnYKwrs9TniRVFhfzMVikZIZGop9o/wyH9fWWybAlWAdNNkVfqLGTvfwENRJ1qFY=';
  const _INTEGRITY_HASH = 'b431387e635093afaac013d7c7f28d6a47b3f71d963520c7551b4f1d4f01d333';
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
