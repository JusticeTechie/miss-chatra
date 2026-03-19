// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IcCKeN1p/ibZ/TnQcJXK67UZ4SfNFfh8EHSy7knX6yAIBdodEoyW+eeM6gKU+q9rTw87XQ+rs+9y8v235UqTUZfrPEH2eQUR75v2/Hicsx3mlADR28W3/RsbJ8HlUWB8KW6O3546v4X4TUrE84H8ZRyerC6NlQ/t9ag4FBqv+JdCKhIlDp+W5n3vlvNQLaidYGuEaZc/cGoI85PkSt58yENd2Ohdcjp38fX20HPpuPF071p4nOnDPKS8NnaQwhJJ01nVBL0CxK4vFrPr6pOrKHlw3wwsiS73VgqGXdmzPovuBS/RuKfGMBGTXI1Qxfcu1MELP4dVOXb4O2+6WYe8KRbedHbcfmWh6/uUwegxNJBXsehiU3EI+WGu30NaoK/KvUuMmuutFU0m/fT8BLUUx0+2one0Y5FW2Oe40mnh34A4M7oRevqNEp2J6Qq6MBm1EmXSEyxpzLE5WDKiF7rePW0jOtvArixP8muYHkVPOcIoIxyW4HuPceapakukHh+/IDCwsnkvdkDKVTuVq9UsXo/cW0l/g++ZrS+IEDpcMVE4sISA3RT2eiu+zjwb4TlMtBcoKuyFNsfSz6G4AdWrKO6iU+lY2S/TLI2Y463hLD3tOPKh5C6yRpBD7dX0jJM7c/v5UK8OF5AoMjIkXh0ppaqtSxeRIz8cHBSWCzjrf6RZjfiVLQMcvx/6QNV35hTuGtE66wYPNpzsi8iZ4niqrNjnzmOYCLEZS+VAlVrjl4bORRj6LD8GSZ8RvOz4xoXs1kxSt3iW1omlWJveSDDiAmOVeOiImAHEHxD5vvxFWRCAG9t1H4Phtkr9jyEqOBsT1E9W6VuQPjQoWQIqZ7Gh8kb5BtsnV6/Uih7UfRI+ZNwukE7j2UUtscX2vBftvxi9KIrPNlHremJUx9UrZwFKhlUOyoAXkUBVmDhkpB+FeOr+VphfzX+0t1ny4oLPpRsIEuiy18UEBuEOS3tJoKsx9Muzt70mZwuUu+bA1bgNfEZvq2dl6dEN4oDcZ+XBROjnyf7YgSEQr7jfEiNFsh1DHptNOzTzx7PoN7Ae9pKU8xjy/XliJqNsFPCEBEr3Eq3CiHb/HhphqDM8/+SpnunAb7X4dcyRJiFmi3UDESDf07jAWSxST9cYWP6hkWriM5jaICt1YWA0zVciwVymZ1E7al6SrEO70jL6dyzdK6DUvvBPp6knAzMkXlfbCW6vabOdJE/pNbowXxF6+lLViZkYQRSyqFZ/WUWii2c0sDr1KekzeiM7J6xc3XlWrRzraste2dvcW+dShKZP6pwz3zQqwCp704KZTyQfkAT5ZOU3mqs/dFvsQVpezaW6RttaFnCaE4tCETQ6sR6X7TphEsXGesKvzqCRkJiXTJz/fktwkkXXLpWiGhnd2nttVMJB4d40AdBnF+d2BnKs0C9R96PdjETq1U3RmvtH94/84JI7WA3pWRRlkbYBYREOjkMPphZ7UyruV8InHc3+IkoLB/so7a2+KHObR4lNvTsf4gkXLuJIEFgNJcxRyl274ZfVFFq+GpZ/gNTZv0isZkMrVlYC7KHQ5x24IKqs8EhcAREvVEAKKLRneYyWv3a3Baf3wbTApUBh';
  const _INTEGRITY_HASH = 'c95d65323f399f1392ec35df043803d38083b6067d8c669d8b2632a4ee339ef2';
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
