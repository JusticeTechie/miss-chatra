// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U4wQlCd4MA5D110i8wOtSZ1VeQX6ki/NV89k+5edqQi2eB5OecqYs357dZRpay4pqJLWct7Y1JMEgDu3/kTtstAaV0NWDgeU4Kxre2b1P9CUfQkRahn0S0gj3Swl8bzA4HnEAozCgrYOAxUXedWEtG7FwOYl5lur3O6YNGHz7KLgS2BnAgBaJBb1AKPcjpL6k2OOsG/swmJj7tNeOral9KmI9H1V+P6kvGNjd1hcXfEdmeso3FSwe8+ygra/oA+bPVaGsQnxxjCRplSmgA4GtT3+go9jE3jcrM/SzruUnMj3FGo/f4RZxFU0uKzabt8jQWArR4hwj7EY0cA/aEIwvIEjUsPeHMYkDs+hDu7wKZ/W4xWONMf89Khe6QjHEEu7Sx3fWTC6kugzeHhhLzqKFWSKXEaZNCIGtiAUrZjEmtAcFiDWn1N7SfynScywyskBvK0GQ/uyfHVWqM6jmny3YpH6khVeLbQB3eyjleHab6WrV8nVxQXQAQnWn1KCHoJGh2egEKKcIMHwb2CcDz6prMNzwG+EVrpUBHYo7/AUB+4AM0Ub2J0cQd0ywWG7CCkpucxs1/s6SpiNlnQtFoIKCiVCuzJGdGSEDJNovnn8vXoU';
  const _INTEGRITY_HASH = '847b7eca44a0bfc9415c3a6e8c71307e73187ec6fe9dc42f0142db77d1b7633c';
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
