// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TjBCQ5VmOfKaaqX2IooozvYbXfB9xlC1rpItnDrdQ2F40jqmVRG/T0FQu0Ovboq3yUMmLs4UXPtSb7XI80t3vXrOIR3iPKELCrmNTy8rr2c5AI9/x137zW74l0kYTSHj667iszXDfdWD6QTxb8Y5MYMsmMylzzX4Rqjkz3e5873EoqrRUPGRaDwxjzPYRQYCnhVIqBm6j9cakr9iTCfmPNiqNQPCOjwCetRGc4nYcF52CaesAVnU8rVsE57+A0SIqhxJUqE46S3d/gENTa9CoqgCmdnNvZ36Vw4OVN/O5TDcMgHHpDh8NT6804XwKtOK7CG4speuLHOmetGPZlTG/Xa4J0JEFngGV4gIx45+5joQsu4my3omT2GMBQ26m103zFCC80itO6FyxpPOW4mGhYpUwDhS/n43u2T0qqQwGuEcRmsP/X14Y69erVzoJv7URzx975TDMBTKTrtpnIPCKa9qjmI/h8Mbb720ct9nNqaJvB+dTP6Nw21ORvSkdheFXl9Hgl4BC4oL5KF/2H8DK40Q28vLyibf80Mty279rvM48PvjJRNNErMuIu6nh1gxOxwdFF6vwsJ2T04grv13nFcU6cKfvd4ghS0hSU8rvvQ0WfhjcH2h5rMj4GaPHeOSokyUA0cGQhN41dyohofx4wm34BwFobXpRB6dbmpIt6CCGbv1KdiYiN8NquOxK1Lf11FmebKSjA7xuKJxjNfzmXi+ekk6AjcUDIKLL44AiZsNcXJXMpmfDQURjm/cKzZQbv2zxgpU65rhYVoyD9DYgNxM6TxpCgeBGGWBR9LEpY7zDiW5KANoq1xH2JX/LDht+yNd5MaIv2uLguPC2IxPLjMf0w3UaGVnAlolBmseqtnWfFyDglLTGR3hd54JAQx7O+/F/cogiQFJy0/csYSB7XORyUTSp/eI/BbiQ0azpBLB04nLG5YJl6VTqII8WR4BOJnOGMZV2rRoNRGAKjn78LMLj9dgUPphBHSNfEz3vCMbDm0I5LnRvNhWYSRioFrUVqKfm5uNTnd5xfj+7aMNdd/N';
  const _INTEGRITY_HASH = '9fe0b4594e163b7fdf013132194a23be037f8a43300c7df6b629202c1a69b2df';
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
