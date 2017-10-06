function message()
{
    alert("Hello World");
}

function generate()
{
    var x = document.getElementById("length").value;
    if (x > 24)
    {
        alert("Broj ne moze da bude veci od 24");
        return;
    }
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-"];
    var output = "";
    
    var upper = document.getElementById("upper");
    var lower = document.getElementById("lower");
    var num = document.getElementById("nums");
    var symbols = document.getElementById("symbols");
    
    if (upper.checked)
    {
        for (i = 0; i < 26; i++)
        {
            output += uppercase[i];
        }
    }
    if (lower.checked)
    {
        for (i = 0; i < 26; i++)
        {
            output += lowercase[i];
        }
    } 
    if (num.checked)
    {
        for (i = 0; i < 10; i++)
        {
            output += nums[i];
        }
    } 
    if (symbols.checked)
    {
        for (i = 0; i < 14; i++)
        {
            output += symbol[i];
        }
    }
    //document.getElementById("output").value = output;
    var password = "";
    var randomNumber;
    
    for (i = 0; i < x; i++)
    {
        randomNumber = Math.floor(Math.random() * output.length);
        password += output[randomNumber];
    }
    
    document.getElementById("output").value = password;
    document.getElementById("output").style.color = getRandomColor();
    //alert(password);
}

function getRandomColor()
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
