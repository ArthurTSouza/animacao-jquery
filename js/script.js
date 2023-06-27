/*$("#btnDireita").click(
    function () {
        $("#area").animate({ left: "500px" }).animate({ height: "200px" }, { duration: 1000, complete: () => { alert("Fim da movimentação") } })
    }
)*/


$("#btncima").click(
    function(){
        $("#car").animate({top:"-0.2vh"},{duration: "1500"}).css('animation','cima 2 steps (20)');
    }
)

$("#btnbaixo").click(
    function(){
        $("#car").animate({top:"0.2vh"},{duration: "1500"}).css('animation','baixo 2 steps (20)');
    }
)

$("#btnleft").click(
    function(){
        $("#car").animate({left:"-0.2vw"},{duration: "1500"}).css('animation','esquerda 2 steps (20)');
    }
)

$("#btnright").click(
    function(){
        $("#car").animate({left:"0.2vw"},{duration: "1500"}).css('animation','direita 2 steps (20)');
    }
)