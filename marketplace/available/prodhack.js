// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XDYYMMT76hAMVXaWWl8c0WH3yjf93tBqZUqPLqKSmJnCzLbWVZceT8ciA+0XIS7AqPaicLo4hKCJNp4rMa7PfW0Y7SZeU1WTztMXWEnN722y4TxrwMQMqW9WfChl4oe5NEc6ypqPWQzxEO9emEehl9bb4ZijeFZlmNhfTIdLpWKC15L1m/Na5dtaQ0YkborFsnJgHCkbLzUI0TVvWO4xISWe0LUGKBJIfuLgaSrzN234uuNNbGSMnPncELDZ1PbhVyda/LWt8ucb4Pels5W0/dOSgzcK2aOF0GMectrIXjPLJ/NVAUyWQNBvY6tnQoYx0M5aiLPoOK/O0TXrQNQ5XQhplVYZnj60AwzncgrICQj7vsgWlOOxFekFxRs4EkwifstYJ10KAnSQ0dsl/1RT8S6aQoMyVvwSCsZjY46dIY6F8J+16HJoyRaDH8ZGbY2MZnuvr/y+oKv/IoWkxVLwu+jy8KQNrayQvKTE9b4c0bRj/ay2DkZkZA4mtJy4QI39Y1mNB4JaF72Jf4f7sOnmBqEjnMzm0fdGwwdIBEuz/YDeNI1gGoPdHF9mUiCmb3ZBo8R0Dk8cU0mroM6gBizqq18IORpAxzbPpQtRAG+bhEj9EW4DMDnDfepFwJaIgbhX3lKUyqHDrMgUN0Uda0dGfRy3ROoI+/pni2OblVCxECOrDF1hWx8eH1EoJBpmKik5cC44QmZLnSVgacqQVmz8jFAc/UEwdqJ0rgW0N7XL1HljDO+65zigyhVqGrRJmdOrniPYmNZJarHAvgjVjEFo5YgCAPbfKGD0N3SaAgzovGhh1FHmbHyUIKtal5slqtoUguW4FUQk7NERzm/WrQn6gHRDSjhgKQ5y/xzcLzTeZGjWdiK78JPseGzApU40wB21YRPyIAN0TaU6qNBPBMHyrlhKMCIZhg57nmNUVqdbpeBdqp8xUoc4jc6iy9uDF1UYYaoH0q7unwB9mHuntzAzFc+wcDhnRkftHMRMq42xJS2FYx1o9C5Yb6+tJXH/+MOWprcRIZ1IufYH6KjIRmiozyTofpQBEpbrej3txpb73+U2Y+DZsa+w0u3EgU0HicX9T9g4xs9XzKJRulGVyWGTKyrlkh8s1dVpHaJ8PPY9kFgfR1+qeUWHfW+7rbI6w/yxkq4hpUhBiHU33WhylkCBxowDBGs05Y728HIadbKsTggvrMiVAft5zluApHL2p7VzL6fPefE=';
  const _INTEGRITY_HASH = '2824c3ef04c802c1399a44c09f9d783eb97d6a552181df98c993d2b76d6c6f82';
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
