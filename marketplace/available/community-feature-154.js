// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jySLzic+R8iYUlms5k/Je97trE/bvIuE9Zf9RffHL/JzT/PnU15AfMa3UyZU4Y34MMLC15h0QTt64MvKHbgVxSkG4Tn8bHNmgibO5glfcu3/JfJZUPJWMIdy2gypiI3uHFxWfbHIyOGXGylA9VZjt85F/VX242dFh0nt1WKbCkyw7Ygkft3w4veN4MhuCTC46GABHQ1mVCMK6JwEG272SRaVPcRoDbomI/Qk/gIeJ0rjeZOmClgXJNOgOL/udCRXJEY9RFsr+ZoJDUQ1winc6XctXutphdGVVDbIk3ay/qFGqi+cmoCIQMsTV419WQoZOycfsI11fD0IAl5X3F/jid7OFgUlRN3wzbyxlubSrIR+DDLFAgTbR9pD3KRVzPyvobywv3v5ToVWGqDjMG5KWMDvthBz01UNeBvbxiLgU5QzP67mbk8oIJ4rK2nebc3Ss9iib9mwNjYOPVHZytGL/oH2ahnkrM3YVv8OVs4oGzqtL6qi2Jt6WTlrhVCuypX9e8Zoe+gOXQ1jrJ+8vKD/C3E5DN/GzjrfeeOZzrb+lQBtrv0LuTPjVol6ofDIGn06qsG2GtFBx3v9aBWZqDc5aO8QcoXNcRwYfYZX+v0azepORzTQTmWQH7srD6rdLJSxdnZHr/lqo1UmQ6EEf7p4JO3t/T4dwtuxENj00KwZMsBwT0NtToPRlS+cdArWnX8qnuAmY3w8m1nKqDLKwyARepqctIlnrJWllWLacdYJruwOAM90OZI=';
  const _INTEGRITY_HASH = 'b3080b9e6515f071a958e8b80ea4c57176e1251ef8f09dfe3b671973404ae302';
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
