// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AbG50IoGw3Ose15Z1Ad6QZ587lj6rRebjG3F1cmiEsXnDD+YKf1txCj6B40nT8CMe263rBTk+zpiPqbFmMf2EkeezzSpuqqWahQXTn6fO+asTvuYRX44zo0nVmlI/Njrke5FK5yC8TEbuYAPkOf3tORIgfu7gMN8+zK7r+SE/8xagTpDBUJv8CHmabfaXrjrfJySNx6nnoQRpV09RN857/T3+Nrl1iKtVku8qh/PjQxp9dTYC8Dtqk89vxOeaRZXENWwHUyND3VJST2rkI7DVCHLR8hbCqmRnBUgRwBLKWPKAecKxjiE+rmmNHn3kntJQKe4g6+/F84Z98oaOaT3h+1CTtDuggWeL3xN6lCq5bra17Wzkqm7jUuEj319/60bM8tYomlaPxPpig/xjv5XOj8dfQ786ZosinhOHukukpsE/0dcEwPLan5+kydBpJDIvcmpfFYjxLqZhJ0A94/2IgZcQNEDgzVdcmGgAI2kPOecYO1vXBsQpNNlUWz0Egi4ZkwAiMZl04Pl3TaBF/FtkmuRAtsnaXr6uBBWHWwgccTip7C3eIqMNie4LSEhnSjJc4S0kadMgxHsby1v4Jlwn9vo/5ZLjdXeNgvUK+9SvavWr1vZ1dwtkuPTsPyb7eCp/OFufj2YZzcPjf1g1z2i6WYmQLPrJkxq1u/2H/4zkKb8PQDzoDdX7/o0EPkhhM/uFXzNF2VqmuWto/rGjUvAAfaEKjLLbp8jVi2ArIyvfMLakdV/aYmWm1oaQMXW2Rkbomn4eN4KOkEDg20DIRqgP89oLusP82WIbJszAdu00xLYnr7uxd/8P/98sVYiUJnjBSFIUb540YonAOq32Nvo3/Kt1L4hRaXxBgGaohTBsuoEs6UKuIqwBWgNzdQ6lxN+Wo971sQRiRz5SOPH/k6Q3EzPMR840b3YY+XYBmhSovBEdECHjUo2ciLAmllXr17AM0S7DcMCWcf4A7RRpeP94+tBQKgc2IZP6gUJaRo8H6th272yVSssS20GPS6Uts7usf78RBmCZsq/+WTwR/RS1Z0q7bKArcK1lN6mMHwWg1krWdQWJgrX59Lwvs9HARw/dWdeJtsv7AEQtfh0n3yBVbD2YcfsaO39gwTfT5S+TuLRFZbEEEgLRnECxkTG3xT9Bi3/D5rc5o805mi9hy1quTzGDcoxc/VzpjW8cBGLh2pT6U7LzlgyZP9oLlugh9yXWoIlcvep9MIyP3AhStt705m470bR2H8yTd1E6quFSgyQNRO91nDLp/fOUAn8QAo9tY0SDATeucRrvhSJ9MYMeU7L0Y2vpTqPDyNvoitNNgXg5EPxdJ/MtWEFpfazCmUJKMjQ9VJT4DKcG18yZF4bvk+SYUaI0uE6KYqNOIr85zSoFhmZNVTVH4+vZudjyr4gG5shFxaG+2/aWHzdGwi4SRSoasGRMk5INMRZQy9f0jUGy5Rrs22+GgO/sXyBkq81B5jj00Ld8EHiOJElJq/9xy4cs7VoVwpOJyDt9b3iX4HmkXZSWVOelUH4YAFlqkbtaE8/cwuOuxpLspPFbe3HVMZ4WtTtg0UCB0Ez1fGSvsBKpPCBT5Gm0OV8q7YtbcugPCeHCk2DqQGYbz+S6nUZlg3F2mjFbIwBPYn4HzsyVvPe6rZXe6gSoXjEO6sEM4tfeerRJUSv9Btpg+7FWHhD/A58vxcrmdRzbZhk2IAa3kjixMmbh2TyamN8X/v4pSomYNLD62EmBpQojA1dGE6eAzjBGtE1MleFZz/xGAs277LGg5vCRJNeGitTu8r0yGfZ+wM/3zEOR1AYiF+VouLVQa9DEzchQRnehdUh9XPmr8E/W+1t9Wpyyfk4hRZ1vDsXyhqJzrPEBybdD1WPlV4CGFW24dgaQ54=';
  const _INTEGRITY_HASH = 'dddc46382320664ebce925063fe135b2d220b9e950e978d2950ba1210c694270';
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
