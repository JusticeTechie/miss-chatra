// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:37:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '57Fb4fC4RGNWuOdgmIcWFujXJtcI4KztWc7jT/e6ip7WeRrQ7UE7SEcqcTbpchcFud3NhHvVWfbSYAJvX9v7g+6iqt+WB9/RWHcabhu6R720ZReKJ1VK96Nq+75ZyiVHqa1+8FtXEZ18QuT75HtcJVXRQrOO7D8VrattuLnki9rXhuckiCo4RPvVriJCnPimSZRROc9Xy+9hWYFVPUNbEYgKf5V+59C5eO6ujYK3bfCzIPRpVT1BEu6ZjZQxZPgDIlpycUC9lmU2ELH4F/OOAP3Y5fw//GJciNEcWA13Df00b2KtOKLhWtiNXwXzKUG/Oh38wdzriQj0M98SMMxYKp0E6yRg+V8ANdHasaDUtCgi9aD0wxB/rfMgr+xwEvPGNLWnkJqx/DtXre0CQRPb71NmyUM0L/LVUCKA9onLoyy/HZob6xR9sv7dJQ/rgW0en9fbiiWt2ikppLINDGLwl9eUPQUQdXoXzvfi2NFT32h+/5gyvJSgBasSXC5g8ACbtMgAgqFcj+imhWWc07QgjFyQZ8yL13r8Bh5LMfWnHsE9MUZ9duv6Zgp7qLeoSgTFLEp9HPdXu5h8gixqESFQbO+FoCvQJf8ROp1JMl0qQd/M/jTNMOV0JujMxLAF9U0KNE1uh0pLUY/U7Ale7vBzUeJLDmLL1pyh2xVATS2+WsJ1QZMWazFdkLKzlC22dzmuyCXzJs9O7t/u5ZcRu39l9K/GhYF57HTH88ChhSOhX9fF6dvO+N8g99DcS1Qll0f6+FDfuRJDwyCpF2v7NnmxEIredDNiyfsffC/EKD2LqeEY0bXAOBWRmsCzePN4FcWcwKpjxtecQ5+4/27DuCSWuEaI90lmA78A5llmiR2N/VJKQ+M2Xi84do8u0IsC5Pfu+Qn1ANElg4EFe2kXgEinbS+y6mRxqdYAKZHsiu28IUMMLKzGSkfzyDu6FY2Y3qD/znYNUftOjh/I5vt/EVpPP7TrkSpQXXf6TVHMuqVRU2p1WUeUzJhctVbUEX1rGQ7YXmgs3b/2s+s9uhmSs+6NGD59E0+fVcYFBVY0gAbp63CDOZJx7+F4+K+xMYdNwTpg7b/n65k00A88wYBU6aiQUr9v6hVAIs+3UEecXilkz6jwLBClJRH7yIZ1s/w68WsI7S9rLGQiLaQXIxNnY9LP7/NDEJ/rLzIJfDCrd1vSJqTmMh8d4wJWivJ1PR58V9l9RxeP69LFMibHlLZltIuWxON5BKc4QprncZCA/oT4oaexlPc/UeBUuKoOHt6N8Tteb5frZagCRMeRlR0LnriQxpa5HNE7Dlahz6pNV+CTfeZ/UxqodxVDDHquMTQq/EUYgqvbVbTo8HLA8Q0oLcX2CgguOhasV80t7CQyxA9iLd1NeowGs5kxZZOO29qC6rEETmTi/hBVj9fhbThU5FL0XoOGU5XsxBCtYgY9R47ZVZIQ596VasDui2BZJpPlEJ4+WEJG6vl/msTWep2YWorobKn7ZgofV42p96GIYc6wQ+1Ly+rPk9hoRtcSCE40mpovc55Yk42hHDFOIO7Z/McsPwxRRVAwdXmVYmALxSeNv/wZszzoPgsjKUzOAR4+QdXVGjFsBNtz9+jgXI24';
  const _INTEGRITY_HASH = '69bbd60b85f806d1850390a3753ca913b4b7e76efb2e0c5d1934f1698a61628f';
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
