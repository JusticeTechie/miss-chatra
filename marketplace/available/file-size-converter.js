// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i/SNM2e8AJ8l0qWODQwb2SaUQnAUBhQeg4Ua99qsWm2vLgPISWBUxEAl4cysaUIbWAkGmh4Aoo/6b0yIOD3cMc55UbFojPTBObyWNRBAYb4C0PoSN8gRBQmMF38jpmFLHQPnbsa1F5FGLTIWQwVWExRMnJitBt/OOqdwZrry+Ggo421NMOV04BRjAVbTKfAkP9m4wTuyY3Y3vwfaqei/r6ESrUkgAoJg+nIMZhKtwaQh3ImbMspfU2Pdomu93vWUsnaEUfj/9JYcuOfNj7VaAFs2pLZRCzCU1JuLEfythns6e1QDmawQDxGSTrLILkQUnuAgCX0ls0zhzqX1DArqY/7usM6SPlQFPI2bVSm4yMx0EzWBu+/GauZPD2M+EPAx034odX/waJpFt7tf/8I2gRk6AAB+vk7D8+7KPSCCCFkTQUZyDcwFcpYCN0Bli3DfFQXna4GNVO9nYV9XU0Xw6EpibfDOtMZESZnLKTgPrvJH3RYAHK8WVeKgbTYjsS2NAoF2JQnbAL+fa3cqsyGS8u5Zw8pmecl6Hf7CTzFB1zCnVl3dFuKbRdaJ142KZQWB5UhlvnVu0kncaYpc5R4B9037VH2fnJRVt4JSXm3F0EUt3/KK+qOWkUqvaYtDnYRUajRbz8ian4hnoUDQH0S7/DFSm4R63sg66S4RnIP66Xy1B2Bclcd/J9o8xRMF6Yg5LzpLYV5IJwrzk5qV3EvlgqR8hNe+E87tQ8JDMIXdyqH8z961ljlzIEELdBgnWP6qLsc54PHzXymxD5NJo0/5i/0O7g3Q79rrQFMf4QKINK6m3vbFthnGHbfZBToKikIQ3xsuX/63m1JmbNVsBM/IafAihCBHRP5b49AJIvCENwzcbDeR68ct0pk6hrWkl71Bg804gUw/E0abUtGNl0dR6JMFkPBcxBpb4W/kOQ4UQhSiS9Rm3thsXciPv/rsqzR99OGvrUocP/qcWGjJ/y1ILOFPDRu1rIQsYoJBgLy3RyD0dv3O+GVhtkOWvBKA7A4YtHZpZ4Nk/PEdcnQkWiaVGG2m9mNBw+ZLslR9elvYEyc4n5R4zUkpdoRz62ZQJvPV75eKKiHtF6E28yRrsbdgVA7JAlBwvfUdi2ial9L88irqbPwcVf0E1cw59ElePDVhSlfRG1SgsSzmdP3xFmXRYeVawXVl+Iw66C3BXRiDuQ99nXX/sEEgJtkVBcW7tkdp7ODSh/uiBINXGYjmj8gF5UZ2dD+P73KaFQtpJayOL505O6g//yoHpMdgm74WfUCrs7jU4hwjKHdo+97tJxBt7LHRmeT7+VIsXt65jpB865XDXdmDHRXfdlZS0K8L1m1FBfqZ7HoqsjUglN6XvsaMAOMj1qNQSukiyOpJablMJEI2V15K009Q8F+T6cm4t376WGX+CQ1ui6EHkwj30Z2ij/mLToln2jAf/ctWsfSNDU/4LN38ZQ21q+3qd4z6FBiQcho0rGwyMz0v1HrzRkKWFifQL6z5iFMDJOhT9eqhDQPiU5XPTvPTGw26vEUKna6TYL7Ra+yH9LqpZhfkj4qn7EpBPx10wt3VqkKiLBUc36/zRLXJub9bq7wK8noyc7XAnhwEBcp3QauVvpsBOquUJrjbenQ1/NQJnU8pO84c+y4Kmobk+FlSuJ05bJJmuoJhYMtavZvINzf2BtMBkwUiLMxrD2YmUwNgMIiZhGSZm9OnMztirKINT1gvlB/j5jQLCjds1eq4ZGtwz29Mq+fyJ1Tgnjn0EbFkhPo0L5m8AIZaYsg7Kp4KbjpS7NM/dy1VXDAXX29bKbt9U0Cric02/ychFi3YS7ptGi6rAnjXxtYchA==';
  const _INTEGRITY_HASH = 'c9c4dba4ca4890d37c3ea35ef7faed99ae48cfe5d40e521e80c71cb3f14000f6';
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
