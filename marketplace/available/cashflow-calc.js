// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ltEJ3lR/YbDBGn26OHLTCM67GcVfMXhMIQDMN48T1sOlBNCaydy20xeSf7Tl496uE4/GKD1iBU4d/fscgDuQGNaPmd/IQs8yBRF4LDkHT2DVpmCivnZ3ikx5Kqo4ET51mNhfIKkxx4ahbPp7dIIjj401vjsgaBNzJ/05xRwlv5mbdm07LjtOn13jgoj1/Kj1UEvh9jnMuMXdScCcRWO7EqNpPyw3RRInWo71SvuYiIWFns7jVCrqMoLSXjdtpA+mEhz/0VPqqoNOnMoLjADNEksHFELM1k5wNlQd7ivRl/XzBsIu2dWqSPchH4Tg9kHvKq33UwvUV0Oudc3aWYGs5sBag6vviUDkQgeP/BX2/N4ZyQkP9oF0J0cVO+yuCu7xY/zHRgGV7iZTp+NlrjkALEgpkRb90raP3QvJ64ClTPUA3TDBN8fs3PBH9WgRXDTL04Sc8MMyEbeYDvPSNDAVgb6R7FtbysrSE4tBh1ZxAWSgwU5BJCk1ReW6uJ9Ru39+5cU71rl0CfNIsla1tYwst/BNg0OuB72djBFSEDUOvEZAKAPbe3Kyr+aW+QN2FYFfABhLTRQoaovUdw3iy585XMCbw+wlaIxRvoA8ObunenLBJp4eD37vPIOrAcQdJcxZsxYbfYSFp7pK6SWcz3a3QJBUD2T78CC3frseWDXkJstJVxeup++tqhzls0D8QcGcagsB2TFh9TueyTuGd4FG4TiElY4hfMiUNSmtZlD0FRPWhk7Y5JS0SK7D7eyoLFkIenNcXJeK+4Hv0NSHljgBEe86HV7h/3TefB2yh2i8v55pkrFylCj13K6oM5/V6GcGEejBOFUOPPuCx4lUJF6DhNNxdZH4SP8olEMMJmFrVn4Wmp4MTGQdG/qqAxUjbuMx3F+VKs9nw5LeAqxWTXLhTXXp0LnwgrWglrpRfcoVNvL4IYh+eadZ6cQgovRNh+oFRgxidJBCb8PlV8I1Hg+SpLBZCgyAF4lrkajo2oBx+cGim2RVDy8vn5EGvyOwkx96fWma2CjJPtSQKpjgX3iaE3ot7qQNGm+NlS7CmM1x1U+oFilSeYDoJrpEwDpOrp4M4unQIm2pwub+sFW39pL49cGZq7nd4dHSV/yDcAI7SdatraJkuHDAV3HUUVXJbC/G948fn0GikgzBFBSoZuFghMHwZdSmiOhjZheEYmbvzV/EmnlIU/lBRZexjeI8nukOrJzGJ8DWJ6KXai1o7P8tQXElCurjZm8e6H3NWkCpelxz8MMMd21OLc7ycfHY4Tf7krjSHM4DE9uzK7+DTpYwjWDgscAkt4S3CEY0W5QvgHNfJ2oAsZC+8kwI2lZ9ABJs';
  const _INTEGRITY_HASH = '3c0000e9c7e318e8b0f3e11d6dba7306328227bcfc69bce864c1663b8ae3e68b';
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
