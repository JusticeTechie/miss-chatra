// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GokHZeUFhgKmtdaKysaPFvSePuelwFloTnN70WF6WtKtOE2IF0Ig8RH0K9/7N3rf+84WmZO0p3w0ATrA9g8sBPX2jMsO4cOD9g0plw/Msqv3Fn99W3okDtfZ4V4S86G7BvJgj0D1hmGSjA+LL1nAPoteBnDjg17WWs+P66ICmaEg4Z+5OAwrmJ+kxdn1bwYhty2td9UV3h2rZc2OcHsXEgpdvYhK2E+zW5D7SDmtTO6j2MA7TwEz+H9ayDki/BEcYPizqH551R584uT+XMzXlJFODUmqI5PmH2UoQwAQ9hqXgzK1zp7wICyHS1RddVpzBhf5wPyKDwk6Frv2fFxNlFxoOEWWcrcCRcTD1X2RNUPdQZ/pyEcfRBVNYw+Oek5guBtKnOdxwxEufcC5wlSjW9SFqPk8sWUFqcVd717zKK0df+QNJwmfWQyVe/vRExpf/glx8lkzuvmc1v2JJwI/XzapB+TDfKiiSS1moL995e5JzdrtSCZvpEtVEO05xN9EXfxrWMJPBNAeynj5Tu33UqryFJZppn1Y0cZUbA0am4QwazyR3C5BguqoyvOEu0TWihWJVmiAGw7GQ1HW/mRex9ETf+jU/CcgbtvqD3bj3Su+VB1yEKPMP3HTLelPemOawDWz3YiFHs82ysFH1vrGDdyKlslwiNS5VyxlVnFoB/llnBV8J3DTYTZX88GM8E/sJIMEDxPzXS03rCx+c28LCKfFE1IzocS5RIX2kDF+eg0wKF96cd1qqBdxpme58qNSATr8cjEvg629Ve+IV5dc9z6+trw3PlxrKfXlFKLoFSii8CjBrnFM0qCiNWfnsr30vgJOZSsUcECe3XApvyA8TowoUfyq+kgWA1+AF+rz3mQfEK8tMQNpma+6pCAOpYDQUJNIUtj5/elxLLFr5g+l7AzOGTjJgqBP4iZE9H+b4fJTLhVUXOy4MavYdb04ROT4r0/YmDgndp/n0rLBGOxTP6IGcb0BTE0QhR8D1A4f4oJxa3MH6mQkA0yqwrSPVXYPcsDoWMLUmNyPZOEcFB/nkYFs2tfvpB8dBVYGd5KgyeVEH50pQbjHcqtvwX/WDTMo6MzJYs29NC33Z9k=';
  const _INTEGRITY_HASH = '83aa6a12aeb9bb35cd1634b807dd9ff1903e792057deca352f15e295e047f1af';
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
