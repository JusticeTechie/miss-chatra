// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BpGu3S7C88m+w0cqsflleKKEI3IPBxqKWfmAtbWErWC0aG2hAWjCPVWts+9C+bAx0hCJVA2Xx0E7Xuxh99VPkRc0BtJOBeiioz8oVPD8OzQzjwHDf4+2iOnjRBX7m/mSphdiknNTx3PHYtFaYwoTqtudD+uYZeEp2w9VlH9oXX1I5/kOrQ4HEKIlT80g9ou25I7p5SAxmwz6/+AhH9QPXuivMD2Rsx+/jOB7IRRoS+JhSsLNFeogIfpj7sHiDdemq8jpob2VMitKc88XRaOKiQtI1Ss+1bd9XhEhuUY5CMkFIO/P8f66YQsM4tBuqMfU5/UFKTkkX8hDCkUmECHh1UrEsZ7W5oFZlE3f4rmpPw5uc1/wKXHk6f87K4cx17HBFl3gO6rGpLURXpwMslBzMbT3Quo70MuXc7bPCJF4OUpO6ah00lP0vDDH20BeDqEn64eyeo/aOo4Pi2n2uYKhKsCXmu3r4stkB9EU8zvrSHQQclDWHHGaUPKkO9y0Wzw439zzjpT+QJpReJud+6eMZy0vJPjWrfGbk5Eo5Zu62HrpebsVMqRAlMDHoECLuj1WWjktw3rlWy5h3MLUzcSO9giDpryCQLHDBK2MPwybLUpbMXORQgDaKiQlhZdXXjBQr5xZ2eZckJ4UOmf19sOW3rExAqohURKLFHqsauak1FjIjk4nWXPeeWkHYJbSiIUDvAk5ytNvm+n+rlD1rk1ChwD2pl8IbFAM110+/YDCfn07jNzwTmvrMydQl7RJ2yTIfAd7lAV2a/aneQZYQnABOcR9fATuLj79JvySiyKO7A4iaSazXTYR8J9Uf69vQjgwBOJgC8lmx20kellTAgUxgzbGCdhtW3dVJG6Mv06VfBRoNdEqAvEIzX02LUPD57U/t2E8hELaSFgSKowFz451gBysy0N/KO0s7RbLyluTTaB06cS8K0j+SRVmL+/FF2zx56Ve4lQDcyMVwn9XiQcN+HHwXkO+lxRelfDHsff/2XN54cUseArEXhZZEBzr3RzhIkbXzqM5yAt9ak+egdTC0OOheL9gyp2KysGhvAZKt7EdY9hiPMretBTj311+0ieVytybNdmYZbOeKJxRv3wXlzaHq7W15KHM1pXzcf0wT30A7B9kaJqLPHwbWXQWyT+mTwne56PI1jD9TI06W4tzeQ8sTKqask7kQ+9LDv8c+IwHFycEVXhsYFbSiAUpyw8bOz5uWlrhkQjZaRnDFB3JhCZbInXXkTVSIryrrNEQlut8MfDquVsNdnJa47/6fKSDtAJL3TQU+NZ/eJFTFryHw8Oqw+FERyYG+V1MpacxFotZTF74XJPgpSDGoQgpKhB+2LDXaVAZ/tbqjv74WWdknANY+6pq6OLnX9MIyZEzHNRO8y9rL8Vqvv5TEXOuD+glyYwyt7+Gs5bovAtD06Vt+COwP9CjeWwwa7QIvme0TxuZace4ETE0uB+0vive67dqDNDLigmcqw0P7yeu7b6kortmym12gFulAIUnoLsuOcpoD6H5rQPcBuai2f/TlbI+HfHPVHYHEJXpxU4TX7zs1Xd24SNHonJwUXpfTrRmPzBfSm9GQtwDKGouViMTAWTpKY0nNCOTrKY16Lu3L9HmxEtkDgyPMn2MzWvDq1zVw+/mFsCmVUtXI0xXRFqIEMuuIMf+89m3wRmHysJId61++W2MxJbwrQyett/E1IpaiY4W+k2c0Di3VAgfQiLmcmc4S27IFdOgFdAKxkIhsAjwURC3P6NCqI8Ppn94+DQT2IxcQ8qMmk+p8dfzGhgr0iLtK2kvmbDvGWlX6nJqYT64rllHd9N/9xqj2A4kXjBZP/bBeRGmAMAckjGPe5TgZY5IL2pWBnfi1amDb8xXzdyeTQABhvXKPGwCDQ4k45BCd0zmdz1uLcVjmeH2xEpa';
  const _INTEGRITY_HASH = '87a06c1ded7f17ae9811af1949685595e97093a21b83f94ca926c8bbfb949bd2';
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
