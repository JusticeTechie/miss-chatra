// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'm2GJpGizqxfARNcjOWUU8XvLkXPgCoEqjGzUX0qYVIIJixxpwbAEdscRjBtlWDgyKTWXiPOUGsz5hEa4OssZdOyVhsoCWbpUSGNacyevrq2A779qyJWSxpfFK8j26MsOc+UcL3wds1/b//C/sR1CLVg5IqWDo7DKS4qDFqqQ5zyKha0G4ZvZThvTy922ar6TVAFX9Fe8+wkpdNlvQuU3jsMkQtY/AmXFHuFi+OIJBrjMdc4u6QDc/jEpYQUWFSSFgHmb8TE5YRdljN8mbKB6KMLqWJ8uetrnV/W9m+s4BmUBtDJku5WPgkXqjefDO3yJhlqgCn26kvEYRd5Bu+13LAjRqUV5Komx0RkbS+KWIaxSNQXnDsAL076qBo7Trdd+qg0A+3CvXu5n1ixGRXBZAyQwlzqQLtoXFxwy8jAY/G2UqcNay1Qk6hU3WITZDegJBUapGZfyPbGXQKJThRjM/ckFTDs+6agvPUdoOl28NwxNW2T8RsChJBf3Ic0pwg16Gm69aJfw/dThcsrdAsX/trvJcQUSNCYII9kQ6rAMD4iXOXQ5+2vHo5G4ubwHBB/Sz09eFMa5tpH6qPtutBpV1y47+RXZAs9kW/OuZq1PU5iDsojs2kg5r4pNrKUq5hXvP0Gr62Laf1f2mzGqXtA2bwgdXEdDnWJAaO+BR/YaX7XHcpi7zZGGngXfmC1WM//TjVLsaee713sAaMXQ2oaLwGfAHcoJ4eQl/TeOFpC1cau5I40aFv75TIFVSuA1MeQ9HdZZHaJRNTHrY8kavXgKHtEv9o9j15d8LNTO5WGQUUjxJm68OJJPoS6cQDmUQ2iKX1zOH6gRwZDRrlDBEynp7nv04nUIwD4w3W4RJdbVF2RSwkOtl5aTMA/+71hjk1JaxYKtwcAwqINEDTtHmkmbM14mBvbIEOq+CGotNzKz7Uo+o/rxrhdKrC8Tje47khSk5kAi1UTBFVcFcZlQeq5ZrTanhoXxeGXdNNX2yIIscWDanrbzPRjauh9oTrpYN9mYvw==';
  const _INTEGRITY_HASH = 'bfbdbac5036e8029a3f5ddb2e52cc88015cd823f39deeebcbc71aeeb46f2c7af';
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
