// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5RqMqFC0rGzwm2K9+iH/YYxVueCLMIhmlOxw1P+7t/tWj350AmZ+zzAnPSwFH0RnUIIdtS4n2Nrt9BWv1jYC8Y1uogM+/18vmjdur+HrBw+iSdFAnmwKmSAncxGIqtOGN3zMtpVX7VE607ClJ7rc456EX5PeNpNxL7Iv0mW22j0I9e/r8xI/FQrpFSqRNKZu4a/2pypyd2erAR6NWgR5mQj+iUillGflgyY4jVeP5+2RpI9b+sbWgMNabFJnv4r5gdWCsnP+yK7aR51v9e2cVEUaKqms8aySAm6hfGj1TNcf/2o3/j0DVH7VWLbWwYZc49WyV31pC2RestkLGhnMBdzKaCJ4vtIUBNVkVNR+d5Wq+7t7c3Y3kprFf5ffXREpDUo2cftJXDUSCCWJt2Y0gjksFUB2DZaeltXjNBR8nLIlvh+QlcAlbHUVMFJRSWlIbDOmMAhj96Y4HEI24dorkqVr4nGquZjCziEWSAwwHrnkFOBLHncacgOmlhNDdAkB6vYaEvFL2Sck/fZQDBfp6FveS9A+4uOzl10BR0dEu3zcDAtPovzdni/KW252jd9sb+XCmWdGAr2DG6VXwm3Cd1segsfWbEysFBLD4X0NQkDFSadJIfxNtoHWJaFQJFRCbDuzyd4ezCvqGNFZKMMhF7KIwEDyv2K7Xa33lItdJd48YG5rZCxjvwQqCwb+15mWGAcQ1x3Bbh3m4DqmztEHcOA7UjOnQ9eHuCXQ4UtmbxBTEZUF/PS81HlbFZE/Paj0ypzZSjPSM8zxnia0MzR7P9yL4huYMExwHo9eMIz8ZH+tXSNJ3MauH0IdqJd+xqnmUjg967H4v0rTBg8gTAwa2CHaEUy96bt9WUMUrdQrSI2fJpTMDBFurjpavNUugd5Xrt4FzrGj4nKv/JKXKROAtap6bfOpUtjIlpxtCF8AKDP2badxLD7HZZoWryX9qEcMB73RNsWE+Xl94ByM0/fCQvT6m3RMrhwlomZXngtS6X/+HxCsBkCO1at8rWC8goq1XD1SetPNcl1e3G5S3ItLzH1SdWMSBnNOk+1qQ16uZYw9hrNsLLD7CynLyX3e/oL7ek4JdAy18FSpdgopxdKEGjvyLr/3zBPx744jLA85wYv/o2sX55kTAJ5l5Fz5V/ErEQfU6MFGcR8qOIwKNGcNvXdenx8I9tRmQ20cT/P8Q6iN7GI42xZHsGAJie1krBy4DcN104A+3anMN6vZ9Pti4bMXakqBcCeN4gfWlbCTxB/zwWrCILlMJNj+bJvBDRBS18bLkyAqwp3xhH3oYVY0Or+O7n+de05s3WVWUs4CFd6EJQ2H2hpm15+MEuUuo7qQHYdFEjneS4C70jRkFIPNlhyIBbVmmhZ6Si1qTeqxSgy37AjyDS2jl6UsasZczpen3hNV4na/GRR9qt2s9lwrDaluzrUbUXX6EcNdNh5gHBQs9hut/ehh5Qq2NhupFv2xMoFYCpuWUrunRW+KYSo5L7Dg91jqJXoSiS9ETKzdEOtb3MkUE4DziShrBFpeTW/P0nMqxhStLdqqd8NQvB7w+yqp4D8yQTBVZInq2STEXX9jUU4sflAxX3UAGAF3RFGs/aS7TdULzlVKkJ0Q2dTOzeMudvOS/DeWKGQd75jel5NfBP/fv9uHGV/YHvMNi4kwE3D/5/LIIviwixdxfEfW5v3i/NdlyNK3WT38MkUrqBQAtw==';
  const _INTEGRITY_HASH = 'cad5249800b9b1e6846989f4fb7af4217515672c0796aa97c3dfb7ef0c41372e';
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
