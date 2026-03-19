// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FJFE6edpkfIAJq5oBiVPwLqgOZmn3LamHuYzHDFViPu4dk3qqLqWbgHTvzZKK07+CSXFe8cFTwVcGMw6WuTctn4g7btVdUZcP4+XdQ3kbmOac7ygrJ0lqkZ8KF/ESbCxcXWAm3QVQSU6VZ3q2wG1TjJeOF4VN8fTSfwdBrgEEWrlCBdgaR3o/I2AOkdPpLmiSU4rlYbp9JA/ZcdDRgPJ72nNt8ufqi2rRf+MjdKFe7r9rBcTUXaePC08A4xcQrxMAmoKqjeupOeAAVYhnkG8pglGCVuug9XrR261UBp5GUrih61v8l0wti4h9WKbJtwqEbkDkKr9ampsjC8gtXC6eeXBeRahslchBirdhrvMtwGdpjRNSSAlSnn2CXRC5L5iMy2Ryo0Vez5E/ihNHWIQT7DoLGzSioLJy4F2kmW7u6tboON/IGl0FtXBM/oczYj1rJQLQcm79xnKSZy9W/8zP2FNDi7JxuBFu5BP3bCCb8kYiJxgdEq8F2DPVS45l7/HiL4x3CD0WKz9OWMWJKmuxbsd4TQJY0swYFnu4eD8sIYgTO3svvZttng0n9SAj8a98ciNG5eeXumgGAnZ1xh+fgAAqn4PKwVnKeopYuE/VnnPsTN26XMDJg7YHC636z2QEOswKcsYtOb7HHYtn1HhK8vncwSyOLfBL5EWX+6NMX3kBiaS6ojz3/LRmWB63Yhh+Mwpp/BYeqYApCbr2VkGJwMNCutJoQqkIK2dano7g5l2hfYx+MhCbsX+doAJbMLGM9b5++nIWbrUwDsme4OwFWGS8naf/PzjziDYXmP8xApycILjWugp0iEfeAMQUKmtJ8f3uixS3pZHubMoCVjSVF4i9eRrcqDTPO6tO5jZcpGtpEvk3v68RhHi/T/Ie35I6f6D98QTYQzY8XDWu0h42bJ7fiRJ8g2X81M/KpTgtk6y962zDeUV3ewsjHU5eI6Re06ydN7Wz04ZFlG/ckQR88cIZsl8MQMmY7nNKGmyJR3KB0wLIKQm0FdfkpWtQvEnLszvStASe6g=';
  const _INTEGRITY_HASH = '00725c08b74b1699a90ab57a3207ac06a1bb67c6b58b94fc2e51e420c738d700';
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
