// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mDbjf/9koJpWWoK4H9qj0tQB/wI3t8hGtvN5gnvWd5mVQP/ePnMdMLTkffU06ZpPTwF5GU7ZEe2v2AoYgTE6DXT1SXbe1HBSuOZV0guPijnazf7C5hDpVBbN6yundbzEQTSoaR+RxV8JumHf2rYhPkFTdn5GSfDoGzO34C0EDY0pWtQa9Yfjn6nLk2dRNPdJRT7lFZti3vvkQ1rhuOfR1NeFVA0GFpPVnxc/n/Bggq5aL0VSTnxHqasqIjKxXzwrTjCluc+e4mHWcOScdJNxImRpgici6oIJ9uIBV5YP35rFOjUVZXZRerGK7G+NfA9OYwXAOv0VxvE1guC4VT1/WOJ9L1OtaJhr/fsybBn4vteZYMXTRyBblcUX/D6H2MZF7S6lHOxvkg6dkLaWeVq+0djvllDg9qQLGEg6CRWOi6mKQuRKOgUAUjWR78AcvehqrsfndVIFY1J9cKx60RcTWWGGNOHv//h7aE7OFbjXSCxYI35lHf1bX3DdCINZ7/RIzrKf9IVliu3yhasAiHaM7LMrgspnI9QSuLgHChO44yEjABdmNwOvszJnVnwbqyIHP1nx/wqpa6pYBJnAtKMN9tc1lrM4f4uyIxLRx79JSSyppW1O4Mb+cFswYNEYn6oZXopUyYgFnPFGJ6vL4wLmSc70EZKg3klUjq7U03a0Vt+As/XWw6DeIrXjcH4jmx7ql3hwgHWC9QwItLTWJ2ipiiEbf1WYnbg/sHgtd8KPkQ==';
  const _INTEGRITY_HASH = '1a482c1de3fe89c64bafb642ec0ec43b25562a9b3fb12a9748c5726ccd534eac';
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
