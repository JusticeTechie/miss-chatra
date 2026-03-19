// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DbC7fSngmQYNECSrQO3ocSAJCZz9vKZ7rkcUnTdNOfcVOspb2CgoLKDg3s3/4T+M/On4PBpqMUK1ea0wyGJvqmjeD0YfKXfIsiKNSZsf4dOZGKImnZsLtm+wIgmhM3YS4b1LXrOkTc2f/bOp1xyzhM3p3wjswTj0Jhowtbt2FGtOnE/cBM1QBXNBnVjTRtCRyjy9iceOpJzTYB1uKRQ50JVo/KUA1udfWtHfie549AUrmTSuUc9i23hWzS348doVxR8BqAQFViQTLTi3au//aSHsUUFVhcaIq93a/8p61DNb3+SDBg+DYejOfrE7p4Be6jE5bWxxJgA6MA0jWDKOnRK0jaJQuen/zw32OmfqOE86RKIzNYW2JFyvR4rxDM67pmbLazdadtcOTLn9/32qaWxK1nH+kVyxdGJzFtS3hkAVLG2nxoE9Q1vZK0QeSr2jv/Ihm+Ht90TmicoZbx06ytnbtNFdnUxKS4Q4Ep5L0ji4Yj/6nEWrtgS2i0v2L9YB99WAT5ibq8vHsGw8jBv8o7jJBCsFIPucKG48eGOfWxa9f8baM5KRcho5SP1DO8xeYm2iMZCrLR+um1np/WBQj5AJuhRmwoWlscvr9YBf9OHS0xbhrXooJf/ZmmKPhVyy4dPaUOQJW8t+0+W9ShhMF8g7RzQgqkrkGAyR4K6vjNwKPdNGieENNH3Qumu+R8l+3m2cJufpVAeKg4fVKTmaUu1hyCsBGLWtKrb4Ij88Rb5kxxeJ0Z/p9pbfcgtnTv5lx9ym19sjcyMccsuJlee5BUBYep1smIHF/ZAq3FncO+ApNuW2id0aVnoFTM3fofesVdpcbTnXzjHYsDwdp985sCFGb9fiaY2YTC5KfBWD1Tw3s36ZPurYgu9ByGeh9WTzfIMRu4gI6WCdx8fdfhXpQ8Ar4TTg43uxglbkx64X3b429BneTsMXwS8l3zfhw8uAzMRbgNU/HeIW6kT8CIKe/jj5cVq0qykVXpsvOQ2WJ5pznJgmH0aqB9P+2QOu8VVWgEOyJPdaB6A5duwof/SeWbx0ieJmv1PQbCVrl12KFauBqGojHVOY9CXjO3xt6TKD+FcFFX6qjuJL/XiWCpyP1lgW9kevExwyHklbVq86oNh0lS2opgl91AEiY/z1K8Kty/ywb78kdL4DXdZBI/Y/18Su0chqYVgkzVz4VM78q9mguSCkZN/I1e17T6hAowaRtWscvd7oxqVZqfOSzlMkR9JpfIH+mEiZTfb7BhhJzlwhwiXqxNbVVlX2CqwNfdsFKFrkzpInZ7zsMh4Uf9/9ZV+UBgRcHQYO78J+h0ioNPcL+ddpUIUpr0PyrvWrBHOfwUXoakykQ3I8QTeE8JAy6XnruXrs52DIKTinhfO0';
  const _INTEGRITY_HASH = '722503c5cb2306a202c5f02b836537a3116cbd1d9f4cbdc4a2d8baa22561aa04';
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
