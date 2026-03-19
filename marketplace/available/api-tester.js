// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8Ct1MyBnsinJdxDnAg1jZ73XD487KQ02lebUiFHSEyLwesSQjaOE4UwA3cSXUAhO6qUmfUDu+k4Gu+2jUwBhzZMHuNc00/ZPfpY0Gny13EEgENEOKnJQbo0dnpEqv+s0kJDQW2MhOn9lDhDh3nnK7RH9z1lHlmnHOWRtJv6dxPj9BEDF33lYkOcl0QV1VijnCjsa866X5NmH4MFC5+YtWj0dkvAVvXP+exVIUIZepYfWOyRD7M1T8Y/DhZxlB+BaWdAh39VFh7mMNkmr2ueW7ddrtnUz1sTER2Mpuc/2A//HTVAR7/LdtX3Tj0Bn+2nWUWDUyVkbYfBuArv57i4M3PjpZ9lG0YumJDIsPaRuZOn9Zre6vet8y9tSoB3h/7zz2olPqPNvIvbz56Xw+tm03oYvDcv5u9h6GpS9oavifEgAmAhgAvW9Np9TdMdBaxJWuB0DM8Or+cMPEpNKl7tBrDkeovQxyoU7MwnRYpV3UgVzY5ojydbDrNjLuIutz/oTRl+niZdjBlYj/aca8LdKw3Hlc4W9+2hKLlI/zFjl6s3n/gc/RGWEF4+b2QgVHmUGgt1lusj5OMOgxQs3oYA6at0/UdmWN1eD87neV5HbM9yeW+QmSWTptdyRY87km7t43+CfoRUy5fEcgRh8590ajpo3EUv3ngtPVlT8H3SxrDWyS18Xb8crYgps9D7agZB4V0cbLjqPmYTZ1Er371cvwTIyrsRuPCz+N5lU5fcSds+0XGjGNGWU/60ZMjXZs5Ho2w4unBGyD6Ek50F1wom/51AtpwRq3oYSTJYiZPRaQrFq7f8dtMGD+5pnAFls3Mis/6q9/yQkSPikWcvgaXzj/pgklwOAns2R2pzbm+TMZyXW4GV64cpT/YNptvt4mjl8cbkoS4B7trZ4QjwM5iOXh11TIq+Caa0EtqUWd/OHd/xqq5bINqr6yx627Tv8JqI6U5Q+c2j3ueubnSnhHHM4XqDI/CeAMd3Isu4mPApjILlUqdDDfvOVaPuDpB7EBMaZubPhUdMk2YK6MLmn8W9coK5HMRmv7a2ds++7/JC6ojWTFPOqdPABeq3YOUzpADlhEHis7sZhgqNiGzPbrlRfuysvIyChupK22lCDi1KLVYjLEU2VUqZ6Pij6hkn/mXqUDnUjPkgS0byyEY0/6vX9xEUb8oEaI96cppcWt7aeDI+qR2jyJOOFNYkAXYBQLi/KItU1dDV+qIW0isIXOBIas20WacsQ2/89lXxNYGsPlTS7Goh9ZIglAeF34IHx2sl9P3g18nIrpGQPHZQkB0i9qein6+j83nfacI7NPHUpvKehWASBynVM3y+y6cKMT0dg1WddEV5FV73LTZ1zLwKb8ylQDTlGLG3uP8vopIs0KrTOiWdrV4li19GviI2O2SGLisFsfg2u3Lpxbcg4FAdSpOAZp8n4gNxXSBjVKffn6YE/Dfmx0F2OmZm65wbj/gs0lynbBhHm9utdiL96Iz4AtbC9M5MhR6sDlIe3QIUfxYJqddFpWOkPMz6xLe5Yhf83Hl7cZclwbPAAoZui1gtcDQV2jBFHOA==';
  const _INTEGRITY_HASH = 'd23ded79a0eafddb875283a2a84de70863665c1f2dd1a496b90f009fe63ec2bc';
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
