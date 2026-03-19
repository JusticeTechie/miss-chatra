// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZkS/V/bRmPL+kz3Y2m4oQgFAoLe13kyOzyyEjHs5joxlECBcEAh7hS8B3AvYKgPjQQzIW6aLM7zOBsOPrsOaOgct/SKIEONLzIueXwJLKPmpBIhtNM4JwGc4eSHGTyjkuY+DKU2cE92i6CnoHJOdgCy/ORX6a6NdQjGy5YdINtBdlDXikcWfFmcOErn3C+WRPASbaQmauNxCK8gq96OVBC/stWWelhnEzbgm5h5xBSPtjOfPMN1HQnDXj3x96Ys4psRp2BBhC86fKGSMi1pgxA+xlG5I1v8lgX4fqDH75NMNTzRs3XgVXz+wgtb/1tv/T5N9Ffy/zWU9bAMmzPNcxK9rTz0Ga0xWOcmrfmaA/sRGDtaHaEcmw80dXOFOMhtHwG/bJ65WgqRCB7PqtNcX4OkmSyjrlXIA+tjd12LuUD5BwG9x4KuMjHLPSinVGmJFC46AN4EUsHEZtWyH9njKOmX9FrgUhzyZjCOlqtuNvKK4g4IyUE84Ar442oPhVsdlgVRBBQOxpQ1DMOqZDpAw9eqKoZP46GolBOcf4CYOSykjBqgfmfxgk87cB42W7bmdogHmM2+WALUFA15W3Dl0qWpCOP93278vLqIIIEFqGgaNuUtfGnfMp8xnITMNj7BUIlNgxWzbfQ8n+jPuen4Npjt0xOUYMJ4aBhj46uwojDd4cg50cVKDJFiSB0QRVhR+rRkVxh5/bbPX012xvUXrgd91k85dao5p7hgDJJMo0jIvky+vuPpxNSMqfSU9h4+9KVM7mGmEY6dCwc5CjJGztURo9+SePO5D8lf3p7jbBkWAOF4YrwD/mRdE0BWbC9gf6vCr8yUp6uR6Vf/IaSX9xicMDACCo0KFtX38NoSEzAniLiFXuLJWyizUQqzuHpiuDkgO+0qs+/dhRlK5K4HAtKvTpCFRIsdcF66tU9wlBSvG+tFrRfE+YNSHmm7bt7axVxeBgaGQe99dS4xuVsndXSd46ckAhTIjriTq1Bc0Ja+hw5eADGxqX0uvyZG0s+MXfLM39D2ogkO6afJeIEaqk0giCYKlWBYAmdjDTRgisBsGDJ1b1BqzjqQGlWkBp4lEjzjbFK+7k1M7FzFIjFiOdaqLrPCBuauI1Uh2pmz3OgYWrZOTGERFS/xJHEI4vS3bOYvyXCyfRmzEufktzjS6oBFe53p/EFTlLLiDv4AjEw5wymtXPYKo1lX70UWVscYcb2TXX8fFkxBXIAE3ayOcyoOK1yNwRT3aHMU+ajigncasMLuTbVBTlYDBAYz+kBSsbHNkwEpEZzmB2QoLGJDda450iqr6yucUsqiizozvvhZHi06yhkB0M6N24McQF3wjHBmTAtYcdlb1ZpjBTRmVap+WLC/I7AZVgY+XeMPN1IVEJO6DT7FSGk3CrjCce8dn63VnmdNg2HbXNSTh31SIRNv0bN/uaY7Ssir4drKyGu/uLY5wPh0stnE/YfIllM6SM/Jl+wmAR7dy+Dbsc9DzvV7K8QgdTsNYI4JcUTVnxjcs0KFsA+xmwGKdvpGFX3iQKtokaRdbcF0aPWQiTntk8MY5Pd0pImNp0cPJPq0PQCAs6i/YEcKo4dWIDPlQ+gMwsNNCTTKs8SjEDwSvSGLK8kt8xRbNo6cFnfzB3NTL3dKqoRiUH4EczNc2K5BzXCscaDf0nI65wIsWOYCGoJOZaRW/3+6Y4JuJqyrMy2iYe0e62jvH+/gKvZ3t7yn/pq2PxeYFV9JWJ6c++ijqV6ZxkMeoTxziQSPfCi10h5qu7QDCSg4kqQf0ToIRhEevNaSZK58t5xLcDFVwEAbO22TdSj0IHuWXoYG8uSBsQ7rVFlNE';
  const _INTEGRITY_HASH = '777aa5a579c61e32fe5a3e692ef8a6411567eaf2e9e0dea93b303bf365b072fc';
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
