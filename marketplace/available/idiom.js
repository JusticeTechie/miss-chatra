// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GsJFic9Dkp9jTTH2tbx86+FU7GsE+YChHiKIZcvz5BiY/A33wg0TOpzyHVDD3o0+wFDOh3ypofOf8BQDnoPl4wpkir60o/dPHgMy7PmwllU/kC2Et4Re7JA6JMNFdklXPAXgdfuf4aPX169/dyPoLkgfqceFCMGX0EQ0WnoN3qiG5lKHdbBs4uqxAr2i+tTO65KlX14ngzOBGMdGe81V/tT4BC2pDmnCLXUI27VyWUnMIp9izXWtKXppK/q3FaQBL0Wv79zEtPQeDWjOs1TFc3KCtOhmDvLpTlQk3fqcdFrCcEhfey/5HPl8GGPkolO1v3ge2VJNI1CMqeeHnoYBxdIbJIBNPWa/4ZUGslrK2RZaZpbzUOHMkcw8uQADRFyIALHDqBAgXxk87TPmJ/BQn1RU6HmconooUet37UNfKMA5CHMJzKCUsH1UufIXi5XZS+cOyYy8Y4LR83xtLIB6aw0ZHW+UlLyozaHfOsTNPlJzI/2V+QpzoNtM+KvaN58r/oIQZQv7xUUUaIf9lOh9Br2bprm0fuEazGRrnu92JX31wcVxZR3r04XaSd9wJtS6dSmqrvraJE3h3ATYmW08QCn79FXkk1r7OMO5yRdXqOHTotFma1m09LjlejKS0uRKZ7ZV2sg1JjVE1iz6g4tEqrLPQWOoog7bSnsYa7dDboUm6gPfLn7o1r4Hk5TU3XPWAqit3WfM4CRT1QBgDVGg3V13wq/XqELKTQ14lr+goYQYBpCCKfdrqwTrO259RsSuKXMTcEyAKI3XLvqyx8j5S59qOOWP/JM2TKA3R9/e2jqrptonxqo55VLhI96TBLF00+IDWljI3GJg8QM+zTPJ/ScUaICMHm9lqcSz3WPIs/jCi+TgOcniIU077wqFRtemGsppMfd3Jn759ocK3PDkJWa3sKeS1MBdwwBVBJb5NETEKixvNNSuylesPlTDMkAHy1JH/T/+bf3zK+vcrAhBoh2koVfgxr+vds+Jt+RtkN7XDz93Fkj/f1RTTVkjjzlnJMjodnk/uioH68RIHR2VYQxB591f9eLirl1Ou/vQFpRes3E+UF8SxlrKUsUD3yupgvmoUzoxQptzC5LHmVgt03tfqdWEGD0kseK01xFlL3ZSTzRSYSERNynvW2v/3kVV7SmgTF+YdhNOXxu0QxLxD0+L8Dgfo7HcGZF+nQPFWYYunCnybfn69s1BDs8=';
  const _INTEGRITY_HASH = '046f625cf10263d2666eebfdc697f6dbc4c728834d291673be3a4d1bce738e7f';
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
