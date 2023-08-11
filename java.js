let idade, text, text_idd, sla;

alert('Olá! :)')
let nm = prompt('Digite seu nome')
let ano = parseInt(prompt('e o ano em que você nasceu'))

idade = 2023 - ano;

if (idade == 16) {
    text_idd = `Olá ${nm}`
    document.write(text_idd)
    document.write('<br>')
    text = `Eu sou o Thiago e eu tenho a mesma idade que você.`;
    document.write(text)
}
if (idade<16) {
    sla = 16 - idade;
    text_idd = `Olá ${nm}`
    document.write(text_idd)
    document.write('<br>')
    text = `Eu sou o Thiago e eu sou ${sla} anos mais velho do que você.`;
    document.write(text)
}
if (idade>16) {
    sla = idade - 16;
    text_idd = `Olá ${nm}`
    document.write(text_idd)
    document.write('<br>')
    text = `Eu sou o Thiago e eu sou ${sla} anos mais novo do que você.`;
    document.write(text)
}