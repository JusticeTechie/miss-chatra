// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'S/3c3wVphIb5dvEifmJcFHpM7h0yeL73qL99FqLtZI1h9ae228ExBhP/u98Po+GMi9YR1i4wadg4Om9Lv+tGZ2sSX0FwIDV2/rWmuwHXcOtXERdpGwEIsjo9YXIaBwL6YdwGLd09vPhzb/L5aTYCqlSL/Tl/mUavYFFDm7EGcccjHHEvuKMwalWHGEqEX0LNfhDUVcT5n1E2Q6NGa7i2RE+BEQ86FFXN68fCtp2bJXdmaJTzNiA0jWAo3wRIDkNI+HnjPgc6azhYlbGHD8mVN30FzXhH5360fcfFEU11FVhptyUMmQpEer48Jj/9GhQf+bBf4N7fc3TfMQsJyR3ANSm4E2cYejYzC0jqSYNDASrttITMucNkQOMz1AfouC/8YuJ07OrcR+UT3rdREpediStCgJavsv9LnRwmq6eJH4RaGm33r9QRwFj0iYsXl7HPsYbHFvcmFndhwvL1D4eNygd9tKaDNUqFsOOLIb5QAW047qxEfVFS0kCKUbBlT7jf0Ta0IzDi3ZnRVofwRl918Vi+fVFlSfTNFrNbRlKQlOLr5njZf4fI3WnZji23fjqYW5U7Ail/lLzSnnttjqg5DA/8hGu8kSbp2OOz3LoKUM/Trcv73hxtPDEfw/IxDFPS7z/cIdt0vEJWBffadwYKXI/fXmduw6Z+nv4J+ICXM5HhSQqnaQwdvvBgX8gufSYWd2ficTtnjZtJD26D0emI38JCcgTAlAZ267xA3yX732ga4YH2F2RiuNvNONn675Gm0ND8sozQOw11rw+ymuXNmF+h4mVq4tp2gHiMu852V0OKAECENQJeUhJqIEbrCghsf8fojxtfbm/czjezdDMuoU5yCvapo7LuChh50O9P0S0wHetT5pXS45ZawW06d56VCjLxdPkSjQsmGRebmU3h4Rcl+xG1WUG/8TCA35+KRZDv5t6RszZTie9i9MjzjUXdgvvGsvB85vnP/+RpDKDyIRskTsMT8vLFltJwP482TJK1JRhAQxgsImRZO0leLmcM2dqYH5UrTymrtGYuq8b5LczfirNO+Os7UXSfWSI0RxcyRuSdyPgxNWlGfcyI5xq4K1eGcBdIkgTZwwmlX6p1UHvyqkOy1EOkxzcSru86OyKKmVOviF1LfgwdaMZERimXuz3JY81wXBfANOCzK99odr16HK8Abbg7f194SsXZSaRZE+FAyN2b02o0/kKMfM+Iqg+CWHogO0nNTcaQ5cfh08uYaRM09E8xBfoxhbDivoZGcAe2GswW4y+RbkZsp5gxEVlTRGRCpNIAhdHYLmbZFPkDUZIESoxpLjt+mz5WtqimIZg3zLV2VH5pSSDfr0yC3gLwzkysr+hvlLelzJl3cC8e5X3BeNG7IN0+0Mzvz/F6b9+dLF2tDg==';
  const _INTEGRITY_HASH = 'eb77b0de3e14b783319d2900ec2ccc1c6b78567a9f318c78be8b93343ae7deae';
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
