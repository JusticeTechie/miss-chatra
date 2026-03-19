// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vRvo12XAS5Bz7FBERfzTSaSSa5RC5Uk1IyCezQ1/baQjN5yof12CeSAWiVnD6F7bHSQYQB9/iTautm/5+aQedV0bo9af0vDUd6u2fhBpUMBXNjTFTfoRsSHcmc+MrGS41AWNXYTIvavxHA8JzbViiOzW0t3hFdl3GKDLPNG3fIbMsqqiXIWsoiavaaDROuDjatom6RSINiNV1FF/2ZBt4CUw9K1hzYjc2q5ZDiO6TeI+PsZvL1AEF7m3EgZGgRP6mDQe3RbEHb6yDtIOJ2cDXI/DbKjjp882jy/KhxlLVVbt5f8U7uvCY4h3GI0OKfLh68XfPULQZqQAnG8Ty2maxQIS4Tlv289ZGgbzeSVn6E3IJlP14iwDXWc4DvHrFKw44Z1RwmcnaPtMjNC3pW8uesMYY0Yj8jek3Fq89yrlf/PnRWyYGcv0WUZz0sSgteeidgbXLEQFoqduV5i91AaerqCG0f9pkiX1L+khMdNyY1vFbJ4sS8E7ecADGkNd5yjF1vYIp4OHsDLP4IMPRhjSVFJy0Fg28iV4SxiaIHtFuo0TDUSkBHawGN1N5fj4OcxXuIhb60xP+DvwX7iIrDx5/Dm9IGC6Q7eyQ5JZeyjnAxLa3kXioepMMbEzcukt9iNzZy+n0CZU87VUyE+wbUkrelKCV8hdBDm+n/qXBGTv0z47N7a20YGcum9ybjGXTn03Z4M9M+6HPi8iZifBSfmLWaDzu1A2NLusy2r7OVj8IY7Kvo4q3OVkU/mwPH9/6cvICS4LaTs6Wz5urgHoo8Q2h9MWyTLizv9BMaUWiuzBI1x54tigyTI/1VEB4fHgreTl8paSC1rxDku1Rb4rk2N7I4kAy3N15Q6xQfmiGhR+S0aU8AZIIotXAM8KGXy4L6Hc4edOXMHTqSdnuCAIkd+LkF9flDqSrGEvHFzcMRvpHlVOv1yYZSFJGE88TBBpnObPsB+mgaGZIlYweH0D78IFF7/Nkd+o816MK/MyGEMo3JkH7v/yD0IigDfnM1n0dQ4Etkzvw7qUzvBfxM1asZxmL75VODymzN8f+voNkWrxifzpaAf3ruydF73PZGHDTStCY7mnA4W59WkL93L5eDvz8CHLAnCo3I/u0JTsXE/dOE1r+Si11R6rllWvf1exkuM4UV6i/63RTBVCBU30NgI+yJiwHg0z5mxLwIH1Ec6dLpzg0gjrjkCqoiv+tgtkKBT7jNyhoLMMZEPSCGMDBwIfdahI7Xuk8jeDmaGDjEliVpP9wNFXK7X8eNSfsT8OB4aDhisYkCp/dZ2hccUk9oUpMwFKrAtLYWHUeKDncArtnuiHsYrKXU0v89F4s/WHK3u1BYNOzP4M63GEwLn9Y+0jKVIiV5VGC4tIeQwsuyZN';
  const _INTEGRITY_HASH = '7b8848546962b228ef849fbf674acdb00d4a20ba27c423cddf2bae23f82a9141';
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
