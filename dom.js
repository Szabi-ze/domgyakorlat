var szamlalo = 1


function ujDivHozzaad() {
    let ujdiv = document.createElement("div");
    let h2 = document.createElement("h2");

    h2.innerHTML = "Cikk " + szamlalo
    szamlalo ++;

    ujdiv.append(h2)
    let container = document.getElementById("container");
    container.append(ujdiv)
}

