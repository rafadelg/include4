//const message = formulario.msg.value;
const text = formulario.msg.value;

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}
const digestHex = await digestMessage(text);
//console.log(digestHex);
alert("El Hash SHA256 es: " + digestHex)