function getBotResponse(input) {
    input = input.toLowerCase();
  
    if (input.includes("selam")) {
      return "Selam! Nasılsın?";
    } else if (input.includes("kitap")) {
      return "Tarihle ilgili kitapları sever misin?";
    } else if (input.includes("evet")) {
      return "O zaman 'Nutuk' ya da 'Sapiens' iyi bir başlangıç olabilir.";
    } else if (input.includes("hayır")) {
      return "Peki, bilim kurgu ya da polisiye ister misin?";
    } else {
      return "Anlamadım 🙃 Daha farklı bir şey söyleyebilir misin?";
    }
}
  
document.querySelector("#send-btn").addEventListener("click", () => {
    const inputField = document.querySelector("#user-input");
    const userText = inputField.value;
    const response = getBotResponse(userText);
  
    document.querySelector("#chat-box").innerHTML += `
      <p><strong>Sen:</strong> ${userText}</p>
      <p><strong>Bot:</strong> ${response}</p>
    `;
    inputField.value = "";
    inputField.focus();
});