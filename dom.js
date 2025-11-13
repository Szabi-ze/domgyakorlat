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

function ujBekezdesHozzaad() {
    let p = document.createElement("p");
    const container = document.getElementById("container");
    const divek = container.getElementsByTagName("div");

    const utolsoDiv = divek[divek.length-1]


    p.innerHTML = "Ez egy új bekezdés szövege"

    if (divek.length > 0) {
        utolsoDiv.appendChild(p)
    } else {
        alert("Először divet hozzon létre!")
    }
    
}