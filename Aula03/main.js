let listaJogos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktS_wfPJ0XOzN9H1fRD8V5__MLgznxrjxow&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRPqMS8qXxqZhDD9_S69UwttGValLs1Gi4Q&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBf7trdS4x94arb1AL0DHVWYRvYOENPPGtqQ&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7sUXX7RYcts4KarbERN5aSpHsBL3kRINcA&usqp=CAU.jpg",
    
  ];
  
  function mostrarJogos() {
    let conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = "";
  
    for (let i = 0; i < listaJogos.length; i++) {
      conteudo.innerHTML += "<img src=" + listaJogos[i] + ">";
    }
  }
  
  function adicionarImagem() {
    let novaURL = document.getElementById("campoURL").value;
    listaJogos.push(novaURL);
    mostrarJogos();
  }
  
  mostrarJogos();
  