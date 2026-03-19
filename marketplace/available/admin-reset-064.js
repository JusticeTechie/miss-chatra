// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x/qe/bZqKKI6C9E3cVbVAsxEMQ8zCGnpylIjiil3K490RP1xRfjn4QrFC4fDaBXpWSAUS8dk6PJRs2DzNEcrppsPlnH+QqGbG+0ENqd+wmetSGALSufSQqrc5PQ51Oe04a5TlVMARGVcj0PGCfs7N3iTKNO7liqM1SE6Glac/xKmJNIX2i49/JbBqbobz6wwch/c+21TWNY2pR2ajUYrTqcJAdJ2Cka11aErFr3HQI7QXUs5EmjhbIdNuq2SLISPBp08mYzAHQ6oh61O1YeydSrQRwYMzQs+gCKYiOCvKCvby7BBWtiSrHkc5vtjJn5himX6D+mdpe1g2r9ICQ+5VewXGdqVKLB+xmCZ2369ttp58h+YQBLzUL/oQgatZaE91KeQ1MH+TF4hh2RguseNIAKwImETqqpcN4JPJ9d9C9vPUEegN1hmsH9YnIexnCPaCnt+iZT/oTv15bnsIrYt0jWp/NYEKjoVMt+HU+U/IfSkJiQZw1T7Xtb8Qd7Hn3IIZFUftVPfzmHVZJ78Bz+betO3CXFg5BMDL5ixc7JUG5TdHWGqwKEL5uumVcS7x2SEpfk6gCLtvG1uq5g6JHDlg/jUnJ5cYMwz3hEklSUUTK2JuiBkWuxpPlhSlxLLmLNrvolA+4vBmTPiJ0ra2HShVyRwKX6HhRZUwn033qA7DzLN/Db1TrFwlc/jYRveg1WQYjCLLwTJ0ZxOc+KvjL7ATdcLLnhMirUQKmc/U3dEEHfQ6jtp1v/1J1pCp4pYmVdXSXPdF2ESdBRcVz4wAlueHLQKWTZe5+SB7FKLtiEEhybvJtn0lKgeufEld81qXwubaaSbYMO7sdPzKQSfKb2BLPFhBniuS+yyO4cwORBa7NUHprumnmFiYl5N9v8+DCquWa4ZfzcGtzRiyl1Wr34SSfPgbOiO+9kTzJUkHEptXpZwJXDnkote4rL8IuEYCRWGBsWxWOsg9Y4ugiqaRlZZCGNBhXxXQPqQrGD2lO05M6WBN40A6KU=';
  const _INTEGRITY_HASH = '8017ceed9b6c4ab6da1ba68d5ff28b1b9d1c03973d14a1939314de96dafb7ab3';
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
