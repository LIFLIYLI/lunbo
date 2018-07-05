var bcc=$('#bt>span')
for (i=0;i<bcc.length;i++){
  $(bcc[i]).on('click',function(x){
    var index=$(x.currentTarget).index()
     var px=index * -275    
    $(bcc[index].parentNode.children).removeClass('qq')
     $(bcc[index]).addClass('qq')     
     $('#imgs').css({
      transform: 'translate(' + px + 'px)'      
     })
     n=index
  })  
}

var n=0
let t=bcc.length
bcc.eq(n%t).trigger('click')
function time(){
  return setInterval (()=>{
  n=n+1
bcc.eq(n%t).trigger('click')
},2000)
}

var settime=time()
$('.window').on('mouseenter',function(){
 window.clearInterval(settime)
})
$('.window').on('mouseleave',function(){
  settime=time()
})
 