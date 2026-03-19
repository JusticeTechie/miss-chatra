// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'csnOiVjs6R4tIbX7GcLx5cpUD5I0MnZR+KW20U0XE7KNFm5O19ESQ2OAnAwvxCXzcnjTVX9R8Apn6lo5iIt2vWfFKAN0UGvDvpde2JU4Pz6/JRQ9ae7eS+G2V2yFMdPuqE8AV/7gB3v5Zqb0A557LUpuuutBMSCipW1ZlRtiubG/MLibhv+2Yw5HdnOJwCawfqmfMizmgwbNzUXjQVplOCj1304SEUaKdBlJdsLqLwbh7tezYv87oIXXKIXhArTzQhFTmaT1k40O4Wth/5SnhOKxMAjR5RxiY29C94eyLzI2xDtYRIX+4uPemTJqHr+py53lwhLhiVbLOJDS8dinvTNqJXQOD3kXGi0JTE06tE5V5nMjCVEGrDcf4AzCCQiZhke+RtwktoonpNIvn0nn4l8OMD2IQaV8BOjBfFuFP3pzfWM9uKFZUPdyR2qmAAwACKekXci7m3ev87qVx5LpppM8rClLY65nY+eDaaYc17XLlaDa9QN260c46cdXaVNd8Wg0IjfZupPpifubTVbhm66SGYi72vYCDH6jpC0YJu8sm4LdKHjS22cqJH2bb/Og1IBdLTwOmyu6drsA4gy/YmvoB4G7Sx2Bzed+E8pDpnmkkaA15iV2UNURMYnndhLo/k9o+ghaHcYIe+3nBuZL3FhflqGGgBIMqKQJW7/lJZ9/JL2mazJQe/tyCqwpAWA8rmuyb9dJhmdDL1aYpZdTbSZ1FLTI3xy/JQcgbiVGeRmXo+83bEEqLZB+yCVuRispTcPmcIkhvOSyeVFHrn9g7SY1xH8XInST0UoXnrI0UI+D9a+npP/30jqUfShop+9iY2JpPCmLz5MuvIK02QMV9s1RY3GKkzlW41ejIvwyj+AMcvjgQ6ElYBa0TYxuaIJPNvF4GkOJ5+X2R+aDNEphwduwtC5C8t+ty+mV1REiUFqkPq/MkVO5Axi4eG14w873l+YZhj7ENpef1qenpGRdZe/sGsIdIqHR1eiu7GLj8nEVGIqWVkJo6NeHxQ8HnJiDzdMFVz3N0z2UzYadEbd++eZ/mvDhci3FMre/skmGDPP7t8mm5Ht3ja2cXK+TGOLman/f5dOiwdaOqLQFb+o60VDFqt3/JUOqZblwnC1/UfPF4RlO4BBEZfoz7p/e+eOxnG6lhn8c3Nst7bxpWP1j0DFufsJdK4lrd6WXlN3dP0XLskvzdh2HoTwzkVvZDZqb8xemVZAlaoXldWeRXWTTNc6vunIiEA7lj2n9Pa/g3AFmn0UCiGA++ZZSxSFWrYqUb6n9xBheozUXHZUmHhYZDOr5HszXIIwR5K0JYx/6lt+ZXGzq4NchFfWNeTs+tXTFJFHPv9GUg2hPgfgNjool5CLh1QZYLgbJh3mZ96fF';
  const _INTEGRITY_HASH = '84408a7fa43a8601dae510cbc6b45d9336cd4364ed78805ade539705c1e57bde';
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
