// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2qmtLizh+PDYIOOhInnwxknNFnFnJXelBZktRkHwP3TSnvokS89LX/QSCKJVkpeT6+VGl/+OJh2zf4pbmdsU4+h9WW0Js3MV3kttyJesv0ohd4Nqeoq8zixLTRzAcLAhaDfpaywZrTvxEorxs+pHwic62Q9vO7zB9lGU+HLB58A3FBlERy82DfCZZzn2X20aoYsvNxik7YwIrnxqayDPI5xpHgxBch8mw+wN9yHuyAc4dvBHbg+l1sOLHBZ5qbU7PLPQQ51YG9NV+ZeKNNjyANXb0VlOSILYfeJarW/viVRYazVaAor67uV7v9QyKfvfyn/O2YQ8GCIr+FKeY376slwSV+Szy4TdBjl1mC+aJe2dOkJCz0RIToORnOM20P4e0mZEoIOY5J7r1k8b0iRdhy8CT7FyF7tS+bZyFLCfvdwU2p6kgUPlIMsBJSdoGDwZyYva2YKUsQVzlEVy/bB3Ie5q0dgkJOTk5vnRB7PH6f17Mtj8lmrw20kkLf/T7s/dgmvIsl46E8bGyOo3OP6FKCtuVt7hNzaKSANxmrhvuygpZ5fWIixbcYOPu+IQYuHIhfXuoN+FFMqkQGrz1Q7M5LFw1ohFbUPfODMdwMiHr3jbzf4o/ATopTLRAQZ+Z9WPp9Lg2TMOKAQAyDkwX7LuJwxLbqPy8w4O9SdKRSDYe1FmCzglqNuASN3yQJRPUS82gAyyE2bW2ev+c9PK5nWZpWNik/M9gUCQIZIilHR+SEA68BHw4Z6E7uT1naz3zlwA+5ktXd4yh7emIJMtmgUU4gqSPMJsyULAzgp7dSROZoYPeGHEJ+vxzuXRiB66Y/AyijoCebqsQ17MI5xrhWMxdndNDLGxvwOkfCUvQr8CUaho2rLeJqbF70xD8V3JGLWJ+mFVk41QRrGkXvh6V3GJT4hRNp4uGzhCwP6Q+yI+Oh7/vnh4SZF90rYntxRqflgUwqa0Yem/ETS+jFoL0DuQ/4Li1XdTTlzLxgs3vhvP7EYF5PLyCAAQbLOx77/hJY5pIaCkYlUfDzYNVUx/1rzEbBjNyKUs68B3+zaT67JHLG35hFopg2L0PhZTzmKzf0qKLvw/v2Fnka/+a55wO3yM4JyA2lkbqoKkSFcdwkzVQz9TOLgNAGaFl5toUTt6kFxpj8XM5DerGm8D+t4mUz/FglFy6UyclLr6ZoFYPPfdcr8dbEx3ElQXBLFRiTeyA2QRdWzKx7Z+NOKD';
  const _INTEGRITY_HASH = 'f9edf8c2c1f109cbaaeb380a882a62e64a6081da39a25abec9932ee21a23608e';
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
