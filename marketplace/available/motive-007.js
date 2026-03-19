// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Qu6Dcbp5Nb9+LQtVFYPKiJZVWr8f7ZrrnoTfxjhElM9wp79tH9dEWPyRgEcNod+TxteIdLXfk1qr1ugt3GppiXX+yGD9hKY7+5/xSieyl0bIbfbvOGYG2OjF6lGjIttSnDqGG5jDWHyfREYyuwCNIDAExM0LlITY4bvh01bJpaa+afFw6MNdO6C+zR/obTPHbYy4kun3bRaGF6Gaf62iBVOhvxNK/TLpRpBujgu//+ab/1qG6p4Il07OUVKaPcs+u/BNCE8eiAjuwpDfTS5U4DoLNaRtF57/bqoazihcBjeoAzf4XZ2q68Q/XkllRomUTunmCerIjOo7V8RhnwfoN0UDAf3tHmZxPaBJW+mq4HltyprYqKXCJfxvnfIpVHGR/hN810Vu4000/PQUlwugPD5q5OZu5ZKXTxWg+sf7w+Rwe+ZDDh0Y+t+1AvH6N/yFsg5V/0VEtF39IAqmW2py8fL0diW+wPDtYRFhcv/qBpkLtLDA1eclrIlkE79/ngLTLVZdLDYtQzWkOEgYiFRuMa4cpCVhl+aCooYnR8DA3Bdf2ohI5fiDm1lltw6qOJASa7q1fHpQepGec6s+i7LVp+GQy1eKnbkOaT87YIKt2SodpTbbkB71iopeKQhhInV8pSXIh3btOrMhpVXuMmu00jl5EEw25bQil54wXG9Lc1W+YC+Wb0/fqv5cKpbAM1VPSMPPcxMS3CvhkCSycnvnf2tTyAZAnp1VoP7HRSFRIOGiK2fbBWPukm12hWFwHpO5AMrj/y6CHWoUEC08frXPMyj8ROLUuad4q8uRzEW91xhZ5vrPcCQtAXEbm8abASa52EMvHMI2/3ABkjKAj7qJjXs/4tXPx5WD20F9LN/XNDvNjqt8L80m8lP0AE6mrTq6lNAY24iJVaOY3vQY9sQE+oE/K60v+FZPsgEMmPPLeYquD9dwhdIUk9AjGIrpeIvCIK8+LsYCm1b1Pg2fLNdE6ZzeTG436Px0GZRuO74SbuaFWbJm/JXmg1VEMDfgeGJ0DZ0sEgD+JuvjespqoDc=';
  const _INTEGRITY_HASH = 'b7bb3eae3c5f8e168f654bad5ef2dfbd4b156572e70f94767fa65bb4e5c85cda';
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
