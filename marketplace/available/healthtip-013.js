// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aZNdFo46sENJQsWUPgO4gQidwxqNuY0K7a6K0Aod6iBT8KeFb5i1Ikd3W7P6eb9keDt5gp29R3SRZ4yPFcFG1vsuUerga1XGNgLsZX70BDGcao1H6aTUthH2CBvrreT7KfrT+Zsx0t6yxpRtiwGhVBL/IEXnNcEJ53FB5KvGLwZOAU/DFHDeasyO0jFpS6MUqZD8fsaKTIOxsUt5gmGqdVH9mpTBgtQvAniBVIoDBRB6Ea8PqMFWz44ivW8M68qmibz7GtgS8xzbJmybxP2xc1IOsQm1yAU0UWfV4AgSp6e5jTQk5hR6l+DQFEXVcMVaemOkwta6sL26ycFJk0IKIRo+U3VjeJpbnxMPz9FumvtmdMgF6w55SFDFWVNZXgYZOVof0f54pWY2NqPYHgzSjKySMBPuvBPa3EPyXRkFGqA4/b/XDEW4LIll29XZdHMHNuqsSf0PSW7I01iSGQ7nGVML9qbtRpcCIRsUtQvEB3YPkQZrgayWOy+JMPEdQ4VxPiu2+M/a3et13Q24ZUnG+MB2PpT3cmlP8v2TW1pD1ubAk0hTwoMUndOwpkd0/ydXnTBRMdyFgurVAFAZPCqaSUXY/7AIjq+c8NuLocHQBWZwnpp2M6GiWp204EVD8r/cIiRcL/ywC+LslXBBoeequsufHh50P2u4EkNCLaGWOMAR2iBJjHj0hBFBO7ll++I9IjXv/51y0r+D5RHE4FXoxdec04xNdDbWQ6/s9N/Um5rAT9P7PfM6KGhSem6oScBtbridbQ9SLpeLfbLaN1NWjT/2zipc2Ojeh4W3KDLP76VGnsDGyDZEKXvRDemNm3RzLv+ESOI9ZEM+LHY/kQGm3zJWSzxuCGsvHWclo1x1yU+Cst0nnoPJBQ3oQaQEiSwFKU1c+A5y5f7PvPwRUcMggmdUbtLa69VdAUs4yjBcmOlwnpNR52inL3dgx9w=';
  const _INTEGRITY_HASH = 'b9545df0d2927fad441348e734f3b79e38da4780691c6208b58ea4d6ca3add5a';
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
