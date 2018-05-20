function toggleNavbar() {
  document.getElementById('navbar').classList.toggle('navbar-show')
}

document.getElementById('navbar-toggle').addEventListener('click', toggleNavbar);