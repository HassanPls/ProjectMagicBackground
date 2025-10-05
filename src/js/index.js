function setLoading(isLoading) {
  const btn = document.getElementById("generate-btn");

  if (isLoading) {
    btn.innerHTML = "Gerando Background Mágico...";
  } else {
    btn.innerHTML = "Gerar Background Mágico";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-group");
  const textArea = document.getElementById("description");
  const htmlCode = document.getElementById("html-code");
  const cssCode = document.getElementById("css-code");
  const preview = document.getElementById("preview-section");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const description = textArea.value.trim();

    if (!description) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://pedroluiz-123.app.n8n.cloud/webhook/gerar-fundo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description }),
        }
      );

      const data = await response.json();

      htmlCode.textContent = data.code || "Nenhum código HTML gerado.";
      cssCode.textContent = data.style || "Nenhum código CSS gerado.";

      preview.style.display = "block";
      preview.innerHTML = data.code;

      let styleTag = document.getElementById("dynamic-style");
      if (styleTag) styleTag.remove();
      if (data.style) {
        styleTag = document.createElement("style");
        styleTag.id = "dynamic-style";

        styleTag.textContent = data.style;
        document.head.appendChild(styleTag);
      }
    } catch (error) {
      console.error("Erro ao gerar o fundo:", error);
      htmlCode.textContent = "Erro ao gerar o código HTML.";
      cssCode.textContent = "Erro ao gerar o código CSS.";
    } finally {
      setLoading(false);
    }
  });
});
