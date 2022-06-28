
document.getElementById("kedua").style.display = "none";
document.getElementById("ketiga").style.display = "none";

function next1(){
    document.getElementById('pertama').style.display = "none";
    document.getElementById('ketiga').style.display = "none";
    document.getElementById('kedua').style.display = "block";
    }
    function prev1(){
    document.getElementById('kedua').style.display = "none";
    document.getElementById('pertama').style.display = "block";
    }
    function next2(){
    document.getElementById('kedua').style.display = "none";
    document.getElementById('ketiga').style.display = "block";
    }
    function prev2(){
        document.getElementById('kedua').style.display = "block";
        document.getElementById('pertama').style.display = "none";
        document.getElementById('ketiga').style.display = "none";
        }