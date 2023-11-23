function validasi() {
	if (document.forms["formcontact"]["nama"].value == "") {
		alert("Nama Tidak Boleh Kosong");
		document.forms["formcontact"]["nama"].focus();
		return false;
	}
	if (document.forms["formcontact"]["email"].value == "") {
		alert("Email Tidak Boleh Kosong");
		document.forms["formcontact"]["email"].focus();
		return false;
	}
	if (document.forms["formcontact"]["option"].selectedIndex < 1) {
		alert("Option tidak bileh kosong");
		document.forms["formcontact"]["option"].focus();
		return false;
	}
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}