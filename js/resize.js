function resize() {
              var client = document.documentElement.clientWidth,
                  list = document.getElementsByClassName('menu_list'),
                  logimg = document.getElementById('img_logo'),
                  slogan = document.getElementById('slogan');

                if (client <= 850) {
                  for(i=0;i<list.length;i++) {
                  list[i].style.fontSize = "24px" ;
                  }
                  list[2].style.marginLeft = "4%";
                  logimg.style.display = "none";
                  slogan.style.fontSize = "34px";
                  slogan.style.lineHeight = "36px";
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
                }
            }
            resize();