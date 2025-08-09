document.getElementById("calcForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const tempo = parseFloat(document.getElementById("tempo").value);
  const tamanho = parseFloat(document.getElementById("tamanho").value);

  if (tempo > 0 && tamanho > 0) {
    const eficiencia = (tamanho / tempo).toFixed(2);
    document.getElementById("resultado").innerText =
      `📊 Eficiência: ${eficiencia} MB/s`;
  } else {
    document.getElementById("resultado").innerText =
      "⚠️ Insira valores válidos.";
  }
});
