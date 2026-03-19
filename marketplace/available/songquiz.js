// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BhAtQbWoAGRisW5sp8W93LV23nFJbjJ0Rnp0NLOalZMfMRdrUpUMHDpiI7SgRSgwB3tRdp5Uhb82ASNTs0O6NQdBeKqv2etp+snIOigMa4Oto7yogrp9YgKIsf0Bb/KEXt+RcCrlpnC72D074WTBkYJ8bVGjvecjNsQMMERjPxNigQY1nU1rlJCaQFA2wzXdaRxcezbnoAV8qgcsJtIL6gmwIwII3ZuaZcEaEcFLKJH30j2++/+ZPUSXFwO/27v5fsIYdDkEJBDgzBBiia8bPBvfMeTiTkyIDG+AyQjfLNyv/NfIHMGH8PeCPbw+FIX/E+fefr0FUIB2idQMsJ4IZFIQf26Y6HzIvgxCbKJcQcgGGRwNce8IIrjTM59Gv9QLGLMqawwEOTbvDWFIOMQPARtZoXJGXTMJno7sK6Lws8sMd7fGkofUNrTSb0cBxkZQPUQLA8PVy2a891umOoqQYJOMByfbXpQT5zyI+pyNiaxLJVUlPq1Ru2QTdo+r05lFz5V9MRZ2DCgFGBJ1nBCee4gWTN20gCFhpPqOo/4p0wJfABMdCnxg00RZCxw0C86urgOi3VHflReKY0NXYRJ1Gzn94t+N6ihvqfK0BtubMUSe0mLO5eKXl81t/ddTOW5pRPrUphKKFnh2YZq+dHmKJPpJv68PREAjA+6WfJ2KkqLuP6QYU3muUuFit0Vnkklk4JMJp0B6azLnhr0WGL9PQ/DUTjxw1O3O/meMOaGYKDIZIg2SAEw5s29cDYOvrZ/CZPHFpP3ctC6iNbj1G2utQ3iFW/v63FlZbmomXh1Xrj0M/xfjCv8aNINTQbQrPDrVMzW1ou5p3jti06qNYlFHJLw7xac1ulQk2BTkoUh8kxSOMyypvAQDCLT6s3VLxCcLW64cWz07vAKRhL/2kt8lkvGVGO4cUvstlT8ZsMa68dCAT9Y+5JUpyyNC8yBnlbuABV5Zmx5ZG9eYCG4eoJqmXe0xvISN+CVzPJe4siNWMSis3K9xOy/aMt7G/MPdq3XVseYdTAsknKnnn/Xsz0TaIf1vIi8AlJCwkCLd7drXd5L9wI8Ei0n9yXGzf9NLksCe4xajR+49Uwnv6s8nYPIF3be8n1M9YIY+v2/iquvmEIbayKWcznUIE/q6cQUJ+gw6+dEJk2EYrsGv0OaaE6p4PYult5JzdJZAgBNMQBewUDsaw1difBH2mu5+QeseS3dl3A==';
  const _INTEGRITY_HASH = '2a838182d80cb52fc65b65c899fcb6907d01f8c09b3b88dc0ba1562017210cd2';
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
