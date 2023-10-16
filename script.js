const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const selector = document.getElementById('deslocamento');
const texto = document.getElementById('para-criptografar');
const botao = document.getElementById('botao')
const result = document.getElementById("result")

selector.innerHTML = alfabeto.map((ele, index) => `<option value="${index}">${ele}</option>`).join('');

botao.addEventListener('click',() =>{
    let textParaCriptografar = texto.value;
    let deslocamento = +selector.value;
    
    let cifrado =  cifrar(textParaCriptografar, deslocamento);
    
    console.log(textParaCriptografar)
    console.log(cifrado)
    result.classList.remove('invisivel')
    result.innerHTML = cifrado
})


function letraPorIndex(index) {
    let indexFinal;
    if (index > 0){
        indexFinal = index % alfabeto.length;
    } else {
        indexFinal = (alfabeto.length + index) % alfabeto.length;
    }
    return alfabeto[indexFinal];
}

//uma outra forma usando o loop for normal
// const cifrar = (text, deslocamento) => {
//     let textUpcase = text.toUpperCase().split('');
//     let textoCriptografado = [];
//
//     for (let i = 0; i < textUpcase.length; i++) {
//         let indiceDaLetra = alfabeto.indexOf(textUpcase[i])
//         if (indiceDaLetra < 0){
//             textoCriptografado.push(letraPorIndex(indiceDaLetra+deslocamento))
//         } else {
//             let novoIndice = (indiceDaLetra + deslocamento) % alfabeto.length;
//             textoCriptografado.push(alfabeto[novoIndice])
//         }
//     }
//
//     console.log(textoCriptografado)
//     return textoCriptografado.join("");
// }

const cifrar = (text,deslocamento) => {
  const textUppercase = text.toUpperCase().split('')
    const textCriptografado = textUppercase.map(letter =>{
        const indiceDaLetra = alfabeto.indexOf(letter);

        if (indiceDaLetra < 0){
            return letraPorIndex(indiceDaLetra + deslocamento)
        } else {
            const novoIndex = (indiceDaLetra + deslocamento) % alfabeto.length;
            return alfabeto[novoIndex];
        }
    });
  return textCriptografado.join('');
}