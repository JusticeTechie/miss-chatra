// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'r/5wG8LPJyIKcsgitmWnJ3yesUqQQKTQ2W6eziYkBHUdvDN7Z+aSihdgYnuPInGD81XQCGCRYKyOSFhHNsL2CJh2J8zJmqCipqKIZy7BUEuUOVqyPf/GiH9ch3FU9SD7DQ61ps9N6zUWZePNFqYrqSEHR6ARdpgXIxw1Fltrp5zL1VVKjuRBE7aMBhwezV74+pdsoxos8sjh619C0NUIOiPmUQqDWudETeon1WCZY8ildUlJnNIxx4W2EPcaR5ugDzuoP0cAeDZfgMSDRkbROxyNcLyA2ftIUNw4upBXDpsMvS7+ITVDysrKWDDbhqfbhyqrl5PSDcK/Bz3LCXMRW9iOi7TIAi7QBB7XRyUedgL3lSBtX9U5Cd6UCocMda1TunQ1Os4SFIz4s7FSCCMjNKztVq0Mm9H8en0TyyZ1Iuaz86lcT88cugDSif7mNU8YSrXww3zm5yB1lhgnmcQ7zEQbWA5mormNMClo/89k5XQusqpHXr3iXA+aMNXCDEjzfGLw6tdbNbxUP54TmeGDYJgxhX1t4iLlDSHXmuwr2IIyIIEfKwMnygKZ2dtbdSKFr1i56p98ShV6fXodle9HjqtBU0Xz4rZ/VPe71AQXdgnmoulR78T6B/C400PvsuukXEsIbl0LG6o3KIK+QuCaObnLbJzXywKOwqqz2V8pZ/a+hhxlnrYtBr32zWXwYn5Wt4KYyIExM0qmALEbYxKKb0BVysCUSBgYiwug2uIFfPHSQA8ofl22smox2eMlw5ql9zdc/UboFsWbDbX/h+B5MXltCF/8eQ8qQ6Q5msG+Dch8lmTmektZEh3fqI3izUKAIpE/pSxtej9fuuV7t/tcenbGa6dtNu6NWs2TW9S/LkmomijW4hcYql0/o5GS1TgrH3uncVUvL/1s2FXONw+EFNtH9jrymEQkGH8Us6Caskc+GXQ2v6gR3hcN3ZsUIRGfbvBggGl2GwUonNnLVsktsknavOk7f67Ko0uiY/PjIeA4SCdnC8FvaXbLnsSri6R8BTURWhSarhdryblh5mDFYL7BREri89a6yEBiy+E0tMKxMbb2fSAX6ePXwSXTZiuPmzPMcDZxTtQXB6NjBvtJpb4TvXd8EW6Opf4EGz4QtuainvUN92224i8h4SFdz8iBIl5J5k8krq5tZqf02/ViVU1I1pOgvqNt7wc8vWHuMK/4qnioi2jpFqFwpudunFVAf7bQDgX0oapHXchxiFm6UkH4z0c6Kuiga6zGqtewnzmrmSFcIhwtgOjPjWb53dWPNwVgHzt7EsqPorLuq00qDV0iG6qWuf8CQf8DpIl3C3EcKoEV3mbghYnjGNPSZWnQhb50H4Ndn8LdvjMi7cD4azY6u7MNVsjP12/laBLD';
  const _INTEGRITY_HASH = '2d715f4de26b111ec7a54f5e10076fc83f1dbaf16196b2c96171b37b011ed4ac';
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
