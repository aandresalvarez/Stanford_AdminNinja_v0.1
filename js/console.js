



function ShowConsole(){
    $('#shell-wrap').slideDown();
}

function HideConsole(){


    $('#shell-wrap').slideUp();
}

/**
 * @return {number}
 */
function ToggleConsole(){


   //close console if is open
    if( $('#shell-wrap').is(":visible")){

       HideConsole();


       return 0;
   }


    var textarea =$('#edit_area');
    var input_textarea_focus=$("input,textarea");

    //Mirror Text on the Dialog Text Area
    if(input_textarea_focus.is(":focus")){
        $(":focus").each(function() {
            VariablesAN.focused = "#"+this.id;
        });

        //Open console
        ShowConsole();
        //open Editor
        $('#editor_link').click();


        $(VariablesAN.focused).prop("disabled", true );
        textarea.focus();
        var focused_val = $(VariablesAN.focused).val();
        textarea.val(focused_val);
        textarea.keyup(function(){
            $(VariablesAN.focused).val(textarea.val());

        });
        //  $("#quesTextDiv textarea").unbind("focus");
        $(VariablesAN.focused).prop("disabled", false );

    }
    else{
        //Open console

        ShowConsole();
        textarea.val('');
      //  $(".shell-searchbox").focus();

    }

}



//Using Andy123 functionality https://github.com/123andy/redcap-autofill-bookmarklet
function AutofillFoms(){
      VariablesAN.jsCode = document.createElement('script');
    VariablesAN.jsCode.setAttribute('src', 'https://med.stanford.edu/webtools/redcap/redcap_auto_fill.js');
    document.body.appendChild(VariablesAN.jsCode);
    HideConsole();
}


//get URL params

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


// add a new record to the current project
function AddNewRecord(redcap_path_root){
    VariablesAN.pid=getParameterByName('pid');
    if(VariablesAN.pid!==null){
        $.get( VariablesAN.geturl_ajax, function( data ) {
            //$( ".result" ).html( data );
            VariablesAN.NewRecordId=data;
            console.log(data);
            //var json_parsed = JSON.parse(data);
            window.location.href = redcap_path_root+"DataEntry/record_home.php?pid="+VariablesAN.pid+"&id="+VariablesAN.NewRecordId;
        });
    }
}


function GoToCodeBook(redcap_path_root){
    VariablesAN.pid=getParameterByName('pid');
    window.location.href = redcap_path_root+"Design/data_dictionary_codebook.php?pid="+VariablesAN.pid;
}

function GoToOnlineDesigner(redcap_path_root){
    VariablesAN.pid=getParameterByName('pid');
    window.location.href = redcap_path_root+"Design/online_designer.php?pid="+VariablesAN.pid;
}


function GoToCustom(redcap_path_root,url){
    VariablesAN.pid=getParameterByName('pid');
    window.location.href = url;
}




function Search(string) {

    if(Number.isInteger(string) && string>0 && string< VariablesAN.Max_Pid) {
        window.location.href = VariablesAN.redcap_path_root+"ProjectSetup/index.php?pid="+string;

    }

    

//if is numeric then IRB
    //else  pid

    // if survey hash
    //if searchbox
    //if project name.









}