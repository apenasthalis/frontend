var resultados = [];

try {
    var arquivos = JSON.parse(dados.horarios);

    if (
        typeof arquivos === "object" &&
        arquivos !== null &&
        Object.keys(arquivos).length > 0
    ) {
        for (var datab in arquivos) {
            if (arquivos.hasOwnProperty(datab)) {
                var dataResult = {
                    data: datab,
                    entradasSaidas: [],
                };

                arquivos[datab].forEach(function (item, index) {
                    var entradaSaida = {
                        hora: item.hora,
                        tipo: item.tipo,
                    };

                    dataResult.entradasSaidas.push(entradaSaida);
                });

                resultados.push(dataResult);
            }
        }
    } else {
        console.log("O objeto 'arquivos' não é válido ou está vazio.");
    }
} catch (error) {
    console.error("Erro ao fazer parse do JSON:", error);
}