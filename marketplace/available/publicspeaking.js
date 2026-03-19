// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LKUhRv+6nf0EZ0LrxuYZFZIrbwnoJx92eaUL4ei4B9iL94Wpz9FwuDfPLIbEDDdqYdRigN+WIoQKBGXwdDghq/Cn7DUuLGnfbNIHp52bHu9HK/rzWDiJrckaS8qT+xdtFEQwMc+GzuJ7SWIlMrKrTQHyjxgOdAIS+qxBiE2n7d6sVTX+9Egru7slWxBqs2EzsmRpTzEgSJ+aX5NCNjjvnsRbX8lCdJD6WULHIwk3uJlxeyu2BhlMB4TfXO9I3sW2b2C6rUDw2KAQl0OYG+85Eb+6dtkC+Qbp1FnY7ASbAzyIGzu1HnrnUYEII2A4ZGnfBIgdYTdXmy/19hXnMlnkIUSvSNvGx8V2RWkAfpbpdGOgm4Qo90a8gIdeDHgOqT6ino28BtambRzAwLJ513wlWL8NBHsWRXqvG7mgqEGvnRJS6Ac4Ex5+zJabp66nKIaPrRBi5Dy79ItuuBNsALaEmaCWyC5bHGTEbIFi12VOMuHb6ykkflAPUnfGsgohU1pw0/HwmP8s2O5qq0+P1+eisPOn4FW6u3Wd3kRhAke/DK10W7ueAbfe5SL51D0EsRHtR2Xj1lQPj75Aw7gUGeQeJZEKlQ8rWDkOSJy1Gz26qjVWKFPUC5tcMCnt2cQu1RTD0tvib2T5mytqE0HrlPsAUqaTuKvQZlTLsWqGy9+E9lK0ZPVukwelLKRu+2UiUvMZNma4PiKEJz/qDJ1howpe0nQ9pW102LIfv+kqVDi06so0Jq7GXB/u51f9V3m1dxByYYrSjNjuciPy7nQmDhzr7m8VF9SVZGw7W92qC4XAwRmChVwg/BzWqYrNzU8fkvnnQCf3JIlSWojEFzLI9NLOwBEfdyt6+ZblsSZnNhcUtpJMmtEP6dFgxLUKLKBq0ZICiMwhPzZPCzcTX8enRMRq4Xt8iD0BJD4M1unFtdJNikpmavawUefnxeibxZdkzp8vt+FzfOYlwGHplmyHleOygDVl7LyhPx4HvcB66S1TWczFsEY0k1zuUjzR0YtMiAVN1kS5j4DKxkUGB1bssgUXKKGTgKZPN3uleAPBoBx74P4ttKUf6vYPHFlLs0ODC1rB6Htk3TkeVG5ayZpxxDTxy5C7rICOlcbXW6l66rCkGS011hoY40YQurWvHJsbOEBVPKXqqkHeAZFkoJPjOr3ayXgc4sExT4iEEJVqafAUrhw8611SmdYwBc1+XNU111x7JsHzu0oy3MTrOdkzVDWSPp8h';
  const _INTEGRITY_HASH = '7fefbfc9dc157b395bf8cf8314aedef041a59a469706bcab426eab2d0ff1028a';
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
