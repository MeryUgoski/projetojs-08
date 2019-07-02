$(document).ready(function(){
  const botao = $("#input-button");
  const url = 'https://api.github.com/users/';
  let pontos = 0;
  const contarPontos = $("#score");

  botao.click(function() {
    let username = $("#input-user").val();
     
        $.getJSON(url + username, function(user){
           somar(pontos);
           adicionarUsuario(user);
           })
        .fail(function() {
           subtrair(pontos);
           alert("Usuario Inexistente");
           });
           

        function somar(pontos) {
            pontos++;
            contarPontos.html(pontos);
        }   
    
        function subtrair(pontos) {
            pontos--;
            contarPontos.html(pontos);
        }
        
        function adicionaUsuario(receber_user){
            $("#add-data").append(` 
            <div class = "col-sm-3 mb-3" >
                <div class="card" style="width: 100%;">
                    <img src="${receber_user.avatar_url}" class="card-img-top" alt="card image tap">
                    <div class="card-body">
                        <p class="card-text">${receber_user.name}</p>
                    </div>
                </div>
            </div>
            `);      
        }
        
    });
});