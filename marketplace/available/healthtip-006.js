// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QGLqUj37un/pfc5mSY+hlB1XD9GDxmzgzWAqMr7X4uvGKzhaZrJ9HtcQOJPbH/OKtS871K1UOiTMuMD/rzvvXBqs3jQnEJw00gHasAsXh1TyOBNa09HiJ6zNds4F7eC4ql+jW5SvXAYb1Lcf+bLLOMT4kBtBS06htULujtl8DQASFKGNBoB0kgk0d6MePIeVIzTU6GCR+gZLyobaYVYYSRTN8lhvabJIuEY8Ia4IFqjw+jnVUgP/c7QRENRRh8MoXk4EQUEnwbLPF9DE1zdKOaf1FB6690QxTF+v9pEbU53efUlGad0SWnY/fbLPaPsX87rDWad0UrMLZ743ssL89msB3baDtCVFGQFKqlsUrio7sy+bCIGPEHa2PJdlBVqzF9M7KjhLSUW0+My8nbPl7bMpAWeKTx/YKJtQTL/WHHSXERSAc/nX+kcmhJ9k3dLacFBBSHt/xxmK3cTF/+TJf1fPqnpm9Q48dI1iBqr1Fjrtv90L6NJHwThaUq3p7gm8+I9SwwaUZU+6fwYNzLunHrRORerA2yLmq2xO/DfxRo3I9CuBIYMjbC9PnRzmG7p8LHcf4PztKNIV6sUDf9uKBv3NSmgFhF1QTAmltyxxd5V+IchXMP8oOWY485rzUUupbbTbzHEiW8+TxisZOoCodh3Bvz1F0Phg0RmGtsfiOaDFJbyX957bB8ACk+J0sudOUgDMxN46IPd/9VSsnHSGel3TlUeWNIhkRdZM8XC+wHPp1Au/jJbcQjnwfP2/MraZb6BASd79KHS56KREzLFWAE5MsjsqL3LuboAhOlfnwN01Amol3OL8k0ofDNPq4WRxGajKMVOArKPuuyGApj4+SOOkB5xsu/pCICsq2pZXtwK/ZnzseISmLL05ICDwlUzeSuUUuhy6AkWuu646g1LI7HTv3piANb43ukjK4NXo1qkPRfr3Dw3oUQ==';
  const _INTEGRITY_HASH = '19c6e9858fbc63aacf5d31d3e84135856f7f5ad82f0596c381170bad338067c5';
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
