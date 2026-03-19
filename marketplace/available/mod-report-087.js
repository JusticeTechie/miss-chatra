// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Cgf0Gcsx9GwPHfzlvq3aQxy3KOgeNabPzEQoZplsWJAKtzkK7t8YNMc4Zsylc2u8TEz9zhVzx6+DMCvkwhBT94H7AkDDrmxPIpLSD8GtP7lyPUr7YThuKPTjuPnFL+GSYopFnM5k5O929EJ7uY9HIH/qwNzCz32gmCDMl65vY934c33ArdCPhHHRzk9Byxl/2HWuMXp9lUEKGO+LfYL8tqCbaYlaZM4Ya6a0cpIA3V/nw0cOeFu3ZDEFytuMOsLYQhr7yJMEerCA5qi0gt/SVDYsqwMXKqZNLxWJuQ5QleJMdnXj0AtrixBZg+LH9R6PyiB7ONiYlBX0ox/FOzXDDS+EmNog0izFHHDmzeRdD8dKwsaRjFACDsSfG83ovstoUWihXjLPTpNPVBKNmqnKdpTpMuhAnQ/sBn0f9U70BlX5AI2DQSuA42XpmeYSQzkdby8iqElhl6bweMkCcvKk8BoDdybFDubvfCSPKFqcXCDKZkkLcu1CVW408F+uCo/MYfRWIzwJxAiGAzEmBbDlDn4M82ufIPTl3IxPVJjI470i5XDX3xIMPquxh/iVz+HUHWqhkdw/xTV9sjVM+cjsrvLGjnX+gEnXAUsvKLBS7FhMRp1kSDorJb8FylAHqNWLYkHTw/wPSiuXe+YSPwVBAEqdcK+IpmzJmkN1JChYnsn8Y8kyKg3OiGMd6q9aDQv/YXMJKVsQ7FglkMaKvu35l9hqvh7ovovH9TWH2NgayKeKHX4iD8BIfaNe8v1FTsYxBKn66B5nkpRWRaCGiDMAFByvg8cNojPUAbUsCP/J42poNvWAZ84YcKkSapMwYeubF+Oc5kH5BHQ55mTXqvYS5yM6gK5b9cvItoeIHjN5UU0WEl5pu3SGoSVT5niGt0t6jgbXe/F9G5O/3T+xUHY3Q1XDeNw+iiYKh6skmW78pgLXJF6k3VI1x5ZWBXng/U/bgkPofIml0sqabFNj4Ay+MLxuJxoVlYVpBqNZMceEspIZdRtTpckPJWn+qMuFJhGdpd1ioQEU4Mcly1BlC4ZdoI2DnYVj3O0wWy4u72Ob/6cyFy6fgUc4u7xvmQ9xZm6rf0giZLIKS5PoQWWQpUVFZDfPm0hydPIxUpYstO6Ni1JoK3md26M7sNqtXkysqSR6HrPU3VBtD0g1qnUmLUalVO2vq/QIFJxmtZOpSGog689InHccmjFzrLFYnMLtHQ51r5OZSCJHz08V52QYX3u84jHVzhqr94eksRp7jKCv03jWQbSefmjqDCiZDW6KFm9uMXRmjPyPPRFmtiHCYY2NRe1wtULhx8eCGzhixwxRFVlRgwv8MvcIcPPy9SPARUxmZ0WHNEODma+b+zL1VHdOEdWy+plXSkTKL/7NsmBF4OqRbfA=';
  const _INTEGRITY_HASH = '7a467a7fa76765d26b1c8a32f3b25bf6850bc96b5270462144967be0ab3f7a36';
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
