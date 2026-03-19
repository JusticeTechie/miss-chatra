// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'avustPkrOepAZk9ZxrI4YqeR5R2XLaYCDdZ24Sao5jb3B2sqNgbgoGSbyoTB/SKA/lLHBDFLhzZPDeeMuqTOil2GGgNJEfIO5RkHpITXAqpGGg5pHkF+SRLxmv1fM3SkMMxU46S5ExoQbt8fZyzw1tPWVBMv44qj2XsIkkbEJoEp/eixEsypASA1aljy/7Gg++EspJ2pB8fsmEpdUQPe6m30DpjeUItPND0C1vaZTfjKdSbqiTZdx38ouG6jepYNtmGpuU5S3yevOA1X3f+gmLP9PZRDPS4qrH8YnKmPw0Ci9pjPIuC8gj9FkgsqaF3fqxuLaPeloWbrcW6+VaJW13b/q6OhQFynsXUEEnLxo8UlYHFmY3YF/y3Ao+5+sh1tTiQ1T/JvYp7NnzlFG3nG7uWXZAaGkbBzTSOW+OSGsj0lW9MDazv4CScyQGKO/ngZ4FIvCCgRW/RoyAm9hfeHfM+BiXzZChHX56sK7Z3OOYH9E031xOYtZfSmHhPdES5zXojIKaaPOuOMfQDW3xe7+cSfh/uDbbn71BygY0kBe/4Ixqhd5zHKWr9gBnAmozCxGK7XuxyYVbPntzQuZTyV4TAoXDHcA9BOICed2GEgmq6GFUMJKLVI3VNjBycMaR/I0uCPwefUiTEDvOfpLWxzjsRSmEWtxeve0FoOB/WGNUJYepIhYKNr+TpG27wIZgJ33hbLUERUdRFjKfl2JWxEfx769eU6rbI/TlgDQE+82sZqpWKXcCI0gNkaihs9GB/pmfrNeJVA+WkSVFiohFnEpwHWTmwlmlbgQ/nla3Gn4s/B5ZtyGJnVJrcNj3xw2eBPmaeHBHQiw9+sKMytYhe1Y8uufxRv5X++g4j/6qF6BCmT10UpcAFA/pTvcD5pSPt7gaqX4HOFJPVskSOodqUxLHF30+ZDqX60QMEc4zFCFo6dKW1xyItouFl5KA/BsMgNKbDgjkrQ6NgEcNUzmCRAExplUvEpBRhmRffRjRNcIJCRFt54IymLf5uf5JaItAO/yOWp12mmtF3O+MUOH1l4/7y7WYC6lXb8JBqdleGKR0CSfIj6s2hG7HyLmeAtLCZJFxZyh/0NylSAav4aMaafs2nQbUqfgGvZenBEH+0I9t5TQizzCsaFkb3d1LJhY7txshiB4Sw59O78azVdaSqACtJaUISsEx42/C30KN23IMq56pYgNG8zDTtIqOYItNQ+OHMGF4jMTMqrT0vF6l63mN4dK+sPnhzMFq7/HKuoBGoe1h3WbervpUhPynp6wE5STJDCgrX5nnvbFp1zfwOHHcJo0tsKtJbii+H5zMouDp7j1fmKwYxhA+Of1ppArvBPz0EO24mrmbKHDIwJfjpLLR/hHy8btqU5BQns4pLDR8r/n+AdeUkuDzaLiS7N+aftK4KK9h7wEWMHpzk++F2DhBKeHQDtQihenbPB';
  const _INTEGRITY_HASH = 'f0033ec4bbd84c5b74941ccf879b1ad721f1e46d0c212b7eb2fab41c644e1f83';
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
