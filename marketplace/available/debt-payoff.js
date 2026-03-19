// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'piwPpI0LuPcRbDVCHiOrjhZKN7MsMFJgPAcg8rG7Yj4Rcqf7KZb321ODhO9rM2EUAHQq68ToLPZttkX6nwMWX8+4yzD3MIY3ThU40bT5vklecEMfQLw9Enaq8SGG3eFTh8MlVp7DYjSe8Skr1YS2441yRtwaUEvkVBIfJY2UB9y87Lg8rrQO6zjbhK3pyzhCGOyKH1pwoVO9QCps3ck1Ipj64OuIL2lQbF1Fpks1RNIi3Jie2sAYmXVJ8Ez/ppkpK4qjmatwNTREM5y8dlzEwQvkzcsj/rAoczP0D9MfLpvyW7NfarSOPC3bJRkifb0N4sLbKoHN9GUC9Y+lL+w/5n38sCZ5gjZPDVOXDJXfZkx7cx9UgByIeTbFTiAcx+XnDdP1MBZK5TW4oPPHE+c6K3kYbqCLE93tXWf2NnipZ0nqi3ldYixAdRtChJnSApsTShceZj2DezJ/B5abEOIbd76Go+YBboEVNL3B8FZQh4AbphO/0cumbWUI/qUgJhNQmr/WJUmZ3dsuMD68mJEjm/Rx86IYKq4v11+k9YkrT2ECTvWl4MoOwWoR+CI8v6rjYfK0ZQczd/9jo45IA2GGOpTIXe9/vwb+jQDoY+4piX7v1q9/NAQ2JQjnUVaAL62nzW0W6Oni7bYad2k2ETVK4Pa3a3CT6AVfRGTmoxJwc/n2X8CzrRss4cy7womyMNCPRHFM3euFJy4ACBUebHYXgGOSPEzZuBEfx/0YH6fy60ELQWDn3cVbXGl6k9AwUxUNfaRxhCJGBUYxJ1hZxOLWoh7jc20Y1j3Gvz5ATYSa10BSW9VS8sO2PUu9eKDbbpVeF4+PTCkGyW9ctvnZpwypCmMb/A0/Fbkr39i9tdP6SHl29IpEX4fGg6/URbKbOTTuhtScJSD/yDSy2qPF87orZWDW29WYErbO0RBduBdGH8xfuhksq+cCD+rcE5UlcBD8hyEbI8J8SHzUtHLVPvn488RJnbw9SnL2nbizlFOalwg2PqjVNh+1UDhTAXQ3LWMP09XhsFSk68hkQsofHFhKSE0Vh+hIHTsrLkezW95/uataAU4766u1Ed/UCk86hSX+1kD/L0UP6fEkbK0hYbo0fa+NN0H/R5kOikSGgVKO7ukTGD18gQj8dl9MXjksiSZtrtndzxC8FYFflGtNRX8e9RugkwF0R/CwgIqQJcVTHNygqRHtwZR5zgc4Lgk5SEuNXP3i83lwhKmPAQ93OQKBI9MsdrsQVL5AbEPdEIcAk91aJpwSIXmExZ5Au1CLWd2PZSi1uSWTdumwThR+qZuwxKj0XmA2lBNG66gzPB6LO7X2awhMjAe+OEMcbXKNgLNysL2HJB21FDwJJRPikxkCafpwlok7Z+4LHbXQnt9DL2wzEbeKPQYwhbdGo8uVY3Le/i31n7szXgCRG2LxNQtUGugf4GJjzUGIr5ArMGjqr1v+1JOs0MEdLH8DMD1Bh9h1BAO7x1gP0b2rFEEX2U52mzWwSL/Uqr6Dn++nJGoIy/a1gk+zy9ZcsQxuJLfiApsxtm+Wc9H7KGOUl2C2WfuxNL5HfGT6u2+W8QM/uhDWgls1fCTJbbfxiIUAu/bJMLQTcUfZ7uRl4R06JfVwowTAyTot';
  const _INTEGRITY_HASH = 'a34563be83a9cd1d736eeb79030d067749bf7e80222a2584741d9bddf1bd60be';
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
