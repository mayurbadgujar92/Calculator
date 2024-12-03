function clearAllFields(){
 
    //event handler
         
    document.getElementById('n1').value="";
    document.getElementById('n2').value="";
    document.getElementById('op').value="";
    document.getElementById('res').value="";
    
    document.getElementById('n1').focus();
}

function focuscursor(){
    
    document.getElementById('n1').focus();
    // document.getElementById('n1').focus().style.backgroundColor='#FFE0E0'; 
    // document.getElementById('n1').style.borderColor='red';

}

function checkEmptyFields()
{
    if(document.getElementById('n1').value == "")
    {
        alert('Please enter the first number')
        document.getElementById('n1').focus()
        document.getElementById('n1').style.backgroundColor='#FFE0E0';
        // document.getElementById('n1').style.borderColor='#FF2929';
    }

    else if(document.getElementById('n2').value == "")
    {
        alert('Please enter the second number')
        document.getElementById('n2').focus();
    }

    else if(document.getElementById('op').value == "")
    {
        alert('Please select atleast one opration')
        document.getElementById('op').focus();
    }
}

function doTask()
{
    checkEmptyFields()
    txtfirstnum = document.getElementById('n1').value;
    txtsecondnum = document.getElementById('n2').value;
    drpOp = document.getElementById('op').value;

    switch(drpOp)
    {
        case '+':
            result = parseInt(txtfirstnum) + parseInt(txtsecondnum);
            document.getElementById('res').value = result;
        break;

        case '-':
            result = parseInt(txtfirstnum) - parseInt(txtsecondnum);
            document.getElementById('res').value = result;
        break;

        case '*':
            result = parseInt(txtfirstnum) * parseInt(txtsecondnum);
            document.getElementById('res').value = result;
        break;

        case '/':
            result = parseInt(txtfirstnum) / parseInt(txtsecondnum);
            document.getElementById('res').value = result;
        break;

        case '%':
            result = parseInt(txtfirstnum) % parseInt(txtsecondnum);
            document.getElementById('res').value = result;
        break;

    }
}

function button_Disable_OnloadPage()
{
    const doTaskbtn = document.getElementById('btnadd');
    doTaskbtn.disabled = true;
}

function isnumber(e)
{
    var ch = String.fromCharCode(e.which);
    if(!(/[0-9]/.test(ch)))
    {
        e.preventDefault();
    }
}