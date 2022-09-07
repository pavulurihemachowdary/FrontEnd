function display(value){
    document.getElementById("result").value+=value;
}
function clears(){
    document.getElementById("result").value="  ";
}
function calculate(){
    var x=document.getElementById('result').value;
    var ans=eval(x);
    document.getElementById('result').value=ans;
}
function remove(){
    var arr=document.getElementById('result').value;
    var newarr=arr.slice(0,-1);
    document.getElementById('result').value=newarr;
}