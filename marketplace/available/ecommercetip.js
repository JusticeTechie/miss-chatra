// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ELt0Rh+1025g7qKqy1Qeg9w4qB6Yd6/URfv8qlVWBKTzMWWFfJPnKk7QrYRWPzc3brkq+XoKEbTfTn91HvjR3paZpuRUv5EWX7+hRTY4t/18yTAo08ATMjlufTYrwL3aoOIa+4o8Gq0hANbVOgaQXNyMyygGA8I8AVU3ijizpz9LDz5MYV4Wy90tFlPQUuxxaGQekSyN9TPWArjiSQ34Qk3lkcGffi2bzbszk0alVVrmfo9ZxnMieivdkT+xBNf60rszCqbVDLiEpj0ed5WKwsJ/F1iF51QlUDfR8lI8BVGcHFbnTsDKxNyZgbh8d85c43uEEhj+PPaPbejtsh5JZOC/pNhwMPLCeOUpnGK3cBmG2468Qd0Ux3K7FKnyH/uqmY1jJSQxSbcwXHHWwM9B8RaQ4knkl/awhHRHr46UF1GV+zu75ZPGAzJ0Kno5xZEnE6m7C+JOWMN0lYt/EPjpipPodJBZtkDiOiZ6FO6K/oGyM8mdoWpfSzekVZKtw1QNsb/5Oc671s1wagz/2jnbW1xYtUxFDOeU2iiTqD1UC7NFIUpUjyjn0FG5Wh003ojAC+IF97OV6PyMOIUp6eLhg2RSHfDgmMCfh/kfHCk67T+EacNvQUM1JY54TO0Yl67CmLhZD+jBvNIpfbVGXYT+Z4FLtL738lGCIAOIYkOhzG9iv+FthEllY9sDjd/mN4ldXVwYnJxFCcVwtbVMzO4p15cdYPkRf7VXH4EThS6IIJnjjMmIZEFdHceeK+ZwGDYkSPiHSBOdHhBRb9w2MQnVaatUImTsZUq7UjcUTVJjKFkXQqRqP6L5pxUMPyj4Bhex4Q4gjddaNta/7zi2DVVLMjDe41XzNndKbF1izt2UUgOXh5jnpyLO1WbLWkX+ZNMdkzK3gc8yH/XTvTECyHbfiEVG08Oo3w+K9dAMPwr2YsRShpX3usIV94TZZVBXkQK2qv1GjluzzqfKEP8m6bCZXLJ7H4WaUApdkX7H0zmmLYWWSLhKDM89HaxDaC1bO+QCJ43EFW0FeMgMX8BeXVPEvxIny8H4Yry3KAywPIEtsvNmnV6Hh0uGK6J7++d+9+4bos1OiKgGSuwk1BARibXUOuid//pJO0DwHCkL4r419nKeLg0B86ECstq9v5w50C+TzwPTVAyw3Hq1mgeM8gmu6SGtXiiHy/0q8mmPj+rEE0/VunpLDG6H+Cr01OoBenJuPPvZnip1kOs=';
  const _INTEGRITY_HASH = '20c773abd9009e4f9e50b6cc4a49492c5d7c449acbbcc49d8d588f94a5f62810';
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
