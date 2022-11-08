function verif(username, cin, email, niveau , modules){

    finaleOne = username.length !== 0;
    if(cin.length === 0)
        finaleOne = false ;
    if(email.length === 0)
        finaleOne = false;
    if(cin.length !== 8 || isNaN(+cin))
        finaleOne = false ;
    if((email.indexOf("@")===-1))
        finaleOne = false ;
    if(modules.trim().split(/\r\n|\r|\n/).length > 2)
        finaleOne = false ;
    if (finaleOne)
        document.getElementById("finalone").innerHTML="Inscription achévée!!"
    else
        document.getElementById("finalone").innerHTML="Inscription Non achévée!!"
}