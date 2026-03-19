// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'o3/ib1MALeYEBQoBU59wzxAQA1kGIrH9IciXHbJ232MbKd1dB0G2J75Wl6oozjJDwtN82ErZoVQxbqrS4/bFbfMYrOcPGzFCBpCv8ZweTpPco30M+B8iA+G4FbdmmZV+IIBeA/1rrJXa80q758Mv5yCVgnVR57Fg28CsYqtGFDdt6FiWckIZXWQvi1gDX3FQ0K2INEWHvI8N4z4hhD4PDxDfFgV9ncM7rAVpWFR1ZzJbiZ72C82Y7QXfWg3Na1+35wVaNQzgxbrRrHfjECkaVHYuy6CQslZAL8By340dkjTnEmvv8ELiuyhCccTWFgf+AFEEK0TqpVHSwvWZUGyOvaWDuWYWPV0YCvVVpIUgvg4O+BCY4R4QAzzpvTCL5az05jXFYsFx/yCBG+rRovnqGfA0ub+5foVgnjlGJ3ft3ru/HSQ6Q3uKGWtjlECKOYbWpQkNT+cTrQwbX+ZpNp6hFx765Rzre7ABypevFIwrJFKuQodcHv0CS8FzJ6bKGEWeJzAJA/oG+XL6MfV5wcjH+PaFLbXwMpcJOMBISjNWpuaI7Z32pXWpslwcEBzNHiMvWxHVq5TGVqIgrnZqQOxJEBX8z2nfnmRTWKTg2b6+mvHvOCHds0p79kaFhC1k9GHdsgs1qNh3YGq7cBdkJZ0bIY1v6FOQh8+GwzbutBjRGYYbfINAzG3TdB3w1GY4etb5OxQ2cmDNFhDlwWEISBJ5N2+/gVswhxOKwTNzY9a8qCJxjBUBQo83Fh+Qq7aly+/eaInmVK0jziLImmuA61XkNYARbjx1wJlMmOkkoDarmbzPeCIgiKNEAHJMKV7ndfQJVWCNPRMuDjD8NG70R9Hylfu51UoVyH5rEdI+C6V9hXThHQK1pFcqo1JhZhv5/Lkw9HjjwzvAjHufitOVJerQnntFtzEdKm0ABWOXSh9thx7HjUPrRB4MADdnOSdCka9AKK7fvC/Hiq8z9ZS45QJ9bDX+me8Jipm27AJpqBAcjiudsWTm8kt7IPlc+Sbf+Ce0KRIqYXYz0br0v3Jlox6drquwKFJCVPCiMw7I21vfDQ80F0gii2dQl6v/bkZlD9yHPPhotWaMN2sr81x5gPUvPopUF9H1Mf3DrvcCIAna6Ay5aLZ1YJ1eklBYHkM5wPtsq4ZyemykAwkJ17RuwhEV94T8fIwQIY5x90FsqbXn+a03LKZTQzG2OwEEB3ks/caWiLhxzjwF+GXC1XNUigBo5ZpDXRaNHPi7KKf6ELajvBEtqhTJf6Yubrz1JZNgaqK7Xcvv20s4Fz92uzlF5sauiGSJhBH/Zyqie5QXkh1Q/huG9v8pBjPfCK3gmXwjwRk7IgMrkkEWBdc0+eF0nfEDXPqMVKgMFfahx8kwYyQcJXn37+HomjlRg50Q9bVdkvOLQrCe4pPDZmMe3NCl67/0ZebRmPI4kXF19FiBsE7rKRQHllSC0q0cdMF9K+pYOPUYOLhHt13zB2kfWQFwrTw8ziZAJuhBVYnrXpVBSf6rkEJxkovWUv3bra9HRZyhdDL5vvQ5MA==';
  const _INTEGRITY_HASH = '23e2579f152d32d0db8edb6971cfa8bf9fb0ce8f517364fb71adef7ac949ceca';
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
