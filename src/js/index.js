/* aaqui devo escrever o passo a passo do que preciso fazer. Ao final é só apagar essa parte. Ela não aparece no site, ou seja, posso sem medo escrever mmeu passo a passo aqui. esclarecer o que eu preciso fazer primeiro e depois o passo a passo, sem pular nenhum passo. Sempre colocar esses objetivos e o passo a passo antes de começaro code no js. o que estád entro das barras do"console.log();" mostra o que deve ser acessado. nome de variavel deve ser claro (tem que haver com o tema)por exemplo "botaoAlterarTema". Cameo case:letra maiiuscula no início de cada palavra. querySelector: busca por tag. No setAtribute o primeiro elemento é o que vai ser alterado e o segundo é o caminho
*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const ImagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const ModoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    
    if (ModoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro")
        ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
        
    } else {
        body.classList.add("modo-escuro");
        ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }



});


