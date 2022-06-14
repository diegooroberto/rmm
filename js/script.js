function gerar() {
    var vHTML = ".";
    var vBotao = ".";
    var jsNome = document.getElementById("nome").value;
    var jsPronome = document.getElementById("pronome").value;
    var jsCargo = document.getElementById("cargo").value;
    var jsTelefone = document.getElementById("telefone").value;
    var jsLinkedin = document.getElementById("linkedin").value.toLowerCase();
  
    jsLinkedin = jsLinkedin.replace("http://","");
    jsLinkedin = jsLinkedin.replace("https://","");
    
    if (jsNome == "") {
        vHTML =
        "<div><p> Há campos em branco e não foi possível gerar sua assinatura! <br><br> Por gentileza, atualize a página. </p></div>";

        document.getElementById("conteudo").innerHTML = vHTML;
    
    } else {
        vHTML = 
        '<div><hr><table border="0"><tr><td><strong style="font-size:17px;color:#ff5c35">' + jsNome.toUpperCase() + ' </strong>' +
        '<cite style="font-size:13px;color:#ff5c35"> (' + jsPronome + ') </cite><br>' +
        '<small style="font-size:15px;color:#003b5c">' + jsCargo.toUpperCase() + '</small><br>' +
        '<small style="font-size:15px;color:#003b5c"> +55 ' + jsTelefone + ' | +55 (13) 3219-7303</small><br>' +
        '<small style="font-size:15px;color:black"> Rua Amador Bueno, 333 - Conj. 1501 - Tribuna Square - Santos/SP (11013-153)</small><br>' +
        '<small style="text-decoration:none;font-size:15px;color:black;">' +
        '<a href="https://' + jsLinkedin.toLowerCase() + '" target="_blank" rel="noreferrer">Meu perfil no LinkedIn</a></small>' +
        '  |  <small style="font-size:15px;color:black;"><a href="https://miller.adv.br" target="_blank" rel="noreferrer">miller.adv.br</a></small>' + 
        '<br><br><p><a href="https://miller.adv.br" target="_blank" rel="noreferrer">' +
        '<img src="https://static.wixstatic.com/media/ec7b10_613c1f4171934467bbed28af1f971512~mv2.png" border="0" width="380px" height="180px">' +
        '</a></p></td></tr></table><hr></div>';
      
        console.log(vHTML);
        vBotao = "<button id=\"botaoCopiar\" onclick=\"copiarAssinatura('conteudo');\"> Copiar Assinatura </button>";

        // alert(vHTML);
        document.getElementById("conteudo").innerHTML = vHTML;
        document.getElementById("conteudo2").innerHTML = vBotao;
    };
};

function copiarAssinatura(id) {
        var r = document.createRange();
        r.selectNode(document.getElementById(id));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
}