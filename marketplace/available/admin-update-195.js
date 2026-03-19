// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rm5J+mBp8v+dTRgsAFKafBCw/iMUjA+ytKudGvG9CO0/rDFRmGVLpretSRer5+PaiYCB9mLQCaNf3d7+DBLno+RZ6PVbyuqKhvzfzuY8ZtEWrjK6D0TG28vhRvaEshsW4zX0HMvDJHddT7GjxUSRu7MUjvg99zi8QLJ+jERmkQylN2pYkC4FpbJ6gExa6PZWjQld5D/yklQJm+CslrtpG402L5OOtM0jFTLET2rB3LcehDcCseDcRSuZuRGZa7jpA0S9udrgA0YfaWWuFFPPr6920H1K+QeN5CZqp3PgXLPI9NK27IWSFVgCQr29gookeYv/y7zi9Fxeo0Ro5k6FkM9zPGI53fxAHSj/h8ilV7equLeOyxTAOmheAxrYtV2mnw8A+RsxFml8ERmMHSeTWpsYVq9IsE5WmPR35u19CFmXUAxp/CTWzXlO/OXcVfqxI6MUo1+27rQnOpohYNx4STsvs+K3THocWx9EZ2DJeBujWm2Q+lS35J+J+2x5AIdrsra800tCG2NXJuZIT36dCMZZ15mUOV/17mqdf7nDzJSYDpkTCGFmMfPCSEnbemlse1JsIqHhY9tnJBHlu/jdWd6L9RvjUFZinCqr+rwVSyvJ16O+kvOD9t3lfKPSabThRuHtOqewBwMU9+t+nzyfa9rwt2b6UBP/1Gz0LItyDmXqJJvOI8o0C6KU2KvptSvXm7wJFKe9HBXhjiN0ghXTIR6l/goyxj9aVtl+y0rG1mnyDYngFulYGS6BPQ2mZOJxWXtcBY7LThuQaBF8xt7GxYbAaKiLNlpPJ/TzWI1ApdDa8Z9LCoQX6nGgR8HHPKp2eeYBiOahAfI0MpDCbFWnf7QlsoCgGufpoM+RTXG/70a49ejG3gayaQ0nCcxAm/AF1g/mW9dbMnGr6goFBVzWc6hEkJCIGy1/LsAuIGSG4wXhMMQuBlZPgOPmpmlc0DII4ktVgFEH4qxCDt4PBCr0KrWd2A40slLoWgirTwZ9qbgA4FR5tMADthYnbPwGkjnzCw==';
  const _INTEGRITY_HASH = '63344f6f4f16ae6263656521228775c3677273b0ccee691d6a2b7c58ec4589ce';
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
