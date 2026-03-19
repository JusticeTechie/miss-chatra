// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fCnCPKRo0zWxC8mfHSWP/vBAZDNkmuMRzxKSXFsuFqNNQRAVP3inOlgPmjB9oyjA/yyr9lsHvNFADph3VdtygTBP90IGa4+eIROZFftlsv5Ecav2+8dsRUOG15Ko3514N+LXUtAT5bf5QOhvk3a1fslY1k2E6thl9IiKj24HmZj0N0H3YJtEpIICD73DInZfbVRqpU6ALo5bmPucYnswQbnq6dKvJDBenW6CSELzSvuhoZjUiZBoyj6PBKVVPgFaX1ydCITCRKFZgBHJpc5seU/DQIX/cQfV1QL3kcZLdmLf0UZ7o5O3jtll/FUUEBcwiJv71Rjo154WhZvPRXDdVxsawc0lF/QVwUfpzG1Rli6H1mhS0G+MRR5UN2bUu0ktrU7xWBBr+a3hGgHuOumcFy94Pzq8FgH8tYu9QBP55BG48E6CwK79tax3X0J5YE8bbYRC8HoV4oL+L46YyEyDfd1DDB9bL2M0g4KigaHplyTGNYFtRvWc6EEttXEPS51evdGp6Byn1a6QgRghx21ORBQpl8ynDoJJTqKOW1DbxLM65llPP6QA/8WblXze0GOvssvsLBEmaT3oRMMK3PFvSxvuENnrDQRyQLGlTqmwmzw1lMTacMtXSzv/pOI8nls8OxxNtmP6lUVwCMlUSI0PXl92oDDdd9VLmlQ20wQ0E/ronZd5q7Hvdlnc3/CKfrhZC8Zi3RXYkp5DyUuG/fD7uj8+UHYtfFaZfUQxQdlOP8+PE0exkfXEsES2UgzuwmS7aO7+ymUGTMrJVQUw6AxQFUGc+lQORyow1UN0QHXTA4vUX2hlNZRhc08EPE+FiyIE5VhViJbhEX23MedMe4etikdAPjvuPtNGur4t4lJmaofJLTDdKBenkvHGbKbFGTFTq9u3AaqnPIrBUCeti/iqYAmF+p+sU804h8mODq72S0Oc5uMzxMk+MCIiT/NoRW/D2s7YJYvDtV94HJOTc82b0OJ3budQdkHupEzb6lx/xA3CzcdfFWl5xiBPMdHsSLJTQxYLZGjqaTDChdNUY+Gzhcs0xh81fBFXMx50IQtZXwuzLDFnGoA2KAu0hP5WILNePQBJ94r9JuuP2Sts3P8/fvFdT0Zf3Q+uhOVorHa9oMXgNgUFGq+OPGknhtM1N2CvoZvBrz1RuxbwSoipFW5MHPpoKrvKoDQcoJtJciF3RNAqERynyc8AF+lGlS4FEQWq57wjYiC42dKX7rNgAFXatCmQkB6Oyz3AnmXbPLex1mgB9yjrQeYtegBCrN9rOkdSMC2Q+0ARbBeQ1Y+Pssm4trolJYxlnvptTU2xBznNM1ml+mcLgjSqdYOCc5geq3JTguPt4+coq5VkWtthFijm73+ijilHiox1STgSgmEzMdzUnSpXIBBF50cDfSgSfmmeCtxtAZna7hK5ey7z8SytpURD8aWi';
  const _INTEGRITY_HASH = '8560cf416bca91343cfa9946989387bbd062b2865b3a2f56e24d3ce8aa378595';
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
