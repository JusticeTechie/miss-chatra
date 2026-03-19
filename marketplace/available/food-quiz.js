// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oMdpC3CgaRElKCulZcqMgrHumc1FhNeCadx7dgJqeMweQUJ3YO+rTEmeNu+LjPh2eMGomOcN1qWtMP4oju4LZoOhSvHTp0xAvXAGwYh9pVU0mboGL+X+YThvtOhDn+M3w/mKLgsF6UiMcOr67XXcqiUlp3rszS2LM7itkTrtytrV4djwCqDIfPIMp8XwpwDg/87v43gg/Bdh8F+OyqDvgbhfsrs/FPwYM0KIe5Ej0jomHL01oH5bKlj+wTn2zgkv5jWikKMHS8nSyxxDnSTicK0RgCIWTQ5lMGwerumQ+vplNPOKf0WvoPrO8rVgLy82hvFQdLhu62IxwJQCbjGmILKJKwhY3/2bB5VVE+BKwrsqUuu/5AaKrXUqR4a4UDduJvVThVh3k4VD78wWXHy1vlMUf4CAXRyHcXUNo1C5UYdVsBIcBvZndxr8LUMwTW6Er7zgoIM6uxb0AwCj/z0oJn2ZlZHLd34jPeH9LQj/dQfzflYJqiDmRud79etYHV7ufWYo3xsoEVCbA45Em9TB5J55DRg6e0hmuuYCjCCj8jQ0XczkBwJqNsulODVKCShZyUA6NZgmJZ0aLh9iyzGk2O6uqljCJ27QJheYGe8G6Bf8fmDbKqYn2q5WXbnvyAZqzyuhRZOC/79EE+H0d4PhK66WPlDN9G0Dhzvsh9Q1ULApgQXzjgyvxDi0lFH4N1qVo7gtF9OOTvEZg9xwwxP4LL4xIBQ2maKgYmcpSFSlMQB2DTPxEqCUKKGzW/IHLqTzs2EwVf1uhX3uLAFUOmn0olValaytNXa0WPzNpYy9d4eHSL0uLjSdLZ7/W0zk/QTayuiFcl27pVwoWLqIjfe99PqJQQJxvC1VhxnKWdMMW2jhiT/Vw7et88fKsZIU1NLdPM6Ske4DcwdvQh+eM1pL+iav2pjzQx4dZLv5dbtCn8M8+ZSCwSPeDprNf1yVaQyAiDdoOyB+z/BXcPkUZUpyrKJGBYtSDW03yeB7WT1YQsLF6HtPD5OeAJ1QE/Thbpu4RI72Z953298x7sfcNZwJ/oirULavU87MJIaSPvNxnlldwuI8XGbmYIvmugWU/lmhRj/zUt84I0A6EUlQpZeIPkDNJ8jbbuenvAnFdjIK3ZYbQrYdl5NIKkbiqVxTA0RLcSWhdvEqSk4iTmC7QNGlDImetWWlxMXLSqM2hoGs5DWO3TAoLDH338Tke9zSgrEMy2xPZmVtoCdTsT21VV2aOMD9UBnaATBdXpWVUpKmLGgeX27OyYcVijk9AwUb7yw6xOeMHb1n0FSjJTFBuRg0mOAW7+qZJE/JVjXOQOVhvoiPRdWin87BPpbJg6LvdXVs0bl1LigVyV/DOmnETOi29P+1LmKjH6z44j43MVJj4x9qmPPczmbB/wMkQIN4iUaGngEzd2KIghlXpRZjna3CdKfwEOMrNfJbA7cpzH5kWjhaIVPQ7QHBcw==';
  const _INTEGRITY_HASH = '5a9153e87cc764942fc9b032a75933336fd71dfdec7d93c7d4240536d5100356';
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
