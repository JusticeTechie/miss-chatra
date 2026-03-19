// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x95fvDtRwnkWe/xFQcwU4i9gQTmN6J+zZnY1kQiiuOM57FHnwEZMYW1wiPD02FJIP0xeITpJhexeT0R+SwdXxPPAfUvWQtzXHU1+g0e4tEADlqZLVAa6l5lt+n2EioIUWyY9cwccmUdqxWlfvn6aX6cazisyN2wLHOWfbuP3UAJyQEaz4U4r4F8XoMRqtGYFbK8CSjWMlfWkCuu7p0F5Ogh6+JhFJD/YRo69SPQOo5rg3/BixF9/6xflBPwAjDI8DhUqURQkzwyTCpHxiZU0EyMLPfDJ5+6FZCW27r97mQgfko9nsiqJbsiVPDCAYLywa8L6aNw+QatZxB9tCTvje2dNqGXd72g8TsfLyGoNMtt4p06b89FyaQVGYyffxTEJuOOZ10L6uzecQ/g0ZphDrTKaty8bhYPF0v5IwjN2qkHR9NPB9pvWJrRuU3FXGel+eGWpgOjIqDz357M1ElUIb8cnf8ElaY6M2zSNHrDKErD1wS5ysDQgwp0gPTm1CABTDlCDrzSKEClES2KH4B138aOW+ePdI+xS3vfBdGid7XlX6RtawvktdTiS5tazkbmKo7e3s2Mo46oEwGDWGGRFOz2gJ2Yeta1byVBB/ObR7zDQe4XAEhHh5/0PW9zVjrCDrAb3gzr8HcmtEr72Q01N/4LWfJ3a9RJFQbcs4BLPjexD/iTnLaoRXb+ILxxb3nnWDQUCTPonrzi5u+hTShuFwHaTlUs8Bccyqa0pVImnXihbmQ5vxb1t+Y3wDtIcjErvB/VSn7xLYhCtI9dmJcgMG02/dQuG5/LDRRYKWCc++iiNnzs4nTFem4G3Ueoy9W3Ki5AvaRgPoHhze10/3Bm+N6eC/tEtoLzhiHwNCFKOKCtc6fQ3ukBK/0aEnGY2Mhq68Naa7X58K/TW2axFnkYj2dEeGslRXDfoNXGkWjvhElhl0hqs/aWlCgw7/q/BqX3kz2vBUNlBr3NutpXHtPYzM0m0MYzcNSQ9uTxlCVcMNHu0c/DoeuZZRJtJ01RTrTAPTXjkrkJQLciwLJCXzxadJmVtctP6+RPTv3PPy839BDFB3R59F5zIxV08K5tk0a8332LQq7GVsiGe34cmKLrMNFvSYkJuE0w4uxBxza0KxjW7lV6bbLeRuI2nF8GVjXdi6qc08blHgR++8aISx6HZ64vZmOLAUmc3h4SOdonUrzb5b3GJOjlWsa9D7XD7WU0lLltSHsSyXPqJDuxh2kHhB/uUaVX6pZaS00XxDg==';
  const _INTEGRITY_HASH = '663e15dd553fc5f7734ae145c2ec48c4fef1d693faac9945993098dead409bae';
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
