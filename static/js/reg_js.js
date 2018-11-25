var VaildName = document.getElementById('VaildName');
var VaildPsw = document.getElementById('VaildPsw');
var VaildPsw2 = document.getElementById('VaildPsw2');
var VaildEmail = document.getElementById('VaildEmail');

var inputPsw = document.getElementById('inputPsw');
var inputPsw2 = document.getElementById('inputPsw2');

function validate_required(field, alerttxt)
{
    with (field)
    {
        if (value == null || value == "")
        {
            if (field == inputName)
                VaildName.innerText = alerttxt;
            if (field == inputPsw)
                VaildPsw.innerText = alerttxt;
            if (field == inputEmail)
                VaildEmail.innerText = alerttxt;
            if (field == inputTel)
                VaildTel.innerText = alerttxt;
            return false;
        }
        else
        {
            return true;
        }
    }
}

function validate_form(thisform)
{
    with (thisform)
    {
        if (validate_required(inputName,"*warming!") == false)
        {
            inputName.focus();
            return false;
        }
        if (validate_required(inputPsw,"*warming!") == false)
        {
            inputPsw.focus();
            return false;
        }
        if (inputPsw.value != inputPsw2.value)
        {
            VaildPsw2.innerText = "*wrong!"
            return false;
        }
        if (validate_required(inputEmail,"*warming!") == false)
        {
            inputEmail.focus();
            return false;
        }
        if (validate_required(inputTel,"*warming!") == false)
        {
            inputTel.focus();
            return false;
        }
    }
}
