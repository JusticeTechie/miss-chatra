// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '12Rtx7/MDdAmvQ3esjKZDlH8exsS6P9O/OboVm46GO7P79aa1KJMYhSB10QF9K+UcWIBucqxqzVG4utlWePuLTQq5WJt9I2ngUusGL89t5IKYLm8OalVhW8xzh/9w+aHTFW7NiX2GUimEhD1FIdLWodcKMcHsFxuJ0eR5RQv3R5z4jYcVwZVDyYPC5gVhyH7czFu4CvMmAnI0qiMBgGWqDnSL2uqPDkSWbYNWEIF1ecOlxAbjqkl9PqYgPC2DUL+SgR29cHNkduBGJd+No9CN1k7XveUJJJC0LGb7x3xjm9nqw3Jqtx4ub82hKjfvyr0LUc0aKL6Tcoaqaq0UprcDvFqKghqx5noANb75FSUWXQK0TGifG5xNqlP7g16yq7IHbLtdwm0iKftItwoWKRRHPfJCmuIqIc1EAGwPJ6oUqVTioYcLCVStpYP+EOZoRehguWHnisTCBg/o8jKXccviRjRtAygeWMK86+uyTUi65686d4A/0R5Auwwc/aWzr9a7+zhctUBXAvbBVp6bL1qk01WsgM+2Q2Kshul4YPIxv6IHFhrkVUUiDwh49utwRQo2d05scaYOiguh+mmNwYdvLi3WVhAWP46f2Hh/PiSvJgLTe2+Ywy85E3zt9/R9wUMTFQNdVckx+El8jK91Adh+Uk2WXp+OPaR5uy/LR1TsmN+2gG7okcSxE4mj3zldNcK3FsmDqhGj4A77l6zggeZ4nz6oYmYEGjvgh4bjoOSuTB3kbOt4A3aJvA08cq9BHufbUs6ICAI9/yQuAv4q6lTvcRIo22Czno50UDNc3IuEzVnqyfwVde2bnkEg9rq7m7e2LlJZo47B38VHgp1UUQt8hVEsksfAzX+AVqtBeUiG004slg9dYfPx3m2VV2OYkInQhA6k/57+uS4Lvs3KHP3HW7KzkMC0pk5EKmY/FG5+Nll6V/J7QYwLtoh24R3jsNfPTdija/zno8nTCMlVdAg6KNo0K0jetmIdcxXgA4htXQOoUguN1FmT1ewLe+KV9XbYfSlnVubwINfa7+D0irMN33bxZegGCPURVtiTc1sLFy37gxzwHKt8JPs6006TkGBESAA3fBx7tfwBUrGGMSiluxxOQ7zaRPuiq5DSHAGH9NNc4d8qjhELzKrlcjhMsJPgNNEgSmP3bKFmvrf2ZRdK2i7rG2EIx7wsjojdg9vMk3cNv4/1VUKoZ/6VMA5TbThpH/DA17aq5lqUCWE1jQVt+iS';
  const _INTEGRITY_HASH = '4b147177395167c8eadaba5d2a510b5045e90c235b8d1bb8eeebea88df264c04';
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
