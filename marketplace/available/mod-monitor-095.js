// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NGvx75mgYLAdLEfq8HlAbvdCyu8NllQGuELa0GN1N6VY0rMD4O6XOAKn87z/nKaomztkwBz7jFBNCdV4eYcRQ901XL07ruSXXj3hANhPBZJewebH5jZ6OMDGGK1RVwGEAyksK8Y+wx0bDEgbkyJbWZRJtmX+rtGc6aUj+PGoqb/LAXCbAvvk4ZgdchkJBlLmLKfJ6OnRf/aY6qRWtPoOQQVQ5wQbOF7o/7XiE2fTXTLhVb9ISgoVMxiLLhltTJbjlYDckvPyC0xZisOaeDvHiQUA3RpCLH8XG1ptKz2iK9NkHPuFRxzBgVJjXj9/lvB5vut7ho4eS07EgiEtkakmtGBxrpV6aCt+ZZzBKvQit7x+xbGXFX+R/OL3WiAKil8eWsTrhAL5ixvdOAPHWAuB3RsrUQVNrB7jPECKSlGPAyETgK1gP1NjrTHtwi4IAcrhWrEaC4ln9GwQjspI5ySKxQ+ap+ubx8f98d7r8lhWG0FgVywdi2sdv7jtlpNRyBMdlW7PMhApCM3eXFGYYnVIfjOlSOtOALCVOoZ4HJkdPhcGHT5hO5rC/AQqKizurQDpbVCMjkBVUaefOBmiUy0AlWh2Txww7xbvXZJ2Krlwf9OzvIHyylQeyl4kNvV4yExXIcMSQpi9Henr6EX86HgbVV0LAI8/whOqva+Qplm3wYGo5Rp8z61DyZnuSX+lUN01ZdV32xmcN1+W+30xl9+VkywDd6dPkVHnSl9teRolr4Dvnpd8sbbIN4VL1lkhLBZcrIleZF3LNf9WXaug6mMLgFpYZv3lSo8GgaPbl/y6D42s7wp+EViVOEPlbEhNMeRFxlvWVJk2+G4C9dyV90NwPq2I098o7OMB723JVQvct3RSIOQFACbPADHjHTYgK64wXV29TLtnUExUDCT+NfVtpuy8FB0zNd0IjzH+nM8dCo0J7xo2GDXBBdjwihmQ4uaU4DaU9z1900CB82yw3cy/VwY6Q2FePQjBnQBM7nOmKuZbL2LCpPORG6K4BrpHpdnS+3V1a4bhfCHwLb0+FhZeic8GlELPQb7nRjiLJTdzqloNTmBxZ/bU1dA3y5ooL3r5EuTHejBrqFP1EiNyj5djjPueT4jE90c44H1HKtkY3onPTXgo1K956iwiTavOItRHz9qyN8sflmGdOj8DsHFrWU5/Ox80rQUMBzHYO/YoAsa0wdXUNT1+GnnLQQwOwaT+xhfUBZ8aHRxvph8Y+gBMhxhvQ+7OrmS0dhx5SZIW3EIR/YhccjQGqeTOcn0BhXN2PZCtuwvMIm4kk0S2cOLXAxWI5DkOODroayrYlo+zwOOdqd26Xd0Fi/nJ/j4UuzEjBejsziRU3wbMObgGpI8iw9nby6TrtSePQEH1WmgBtw4rpb1U7wCX88k0+td8';
  const _INTEGRITY_HASH = '413db0f7d83a54dd4eadc3cb8557d6167139df69d6319fd80767a04615e6132e';
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
