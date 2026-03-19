// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aRyxcE1HlgqVFik0v2O8AKX5wxCbblkwBTewrsUKxekxSpXExBO2WKBSYv8PcEN/+7LMRU1Y3tAw9mtG7skY/YY+EfiPW/KfqBmlo49wJnPMxjccg/BAraX+MTupKcCr6cs5UyDEteFUCNxQHBK8bROgUFW9pkAC8uh6LQAX0WqWL8M15OIbcpRfiGshAZbKsvez+EkY70CxJ0y3BVQ+92E7A8hOf5IRVdMC7yExulsYkYSypVTXj6mPuseXeZMEJ9ExPznY8CJymjbXgtGbb1at9xTqhdXCe6nQeRuFPlGHpZI6qwKs32B9xbeoQ5VgDieu8UBJuo11HiZmDsn0xA9/ZXAO52TFXzY1KdWBW2Azt5D2y320IWkX3mfl9xJqAXpSVA4VAmTwuBl3OOUe+9B8WZ2ehE1bo3Bj7c1u6L+dbEj0qkrS1qse9NVXYyQF1mY4gozb9RVKIB0Z7Kbd1MF4Ps4VpYoMF6JNeD/ss4QKXfGsNR91juZ8HVKQszPd8mqyc4SbZT8mzCkVEn7DNSpiwZIX3LIH3FYGIQk0CmG1Q/xzYFYD/dH2QbR2lFY1I+7mqTfS2RLnN/OJvpn6bdXQRDOyOlLtaGvED0BAu5P2C5eJv/mVh0kKc7tbHOL1FRzTLCijDFOVmNKLz0vxGkbUm4q6zhk/YlhG4HyMNfJM0nbse1QAZHSXrHM5cu4eC477UjyLls01yOGG79lxgkzzuExdIhtLETDmkRo/ZiUjcaLfASd+amPBMJJn02hi2/f4dH6a2kIbRsINgh/baiipJwaV9Fv38VbfD71mXo3QH7LNK7wVWV11NkxFDIz6XBC3pNg+syfz1R/f60DRX/VqXDf3NbamzCRap+dAmZh1uhm9EPWZ+hoppaDedoyeCmCxglx47+tJG0R9HoPhow6EJ5iM0z7HcTTFUr6Rbt7iDSE/Vm6laAQURw5hARyN0loaso+hkbeV4/GjM62W9lgahG0DaTnbQZDppobNR/+GBJquUvNBEMB0WRk1fJ555ErSDDXqw2uQf/c417CbY6WqbnjwoQ==';
  const _INTEGRITY_HASH = '918c316b6dbf784f79fe4399ac8375dc46701e44df9f143f661e7e065192307c';
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
