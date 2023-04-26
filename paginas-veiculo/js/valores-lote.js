function enviarLance() {
    // Obter o valor atual do lote
    const valorLote = 1000; // substituir por um valor real
  
    // Obter o valor inserido pelo usuário
    const lanceInput = document.getElementById("lance-input");
    const valorLance = parseInt(lanceInput.value);
  
    // Verificar se o valor inserido pelo usuário é maior que o valor do lote
    if (valorLance > valorLote) {
      // Se for maior, enviar a requisição
      const formData = new FormData();
      formData.append("lance", valorLance);
  
      fetch("url-do-seu-endpoint", {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    } else {
      // Se não for maior, exibir uma mensagem de erro
      alert("O valor do seu lance deve ser acima do valor apresentado no lote.");
    }
  }
  