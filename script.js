async function checkSentiment() {
  let text = document.getElementById("userInput").value;

  if (text.trim() === "") {
    document.getElementById("result").innerText = "Please enter some text!";
    return;
  }

  try {
    let response = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text })
    });

    let data = await response.json();

    if (data.error) {
      document.getElementById("result").innerText = data.error;
    } else {
      document.getElementById("result").innerText =
        `Sentiment: ${data.sentiment} (Score: ${data.score.toFixed(2)})`;
    }
  } catch (err) {
    document.getElementById("result").innerText = "Error connecting to backend!";
  }
}

