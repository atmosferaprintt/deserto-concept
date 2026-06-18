// progress bar
var bar=document.getElementById('bar');
if(bar){addEventListener('scroll',function(){
  var h=document.documentElement,max=h.scrollHeight-h.clientHeight;
  bar.style.width=(max>0?(h.scrollTop||document.body.scrollTop)/max*100:0)+'%';
},{passive:true});}
// staggered reveal
var io=new IntersectionObserver(function(es){
  es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.1});
document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(Math.min(i,6)*70)+'ms';io.observe(el);});
