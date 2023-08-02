var {somar, subtrair, multiplicar, dividir, maiorDeIdade}  = require('./index')

test('somar dois números', function() {
    var resultado = somar(10, 10);

    expect(resultado).toBe(20);
})

test('subtrair dois números', function() {
    var resultado = subtrair(15, 10);

    expect(resultado).toBe(5);
})

test('multiplicar dois números', function() {
    var resultado = multiplicar(15, 10);

    expect(resultado).toBe(150);
})

test('dividir dois números', function() {
    var resultado = dividir(20, 10);

    expect(resultado).toBe(2);
})

test('Verificar maior de idade', function() {
    var resultado = maiorDeIdade(21);

    expect(resultado).toBe('Você é de maior');
})