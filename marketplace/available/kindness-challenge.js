// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6vfLwJm7wjAlNXSBH1WZkkdrjF7P7EEH1XRg03LI3IsmtY04XG/k8EtSFDe6zsS4UviHRnZlXJHKlRhpf73voY7WsmTNKEbbnXKDxFjaK5zytb/9DRjc5jShsvP3q9WFHLIqHYzFrssDn6Yx30btyCSaDnwMYQhhWyXQDu9We6rCSjmnOcR8qoblPGncMcmAynFGyauZzU+tDJgFaZRxNEjSE8pL039qxRiiaTeMaXDXNo68O3FzdPuWv/WTJV31pYegP5BX8elvyb0Q/1SRfS5oiikK1eti1J3STUWOUvsb656cPAqkNfXCCnqmBLFQARN1Y7sxKH+K5L4vz1CPKvjF/36JazSRYRWh3d/IntTMov5vHFz7sWT5PYZHygb/BO4wCHxv51J8uTOAxsUbTMDE9FdP+2UOw6xXpuc039a6pIUUl4h45RYTxNWHceYTfZMSZOGEi5+Zi/E1YTLJ7Eesnp5do05D4qWKFuzpUA5no/WeFn6LbWlpLv2/yJuUxLZrHK/l8tRbYjDFc4R8tYATt2uxfw0qHXWDvHJ6oaSsonIZsjsz2uPTWATgyhAs49TSaLz+FsadVSeQAlimq15d+xdu9Y2T4TKTKNrnNrUUMNPodFoyuEIi5MC7y3ld/e372gnfpMMt1cq1ou8npp53klwMVv5ur0D+h9Lrzw3aZLOjnQrVUXt0bkMx1FIFvRVfBF1vMrtB+58Y3YeNfz2U67wlCjBujksJ4hVexJP/llQH0vZrpW4AGpRLaMY80o3XcvKkzOfEo5A5Lw+WpLD68aTjMH5pgDAVd91NXKJkK+OqfR27hLR9W9eQLcYQceKXhkWJN7BRkUid9q0RBS4+H1xAn/j5ep+0Zr/saeSGxsQYKM88QXvH6cTsGfgCwKNHx1+9KYUPkJvIKJj3fRWN+eePLumxWW63aPudqPR3WhnaDQpl7gtHSiBOkwdCepa2aAukdG7pA7TvgnlK8KqqXVbyPj+qZGiTNurcf/VRupj3HRn2swTyP9zxcdcNunxo/jxDT/WkGXvojNzmK5Eg82ctml/RPSw2ycWQkmnY7pdGTo7b2we+fd7IIzcQEl2OEgQBUj/VwicDe+rU0/vytybIvS+vdon1sAj/na25ZNNurNF90SIKZemQ2qXrWqJaOFmRkiweqMGN+9Sk0wa8a7tUV0mlf9e28IjXea13MMamBmP9/nmBSUCnDDHd+ThLgslvkK2+uwvOgUZV7YrFKFxFJ515+rLLxo5ViGsfHhjkjNrWOetOPZ1inX82awuXNVPWToaZOweL/GDrdruFlvUw0L5+Xc5b0JFFRgX8iAfmzkgbhpEX8d30jT6kXdxxf99z6MLbP1kGqTO8e4yGR0M++IOHzOt7F/6BixfS8F7lhdp45cteE0/1qhe1QosEBTdgCGzOsHsgww2zD2jAZxgoFwH9E3Ao/LvGimpkemI9mYtUfGDq1dcMtlhB4ybJolprlUjBTBVH64EPzcIFMNaKWH7RpdejK8yKEfP/P+4J14Z5zVfsTY2H5pSt7+V8lAAWm+Y+rqgJd3taTgtxjBHIb62Jus3xhS+l+pd1ED8RptrQf5ilNCkeou7Q9r98jG/9pCxng+tS9dVttn1Swvhl6QOzYWcbk2RPUWSUr0tysS5euKPWjmFirPiLkSwCQ9YP5g3SCk0dNJ2JB3FLfc0TH4vb9vP61dydpJeIOoZX+8hlLRQAPEgPX8R3V/7JFeYbhzbsRe9Y0kAi1aMnYZeWfyCz9CI/hVsslGlqrQwUv8R8ct6rxp9c3ln0oN91qUgwpfAb6MMQdzJ3PM89d4zUUVxgYrN+KbtdtEIwajyK75z1a/hqPBkqh8nCj9k12Ut9J4/1Ft1Vo2Ylrl28rwELeMtgaS2d/+dyTMku74CP4Hy0GIP+ekr9uvbWK6AmePkq0TsUy0GcFZCM';
  const _INTEGRITY_HASH = '8851214fd34dcac3987d57eacd65c3d21b24056d748bd1cde2b008ea1460270d';
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
