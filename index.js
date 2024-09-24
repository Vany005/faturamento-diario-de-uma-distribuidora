
function calcularMetricasFaturamento(faturamentoMensal) {
    const somaTotal = faturamentoMensal.reduce((acc, dia) => acc + dia.valor, 0);
  
    const mediaMensal = somaTotal / faturamentoMensal.length;
    const menorValor = Math.min(...faturamentoMensal.map(dia => dia.valor));
    const maiorValor = Math.max(...faturamentoMensal.map(dia => dia.valor));
  
    const diasAcimaDaMedia = faturamentoMensal.filter(dia => dia.valor > mediaMensal).length;
  
    return {
      menorValor,
      maiorValor,
      diasAcimaDaMedia,
      mediaMensal
    };
  }
  fetch('database.json')
    .then(response => response.json())
    .then(dados => {
      const resultados = calcularMetricasFaturamento(dados);
      console.log('Menor valor:', resultados.menorValor);
      console.log('Maior valor:', resultados.maiorValor);
      console.log('Dias acima da média:', resultados.diasAcimaDaMedia);
      console.log('Média mensal:', resultados.mediaMensal);
    })
    .catch(error => {
      console.error('Erro ao carregar os dados:', error);
    });