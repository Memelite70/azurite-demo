document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('.topnavitem');
  links.forEach(link => {
    link.addEventListener('click', function(event){
      var b = event.target.closest('div');
      if (b){
        var a = b.querySelector('a');
        var h = a.getAttribute('href');
      }
      window.location.href=h;
    });
  });
})