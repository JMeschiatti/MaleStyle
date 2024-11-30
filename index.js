function inicio(){
    location.href= 'index.html'
}

// Efeito de TRANSACAO das páginas
let Produtos = null;
let verificar = null;
const btnProdutos = document.getElementById('produto')
const btnSobreNos = document.getElementById('sobreNos')

// Remove a animação de todos os elementos especificados
function resetaAnimacao(){
    const ids = ['transacaoProdutos', 'transacaoSobreNos'];
    ids.forEach(id => {
        document.getElementById(id).style.animation = '';
    });
}
// Defini a cor do botões com base nos botões ativados
function resetarCorBotao(btnAtivado) {
    const botoes = [btnProdutos, btnSobreNos];
    botoes.forEach(btn => {
        btn.style.color = '#eaeaea';
        btn.style.letterSpacing = '0px';
    });
    // Cor do botão ativado
    btnAtivado.style.color = '#fbbe17';
    btnAtivado.style.letterSpacing = '1px';
}
// Evento Botão Produtos (Sobe a animação)
btnProdutos.addEventListener('click', function(){
    resetarCorBotao(btnProdutos);
    if(verificar !== 'btnProdutos'){
        resetaAnimacao();
        document.getElementById('transacaoProdutos').style.animation = 'animacaoSubir 1s ease-in-out'
        verificar = 'btnProdutos';
    }
    setTimeout(() => {
        // Da um display none nas demais paginas
        document.getElementById('pagBanner').style.display = 'none'
        document.getElementById('pagProdutos').style.display = 'block'
        document.getElementById('pagSobreNos').style.display = 'none'
        if(Produtos == 'outsider'){
            document.getElementById('outsider').style.display = 'none'
            document.getElementById('out').style.display = 'block'
        }else if(Produtos == 'sport'){
            document.getElementById('sport').style.display = 'none'
            document.getElementById('spo').style.display = 'block'
        }else if(Produtos == 'casual'){
            document.getElementById('casual').style.display = 'none'
            document.getElementById('cas').style.display = 'block'
        }else if(Produtos == 'calçados'){
            document.getElementById('calcados').style.display = 'none'
            document.getElementById('cal').style.display = 'block'
        }else if(Produtos == 'relógios'){
            document.getElementById('relogios').style.display = 'none'
            document.getElementById('rel').style.display = 'block'
        }else if(Produtos == 'pulseiras'){
            document.getElementById('pulseiras').style.display = 'none'
            document.getElementById('pul').style.display = 'block'
        }else if(Produtos == 'anéis'){
            document.getElementById('aneis').style.display = 'none'
            document.getElementById('ane').style.display = 'block'
        }else if(Produtos == 'óculos'){
            document.getElementById('oculos').style.display = 'none'
            document.getElementById('ocu').style.display = 'block'
        }else if(Produtos == 'carteiras'){
            document.getElementById('carteiras').style.display = 'none'
            document.getElementById('car').style.display = 'block'
        }else if(Produtos == 'chapéus'){
            document.getElementById('chapeus').style.display = 'none'
            document.getElementById('cha').style.display = 'block'
        }
        // Contrair Cards Produtos
        const cardsP = document.querySelectorAll('.cardP');
        cardsP.forEach(p => {
            p.style.left = '';
            p.style.top = '';
            p.style.width = '';
            p.style.height = '';
        });
    }, 450);
})
// Evento Botão Sobre Nos (Sobe a animação)
btnSobreNos.addEventListener('click', function(){
    resetarCorBotao(btnSobreNos);
    if(verificar !== 'btnSobreNos'){
        resetaAnimacao();
        document.getElementById('transacaoSobreNos').style.animation = 'animacaoSubir 1s ease-in-out'
        verificar = 'btnSobreNos';
    }
    setTimeout(() => {
        // Da um display none nas demais paginas
        document.getElementById('pagBanner').style.display = 'none'
        document.getElementById('pagProdutos').style.display = 'none'
        document.getElementById('pagSobreNos').style.display = 'block'
        // Contrair Cards Produtos
        const cardsP = document.querySelectorAll('.cardP');
        cardsP.forEach(p => {
                p.style.left = '';
                p.style.top = '';
                p.style.width = '';
                p.style.height = '';
        });
        if(Produtos == 'outsider'){
            document.getElementById('outsider').style.display = 'none'
            document.getElementById('out').style.display = 'block'
        }else if(Produtos == 'sport'){
            document.getElementById('sport').style.display = 'none'
            document.getElementById('spo').style.display = 'block'
        }else if(Produtos == 'casual'){
            document.getElementById('casual').style.display = 'none'
            document.getElementById('cas').style.display = 'block'
        }else if(Produtos == 'calçados'){
            document.getElementById('calcados').style.display = 'none'
            document.getElementById('cal').style.display = 'block'
        }else if(Produtos == 'relógios'){
            document.getElementById('relogios').style.display = 'none'
            document.getElementById('rel').style.display = 'block'
        }else if(Produtos == 'pulseiras'){
            document.getElementById('pulseiras').style.display = 'none'
            document.getElementById('pul').style.display = 'block'
        }else if(Produtos == 'anéis'){
            document.getElementById('aneis').style.display = 'none'
            document.getElementById('ane').style.display = 'block'
        }else if(Produtos == 'óculos'){
            document.getElementById('oculos').style.display = 'none'
            document.getElementById('ocu').style.display = 'block'
        }else if(Produtos == 'carteiras'){
            document.getElementById('carteiras').style.display = 'none'
            document.getElementById('car').style.display = 'block'
        }else if(Produtos == 'chapéus'){
            document.getElementById('chapeus').style.display = 'none'
            document.getElementById('cha').style.display = 'block'
        }
    }, 450);
})

// SECTIONS PRODUTOS ------------------------------------------------------------------------------------------------------->

    // Movimento dos Cards da pag. CURSOS
    const prevP = document.getElementById('prevP')
    const nextP = document.getElementById('nextP')
    nextP.addEventListener("click",function(){
        let a = document.querySelectorAll(".cardP")
        document.querySelector(".slideP").appendChild(a[0])
    })
    prevP.addEventListener("click",function(){
        let a = document.querySelectorAll(".cardP")
        document.querySelector(".slideP").prepend(a[a.length-1])
    })

    // Função para expandir o card
    let palavraP = null;
    function expandirP(cardP) {
        const cardsP = document.querySelectorAll('.cardP');
        
        // Reseta o estilo de todos os cards antes de expandir um novo
        cardsP.forEach(p => {
            p.style.left = '';
            p.style.top = '';
            p.style.width = '';
            p.style.height = '';
        });

        // Verifica se o card clicado é o terceiro
        if (cardP === cardsP[2]) {
            cardP.style.left = '0';
            cardP.style.top = '0';
            cardP.style.width = '100%';
            cardP.style.height = '100vh';
            setTimeout(function(){
                cardP.style.display = 'none';
                document.getElementById('pagProdutos').style.display = 'none'
            }, 1170)

            // Aqui pegamos a palavra do <h1> do card clicado
            const h1 = cardP.querySelector('h1'); // Encontra o <h1> dentro do card
            if (h1) {
                const palavraP = h1.textContent; // Atualiza a variável 'palavra'
                Produtos = palavraP;
            }

            if(Produtos == 'outsider'){
                setTimeout(function(){
                    document.getElementById('outsider').style.display = 'block'
                    document.getElementById('sport').style.display = 'none'
                    document.getElementById('casual').style.display = 'none'
                    document.getElementById('calcados').style.display = 'none'
                    document.getElementById('relogios').style.display = 'none'
                    document.getElementById('pulseiras').style.display = 'none'
                    document.getElementById('aneis').style.display = 'none'
                    document.getElementById('oculos').style.display = 'none'
                    document.getElementById('carteiras').style.display = 'none'
                    document.getElementById('chapeus').style.display = 'none'
                }, 1200)
                // Movimento Card Desenvolvimento
                const prevOut = document.getElementById('prevOut')
                const nextOut = document.getElementById('nextOut')
                nextOut.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iO")
                    document.querySelector(".sO").appendChild(a[0])
                })
                prevOut.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iO")
                    document.querySelector(".sO").prepend(a[a.length-1])
                })
            }
            else if(Produtos == 'sport'){
                setTimeout(function(){
                    document.getElementById('outsider').style.display = 'none'
                    document.getElementById('sport').style.display = 'block'
                    document.getElementById('casual').style.display = 'none'
                    document.getElementById('calcados').style.display = 'none'
                    document.getElementById('relogios').style.display = 'none'
                    document.getElementById('pulseiras').style.display = 'none'
                    document.getElementById('aneis').style.display = 'none'
                    document.getElementById('oculos').style.display = 'none'
                    document.getElementById('carteiras').style.display = 'none'
                    document.getElementById('chapeus').style.display = 'none'
                }, 1200)
                // Movimento Cards Saude
                const prevSpo = document.getElementById('prevSpo')
                const nextSpo = document.getElementById('nextSpo')
                nextSpo.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iSp")
                    document.querySelector(".sSp").appendChild(a[0])
                })
                prevSpo.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iSp")
                    document.querySelector(".sSp").prepend(a[a.length-1])
                })
            }
            else if(Produtos == 'casual'){
                setTimeout(function(){
                    document.getElementById('outsider').style.display = 'none'
                    document.getElementById('sport').style.display = 'none'
                    document.getElementById('casual').style.display = 'block'
                    document.getElementById('calcados').style.display = 'none'
                    document.getElementById('relogios').style.display = 'none'
                    document.getElementById('pulseiras').style.display = 'none'
                    document.getElementById('aneis').style.display = 'none'
                    document.getElementById('oculos').style.display = 'none'
                    document.getElementById('carteiras').style.display = 'none'
                    document.getElementById('chapeus').style.display = 'none'
                }, 1200)
                // Movimento Cards Relacionamneto
                const prevCas = document.getElementById('prevCas')
                const nextCas = document.getElementById('nextCas')
                nextCas.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iC")
                    document.querySelector(".sC").appendChild(a[0])
                })
                prevCas.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iC")
                    document.querySelector(".sC").prepend(a[a.length-1])
                })
            }
            else if(Produtos == 'calçados'){
                setTimeout(function(){
                    document.getElementById('outsider').style.display = 'none'
                    document.getElementById('sport').style.display = 'none'
                    document.getElementById('casual').style.display = 'none'
                    document.getElementById('calcados').style.display = 'block'
                    document.getElementById('relogios').style.display = 'none'
                    document.getElementById('pulseiras').style.display = 'none'
                    document.getElementById('aneis').style.display = 'none'
                    document.getElementById('oculos').style.display = 'none'
                    document.getElementById('carteiras').style.display = 'none'
                    document.getElementById('chapeus').style.display = 'none'
                }, 1200)
                // Movimento Cards Hobbies
                const prevCal = document.getElementById('prevCal')
                const nextCal = document.getElementById('nextCal')
                nextCal.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iCa")
                    document.querySelector(".sCa").appendChild(a[0])
                })
                prevCal.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iCa")
                    document.querySelector(".sCa").prepend(a[a.length-1])
                })
            }
            else if(Produtos == 'relógios'){
                setTimeout(function(){
                    document.getElementById('outsider').style.display = 'none'
                    document.getElementById('sport').style.display = 'none'
                    document.getElementById('casual').style.display = 'none'
                    document.getElementById('calcados').style.display = 'none'
                    document.getElementById('relogios').style.display = 'block'
                    document.getElementById('pulseiras').style.display = 'none'
                    document.getElementById('aneis').style.display = 'none'
                    document.getElementById('oculos').style.display = 'none'
                    document.getElementById('carteiras').style.display = 'none'
                    document.getElementById('chapeus').style.display = 'none'
                }, 1200)
                // Movimento Cards Finanças
                const prevRel = document.getElementById('prevRel')
                const nextRel = document.getElementById('nextRel')
                nextRel.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iR")
                    document.querySelector(".sR").appendChild(a[0])
                })
                prevRel.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iR")
                    document.querySelector(".sR").prepend(a[a.length-1])
                })
            }
            else if(Produtos == 'pulseiras'){
                setTimeout(function(){
                    document.getElementById('outsider').style.display = 'none'
                    document.getElementById('sport').style.display = 'none'
                    document.getElementById('casual').style.display = 'none'
                    document.getElementById('calcados').style.display = 'none'
                    document.getElementById('relogios').style.display = 'none'
                    document.getElementById('pulseiras').style.display = 'block'
                    document.getElementById('aneis').style.display = 'none'
                    document.getElementById('oculos').style.display = 'none'
                    document.getElementById('carteiras').style.display = 'none'
                    document.getElementById('chapeus').style.display = 'none'
                }, 1200)
                // Movimento Cards Finanças
                const prevPul = document.getElementById('prevPul')
                const nextPul = document.getElementById('nextPul')
                nextPul.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iP")
                    document.querySelector(".sP").appendChild(a[0])
                })
                prevPul.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iP")
                    document.querySelector(".sP").prepend(a[a.length-1])
                })
            }
            else if(Produtos == 'anéis'){
                setTimeout(function(){
                    document.getElementById('outsider').style.display = 'none'
                    document.getElementById('sport').style.display = 'none'
                    document.getElementById('casual').style.display = 'none'
                    document.getElementById('calcados').style.display = 'none'
                    document.getElementById('relogios').style.display = 'none'
                    document.getElementById('pulseiras').style.display = 'none'
                    document.getElementById('aneis').style.display = 'block'
                    document.getElementById('oculos').style.display = 'none'
                    document.getElementById('carteiras').style.display = 'none'
                    document.getElementById('chapeus').style.display = 'none'
                }, 1200)
                // Movimento Cards Finanças
                const prevAne = document.getElementById('prevAne')
                const nextAne = document.getElementById('nextAne')
                nextAne.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iA")
                    document.querySelector(".sA").appendChild(a[0])
                })
                prevAne.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iA")
                    document.querySelector(".sA").prepend(a[a.length-1])
                })
            }
            else if(Produtos == 'óculos'){
                setTimeout(function(){
                    document.getElementById('outsider').style.display = 'none'
                    document.getElementById('sport').style.display = 'none'
                    document.getElementById('casual').style.display = 'none'
                    document.getElementById('calcados').style.display = 'none'
                    document.getElementById('relogios').style.display = 'none'
                    document.getElementById('pulseiras').style.display = 'none'
                    document.getElementById('aneis').style.display = 'none'
                    document.getElementById('oculos').style.display = 'block'
                    document.getElementById('carteiras').style.display = 'none'
                    document.getElementById('chapeus').style.display = 'none'
                }, 1200)
                // Movimento Cards Finanças
                const prevOcu = document.getElementById('prevOcu')
                const nextOcu = document.getElementById('nextOcu')
                nextOcu.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iOc")
                    document.querySelector(".sOc").appendChild(a[0])
                })
                prevOcu.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iOc")
                    document.querySelector(".sOc").prepend(a[a.length-1])
                })
            }
            else if(Produtos == 'carteiras'){
                setTimeout(function(){
                    document.getElementById('outsider').style.display = 'none'
                    document.getElementById('sport').style.display = 'none'
                    document.getElementById('casual').style.display = 'none'
                    document.getElementById('calcados').style.display = 'none'
                    document.getElementById('relogios').style.display = 'none'
                    document.getElementById('pulseiras').style.display = 'none'
                    document.getElementById('aneis').style.display = 'none'
                    document.getElementById('oculos').style.display = 'none'
                    document.getElementById('carteiras').style.display = 'block'
                    document.getElementById('chapeus').style.display = 'none'
                }, 1200)
                // Movimento Cards Finanças
                const prevCar = document.getElementById('prevCar')
                const nextCar = document.getElementById('nextCar')
                nextCar.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iCar")
                    document.querySelector(".sCar").appendChild(a[0])
                })
                prevCar.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iCar")
                    document.querySelector(".sCar").prepend(a[a.length-1])
                })
            }
            else if(Produtos == 'chapéus'){
                setTimeout(function(){
                    document.getElementById('outsider').style.display = 'none'
                    document.getElementById('sport').style.display = 'none'
                    document.getElementById('casual').style.display = 'none'
                    document.getElementById('calcados').style.display = 'none'
                    document.getElementById('relogios').style.display = 'none'
                    document.getElementById('pulseiras').style.display = 'none'
                    document.getElementById('aneis').style.display = 'none'
                    document.getElementById('oculos').style.display = 'none'
                    document.getElementById('carteiras').style.display = 'none'
                    document.getElementById('chapeus').style.display = 'block'
                }, 1200)
                // Movimento Cards Finanças
                const prevCha = document.getElementById('prevCha')
                const nextCha = document.getElementById('nextCha')
                nextCha.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iCh")
                    document.querySelector(".sCh").appendChild(a[0])
                })
                prevCha.addEventListener("click",function(){
                    let a = document.querySelectorAll(".iCh")
                    document.querySelector(".sCh").prepend(a[a.length-1])
                })
            }
        }
    }

    // Adiciona o evento de clique em todos os cards
    const cardsP = document.querySelectorAll('.cardP');
    cardsP.forEach(cardP => {
        cardP.addEventListener('click', function() {
            expandirP(cardP);
        });
    });

// Redes Sociais
document.getElementById('instagram').addEventListener('click', ()=>{
    location.href = 'https://www.instagram.com/malestyle91/'
})
document.getElementById('tiktok').addEventListener('click', ()=>{
    location.href = 'https://www.tiktok.com/@malestyle91'
})
document.getElementById('pinterest').addEventListener('click', ()=>{
    location.href = 'https://br.pinterest.com/malestyle91/'
})
