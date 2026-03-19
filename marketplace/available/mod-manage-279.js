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

  const _b64            = 'e+2HM1ujzs2JXH5UMe5LL/h02/nSV15x4b9zZIXvum+euUSUGsku6RK5clYeU496Dfap86E0gqbnDRwMVYECnaVhbuY4PheYFANpz/ioV2R14Do6ts5dUI7n87WbL7JgtSgjzcKG2B9oU0XUEvc8ImzqsHeQNqKwIIbMVOg0mHAnWIABRD+JTO9hn7cEypu2nOs/AdWaENSa+xdZWn1JJ4z9+PaS+t1T50tldVPOf5Ulo+5jt5tCYkIFMMWVTLXZxGdNwoUilHXzfsDxc/OmuziVOueWVeB13r7/CILQ2bOaRgqg3bTieR9nRIfWCLo3Cn2DJRZ7WZ1tMYqKGlPUKASAso3JycVrGcx4BSLBc5LXKgMnFMRolZ7lt+ih4dNI/jkSDVWXQO3WEJan8yn5wNEbeU/eWMrriAScMeVOVQ+ce3ogRHnDH4W/Mkgo+FF3P975jzP7jLJpHW1D2lp75atXxY3r1XjHqHocF5n4m3LZCAlDI9jV9L+nvRn/rNNS98cAc99wheqjTSC/B8vMreVFsvDCgITlDDxa7CcGQN6TwrOp5bqfOUUbq1OvHrxvdvyq/lBbE3sMfLl0rF76LVCQ+X6TvZ61B5Mtu3e0Mli7b2cQFYCyzOZjOSaJ2s35o1NakmqSZvCyKbAbST8V2viLeGKwlYzrjdFv3O/w1xk3BOP+Hw/+Gz3dREyLAgNTMWjx0yhk2VFbuVQ+hRCmgyniBQK2z4HPcqPhgL/XwiOE6M/A1/k0lzG3K/BRBgekRu2CtThCA85knIA7E9gRDju0bHTG6NsyFpO40+tRMYd127qgEkwPDlJfCPtR/A4rOumYQ0kKtimnEQClqM/2awdBA+ujI5JR5HGlMzUcLvr4dMz7LGZf42BPhSzdALyOY1O/V27BwyY/P9sMOr/V42pZP0C9eD3Xp415IbKcZnypHWLoNf0jrIDkwps9fqaPw1fRdxE62NTEern9SN2IhO88vDrOGjGJwL/NOFBtpywNDCVT0/DSdSYUQDtkL3O1ivHxTmxEn+mPNeTDJcZxYF6ga7ooI/M2ip3w0lLmpnJEJei5upSGwLDVg8zSoXxs52MsTkMUnWxqEynwALwjcBeHoNLUdH1j85Ic+PqSjONoh7e2EgOhtWsCoQOv7ZKG2yZld3esR3W0/z+NCj1iaQqh0aLksZdDLaRxUbHxCFp2ds2fC7GbT1aoVMA/86ftkR1nuPsQ1po+uIm7SXTDTNhUic74oJKMK3BcWeDNMM9I/Q7I9/KaQGAs/1Y5CN7BthjNqFwX2aMyLamWuxufT3q9cehWMsTUXozkl0x42Vhzpg+wxvvKNPGo9NjhJWn0k5LfuJ827AXmGf9fzP65tSuVDxnSV12jEvo/vxk+vex9Ymy75RRPRQ==';
  const _INTEGRITY_HASH = '1e764686fea502076a56aa887c19a20c3896a850651fefabe1886b2e1d00832b';
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
