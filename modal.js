
const modal = document.getElementById('pop');

const dugme = document.getElementById('dugme');

const zatvori = document.getElementById('zatvori');

dugme.onclick = function() {
    modal.style.display = "block";
    dugme.style.display = "none";
  }

  zatvori.onclick = function() {
    modal.style.display = "none";
    dugme.style.display = "block";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      dugme.style.display = "block";
    }
  }