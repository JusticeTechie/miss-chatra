// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L7xxXMEhPEkVKlJ6Vv/2cxnbyEMyA6NkGC3myo8DW+xzScBrvytk980q6Hfv3oCcu+tTI/O5NjKIyXW0qnlz6ITzQwfxfRmU5bhm3VjRCg/FoGY6PCHsfTBAQ9CcookWYVpxDyxN7NdCmygu5FURz0KTHoSUFXmLoPn6kcsk/5gbp5ZBxRS2xO/2YDgCqhv+ZMsEZthlsaZEoxynwx2nF8WSeRt8xiio6rBo3NB0nnAGYWLqxy2gBYfTwdKDp5rS5Oq/Ao9QJQ2Q5wNM20B7+/1p2XmQCtUdcHBegVxUD6tmohUD5nhDfASFOeklGrh3m24UCLNRmkJl5cr4BsUSlBViiTVE629TovFa5fnuXn68lxOwjB1eMXbpARlb3xdkpN1PGG24+UPIjKxuiYfvm+NU9ALXb/Vj5vF8tf0d3e4j7MajUCCM/y6q581V5Pk3dadT7+EMPN+qms9hbk9rOzHaxLOfVzf26e+81y/wyAp87BeH4XhPHp4PDeHUWjZ66RelicoXzZGD3uAnNgX56GO/cYUoJ7YQn8zqgHSby3CuOyeBHeN89abUazzndjN6Nrj6OERQwP+o2EtFc+RBlYtjddOBF1hHfqpAwXtboVhgE1kDneYeFIDd2SVt+/dBPGVTaTWPKe4gyrJPXLce3D9BWGa//UcSgKYPpySwGWFSLiD0jljaWAOM4TPWivEk2O+9EilKl2dt/BnmX5TR6TWYWnArtIo9oWv84JyzjuucbMm32kqEnQKGCYjnzDovj0/tHXzWNjVvpt/Yj77fI43twoq9i405eJfSDaYaLkoP4fvbZrY8+HOzYveUNdVzvDIwmPse2NOBE2+HVoS8BOf4DmQiecR4E62ckbJeT0fsj59gBMs2VtE7rfVjwejJk02wP8nMXjs21PWmf1Mu73PUB7VA09kyIvKjSCVIePBs6AqQAFy+R9ERKbnwvlKaPgq/Q/2wjgam8/SAJAjXTwkiukJ5ZfTPj2XHeRNH1NDupYtnEHu/rkKzQ/xVZgwAPaQz6XdV7+gyoesk4CUblhJCC78JPh8fM80i9qhhQuxIAP1yHkJNSijrcGWp2mefTyHV5/abtgAX3NJYsqkoq5dJzoGvGc8KcULdJyip9Dxz8id8n0JqTr0K1KfIFT9QbTqaDjL37c7yLLalutQlzxznU4e+7AjrAw9MVCo8nrcCaghGxu7nhv+7sJtQOAAJrS367sPIXEcoaVUrdCTpWUhLykCNMMG55yLvMrLjMyAgFxqRL2mySG9fnop11f/Mh51lxG9ZTEvpRZfFPETghyfg2OtCVtUjdp3YUZf4eIL0JXIFidKH0GcTMMQzTsyQOvw+YXN0T4OIq2zB2bvrD4bU6w7To+sMPUNSykjff7nItkA=';
  const _INTEGRITY_HASH = '90a73dfb5a468a2c254931c2b2a6230c47d6d0aa0cab4715a193459bbbc8ac60';
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
