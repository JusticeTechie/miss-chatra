// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lUxGL/y75jJ8fZGeiMp0VPI8C9H3sMgPpoRNweJ/ziJgOJMyYLiKDLK04T/205wntrGKHUOuoxNMJ5Gbuq6ZMhANFlGV1MXD1jDurOzaXgSQV4SP5SK1oLy69eSErhlhreAZfXv5QEK3JGlj9ECxqnt/NLLHi/USF9I3CbCr7eoeorVdLznWRk0Xnvu+ewuaESATpi73eAcZkNOIpOaU+YpQ8yZbAamXXFTEDJtgx4ISpTyUgF8zuKK7i7h9VwkxvVpQoqTUt8SuCch36txAZKcTU8xhuMPC5ED+v2dVNOyU0WY/eBTqnMxPc7okk9r6RTTDZ37X4ooxydhDg4zMlqXNVGfp+pDGXgFtMNkM1qxU2xAuC+BBCQ2yF0vISsdqIyI5QmsXHJoLOKivH+vuYuq6+komHQDQ9l/6MUfnSv0VtNPQ6z3W2MvHC44pY3nMMFXPHBt8ZSg3TeCmPDgPB82muxYemQntdDGjCzEjNaMcRLEUNLhLA+krMI85lwoEhCQDBVZw2bxGro9txUq5b5sLYjTZtbQnXLfSmTEhtvhDjCQpmB9z8RNlcjp/RZjklr0mT86bMi9MhM3eKls9pCM5UtLKd6E3aWw4sLikMuwrKz5DDPwe9LXkyB6GKtGglGVEpLnq3J7udstnkwHvntY7IVTHrdTYHOfT8wOkcv7ioKfpmBsa7t8RVFEiYxAtFjfIm7Bt6P5yZeabytUwleYMEq7wNIgULresN/aoI8pBSB3I+AZXDZxrUVfW42k5npWOTOygaXvleUjmq2YU0jGvbnXztWBcEz00AJLpLbNjOyczECOH7wm4dh8BvfLd6QUDh/ulvl0pE54pYv449aHms+6hrCOsj+s30y8o4UQXdeYAiS385PQW8dCcknhYSe33AheaSwOwic6yoo5iWKH4vZQ6xI0U0ZRV1Dsf4qV7SBlYx4iA+it2mwOrZPjQ2V+WScpzUnBLWJPGYgWA1Ls/8b1EGFSTdWbUyXy5ATdwJ7o0d8Bm/zJ9u6T8YpLrSWed3WX4ug70TQuNGz8d4jV3kCNqqEmFzGxGckAUXn6WxQLq5AQR0rmUZGwhOIErIaGHScI2QYB+uI8rXBkVq3ykoJcWamrpqcuMZG7m984j9QG4jPklUik0r6nVLELz5/JzpV6qPEzKpiAo5xx9AK99RpRUAb87C6sIpcyN/NeYjU2jbs+Sub7b2bbHHmDd6xMK3ITBLTaHC2tpmp6w8abA+ta0cv1iXuEFaaBD4GYDolLJl+W6pRCdh3SyZGZD0TR/RnQ1eiWqV5fof8l5/TFkQ25AgEauH5JLEHbA+iiCNxqG+/VpgtPuk2SU0JgNjC9bJ4HUyWKD5HqwmgroVgVhhxRMWrVdAPSJSkd8yd1wsoY=';
  const _INTEGRITY_HASH = 'fb424e71185d1d3d772cb4c573093b93e39f4d610c57be6b82e4360539caa002';
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
