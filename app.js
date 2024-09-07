// O button clicado no html tem como função resumidamente injetar os resutados na pagina principal, já com a formatação e todos os dados coletados sem colocar em risco a aplicação com mudancas criticas.
function buscar(){
    
    let section = document.getElementById("resultado-pesquisa");
    let campoPesquisa = document.getElementById("campoPesquisa").value
    let resultados = "";
    let titulo = "";
    let formacao = "";
    let descricao1 = "";
    let descricao2 = "";

    if(campoPesquisa == ""){
        alert("Nada foi Encontrado :(")
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    for(let dado of dados){
    
        titulo = dado.titulo.toLocaleLowerCase()
        formacao = dado.formacao.toLocaleLowerCase()
        descricao1 = dado.descricao1.toLocaleLowerCase()
        descricao2 = dado.descricao2.toLocaleLowerCase()
        
        if( titulo.includes(campoPesquisa) || 
            formacao.includes(campoPesquisa) ||
            descricao1.includes(campoPesquisa) ||
            descricao2.includes(campoPesquisa)){
                resultados += `
                <div class="item-resultado">
                    <h3>
                        ${dado.titulo}
                        ${dado.formacao}
                    </h3>
                    <p class="descricao-meta">
                        ${dado.descricao1}    
                        ${dado.descricao2}    
                    </p>
                    <a href="${dado.link}" target="_blank">${dado.link}</a>
                </div>
                `;
            }
        }

    if(!resultados){
        alert("Nada foi encontrado");
    }
    section.innerHTML += resultados;
}


