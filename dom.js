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

function stilusKeszites() {
    // Bármilyen div ami egy p-ben van
    const DivBenP = document.querySelectorAll("div p");
    
    DivBenP.forEach(function(p) {
        p.style.color = "blue"    
    }
    )

    const DivGyerek = document.querySelectorAll("div > p");

    DivGyerek.forEach(function(elem){
        elem.style.fontWeight = "bold"
    }
    )


    // Div utáni p testvér

    const DivTestverP = document.querySelectorAll("div ~ p");

    DivTestverP.forEach(function(cucc){
        cucc.style.textDecoration = "underline"
    }
    )

    // Szülőjének 2. eleme

    const PGyerekMasodik = document.querySelectorAll("p:nth-child(2)");

    PGyerekMasodik.forEach(function(cucc){
        cucc.style.backgroundColor = "lightyellow"
    }
    )

    const MasodikPTestver = document.querySelectorAll("p:nth-of-type(2)");

    MasodikPTestver.forEach(function(cucc){
        cucc.style.border = "red 1px solid"
    }
    )

}