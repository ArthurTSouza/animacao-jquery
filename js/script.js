/*$("#btnDireita").click(
    function () {
        $("#area").animate({ left: "500px" }).animate({ height: "200px" }, { duration: 1000, complete: () => { alert("Fim da movimentação") } })
    }
)*/


$("#btncima").click(
    function(){
        $("#car").animate({top:"100px"},{duration: "1500"}.css(animate('cima')));
    }
)

$("#btnbaixo").click(
    function(){
        $("#car").animate({bottom:"100px"},{duration: "1500"}.css(animate('baixo')));
    }
)

$("#btnleft").click(
    function(){
        $("#car").animate({left:"100px"},{duration: "1500"}.css(animate('esquerda')));
    }
)

$("#btnright").click(
    function(){
        $("#car").animate({left:"100px"},{duration: "1500"}.css(animate('direita')));
    }
)