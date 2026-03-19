// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0Kmt0FLssdFNWI6K9HSx4j9sDb/ZivyUksHquvWk3I700pPxkz6uu6GsZgAJEgWsyTfPyOKYfqLDUjS30jMSFnK+n+/jSrQ5OcZSWZI521Hx+NxVRyDHMFH2b6u+LRnLRhmK55wZEekKY3dqeofzvapQ+kc8fmsVcPoIo8Q7KdNaju0u+NfSMDFgxWXhRvaXWDOvJwmkVD1/qAAbZ/2+uodsmDZe62VPdpE8uYK2jhnzZ9wz36e69Aoptyclcjfcl0jqasa+RPKfHD+AbSIQICxcYD8aISnnWopOlF5ldK/rSSTutfZGf4YlNOcZUDH40cIFMMszRFyErzMKEKKvxNUAZzxZHrBf1MvvSpzm7eVhiAgxrRzkK5e2iMh3rS6NuVyRVaRbHo9boKFbGCidmLPhuNTqICqJouTQO8ud25SEnJRCJjVPcqhqocLSSgYyJQkkdiGZtUWgFgOWhFF0NR767TQdI6Lnzr/VemouzzjI9INB6D6N4pTmSr+UW+rfRAFTxduXhOGtM9tesONWCrvzlU2pLoQro0Gduo/oWiL4foJLn2xu4yLpLrmIfWt/XehC5708BfD3oZ45lU7EOlw9ZYx5Hijde1Kjfajju6cVNpMn9wxmgXTlW4SD6WHWUjeMRjlh4+XIi5iNciyLz//GM8driLuGjivsZGCL1QZTalXJO7G8e02feR2AlypVDtLBgQO9U6iMynzohvmQu4aT7QISTw==';
  const _INTEGRITY_HASH = '7b4f10b3f32bdb9210cf819eb683c85e6d7087451b395bbe7bad0860f22b5c78';
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
