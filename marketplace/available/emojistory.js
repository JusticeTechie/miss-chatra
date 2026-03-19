// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3kZXh/zu6UAick6uedYSdghGCb2TiZnmgLf2weMjnlDHgtifLklP+RszKlVI0xbrgO0pfn7l1RQ+0YRDnXtmdJ9k1sPvDD+nxkhQl1Z94Ic+BzQEQeVhad9icMjqfcR9/772HPMGVpXIVkiytGKBHpt7Cry1deCkvzveWMhCqHJqVO8sl9Dq1xcQZm+o6EBnnOXWUyvKT8ToudEyfrrE+8q1B/eZLrYYFnyuYWDO27m1fF3WsrfbEXz18d6zUPRYAwQHN7FPLO5YpnN+PeRsuz5nZnGDJ0n8z+9HQF62eUSA6zBNPqlMlSQLZzyBoR8KpQhQmNz9HFjLfWvSk+zH8jXfTZ8Fw9Mq5JvvhcyzafPrTuLNiYLbwRONdol98Y1uSJTd+QcBVJ7ZVLL+QfDGSFNbEkuuk7ZfApncBBNQwnmW0ElEyqjmBKemw4kZNvoPXZd0Q+mbaJkZIKzTY1n9CtdSFmnkLv+614wGmynv2jGjVpnqT1tz7n5JNTwU9ra2pzuiwzn4UCzO/JCwT4+RNdbFeLsU0mqCQkO3XB6FEqerE0asbt1taxv3hOR4naypFA+0s5uYFPXTpnwzSwYOTZDAE92teIozdSH0ECM9LRv7ZP6gqAFGwKNVHtP+BjzNdC9PglIQQ9Ra6OqxQjSAOAZqMAmt89arJWLJN/mxynfVKkQ+33HKQALHnM5o78Z6KTDW9SKf/rDMrXnqpXJqA6w0yoaF8YMrX6n306TvL0U+RGHcRvBtzb1aMIWqVE/AifQdEptMCVUxXc01issCtOWld3igYMNZfT4Mgu11S+ZTGrgbf4G6rgpQ/4g4fPIkXrbFxG7wIdFo8fl8ZzbboBiOW3vssRQoTeMHXvG489290rZbUbDjW1pquS4mGQM+IM/TT1MG+6mNtZ/Jl9n12ST8vzHKFQPXdRkQHntWIscnYKuNt7jPA3lt2nkFru606BL/h1sfc/svT3BnUcDul+ZDtGOaeYcrL2sGdRyZiioHzumgaekqRtmBPteChC7U4eGFybWWQWbGepvGLkLR+Xw6OTfy1UNq64BsA6WdyGZ9ew27GejlsHmpB8O5XyPK34HPZsBdXiHszChl3kXKjBwJQuR8cWIMsPUgAsAkhMI9CVJf0ULneXp6VGx/QnSdyLAQpVKgo4OSxklGwH4C/tGTXJMKwTg70bA7i5HQHkHRGs4ZiHj0q1BWY0pcpujb6JVt2wPb';
  const _INTEGRITY_HASH = 'd0964bf7415bf29b75729cea96effbda294510b9bea3a63489f5371c78f1cf8a';
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
