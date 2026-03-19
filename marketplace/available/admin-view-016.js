// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'D7f/jhPcxzXShIe2lFmeS+rI9AJUbfJD2zcItYcdxOk2Bo7YOlT4CnAvatK53jlPXRyGkcNSpBASj/2bu/AtPFyfwP8paWeSm6mulcLnVfllbpjENBtaUlXIpItk4gs3Ml41u7FI3NaB20GyHnx75x/xodxF2pVUQ1p6HYcFFe5XbhZwlBi+bn0WGcsprhpoDd2Um0nz29ESZXom7E4rNNCY9ndzAMFuplIbxRbGRXn0CNKT4DfVdFXDC4gKArfh/abObIM1yfwjCohGCyGCJrqgK5JirS30k+SQBNtAzQlED5R7LQDKR+8nZMECAg/Pp8v91w320UtfvLQwenWb42u8O2vP4fodpWnW3QSGCtEXMPL0Q6Rd3NU5yC6LJeCQ+1aHBFVUhRixI2CwXhQMwbEYhhWGgrIWVsOlM/f78CaMa29K/qAu4r7BW57flWpsCklhU9ualLQpF6Nj263TbHoSrkKapre8Bon8rRaXa83ZHPew33WadfakXiQX8zxokWJ4WCwtti+1XoGfr3paTsKIBzsiB0BSgd0ZJBBTfBgfom/Bq8ARO1pN3FXdnqP+y3FnrLYBmroimOtAOilOsASNBt0dGJoKqm68Uj1Kvw7D4ycS8EsgDy//4hA/P2FrZoQXJHlOgTQfT+c5LTgxh1R/sZASmcYzOfsfnUoaftoM1ukcjDXbZBGjeeH9QksnmFuf7/MdgxxdbBqoGgn+rFhmVw4SqbxQxElJ00oClVFWn/lg8cf8zW22zrLpPKGhjZm3VK7Ap6N7BNjS3hkeyxSUW+Ow5MGJZkgZ0rx5lixZwDFmmT3lNg5yjs2lnlamkne7qawZOrUpiZNGDugYu8H2JM+2mDNK6NwayIb26sTBTntCxiQSSbpNCv8A31VNIcJks9RMQu67QoI+/wVDhYoamc/I2mwO/TAXUUDpQOT02LZ3cnPXKYNOD3CsT7aAGCjeifQa7+y9odR5jt3Ncoh7DlAHKNzrZ4SYG29YQQ==';
  const _INTEGRITY_HASH = '0e0fa44a6014e435b07f58ad07e39ec9119994e5c3825dc6533c2889c2106ba1';
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
