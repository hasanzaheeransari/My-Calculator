function getNumber(num)
{
    var results = document.getElementById("result");
    results.value += num;
    
}

function clearResult(){
    var getResult = document.getElementById("clear");
    result.value = "";
}

function getResult()
{
    var result = document.getElementById("result");
    result.value = eval(result.value);
}