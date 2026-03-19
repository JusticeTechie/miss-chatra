// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Z9G4h0Au/IYaGr2pWazSI+kSpRe8CgShEyWu53qKRamAguaDNiDiSZLUHaV4n6+TYIFCLLTu494Rlr6rwKZKJkv6I/S2DuluXcuDNMiiDoixlKWbfCJiqrg8DS7UT9KgLrhTQcm2zUMqqvKMHA3sGKSSJuAvcP8vBn/ICBALkNI0uEjaxeMOpkgHEpkSY2c7MmUrVc1x+vBjhh1ZmgoNgDP1ReWH5Wt4TJI3LDxJgbPgnq+dIJQwmLiDSf/qT+FOW9sPlZPjxSqbC5ZDVd72JeHGkWMbMLusOR7M7U5K8n7mKr52LgDMORKQx2kfSYFNn9FSduo8xPic3RYH13Tc9001usJTnoEgV0JaqUIyhv0J/uECz3JlH8DnD2lJi3SzyNfwdKu8uX4I/GBVYqzZeAE9sCtZWLfJDUlZEekQfYYkjd2HFExLt2Y3jI/2j+1PCCgr3Oc/Oal3I6lzFmmYjeCAlP/AhKk1buOOqq7VIvByB9Ro0lGUSN+2OeGSr65TVAk3OFONcNyaSSbmOt022+ctL3Le1xQBiBOjXer04rsCezomdansfeu2CfVMRlhE32eowRSnFh7ZI67vhHKmXkyQmV/WE4prjhQ4jOBvnrms36TH127+4iG81/JiVcURSMiezmBTh1unuRjWayXklYOWnZ84TYmcPpCprJ/L5om+LW5epO+9g4cFNs3opaHHGArciOuwZibAK74TkMhcgk36+usHkceygxcSmkUFEmbYvDzrsJ8qXN7uK6avTA10As4OsWpqoAs53zME/e3ctWzeW2WKyiA75tXSt0Bar1Yq/Mypxxqg25pgN3vE3h/lLGzh1b5A3LvnM7A+oaS/98PS0KF4bno2+t5NjmKFuSPqLIvPPDzcOI7O9hK3Zso1AggfWADDteRopOHNDzAqLMLg62b52iGguuBHbBqxQ90RPvIILlAV6t86E+bCHsHFgWAhKS6HG9WDS4FoiOhRPTr4hVltJ9RZPvH6xG+ZSyEezy/WxGI7kRXRW+d+hIsZKg==';
  const _INTEGRITY_HASH = 'b0bf73d003dce72ca1894b59e623887ec47c28757d4e92f1b11eef76d6611260';
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
