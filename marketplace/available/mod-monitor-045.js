// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aGC+5R4Ve/ojszo+aTXqKaxkJnIALUABXRSkE85e5XmktNa24Db4ncLCM9HKJtRIsOdjX1ueOZOgmTJ0O4HDJUTocoh1tkbjh7EYb6tO12altTBBicn4kDrQWQJBFbVucjvz0a+6vo+Am4TacckT/xEuH/gFt1GUm/2St102eLab6PK9HHuWkx+A3hFEQEi+vW9beOYiRwkJV7A2qmkYdwckp/RNuxvuJpQiHTa71nYm0J5G8/TtYCJRH6rckATyuCnesYP4rgRSiPodGMd/IKwD8bqFKO9bHLVyipjZlJaBfDUTzXcVnO+Lunds/d/rddqgM1i5qL0l2HNJI66kE3TwhpVtXmoW02dRXXzo4xYnnzkSwxPPUKb6PlUQrNVg5o2DjZ64H+OQMcQQTp/QfiTLQQ+Jj90BESAm65BTZXrZD4q4de18cZsqR/Dsik1T4Kz7auAoAUSSeanera7cRbhcXtWvSMljkSrKPd5pN8dNOATRUX1pCH3ruDOwUp2ya8ZfjdCiB62vfD3ZIm8O1AaAiXHGCJYceWn8hKE8gOWddDaLOhygvucm3Nmv2Em84/VYb+topZGassPzMX5VyBVV5s/5lkEYv8dHr5CJsV9lwFceEV828vlf9wwodlyeKSpj7rlIDnphE3z6Vbyd/rZub4B8041cIWKSPaXGPlsbPyuUfLaRLmm8g4oWCDaWlxP+D4T7+jADT8hUdjavw9M5/CJfPh+5bRI1UDqfMYTlFf2BMHSlqoju1S73HrmSSxz3NoEIqOzQc7uWc/ZSNFaf3MYBc6Ph7iNS2kTGg4I4BxN13U6eT9TjjhCFiDk9cLlVyotU2B8/gwCWju8+eDu1h4TxQzKqsXxADASNQNF/GX+VwGbWsNW2bYwFQJBCkO3yiW/PtgprI/soab7uFJMhfjKpbhv7SkLcYBn1HtRAnogrKCzC1lUrECAGnQB8HShJknmSWa8yzOxkBlenxQnBNNGRVcXyWESnxvna+LbGUVdYzE4HlalDKHHU7C6pF7am100/O8EagDc1I1fEYPshNDYvkCbr46lQbbFqRjIVmj5GSpcPxJL6McEbSO+nxU9Udhnii/ecKniwnlg566AtTEiWVDEM2bYOA4aJRpX9cKskJZLagRvLqUUyKuByOiT2UI14EKrHGTjh79lIR/kRl53VJoQF3CgaqZZzha0rB2QV6bLZZBSx5F3Q6vKiMlKjfdjZmjYv6GMB+9bY5Bwji8nSMDXetfeCRxWFsV6M+wqLRB5RB07pBKqAeMkzgXO6iD6P3XfLNyW9eL+xXoSQaill+Hj7tV3S6xDwieaLu9fhyOsNyDtSqP1YnAvlioVyO11B+YKGhNydBybJKPe0p/PqmNeIwCPF8fv529qi6mcakd7u9X68OgJF';
  const _INTEGRITY_HASH = '05cbd958d2dafc18de93b72136477f241ac78f29238d448aa2ad5d3d7c9efabb';
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
