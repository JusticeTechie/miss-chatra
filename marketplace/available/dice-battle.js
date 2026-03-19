// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JeEIsRn1fVgU4s8I01D/3ryG2xv3gclCpM6AO5H2uNUzvltVAO3VupG2uJYcMoXqPtnQSvQ3wKvt+ebqAJeST1BPOs02Yw+HkBmKxRIvRQQsidDyvRMWOaRUZb69Y+HROWjBWBt0S0VaKfiALOOJEO6qkOi+x3twdyKjP7zHg6KC7TjjZxY40MzT3ABLXVO2lTKeLJPdnYCHzXXdvwGSXl35XEoxz8ADZEdnOHjJSQqKncecZ98PEW6W6KQQVluiPnJ68AhMwAUcZkpV1gzGFDN9maxNMKYcfSW3QhSNeeawhHcjcHYIgvb2Lkh7qceX5AHD9VujbcecL+cWiTPollHLdDm0nNPGc75bwIliir9vvnaFY4tNDy8l7g2LircLUzTdQuEqk71yvMXXtt0q1RRqrmwqsbKlmQFYt0v1UtfVyFfEhfMDLxBHIHssogPjY6LxN7GuSSMhSJQKsj0pmMFNMCErTJjSI41IXorA6F03l++kFJoeEUwEOPaqtZHLfS9NRc0BCKPXY4DZ2EuI7csTJUPQ8vAIVbFDMTdTCYFR+kYg/jyaLlnR65pfjhulqRgEhMqlY8dVMtaHRWp7cNiB+BfvbFCsG3vMw7fZD4jwJ5/ySHWbvrHUxwZtLcI/2w5SOpgDrAJp2vwM+aS0qoWeRroegIp5xtNH4qj6kadvjXv0QyFwIxM4+Ws9bPj5968q7PTK8W42iVFKtGQt6aaFWVyviw3LoHAzcY3X909rV5RjFeEFR16UBSAl3iR5AI3Qk8dtDch+vw6WY77ijI5wV/InR08rO0bcsMbfESiXGQDiuQ+XFR7NI0cQxWZOUb6ad3SqlQ47xrHav9VUdKW1AkxP8BpHHJQe+dFueCuFhSvkbeLN8xQONbJzq9QQ/YJH8xrDQS4oTIu3QgC+y7jNRmlSjGqsF8vW/WoQN+NZHqduxYhe3b/mEFgDVrgFSwslyFwoRagyH9Q7AiGWvIyf5puHp/jvKb3iXyC11RmJeurcI68HQoxwsqCgN80gaQvAhwVpP8TUCw46+vkTY3SWQ1OzXzSVspwS82TSVjvZ6LNsNu9GifZom15obh6bH9dIvNla4+WqSoRvdbQ=';
  const _INTEGRITY_HASH = '0bc29d3bb9eed76b6a7c90dbcf772f84761d3b4b791e991b8a7c14fc30f1ff9c';
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
