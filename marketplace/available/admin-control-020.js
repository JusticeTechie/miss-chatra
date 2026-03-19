// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+YrlvxwmvOD+L2XCIX7+1W0n7ozBspnHigLSpsMpnz90WYf32fjb8gqKlNiYbwdNI1kL4OFIZcYLDoJPUqpjdGY9/9g0fnkoByjnhlqeatFgErY75ms7l25AQVotvpgXcYofTg9MyTIftffVyaaiS1vmqQrJpC4iWKU2WkgNSnSdqa0tVzKbwiQxHkNteAjQCTenK68vsMTOMVXX1GKLvZB648KulPDS2+JsyFzEPUq6iQVAgjZpOXgGNZ7QpzjLIkJxzWsiK1SyM5otB58VrLwrQWz7/dCoPe7yHv+yewqrNC/atdqQDhx0aAAz6bJRdnNIx2S84XjoSK54cL7Ql0jb+Bbne/bmzTLgjGQe/5WZPdPnfaQcgfIFzY7zPWvMgjn4gtES7wPp60XITP6RvPehoMCVCkTwuooLWzf3WO4eOD9CH1rbHUY+ot4JTB8GNaKx0s3nJZ5HhYe8641RQekdd5qRGKMjfIDzpRfGz/IqfGRw/15oNoQX62jRUbyN21bfX/W15Umph5ioG1NsjnI0d6x8pcE6ELO5rb3l8hSpmoDE8Wp8TogwrMD1Z85d3Ku95w6PxL6u88HyE8xRJp/fDkAHMzEUTQbJpmeMTl6IAxH4jWAa5fUuD/05mOwa7tq4+7EwpC65y1gtMUu3I6wf88iw5+fgUhU6BsvN5U9nF7oz5bmsYMeEEmZM+iQTp5YoVXFx/kqBTStlq5OW9OgsEG2BfPRDuM294Z9f1GMyp5qdTYV5ZZg97MzAvbvFPQxOoNNAAhZZJfOAPD2Wrimr6hjCKPdbtUTIzN6qUkelgpKf2l6DBP7RxRHbxi/vfvmC8iHlvzQLl5b3PIQGg4sIDj6mBFLSD5mbTapkQaquAGj+M+PtYjrj7DfOBApUeM4x1bAFx4DvzY0Dj1epsQ+y39ZfJJ/gGVnahUqXiF5BCcDe7c4d37rnPblE7HXLuSyGh3OKT/cYd+Dz0wkCVgelkVyTTcPXRnm21FwuutNJcrKOa4OCXpMrAhxLFjuY1glBQQ==';
  const _INTEGRITY_HASH = '97064dcc4d96d9fca291b9e9bab8a560a9264d1a046b02ac36730275a6c8097c';
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
