// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BDG2p/CxJGxuYXP4+PzmmuYy+CXRrf8YaY5SXWRxMMmdnfsSXtXnk7zXqY1tXITpQCtvyKBJzh6fv8IfNJwh0qA1sjixQbQnK5qUghOZFw+3gq500gviNZ5583Y+1LkDRa1YJb0yyAMbGpWa5gKwTOaBKXMYYX8QyDsjsTS+9IHcQnibBrRfvJWEJ6JiBCWhERVlSkTfcQZStrb6H+iupXPvWY8VUr2m7Nnh6uaENLyXlk7fAKzDUTnZslQLDAtlsogDEiTHb+d/F/kDlPS4MuqcqFwupTAWMDCj1tvRzGFlojCcpXURG2MFw71qzT2zLvUKgW8m6UxRQ2in2OKYWQjcMnNlREzE5gWawKu+WuV0PDm8Av0XflSRXaS2+fJEcIiQT6ZxR+JrtgzmnOpzQJJTPPrpK2OgWLRASajnn996+3PTzSuKgkwuNllqwo7tWQoyd8WHQDNHhXVCI5NdhrHWIuvPHdJ7HlEeH4fiQXgyDCj6CLPBDuxbV3JGU2BmIUOMhxJHOlyQ+iCo9JE76QA5Qli+eIX157L23BjhavJ/k6ZPxtlCWzeogZiXClHKyf0YkIg9k1zrvlSW3P7zQfbxqYAuPaxOLkwP1oipq2zWLjs7SYg0TsfsjL/j8BiyJk7DPKKr8EFHoUpUdQVd1JKTQXLLzjLhKdCF+8HPn4h4LXULvBY/mAJOqA9MA13D/+lFkUxmTTuxnd12isTQADxL957BK9ZOFTv9SCrxzEfBFmHg0kt77eijQ10xUNYYGDQLnPhIiZLOzWQaS5UEuJl67sB8rWQP/yfAxr2U/2Isdyo8XGcbDdZrl8DLsxCCaLCs/Jq4NcUBUkqGXLvjoOtUI2j5aYxc+YtEDma51fO7XrPBebfdHk7/u7Y3ysBl7iFElLJRCtfCworDnvGQ1m9oEL1Gyqn9su4ei+o6RBsIWnmgdfpuu+MI8N6ILON3plrTNcBKZ2oZwB8q/ScLciWR1vjNl6cfgEmhVHhAhEoWsEyv0My4MfMtIix1HGFdqAOokQ/0KmkddQwevgDSSqrOpt/WVqNh+OhuC9yWXg79NgS72u3tBrTa5XPS0b2ehh325xb+oe31qbBeSDwApitt95fWHavBo3dpxHCJy+iPoWgoDFtRCJOp4UF4oDmz27Ub7QweU/S8i7uLFJPWLFTsEn+aG5KwydhrXVRGzRJwYIlaD/eIXD2Z8e2U4i59wfG9OsQeMSdToN+SWnN0vO7vGu4EqAgqCfDfjOR0xwdnOoFuf5lD0d+FQrv6czfSNZRXxmThKvPH+TCVICv2tV5Kp9JmCT0F1Iyy4LpujiVOl1FhMpbrkCNybomuO9HBe4r8IxJktS0/WA==';
  const _INTEGRITY_HASH = '672dbcea2a7b0586cb16548203241b2d0f4d2063a6a652a9a7b3e2b835662982';
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
