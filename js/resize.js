function resize() {
              var client = document.documentElement.clientWidth,
                  list = document.getElementsByClassName('menu_list'),
                  logimg = document.getElementById('img_logo'),
                  slogan = document.getElementById('slogan'),
                  rightbutton = document.getElementsByClassName('owl-prev'),
                  leftbutton = document.getElementsByClassName('owl-next');

                if (client <= 850) {
                  for(i=0;i<list.length;i++) {
                  list[i].style.fontSize = "24px" ;
                  }
                  list[2].style.marginLeft = "4%";
                  logimg.style.display = "none";
                  slogan.style.fontSize = "34px";
                  slogan.style.lineHeight = "36px";
                  leftbutton[0].style.right = "12%";
                  rightbutton[0].style.left = "12%";
                } 
                /*if (client <= 550) {
                  for(i=0;i<list.length;i++) {
                  list[i].style.fontSize = "18px" ;
                  }
                  list[2].style.marginLeft = "4%";
                  logimg.style.display = "none";
                  slogan.style.fontSize = "34px";
                  slogan.style.lineHeight = "36px";
                }*/ else {
                  for(i=0;i<list.length;i++) {
                  list[i].style.fontSize = "28px" ;
                  }
                  logimg.style.display = "block";
                  list[2].style.marginLeft = "29%";
                  slogan.style.fontSize = "48px";
                  slogan.style.lineHeight = "36px";
                  leftbutton[0].style.right = "0";
                  rightbutton[0].style.left = "0";
                }
            }
            resize();