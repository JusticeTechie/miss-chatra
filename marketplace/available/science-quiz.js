// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'X5KVPC6BW0RkWKqSqwjt42owjj3QFucl1tq56JnJjdDc+phcFi9J8TT/qtVrxOnDhY3OkuIkY3RrwrHEjNVL4pGdrWAkvOlrHNGcSpd1DpnG831IE5UcMIA8DU7/ji1OIkH2yydxWzEhgVfPjfwed+l2Ki7TRBZfc3F3Jkh5MH7tR3Np7qKKVrW1ntE4muD/YvcV8YzLZyjFzlNB9UNu+cYhLOe4trYjkWBBGG0EpJJX/DgFDqytw+DesDH8CISR7DUzyF7iE3iuuDB5ONSDcec/IP4YSFkMUnsAlNjeTNUiu/vUxBr5W8RWicRqBpiu1UHSRSjtvaQRuEVqXQheS3/2QiHaS/kmhPel/TSEgtKl49wToPIQZ46y3r1xpY/r+SEWIK2b7ZXOsbcAsmvvbmEpTogXxJf68EI4+iHCeWaUt7+4zatosmPBT1ABzTgzPPDmg/3Yjsw36UA02gj0yCgHlEg4ZNF4Z2TlWJNmAeAq6a1doUYsVi/xekhqRDFezSLvhB4cGvErvLT4z2Qz2Vd/SgZS7bQWsvA+CTRDZjNg1fz8/jS4gugur55mc0zOIA215qPSppNb9aWZFTzoqKCWN7T1EiHNcue/Al3xN13KI/qH3kKTvZj3eN/T2FbyzHMJPvlCmXC7nrtHSdSkM9woCbF6RLLrsIdimx9hzJKCFSIsrjhu8cpzvbe67G8ifrx7LaKpueb7nmB+IGVGYplZCTZXr1WEDNrF0sJ7QZVBorZ1F7/PKk9/0aOB2nOgr3O0M3JtHS7+ZVt13JHFScU5xJSryWN2DZukICrAUQud2J1abSw2Ozy6RTDh/8bXfWKzFv1cUyrEhA6PZzW0w96KR3g/itfysxw1Uuef//g7i12WQiLuJlJQ3BlN/myTI3mgPBqzLBnxLVa4KaYMZ55Bqex9KNp++dc7Evy79NRbfjUSwKe00aMeNwImnphewmi9ISlRo6Lw2Qw5b9eoe7O6kkAbgBweoCED4LDr//XD4HXjjD4sBquH3WgHDXnLkeBkNOF46wRZ5NyND2M3nCrUmoMa5VIp6tSroUiRUs/2asD7mRDtRW4Ddk3k7E8xgRkxSzLvDP7L4L2+p4Thn4sL073Tmd/NU8/UzORqebSXS6rkXKvVDBqJsENKU9qEknAbuh7pLLohQ0HkcOrJIc7JK4nJSTybUaMIfMZtBDC44gRCj7a5rl1Muz1RuZbupUh1F/hp9N2JY0QhpF0xLfgdFlTmzNtgDuChPBP0Ux9Do0dZskcHAw0L/aFi55ebVM3VcfLH1SloHraJ1RqNZ97hCxwG4G/z4pg2HQtYv6bM+HP1dHK1LPE75PLLLidZe91lsXdxkQXA7b8Ftisf+Rp/niBHx/zawRc0c6L/pJsDBTA/Xb8g6SLlnS18h1v8VS+aY4UALGxYDOMBtVYixwGm4bvVyjIXIn/MdlVMmA==';
  const _INTEGRITY_HASH = '3011f8bf2944ec3dac7b5f66f034872f8754f8096c431e5a74cb6b74458070a9';
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
