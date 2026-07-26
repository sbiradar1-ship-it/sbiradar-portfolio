document.querySelectorAll('[data-proj-toggle]').forEach(function(head){
  head.addEventListener('click', function(){
    var proj = head.closest('[data-proj]');
    var body = proj.querySelector('.proj-body');
    var isOpen = proj.classList.contains('is-open');
    document.querySelectorAll('[data-proj]').forEach(function(p){
      p.classList.remove('is-open');
      p.querySelector('.proj-body').style.maxHeight = null;
    });
    if(!isOpen){
      proj.classList.add('is-open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});
// open the first (video search) project by default
document.addEventListener('DOMContentLoaded', function(){
  var first = document.querySelector('[data-proj]');
  if(first){ first.querySelector('[data-proj-toggle]').click(); }
});

// Demo videos: each project/case study has a `media/demo.mp4` slot ready to go.
// Until a file actually exists there, the wrapping .proj-media block stays
// hidden (see CSS) so an empty folder never shows a broken video box.
// Drop a demo.mp4 (and optional poster.jpg) into the matching media/ folder
// and it will appear here automatically — no HTML changes needed.
document.querySelectorAll('[data-demo-video]').forEach(function(wrap){
  var video = wrap.querySelector('video');
  if(!video) return;
  video.addEventListener('loadedmetadata', function(){
    wrap.style.display = 'block';
    var body = wrap.closest('.proj-body');
    if(body && body.parentElement.classList.contains('is-open')){
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});
