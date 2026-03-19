// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/qoTgA3cBBW6z1VDo2ZZ1LqU3EAKbGLhWU5XTJhggGy/nZAoBC0Lk0ikirdODklhXFMqfRELJBYVqru4WnyrWCFgs7ygwy72xayK4gDOSwmTUg927AKtu5+7RoNsIon3zFYn5EjL5XJcUqO/7RSapYnTIb8XZmB8G85Kr8miqAQ8lDo0gF7OOhinztBBEu/bvfadkzbt/DDJ7p1e6PeRLPVW7dkeHHAkY/rYzjfYRsmVUPE7zb+oaKtNzCZtQ8z90LLY/Ut8yu5osC+BBcd3YLALHmatpWgVN0LmuZxX8Au+/exe84Tqqw0G7rr70y9So4Imv3zDB4lE7l0b9O8xPQv74TUyRUoT1tV6OU4VBpYG2QWuQVrJ9xCFHIkRbEfbqLo1bbywljXKVznrSaI4NII84TFGGdt4HpdiQQMvNVX6/yVmKfbiPhNQVp2KmiD4Ak+8jHbv2QNsM0yFKxEFavwC76meTbL/Q/rJyLd9OtoHgmHmHU5wjVtDlVrGuvBw4QK9fanZZFP/w/O6vvS8xsU6vwHSz/3kQLzCs89VenTGA687iSdY7uZ4vWvvwImM6DS0Yb5bRZMSdOlrE2TnkDcsk2GCY1fiocIbjFCw++p2uEQvz61mCAIcoRuUArG2a7bswG+6y8anCydChwShsysqKy7+llY24YwjRq4M+ngHJETbcDHd+J/usFeqY1VrPz2xAuk4rH27IqL+JJr9v4QVSzTXyzlXUm49EqXHCKKv+cRD4fNnYR0ZLpZdO6rer6xoG4cMaFNJyFDE7dM5PdwyHafKKItnTDBzEmYUK2epK/N7W87Y4zOGQ0vbxjOnI1xR3lIRlMskvXBhlgJkifzUQKOsowdFTMpN5xx4U0kFY603WUEKobChOtUCT+ntO3YzrEG85TOSLvyxQsDaEh6w7NVw2xOY8HYZxXb5Ao7YfLYfyDsAbmPM5mirWga0gcltSVhw0RQVKX8Ew5XCSYys0cCBQHMbySMrqdpNgezUW239Mx8oDZCMeit0BkVA7OS8gnr5Iy4sNZUsFXt4gtbIwZ0lN5jQxejyJ2J0mcWNxLuK80LozZ1hfNnVHMNA8WE2h+NJW3UQYGW5xCjViJUqojS/+dgLVm5QSZaOTMzn0IRj87MGjSkG7hyjcSEQTQgLH/qjoCE/xk8k39aBx6hPa1WUPmTgLKYaXkNDoVPFmY81kmWokxIsO61c3y15VgE=';
  const _INTEGRITY_HASH = 'e051c1e5af8bab54ae83d7b0fe9a44ff266e51ca9bf6b1b04dbfcc25349d393e';
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
