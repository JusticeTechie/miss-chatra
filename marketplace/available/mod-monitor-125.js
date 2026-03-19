// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aYAnyf5JYx4ZZVyqdiH9PUL+No/oAmvvAz7NBAcT2i8YZpM5Vr1yZm1WOi9rHPTZI5Q2IH7LEX0r+YRwtFKFJuYtg7QdxAbZHtiR5WbdwFvxiU5GIlbgi9rImTyTWDtsOCUVvIImXwcCXgQMOb2MXvM+df/WVRkg7F5Dvh15eFQFwzBcw1RJVhNBa1rKUhYuGN/s/QbDIUO7uvDW2pshm0dSW/Q9a0FMHXeC/fggoz30ABc0pO3K01tSJfDLoINNKu7QwQCPbyYS4ukJJ0JdmTA9ZZScfBYThx79jkEgtGBUh0PsvHeTV5N2V3Ux9ojz9qo8DsNWc9djHMU1Pzr4JV7kIe+vDD++yCj2U5+BnmZUZPQdhEh5icfTFeDPQjbWSNOUuUCI1agreGs1HnwtWiXcZZ0UfXs/VH6h99BVbb6equJ4cM43YOO2mQw7aFMzMYnV5WEAfvpZmV5vvp3uRZQxNaHBdmfocwxmWUpOl08O3IWeB51WZg9VzxOnmicbTIh01xlsD8gbVrYVGElXaX0DT6QmayWsIwjJlvXpjoQMjKxsWND0HansuXHoPJSGwlbYELjyJlCHmoetuf4US1ZFyFHHBuMZ0JJDl6rMl+7N1Yo1hyywPIh7+U6TgzUouQk7rX/RZeig/xEAeqQGG9k82M877NySSXovVqI0E3R7QBVWCwjvGJT//FxQbJ+w7W02DW7DK8aAwCdCLkNV0KmDU+2HbNKKScsIKpjNR3drY8PrUZ+tDlBhuXRqlQ5EVNwUfpHFCZZCA/Ui6Lf+b1eIHXhpcReNNFS+juyklQM25da80LrbCBo0P4eS4eOD4qg/1hdxkmGTnOwxgdqLbpWK297bzobCf2I0GZwKxBE+psGE09wQhoxpkkqF/oLjaNFaOwdbE2kmvbq5FXvvIWDobAjaHujPE8Nc12/rH5m75430LCAWylajh/yWSunZryaugTI1lvhEsu5D97OGnzba5tr0tniyxqU43POPnbDdc9dfNGeOED+BZkBNsS0lxzaWQwnZ6lBzrefireBl5Fc3HDVuyFYm22ppeUL/J0rV068x6L59XabyatA7AU3AXoWwLmX3m67TAO5RFwE7jZNsgHw4hWE8gZDx8aiIFC4BHby+CnnvFK6IrwQEh6bXgrnqEbWOfvQcQtAPVIeLiZVBCJTDVoaTcxEHw5pKiZxmsPqdl2KYJ1dlC+allcjEy5fZ1aaHlgxf6lPbpniKg3JIBa3XZ+US9TM2KP67LoWTR7By03nOYqDKwed+BL/K2it+J86vhWwdDBFqXL6PgNgtnAFbBNOaySxvKF+O6QSRzkjcsJhBTCheRk0jUyd5v5bH52UcvRRld4z/bfEsdM/FgeTuNrj3ElUrGw5u7MVZ+0aS9fdWFmSgHSeraAQx2yc=';
  const _INTEGRITY_HASH = 'dab646334e5f6c521996048b13762313a1f26c7248894b567ae2b12c71fced2e';
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
