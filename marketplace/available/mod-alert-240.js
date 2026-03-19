// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wGIvWqFbC4CprK3hER8g9RreCgtl9BKhHK7msUctb31mC6VC4rSTM1KDj+iuwkeylIIG8zfSvizkT1mdDFTmmQ+7NGM0Z//jbDkbnmMFHm/0mht7+Er2DNYjXYbscEPmDN7/odeS9/47NpMk4/NmO9fJcha7ik6ipNtg/hLyzHIPavUVlGxF/6i/NaoDND2XFzHL5iTQDlK1AWtEuzBbnqHY86lFjb8pKgpDOLt9V2u8DtC4hZHcYusxqI3Ue9Ip8OMXqJJibL47EUjibMClHAG7CDAigbOK0HwmSLvqF2RSdWAgHQtcRhVmnaH+UoHmy5YjOIviYgFyWED4w+yPgeK9OmchXD3is0HQvkHYhJ9lV2Tc94qQenKZ6/65lLQNetxxMrVW5Ibft3C4r1WL4YF2IK0rbxniUpCiB2ZKzrH14SEzF5ITWPshZ2ssupDstnXe0HwOL99FMUsdM6yYA4yiUp3qKuifTWZPrFyyA3EGJD6H4U3YKBl8fZWh0rF2TGiMTtW8PmsSp/kj/lher0YLtaFqhm+SSztzpat2vKUgkHjndaoxeaufEu6j/jj4krrOPlSqsuyT5rOQW/zyQwJCmCrBSuUPMiN/pGepZgKTTNTyOKc02bP3OjRqvlWsGi2Y3Whuv/dA9OqaePJ7jzeJzJ1MSlZOlDarM6PBNLVC/GKMRl8IlT5DrbQTQcg+wAOoxiKpGK3foF/s0aHoCfY9HuigGTTP3JKqN6HaX8qnYNehS34xIqQPb5jyW0V30gZ23ZaUDOOQ3MhF/Jo3CvwkcWhxjkUn3e9lG7asNVtxPZu9tIcU90jM6duKTVPXJNNXVN34HUbyg0ZzCCdwS3PG75MICVvrboYXWHMBvtmuYilSSMee+qCkRo08jZDgAeq3mN6IYXj9D+lmEbQZ3UHYXca5dJlZhQkvl5LD/1Q5cHDUYmjeqUYJoNF+saaNX7TkvsfMRHfY4q5kmgBtgJYrPT6ss9FWKE0lafuRkovfPKZ6Y9EUJ2VDmaDmxCFdiwCpSHFvYSHv/oT9CmA+hjDGidepAGBAimweMckPE8gy1lnjtnnThkllrbFNlVMnnaKn7tJekAvcbS7xyGbnQpT/Zpkd1YPF58OALkXVpK8BrmDZRCr4Ua5YvUOB/73VZEKlTdaS9qJwjySdmp61jjTocrk1QlQXHTAHDiCJDQ00HIHCMIIVReJRDjIS9lGl5k3X0g953627wMZTeuywiNcCg5NBTYtJBuHJDk7PEn2C83oTKj0Mhd2nIcgf9ZAWK4TY8yWOg+ImJA+XGw3ZBfeeRstRqWjhem+aSt6HEW8f0RSe+EvrB24Av7HYuXWsi0d0rjYlTZ0xNpy6d1E12PocKHCUgMqiPm0aK9Gt';
  const _INTEGRITY_HASH = 'd96836d76b1f24919f71fa6b67662079001a7c1797c8bb98597a2fdb400da2ec';
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
