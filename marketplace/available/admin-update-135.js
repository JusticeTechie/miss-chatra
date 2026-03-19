// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GaDpi5kcSHSlmNbGTYMLwjyazcO4VyJUSj1I7jZWBfw44tiWbDk9vD2O4MzkOnk0CguVEOteGdJec/kMZNxkMD7bzogMQ3OEsD3V5EvIwfyPuD87i8E6g8qYz67OgYaNhk+9ImtVcAuTu6Y4G4ZN33hRdnr9Y2xIGPfSkBKbGLzH0WMemNxvLXp4ShmQo5MCq81GYBNSo3jt8p+dPdUd/fkMmKZgZp8kT+0FVZLDLkCrT85oB6EeV+qZ2Q3ARn0ESPTa1/eILPl7crLE2Uw+zqNNHQvrGkLVWtMSt7AbrKgdB5MQFhT3PZ4umvC7cRsd67+pdlz6ZifU7bxWNdzO0YVw0z9Uchubk5lZT/aZH/IJAxcLkwGSEpaz6zJ4GLr19ped8TYikAH4AGP4/QypDnWJ+n6rPhyCFJpEx8QYaRZ8cf05RM/LZ0pM2UYu5spYuJn54FYchKz58IxvA+3453SPsqZAO5wUGjdqne17+mXZavbvrJpolG8d+VeOym0y8wqPFqPDp+6JSib61obWzK/TFdRmv6W38T7TNjjALHtf2LPNt+MtdYRx+jrYJqh1BZquSnVy30ynuRUitDBk0IGNvXmyln9zzg3UckS60dYSAjT/SU5rCtFcn6FUfgjwPLoCy43L5sXRCEjOB4IBp4FvwaKjWieDmqedEBfZAm0fMVF9m8e1o60rCLwyxqsqolkoBXbSz+od6v3HrYprVR2hNeAKEVgUvQXF9OkuC/zhDahfGjjTNWRI6LGS+y5PwE5lcx7XynxG9DrxFTtxri+Re9gN4PZrNWy8tO15HvFfuEtBpFmbIBEH/JkPF8X2OgpZkgGaLS8hgybHZJFZhMLmOGqDsLr6qbsIsuT9gHP7zSQdWCapUhGgINbC4H9Zf2trc/c/qHpIiEJIh0AZti0l5i/Kq97fEH4Uz837k7uN8HjCCGLmClrdEENf9TR0L29YIFChobx5znHlnxh2qP1bwk7HnIckZwF0dHJCHWuiKkuRmrRYn1/siJ2krWsoVw==';
  const _INTEGRITY_HASH = '605fc31297bda355346595a0adb698ff0500638e9301eac2ecc023b0ed7f3c05';
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
