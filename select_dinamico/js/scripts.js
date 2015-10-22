  function SomenteNumero(e){
      var tecla=(window.event)?event.keyCode:e.which;   
      if((tecla>47 && tecla<58)) return true;
      else{
        if (tecla==8 || tecla==0) return true;
    else  return false;
      }
  }


  //script para exibir a div com a imagem "carregando"
  function confirmJquery(nmDiv, nmClasse) {
      $(document).ready(function() {
          $(nmDiv).dialog({
              autoOpen: false,
              modal: true,
              minHeight: 50,
              minWidth: 250,
              resizable: false,

              draggable: false
          });
      });
      $(nmClasse).click(function(e) {
          e.preventDefault();
          var element = $(nmClasse).get(0).nodeName;
          var targetUrl;
          if(element == 'A'){
              targetUrl = $(this).attr("href");
          } else{
              targetUrl = $(this).attr("onclick");
          }
   
          $(nmDiv).dialog({
              buttons : {
                  "Sim" : function() {
                      window.location = targetUrl;
                  },
                  "Não" : function() {
                      $(this).dialog("close");
                  }
              }
          });
          $(nmDiv).dialog("open");
      });
  }






  //script para habilitar ou desabilitar o input do crítica
  function show_input_critica(){
  if (document.getElementById('import').checked) {
              document.getElementById('data').setAttribute('disabled', 'disabled');
          } else {
              document.getElementById('data').removeAttribute('disabled');
          }
  } 

  //script para habilitar ou desabilitar o input do crítica
  function show_textarea(){
  if (document.getElementById('show').checked) {
              document.getElementById('text').setAttribute('disabled', 'disabled');
          } else {
              document.getElementById('text').removeAttribute('disabled');
          }
  } 

  function checar() { 

  campo1 = document.form.nota1; 
  campo2 = document.form.nota2; 
  campo3 = document.form.nota3; 
  campo4 = document.form.nota4; 
  campo5 = document.form.nota5; 
  campo6 = document.form.nota6; 
  campo7 = document.form.nota7; 
  campo8 = document.form.nota8; 
  campo9 = document.form.nota9; 
  campo10 = document.form.nota10; 

  valor1=campo1.value * 2/2; 
  valor2=campo2.value * 2/2;
  valor3=campo3.value * 2/2;
  valor4=campo4.value * 2/2;
  valor5=campo5.value * 2/2;
  valor6=campo6.value * 2/2;
  valor7=campo7.value * 2/2;
  valor8=campo8.value * 2/2;
  valor9=campo9.value * 2/2;
  valor10=campo10.value * 2/2;

  document.form.total.value=valor1+valor2+valor3+valor4+valor5+valor6+valor7+valor8+valor9+valor10; 

    if (document.form.total.value >= 91){
      document.form.status_nota.value='Excelente';
    } else if (document.form.total.value >= 81){
      document.form.status_nota.value='Muito Bom';
    } else if (document.form.total.value >= 71){
      document.form.status_nota.value='Bom';
    } else if (document.form.total.value >= 50){
      document.form.status_nota.value='Regular';
    } else{
      document.form.status_nota.value='Ruim';
    }

  } 


  //formatação da tabela de exibição de usuários do sistema
  $(document).ready(function() {
    oTable = $('#example').dataTable({
      "bPaginate": true,
      "bJQueryUI": true,
      "sPaginationType": "full_numbers",
          
     
      "oLanguage": {
        "sProcessing":   "Processando...",
        "sLengthMenu":   "Mostrar _MENU_ registros",
        "sZeroRecords":  "Não foram encontrados resultados",
        "sInfo":         "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        "sInfoEmpty":    "Mostrando de 0 até 0 de 0 registros",
        "sInfoFiltered": "(filtrado de _MAX_ registros no total)",
        "sInfoPostFix":  "",
        "sSearch":       "Buscar:",
        "sUrl":          "",
        "oPaginate": {
          "sFirst":    "Primeiro",
          "sPrevious": "Anterior",
          "sNext":     "Seguinte",
          "sLast":     "Último"
      }
    }

    });
  });

  //Variáveis globais
  var _loadTimer	= setInterval(__loadAnima,18);
  var _loadPos	= 0;
  var _loadDir	= 2;
  var _loadLen	= 0;

  //Anima a barra de progresso
  function __loadAnima(){
      var elem = document.getElementById("barra_progresso");
      if(elem != null){
          if (_loadPos==0) _loadLen += _loadDir;
          if (_loadLen>32 || _loadPos>79) _loadPos += _loadDir;
          if (_loadPos>79) _loadLen -= _loadDir;
          if (_loadPos>79 && _loadLen==0) _loadPos=0;
          elem.style.left		= _loadPos;
          elem.style.width	= _loadLen;
      }
  }

  //Esconde o carregador


  $().ready(function () {
      $('#link1').show();
      $('[id$=link1]').click(function () {
          $('#MsgAguarde').show();
      });
  });

//clonar formulario
  function adicionar(){
  var ElementoClonado = $(this.parentNode).clone(); //clona o elemento
  var str = $(ElementoClonado).children('input').eq(0).attr('name').split("["); //divide o name por "["
  console.log(str);
  var intQtd = parseInt(str[2].split("]")[0]); //resgata o numero entre "[" e "]"
  console.log(intQtd);
  var newName = "produtos[qtd]["+(intQtd+1)+"]"; //novo valor name somado +1 do original
  ElementoClonado.children('input').eq(0).attr('name', newName); //seta o novo name para o elemento clonado
  $('.wrapper').append(ElementoClonado);
  $('.add').on("click", adicionar);
  $('.remove').on("click", remover);
  $(this).unbind("click");
}
function remover(){
  $(this.parentNode).remove();
}
$('.add').on("click", adicionar);
$('.remove').on("click", remover);