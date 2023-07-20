const unloaded_progress = document.getElementById("unloaded_progress");
const loading_progress = document.getElementById("loading");
const loaded_progress = document.getElementById("loaded_progress");

const upload_image = document.getElementById("upload_image");
const uploaded_image = document.getElementById("uploaded_image");

const upload_btn = document.getElementById("upload_btn");
const submit_btn = document.getElementById("submit_btn");

const marks_span = document.getElementById("marks");

loading_progress.style = "display: none;";
loaded_progress.style = "display: none;";
uploaded_image.style = "display: none;";

upload_btn.addEventListener("click", () => {
  uploaded_image.style = "display: block;";
  upload_image.style = "display: none;";
});

submit_btn.addEventListener("click", () => {
  unloaded_progress.style = "display: none;";
  loading_progress.style = "display: block;";
  setTimeout(() => {
    loading_progress.style = "display: none;";
    loaded_progress.style = "display: block";
    marks_span.innerHTML = "4/5";
    marks_span.style = "color: #00c728;";
  }, 2000);
});
