// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/32mq7XUtU6/xxFCJ1nZc5PmpYiRWuqZNAVNx4/dJsTruGbrU80SxCZu40dZWWPQ6XsAdT2BuzziN1lbR1tqPpBenwIqfTTvqWrnjjzCCPEGL/xkwXt/LUsnpLU4aASvUYDD4effsUj9cpbPlsSDpCQr9Ks3Nxwbn7BAzBwca4jqIW3+ACeWAL63QRevG35jhgulFOt59zKhwXQ4nA0n41YDCImaI71L/Hpbx+KMhB/53xvGqFN1dmkT905Ha6qXdZvBjqq5R+vPykoGJK1j1Rib0lxLeQyZuW+Jl91s/EvwFVHg4HtGM5oXeVYXmxjoTKkI+li1FWM3c5jxAsPqiWI9OKbK++AweHJhxK0R6XEUFSsQsFQuNnuWpCkT7gqr4sbRqDHBPD6EAlbg3TloAqOezYdba0h4Rh8JKukG59MmB7xSs1H0cD8TUR7eAz+UMVKasSCz0WAa8ZCusPzAEi64EEd3utqv8+DT7xz25jOUy6bygGEepC7Hnvf+xqOt3zgOaFfGkPL80VOz9T0vo/kCsIoEhcl0HLeVasIPR7OUawFzrOmBQO0ypYQcHLJql+bKIIwI+xYPTc4ehjpv3qGEjEpIQl6VlKP1XybMvuSeFRO+r1jZzgyS1Ac9nzWD1cjACaEg15TiQHn9RLBVG/tbZJ0oux4QMXs+n79JsLhIuXnlb90+4BtenwkBoBbWJrq8oMRJa/8b5iMsNf1hKeGxDY/ha1tyGXqsMPbzl1VKVhBNvEXR1mlDm3vzW80MrS9Q5JpRjzxMO8Bhk3ZvxaeuKCjlTxXS85kF+4hayP5WkYZfL94ziCP7uU+HXkphTVfqpspvBdcH7vpWN297s0XpwM4GljxPkmRWHFZhK3V5n2Hn5k7c6f6ym0qxryiU5/UoFuCTNgTPYlId9m0oPmKx5aKoeDh3fPq6D9zsEBKmaqCqr9Z0ZyatxlFCCncWlLugvNTjqae69qVPXmmshfldtmYe5U3EOLs11Xn+q6A9tC/D72K/MUZvYwRqh7hT5AAY7iR94sEeuyspEDhgGzJATz+g2KVJn8TqIKgjeitq0V2YSGQqU41qEFmSWhbujimxtnnHAuW0kSgDaGaTYx/l+NUGlkATNNhDrzde8RU/UacdkL/yAvQv1ily6FCCuv172Q7kAZL99JTedbXib4UKsSvdUwmSvnIN+0hULWH7rb3W+AsAkRjUGrw8IbZ+a1+seWh+2CVcZFWwiqSGCobHn/CHpnOJJdsHj+3tRxrZA13CWTMiwlA8sALHv8aIY79fUKaiGCjH+EUY5YF6kuhBgjU0SSkuXkTMGGJ/OC56ZwQk5PzV8ZklDMq1OWUfVUDyXy34Sz6wmEYTjbwepSPcXQEqUWbFXKRQ+7uFEU92nAPxNO7iH61a8SX9zMQDgS/+qDv+QQ==';
  const _INTEGRITY_HASH = 'e3254aa10bd341a3debb44414bfe342da352968c4c221184743475d202d194e8';
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
