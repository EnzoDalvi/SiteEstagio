window.addEventListener("load",()=>{
    let long;
    let lati;
    let temperaturaatual = document.getElementById(`temperatura`);
    let abertofechado = document.getElementById('ab/fc');
    let climaatual = document.getElementById(`Clima`);
    let esc = document.getElementById("form")
    let msg =document.getElementById("fechado");
   
    var d = new Date();
    var h = d.getHours();

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
           
            long =position.coords.longitude;
            lati=position.coords.latitude;
            
            //chave = 5306124924bcbf06155086a199a9ee98
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=5306124924bcbf06155086a199a9ee98&lang=pt_br`;
            
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
                var{temp} =data.main;
                var clima =  data[`weather`][0][`description`];
                
                climaatual.textContent= clima ;
                
                var x = temp;
                x = temp - 273.15;
                x = Math.round(x);
                temperaturaatual.textContent = x;
                
                if(h>=8 && h<23){
                    abertofechado.textContent="Aberto";
                }
                else{
                    abertofechado.textContent="Fechado";
                    esc.hidden=true;
                    msg.hidden=false;
                }
            });
        });
    }else{
        alert("Recarregue a Pagina e Permita e Libere o Uso da Localização");
    }
});

function salvar()
{
    var p1 = getElementById("P1");
    var r1 = getElementById("R1");
    var s1 = getElementById("S1");

    var pao = element.getAttribute("P");
    var Rech = element.getAttribute("R");
    var SAL= element.getAttribute("S");
    
    p1.textContent = pao;
    r1.textContent= Rech;
    s1.textContent =SAL;
   
}