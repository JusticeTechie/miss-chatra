// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tzol4ireRanXQc9rEH8h7MbzWhclfhGj3d6lCse0a6jlQr9mXlCIMYHI/0iA39Qu6QLCVXCA+sHCp6EOCjPuayTNnVsMBfmPwp5MyRVsqs1ejMyrxKaih32duOsRZZnaSAg83GDELW6qqaweYBGg8iH2/o2Po3ZMHWs0g1aFNUHwQZI+ijatf7FFKGJB76yNFfs8rJEefvhntz2K4CAq7Ye1V8ZhmBCDg2mHdHeNzZuoAeU+JX8vU149RqB9ht4qmcGwXYPf4ekkHOu443f9T7ciszv0rWBUqzHqn/Sfmknp83jjMLvAWv6v7AgWWIwYKNi5cTJfxXkgPYWJlFqp63kn+v8S/PrMtbxlVK6u+wkJaYnpNB9YzlUxhlG3kYtAEXIk1hSp4cS75p+cH/fxUIoFQUPyLMpi56i2JINbs8o1EyXoDns1C7d+gM6Of+Sn9x9A8+36g4JEUYJL4VuYXjw7aIE5AAvIj58jtqoP+xnviiTzCb22MCRVfeiuXeelwSqeWKGdSm7bo3EoRe3q0EVxCzXRWKO09QHH9fVuda2afln+eIbZtBUwGqsmdLOuq2E1h+TeYG8/LTHrpNTVo7V65er4MYQY2JeiAbgZFGdC9wyBn/bINJp5uYZP3gJPZ9d3QTwv8bIWUnWScJEU5jiysQnE2c72+aaRmM0MAJUNIQ4cNoXflNAJd/moza07Afw54AbVCQtZha5NiZuYSANE/VbfHddT7s3OJV+1bwHbG0SOHLaZMAeGqWG7xpMz6mv89DexklvZcycNo6b/5ZMl8uRo85CJ1kRm5DaR05QWseMj2C+Xv3hzHpHK1Qk4PMVDvKokESITiZxdu5GSSSjonhrR8i4DRjun8vvqIVOEuZQCBuUA9ZPjPEIt68iQ/0rxGiBCDt+a4hGhmGcXGC+zZ8bcMNKwuB3c6fIoyA8MoODLmUAN696MggvNZmdMcSSfF1Ts7ZTf6fD+2HfqOiXC9xwiaf78F/FWlv0tH9BZa4itNwAt1azUu+7xBBky5wg3HTvpsTAy5w3Z1wS7cuoqn0kf6ePHC6N679Q2ncm1zLE3+l2lhBGGddJ1iSUNrJQqdHWAFM8wkolUUgtzv+9I0Y1boP8Nf0VLQeQ8CSG/fWlhGtR9TpSExUtenRtZlWhBlI4K4IKt+xjeWqltA1bfuC8Dnfk0OWlXqcyNuXAqHgIvDiEBJc4K7rfFPbi6hA==';
  const _INTEGRITY_HASH = '63fb5c704dfc7923319fe5b0281aad9c530f806536b4f51237f7accc57cf6f83';
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
