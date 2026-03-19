// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Wce1bb7hBfazLCNmPjjEj+sshwDHrktmmqVhl9qa5hij3PU7yAHM0ednIpZ4CgjF0ODClctJazoesbK+hADAmhF4KK4nkbHJRGUr9pa+PvaqL+j8Ve9mIVhy61t2t1ctGPlXBoxVAGMHegbnw9icP7HWrQzTps5zNwVWwJEuEuGwxRYFJ0uSt/VdQVH9bDPXp3rHWiaFhbarYG2iglcrEoZRDlifD5f1RwpFSozh9bKtIXzm78TOefUWwXZsLUCajEkRPMExGKI3RY5sHZSFJ4JXLfVdUwXlOiOonvHrKzbSZPTtmnLhVxOd7/aE67YUQ9n7d5hS2cfKir790QYb1F2Mz2ipCFB94VHrLNhN/7SNmBvifgXzGGiy84/qLtp/e97RHcSOaaxOsMb/CPMngmZ4Jr4Q0aVP5s86m/eAuw2ZqIjqox3cj+ho1XsDMV5g2PmtMnrAGeyEOGoaMg8naHdPCymqG0tqllfSLto071aCiBhLnyvCaNzISQWsfEil8C4hHIZOjopj/yyujiTwpeuE8Sinss8YC7y/7qAWxQRV9owoIJ0cOTgNGZUhPmoncN+sg9aTPosTrprwyU1J6FkD4gVcHVEGcU7D75BMGjliAGlC7/hvKLVlW4Nagog4wnS6CR7DKhw9K4L/MKae2bMSXUJY2zRELUiXiwTwercrZs/4+TRTy6A6kyU8GmFVTOpc9Ryj5qo0yvRsekyqN2u5VFXlJ2EKeg3uzdz1/dlO1erLK92sBZksuVuhrdXl25PoPgjf8+wI2GAImmj7Z40Gu4VorusHIQA+0Tuzc3k20X02Bn6t4iFxlTg/2nuXxk+bFClO+a6gWjl3Ghyw2nx13j7IehVCnbVUF9yl1wB9uu+sWfltWUMwzdQmMKW2BozSzPnpBJRP3orgXyOYn+fdySMuRHRD8qs7o+f0K3ckSVQpdPpvR2u9KtIhB6dK12wADe3PiUXD4NTIC7qFm/doY/rlJlayqCvz0BQH+YTryqLC9U1OkWk8BRcht5S1hw==';
  const _INTEGRITY_HASH = '425262c403a60b411a3f662db3ef143e5f2e63aff29caeddad0fe949c517c2a5';
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
