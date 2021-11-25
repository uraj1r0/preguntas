async function encrypt(elementId) {
  if (window.crypto.getRandomValues) {
    // don't allow message to be encrypted multiple times
    if (document.getElementById(elementId).value.startsWith("-----BEGIN PGP MESSAGE-----")) {
      return true;
    }
    var pub_key = await openpgp.key.readArmored(
`-----BEGIN PGP PUBLIC KEY BLOCK-----

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
8kBrcw==
=/0c0
-----END PGP PUBLIC KEY BLOCK-----`
      );
      console.log(document.getElementById(elementId).value);
      console.log(pub_key)
    var options = {
        message: openpgp.message.fromText(document.getElementById(elementId).value),       // input as Message object
        publicKeys: pub_key.keys
    }
    var pgp_message = openpgp.encrypt(options).then(ciphertext => {
      console.log(ciphertext)
      //$('#'+elementId).val(ciphertext.data);
      //return true;
    });
  } else {
    $("#freeencryptbutton").val("Error");
    $("#paidencryptbutton").val("Error");
    window.alert("This browser isn't supported!");
    return false;
  }
}