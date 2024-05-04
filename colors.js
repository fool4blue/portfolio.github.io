const Body = {
  setBackgroundColor:function(target, color) {
    // target.style.backgroundColor = color;  
    $(target).css('backgroundColor', color);
  },
  setTextColor : function(target, color) {
    // target.style.color = color;
    $(target).css('color', color);
  },

}
const Link = {
  setColor : function (color) {
    $('a').css('color',color);
    // var alist = document.querySelectorAll('a');

    // for (let i=0; i < alist.length; i++) {
    //   alist[i].style.color = color;
    // }  
  }
}

function changeTheme(self) {
  var target = document.querySelector('body');

  if (self.value === 'night') {
    Body.setBackgroundColor(target, 'black');
    Body.setTextColor(target, 'white');
    self.value = 'day';
    Link.setColor('yellow');
  }
  else {
    Body.setBackgroundColor(target, 'white');
    Body.setTextColor(target, 'black');
    self.value = 'night';
    Link.setColor('blue');
  }
}
