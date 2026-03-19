// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6YUG+QqfZhE6cYR8e+FfvCrmd76GIAbeA0u8SQTqLNcw0dKfR6RtoNh6nxm00nCE0PUwg0EOK3us+q4A4Rde5QIQvLh7ncBLA/pnEstUL5i2E1MWBbNsYfU4nR+FjmyXKw0lS8Zci+T+dYqkRiT1Qm6/DF2DhcT6MJihDw8lEWcZCsc86+pI2JUfUlAyg0rqRzQFqu0r4jZHmttoHwo4efeK6zVqpG8dGx+v6Mbq8jqtUGgUyzpwwnIsnzeC6bF4sc2QDmv9pxMlXOaM8wusS51CzQmDAOZoPpbHpd5s04/LBO+VUOY+7fi1DXtgnzky2dsDzQL7O+/c+G46quXli/pzxtFOWkDMN5/gspMI+2z8PIVjoUYiBUQY4PvOabKvIST3y3fhskVsnt4hD7eCvj7fmA+g6EsttBskSqF1z9VBetcrG5B05EeSA2U1c17Z1CVfGVKvsi+vuaIsZPlXtzBopU7jea3P0RGOc/o645ej4b8wAq07Ih+wNVMicEAeAPSksTwKE8UExmurN4GaIlqzoZnZONV0GZ4anWV+fK+rfLRxhkkinMPBbyYqt1XWmM26Zq2qYIUhd0YI691JrD6M5brA9W+Oy09s/D5fgjLvQADmtXWvMcINGFqAUyjsWX5/icYdhU87hISAX8dyD46+23HwE+CFbOV7FPEWQVqMBI7sCUW6iwEh5RpzbM81IMWCWIp6x9yip2EXlzrp35/+ILDQo1QiWvopOeF2zFH0wE2Q4T0C59xcWtoXrm2R+xaEoO5vFNpUINx9YKQN9F1oWTsHpLaafE3JtXdlL5zhGASttDok8kysk8Q4rj2KNAyDz5TOgp7Y/IABvDS2s3o9Z+Gky6hW0aPcsHtefqUUAEFtmJoBh8ywElebZ0VChq+TxDGKdwB13sHIcWCLhUx/HxMCXq2s3s35t/SauOHnilHglDEAgw==';
  const _INTEGRITY_HASH = '1324f33ce25b0caabf40b05990b0eec6834ba99c0ae588dc5c5c6728cb5f898b';
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
