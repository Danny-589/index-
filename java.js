
Valor1 = prompt('Ingrese el primer dato');
Valor2 = prompt('Ingrese el segundo dato');
let suma = parseInt(Valor1)+parseInt(Valor2);
let resta= parseFloat(Valor1)-parseInt(Valor2);
let multiplicación = parseInt(Valor1)*parseInt(Valor2);
let división = parseInt(Valor1)/parseInt(Valor2);

document.write('Las respuestas son... <br>');
document.write('La suma de ' + Valor1 + ' + ' + Valor2 + ' = ' + suma + '<br>');
document.write('La resta de ' + Valor1 + ' - ' + Valor2 + ' = ' + resta + '<br>');
document.write('La multiplicación de ' + Valor1 + ' * ' + Valor2 + ' = ' + multiplicación + '<br>');
document.write('La división de ' + Valor1 + ' / ' + Valor2 + ' = ' + división + '<br>');
document.write('</p>');