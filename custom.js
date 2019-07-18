window.onload = function(){
    var mainnav = document.getElementById("header");
    var nv = new XMLHttpRequest();
    nv.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            var navg = JSON.parse(this.responseText);
            var nvul = document.createElement("ul");
            for(var i = 0; i<navg.length;i++){
                let nvli = document.createElement("li");
                let nva = document.createElement("a");
                nva.href = "#";
                nvli.appendChild(nva);
                nva.innerText = navg[i].name;
                nvul.appendChild(nvli);

                if(navg[i].children && navg[i].children.length > 0){
                    var nvsul = document.createElement("ul");
                    for(var k = 0; k<navg[i].children.length;k++){
                         var nvsli = document.createElement("li");
                         let nvsa = document.createElement("a");
                            nvsa.href = "#";
                            nvsa.innerText = navg[i].children[k].name;
                             nvsli.appendChild(nvsa);
                            nvsul.appendChild(nvsli);
            }
            nvli.appendChild(nvsul);
                }
               
            }
            mainnav.appendChild(nvul);

        }
    }

    nv.open("GET","mainnav.json",true);
    nv.send();



    // this below code belongs to baner animation;

    var banerhand = document.getElementById("banid");
    var bnr = new XMLHttpRequest();
    bnr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(JSON.parse(this.responseText));
            var bnlist = JSON.parse(this.responseText);
            for(var x = 0; x<bnlist.length;x++){
                if(x==0){
                    var dv = document.createElement("div");
                    var dvim = document.createElement("img");
                    dv.classList = "item active banermod";
                    dvim.src = bnlist[x].ban;
                    dvim.alt = bnlist[x].alt;
                    dv.appendChild(dvim);
                    banerhand.appendChild(dv);
                }
                else{
                    var dv = document.createElement("div");
                    var dvim = document.createElement("img");
                    dv.classList = "item banermod";
                    dvim.src = bnlist[x].ban;
                    dvim.alt = bnlist[x].alt;
                    dv.appendChild(dvim);
                    banerhand.appendChild(dv);
                }
            }
        }
    }

    bnr.open("GET","baner.json",true);
    bnr.send();



    // <div class="item active banermod"> <img src="images/0c72f5056fc1a3b3.jpg" alt="Los Angeles"> </div>
    // <div class="item banermod"> <img src="images/58eb6e727e9e5a40.jpg" alt="Chicago"> </div>
    // <div class="item banermod"> <img src="images/766d06d748574825.jpg" alt="New york"> </div>

// deals of the day;
    
      var deals = document.getElementById("dealsid");
    var dealday = new XMLHttpRequest();
    dealday.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(JSON.parse(this.responseText));
            var deallist = JSON.parse(this.responseText);
            for(var x = 0; x<deallist.length;x++){
                if(x==0){
                    var ddv = document.createElement("div");
                    var ddvim = document.createElement("img");
                     var ddvname1 = document.createElement("name1");
                     var ddvname2 = document.createElement("name2");
                    
                    ddv.classList = "item active dealmod";
                    ddvim.src = deallist[x].dimg;
                    ddvim.alt = deallist[x].alt;
                    
                    ddvname1.src =  deallist[x].name1;
                    ddvname2.src = deallist[x].name2;
                    
                    ddv.appendChild(ddvim);
                    deals.appendChild(ddv);
                }
                else{
                    var ddv = document.createElement("div");
                    var ddvim = document.createElement("img");
                    ddv.classList = "item dealmod";
                     ddvim.src = deallist[x].dimg;
                    ddvim.alt = deallist[x].alt;
                    
                    ddvname1.src =  deallist[x].name1;
                    ddvname2.src = deallist[x].name2;
                    
                    ddv.appendChild(ddvim);
                    deals.appendChild(ddv);
            }
        }
    }

    bnr.open("GET","deals.json",true);
    bnr.send();
    
    
    
}