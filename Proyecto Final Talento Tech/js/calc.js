function calculateSavings() {
    // Obtener los datos de los inputs
    const consumption = parseFloat(document.getElementById("consumption").value); // metros cúbicos de agua por mes
    const costPerM3 = parseFloat(document.getElementById("costPerM3").value); // valor del metro cúbico de agua
    const tankCapacity = parseFloat(document.getElementById("tankCapacity").value); // capacidad del tanque en litros
    
    // Conversión de litros a metros cúbicos
    const tankCapacityM3 = tankCapacity / 1000;
    
    // Calcular el ahorro de agua (mensual y anual)
    const monthlyWaterSavings = tankCapacityM3;
    const yearlyWaterSavings = monthlyWaterSavings * 12;
    
    // Calcular el ahorro de dinero (mensual y anual)
    const monthlyMoneySavings = monthlyWaterSavings * costPerM3;
    const yearlyMoneySavings = yearlyWaterSavings * costPerM3;
    
    // Mostrar los resultados en la página
    document.getElementById("monthlyWaterSavings").textContent = `Ahorro mensual de agua: ${monthlyWaterSavings.toFixed(2)} m³`;
    document.getElementById("yearlyWaterSavings").textContent = `Ahorro anual de agua: ${yearlyWaterSavings.toFixed(2)} m³`;
    document.getElementById("monthlyMoneySavings").textContent = `Ahorro mensual en dinero: $${monthlyMoneySavings.toFixed(2)}`;
    document.getElementById("yearlyMoneySavings").textContent = `Ahorro anual en dinero: $${yearlyMoneySavings.toFixed(2)}`;
    document.getElementById("texReco").innerHTML = `<p>Los resultados son mayores gracias a las precipitaciones que tiene Colombia</p>`;
  
    // Gráficos de ahorro de agua
    const ctxWater = document.getElementById('waterSavingsChart').getContext('2d');
    const waterSavingsChart = new Chart(ctxWater, {
      type: 'bar',
      data: {
        labels: ['Mensual', 'Anual'],
        datasets: [{
          label: 'Ahorro de agua (m³)',
          data: [monthlyWaterSavings, yearlyWaterSavings],
          backgroundColor: ['#4CAF50', '#81C784'],
          borderColor: ['#388E3C', '#2C6B2F'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // Gráficos de ahorro de dinero
    const ctxMoney = document.getElementById('moneySavingsChart').getContext('2d');
    const moneySavingsChart = new Chart(ctxMoney, {
      type: 'bar',
      data: {
        labels: ['Mensual', 'Anual'],
        datasets: [{
          label: 'Ahorro en dinero ($)',
          data: [monthlyMoneySavings, yearlyMoneySavings],
          backgroundColor: ['#FF9800', '#FFB74D'],
          borderColor: ['#F57C00', '#E65100'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  