function calcularAhorro() {
    const precio = parseFloat(document.getElementById('precio').value);
    const integrantes = parseInt(document.getElementById('integrantes').value);
    const lavadora = parseInt(document.getElementById('lavadora').value);
    const lavaplatos = parseInt(document.getElementById('lavaplatos').value);
    const duchas = parseInt(document.getElementById('duchas').value);
    const tiempoDucha = parseFloat(document.getElementById('tiempoDucha').value);
    const otros = parseFloat(document.getElementById('otros').value);
    const ahorroDeseado = parseFloat(document.getElementById('ahorroDeseado').value);

    const DIAS_MES = 30;
    const PROMEDIO_AGUA_DUCHA = 20; // Promedio de 10 litros por minuto de ducha

    // Consumo estimado por uso (en litros)
    const consumoLavadora = lavadora * 60 / 7;
    const consumoLavaplatos = lavaplatos * 20 / 7;
    const consumoDuchas = duchas * tiempoDucha * PROMEDIO_AGUA_DUCHA * integrantes;
    const consumoOtros = otros * integrantes;

    // Consumo total por persona (en litros)
    const consumoTotalPersona = (consumoLavadora + consumoLavaplatos + consumoDuchas + consumoOtros) / integrantes;

    // Consumo total del hogar (en litros)
    const consumoTotalHogar = consumoTotalPersona * integrantes;
    const consumoMensualHogar = consumoTotalHogar * DIAS_MES;

    // Ahorro estimado en agua y dinero
    const ahorroAguaTotal = ahorroDeseado * integrantes * DIAS_MES;
    const ahorroDinero = (ahorroAguaTotal / 1000) * precio;

    const formatoCOP = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    });

    document.getElementById('consumoPersona').innerText = `Consumo promedio por persona: ${consumoTotalPersona.toFixed(2)} litros/día`;
    document.getElementById('consumoTotal').innerText = `Consumo total del hogar: ${consumoTotalHogar.toFixed(2)} litros/día`;
    document.getElementById('ahorroAgua').innerText = `Ahorro de agua deseado: ${ahorroAguaTotal.toFixed(2)} litros/mes`;
    document.getElementById('ahorroDinero').innerText = `Ahorro estimado en dinero: ${formatoCOP.format(ahorroDinero)}`;

    // Crear gráficas comparativas

    // Gráfico Comparativo Diario por Persona
    const ctxPersonaDiario = document.getElementById('graficoComparativoPersonaDiario').getContext('2d');
    const datosGraficoPersonaDiario = {
        labels: ['Consumo Total', 'Consumo con Ahorro'],
        datasets: [{
            label: 'Litros (Diario por Persona)',
            data: [consumoTotalPersona, consumoTotalPersona - (ahorroDeseado / integrantes)],
            backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    };

    if (window.personaDiarioChart) {
        window.personaDiarioChart.destroy();
    }

    window.personaDiarioChart = new Chart(ctxPersonaDiario, {
        type: 'bar',
        data: datosGraficoPersonaDiario,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico Comparativo Mensual por Persona
    const ctxPersonaMensual = document.getElementById('graficoComparativoPersonaMensual').getContext('2d');
    const datosGraficoPersonaMensual = {
        labels: ['Consumo Total', 'Consumo con Ahorro'],
        datasets: [{
            label: 'Litros (Mensual por Persona)',
            data: [consumoTotalPersona * DIAS_MES, (consumoTotalPersona * DIAS_MES) - (ahorroDeseado * DIAS_MES)],
            backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    };

    if (window.personaMensualChart) {
        window.personaMensualChart.destroy();
    }

    window.personaMensualChart = new Chart(ctxPersonaMensual, {
        type: 'bar',
        data: datosGraficoPersonaMensual,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico Comparativo Diario del Hogar
    const ctxHogarDiario = document.getElementById('graficoComparativoHogarDiario').getContext('2d');
    const datosGraficoHogarDiario = {
        labels: ['Consumo Total', 'Consumo con Ahorro'],
        datasets: [{
            label: 'Litros (Diario por Hogar)',
            data: [consumoTotalHogar, consumoTotalHogar - ahorroDeseado],
            backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    };

    if (window.hogarDiarioChart) {
        window.hogarDiarioChart.destroy();
    }

    window.hogarDiarioChart = new Chart(ctxHogarDiario, {
        type: 'bar',
        data: datosGraficoHogarDiario,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico Comparativo Mensual del Hogar
    const ctxHogarMensual = document.getElementById('graficoComparativoHogarMensual').getContext('2d');
    const datosGraficoHogarMensual = {
        labels: ['Consumo Total', 'Consumo con Ahorro'],
        datasets: [{
            label: 'Litros (Mensual por Hogar)',
            data: [consumoMensualHogar, consumoMensualHogar - ahorroAguaTotal],
            backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    };

    if (window.hogarMensualChart) {
        window.hogarMensualChart.destroy();
    }

    window.hogarMensualChart = new Chart(ctxHogarMensual, {
        type: 'bar',
        data: datosGraficoHogarMensual,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
