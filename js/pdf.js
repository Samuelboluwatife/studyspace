const pdfUpload = document.getElementById("pdfUpload");
const pdfFrame = document.getElementById("pdfFrame");
const message = document.getElementById("message")

pdfUpload.addEventListener("change", () => {
    message.textContent = '';
  const file = pdfUpload.files[0];
  if (file && file.type === "application/pdf") {
    const fileURL = URL.createObjectURL(file);
    pdfFrame.src = fileURL;
    
  } else {
    alert("Please upload a valid PDF file.");
  }
});
