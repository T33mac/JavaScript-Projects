sqColors = ["blue","red","yellow","white"];
sqColor = sqColors[Math.floor(Math.random() * sqColors.length)];

document.getElementById("sq1").addEventListener('click', changeColor);
document.getElementById("sq2").addEventListener('click', changeColor);
document.getElementById("sq3").addEventListener('click', changeColor);
document.getElementById("sq4").addEventListener('click', changeColor);
document.getElementById("sq5").addEventListener('click', changeColor);
document.getElementById("sq6").addEventListener('click', changeColor);
document.getElementById("sq7").addEventListener('click', changeColor);
document.getElementById("sq8").addEventListener('click', changeColor);
document.getElementById("sq9").addEventListener('click', changeColor);
document.getElementById("sq10").addEventListener('click', changeColor);

document.getElementById("sq11").addEventListener('click', changeColor);
document.getElementById("sq12").addEventListener('click', changeColor);
document.getElementById("sq13").addEventListener('click', changeColor);
document.getElementById("sq14").addEventListener('click', changeColor);
document.getElementById("sq15").addEventListener('click', changeColor);
document.getElementById("sq16").addEventListener('click', changeColor);
document.getElementById("sq17").addEventListener('click', changeColor);
document.getElementById("sq18").addEventListener('click', changeColor);
document.getElementById("sq19").addEventListener('click', changeColor);
document.getElementById("sq20").addEventListener('click', changeColor);

document.getElementById("sq21").addEventListener('click', changeColor);
document.getElementById("sq22").addEventListener('click', changeColor);
document.getElementById("sq23").addEventListener('click', changeColor);
document.getElementById("sq24").addEventListener('click', changeColor);
document.getElementById("sq25").addEventListener('click', changeColor);
document.getElementById("sq26").addEventListener('click', changeColor);
document.getElementById("sq27").addEventListener('click', changeColor);
document.getElementById("sq28").addEventListener('click', changeColor);
document.getElementById("sq29").addEventListener('click', changeColor);
document.getElementById("sq30").addEventListener('click', changeColor);

document.getElementById("sq31").addEventListener('click', changeColor);
document.getElementById("sq32").addEventListener('click', changeColor);
document.getElementById("sq33").addEventListener('click', changeColor);
document.getElementById("sq34").addEventListener('click', changeColor);
document.getElementById("sq35").addEventListener('click', changeColor);
document.getElementById("sq36").addEventListener('click', changeColor);
document.getElementById("sq37").addEventListener('click', changeColor);
document.getElementById("sq38").addEventListener('click', changeColor);
document.getElementById("sq39").addEventListener('click', changeColor);
document.getElementById("sq40").addEventListener('click', changeColor);

document.getElementById("sq41").addEventListener('click', changeColor);
document.getElementById("sq42").addEventListener('click', changeColor);
document.getElementById("sq43").addEventListener('click', changeColor);
document.getElementById("sq44").addEventListener('click', changeColor);
document.getElementById("sq45").addEventListener('click', changeColor);
document.getElementById("sq46").addEventListener('click', changeColor);
document.getElementById("sq47").addEventListener('click', changeColor);
document.getElementById("sq48").addEventListener('click', changeColor);
document.getElementById("sq49").addEventListener('click', changeColor);
document.getElementById("sq50").addEventListener('click', changeColor);

document.getElementById("sq51").addEventListener('click', changeColor);
document.getElementById("sq52").addEventListener('click', changeColor);
document.getElementById("sq53").addEventListener('click', changeColor);
document.getElementById("sq54").addEventListener('click', changeColor);
document.getElementById("sq55").addEventListener('click', changeColor);
document.getElementById("sq56").addEventListener('click', changeColor);
document.getElementById("sq57").addEventListener('click', changeColor);
document.getElementById("sq58").addEventListener('click', changeColor);
document.getElementById("sq59").addEventListener('click', changeColor);
document.getElementById("sq60").addEventListener('click', changeColor);


function changeColor() {
    this.style.backgroundColor = sqColor;
    window.setTimeout(function () {
        window.location.reload();
      }, 1000);
}

function timeR() {
    window.location.reload();
}
