// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8yBOBCqsnBV1rZxu+cb3oNzMl9eSq0jOx8Ij1BmyORm5QXYXCHK6D87oeRDOhMGQiscEjr6sGTaxO59pVGAlmkLfSJXYlD04ehiUaVD+bKX7F/IS8CuLqfbKWDbTp6rLpSpVTcQnn265gOxVSkDRviTGekxYT62UPVDnyHouO+7jmgYfZkNMH1IT2pih/y+lhAwNzOLvL+BJn27BpSK4k8/tezy6fTh5qhLwoxmSIqGLvMY9m9/QA0vqgs/Og5bZja/F2h/sOsFhlXNAR8PUPnpF69NsPAiITNZoF3lFIdvbqkuDLr6yvOWMMVXpG65yIjNn8+PCUsa6i+UZVSViA6Q9VYXctYN/F65dJDUhyOGrcPRdhLS2WS59Zp6vPnCP4+qJSyc5LSY+65HK+oq/fuzXVAelLptCAFXfJVXr6pPvYEfA5Ffiyi4vSKpzkP7yM/95ONJhNBJ5DLCMKKu74v6SbG7aeO33ilREa75uL1RLrpLWscer4Lq6MnGRCMcWpdXK7pRWDy6UW//JPAH+OJDX8Lb/EAMWaJ62QGgmbhA8cNu1QgddujQouQaQNxP6gbjaGTu8cUSQj//Sqsj3pV8MPHwNmzkA7mvzhaBtHJ3LfSKw8JlCcJvPoF9dil/K1jnwNWbTKIlX5FnxjhuXJSEuA4k0QRfoxUnBZO2psbiF20otWmtfSwEaQ+EiCyIHiaqLJlApJfl04wu3zU/DlVk0EIfjgFA199r47cGcEY6NGeDsCclGQAnQQhxNZKXGi6uLZ78/L7Ug35iVrTjkHRwDzB2P+rS2cyYM8coIts1vRLqfotdyNeELqlu3SO7LuQ+k8I/MjS+5KSEjH+yBZ2IdTJ+XSzEbjTKRqIKGejwq41NriqxKZOE0XmtzW/TC4uzhMtEkBPWSUiVHJ9ZcWXFQV4Y13gbGae9zYqEgywp02qPOZlSZbCTFFOP+4GeQrkToQ8bMl4UoM+w9pJof3M5Iuky6vdtX/d74M3SWOtv6UGOybqKsQJgmuYDwKAFiHQ==';
  const _INTEGRITY_HASH = '15780863e7594e04442d48558b22f9e974cf195d8289d23375e61a716bc92e90';
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
