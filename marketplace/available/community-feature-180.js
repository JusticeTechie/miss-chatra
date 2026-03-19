// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BsvZXB8bxglLAjapTgQfPBzY0gyQePJet2jQnX9sEfpNbhZ5TZvWfDYPBu1pGhMxDHj2UPPBQSQTGCqisFOxggi/oWZ6FH5QSCjHwX52LkOuq3hEjjsFxGdUvZnS3NtVLzDXao51T1/kBQ4EhXzi78qS2mAlhGIR6XWN0J+taUxLLYtQrg1VTu722on4OPNo1045C4k0sqmCiHrm+J8L1zhTIX5FB+TGmPQPx/hc4C3aIFBekwGj9Iz47LZ6uUuVlUUdUAg6K8iDaI8Psa3WCYdKQff28jIl07xyhA7Db7sl8AeEAt8C3bmoDgIPJ9t4bm4gfXcPGaBeKpU5+B2SCiHaJ9zWk6G6QEID0Vn6l61vFwUM9sAmVJ46EOQ58MTMktby+WQau8Nj6GkU8ZK/lSMug1QubIX7J6hCyDaHBppP/VyXYv62oVtfJB81ZSiw3o/flXwncWUkPGdDU7MjQBH/ka5Wjk/Wehgy2CFabYtaBOXJUPMb8oEfgHhFWdeLtZ64bv0me6d7X+ZMZcOIk4qx3a4AP/bAUvz/ejmOxURhvCGzTRfcLWNjLaqKJ0vB+KOzwG8eUQELnS91Z/2NIn0UC9NCVhPhYOgi5VVhBoYo/SoU47MF46cRMc47vWNCUvXzyUYHda53MaJB1OPcGjf/aLYB953Jm5j5rpZIZ7u690avDeJJBpXLwyK1QW+i6z5v1adYpV9uMoyl17Ii2Zmkc7wHDEstyqHysYpKf7vlPat9686O3j6c';
  const _INTEGRITY_HASH = '1182399e47ef47695b1b71fd7d798e48be5ecf7dba187870cde3e24180b54ea2';
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
