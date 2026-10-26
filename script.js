const WHATSAPP_NUMBER = "553180255636";

const products = [
  {id:1,name:"Nick Colorido FF",category:"Nicks",price:23.50,description:"Nick colorido, 60 mil seguidores, avatares e banners exclusivos, emblema nível 6 e Craftland nível 6.",label:"PERSONALIZAÇÃO",initial:"N"},
  {id:2,name:"Guilda Level 7",category:"Free Fire",price:65,description:"Criação de guilda com nome escolhido ou evolução da sua guilda atual até o level 7. Prazo previsto conforme as regras do jogo.",label:"GUILDA",initial:"G7"},
  {id:3,name:"Sensi VIP de Outubro",category:"Free Fire",price:8.50,description:"Configuração de sensibilidade para iOS e Android. Não é cheat.",label:"SENSIBILIDADE",initial:"S"},
  {id:4,name:"Conta Bot Sasuke",category:"Free Fire",price:15,description:"Skin Sasuke da parceria Naruto. Estoque informado: 10 unidades. Vínculo via token com Gmail novo, troca de nick e conta level 15+.",label:"CONTA",initial:"FF"},
  {id:5,name:"Likes Full Power",category:"Free Fire",price:12,description:"Pacote de 1.500 a 2.000 likes. Entrega via ID.",label:"LIKES",initial:"♥"},
  {id:6,name:"Peitoral Tatuagem Braço Cheio",category:"Free Fire",price:22,description:"Valor por unidade. Envio via token.",label:"PERSONALIZAÇÃO",initial:"T"},
  {id:7,name:"Conjunto Comandante Rosa",category:"Free Fire",price:36,description:"Pacote do conjunto Comandante Rosa. Envio via token.",label:"PACOTE",initial:"R"},
  {id:8,name:"Emote Desfilando Raiva",category:"Free Fire",price:27,description:"Emote para sua coleção. Envio via token.",label:"EMOTE",initial:"E"},
  {id:9,name:"Ninjas Preto e Branco",category:"Free Fire",price:25,description:"Revenda da Alaska. Valor por unidade. Envio via token.",label:"PACOTE",initial:"N"},
  {id:10,name:"200 Diamantes",category:"Free Fire",price:10.50,description:"Diamantes Free Fire. Confira os limites antes da compra.",label:"DIAMANTES",initial:"200"},
  {id:11,name:"620 Diamantes",category:"Free Fire",price:23,description:"Diamantes Free Fire. Confira os limites antes da compra.",label:"DIAMANTES",initial:"620"},
  {id:12,name:"930 Diamantes",category:"Free Fire",price:36,description:"Diamantes Free Fire. Confira os limites antes da compra.",label:"DIAMANTES",initial:"930"},
  {id:13,name:"1001 Diamantes",category:"Free Fire",price:37,description:"Diamantes Free Fire. Confira os limites antes da compra.",label:"DIAMANTES",initial:"1001"},
  {id:14,name:"1040 Diamantes",category:"Free Fire",price:38,description:"Diamantes Free Fire. Confira os limites antes da compra.",label:"DIAMANTES",initial:"1040"},
  {id:15,name:"1276 Diamantes",category:"Free Fire",price:43,description:"Diamantes Free Fire. Confira os limites antes da compra.",label:"DIAMANTES",initial:"1276"},
  {id:16,name:"2120 Diamantes",category:"Free Fire",price:68,description:"Diamantes Free Fire. Confira os limites antes da compra.",label:"DIAMANTES",initial:"2120"},
  {id:17,name:"4360 Diamantes",category:"Free Fire",price:140,description:"Diamantes Free Fire. Confira os limites antes da compra.",label:"DIAMANTES",initial:"4360"},
  {id:18,name:"5300 Diamantes",category:"Free Fire",price:180,description:"Diamantes Free Fire. Confira os limites antes da compra.",label:"DIAMANTES",initial:"5300"},
  {id:19,name:"9800 Diamantes",category:"Free Fire",price:290,description:"Diamantes Free Fire. Confira os limites antes da compra.",label:"DIAMANTES",initial:"9800"},
  {id:20,name:"11200 Diamantes",category:"Free Fire",price:295,description:"Diamantes Free Fire. Confira os limites antes da compra.",label:"DIAMANTES",initial:"11200"},
  {id:21,name:"22400 Diamantes",category:"Free Fire",price:590,description:"Diamantes Free Fire. Confira os limites antes da compra.",label:"DIAMANTES",initial:"22400"},
  {id:22,name:"Emote Dab",category:"Free Fire",price:12,description:"Emote via ID, sem precisar adicionar. Código 210.",label:"EMOTE VIA ID",initial:"D"},
  {id:23,name:"Emote Tubarão Bebê",category:"Free Fire",price:14.50,description:"Emote via ID, sem precisar adicionar. Código 211.",label:"EMOTE VIA ID",initial:"T"},
  {id:24,name:"Emote Aplauso",category:"Free Fire",price:11,description:"Emote via ID, sem precisar adicionar. Código 212.",label:"EMOTE VIA ID",initial:"A"},
  {id:25,name:"Emote Olá",category:"Free Fire",price:10,description:"Emote via ID, sem precisar adicionar. Código 213.",label:"EMOTE VIA ID",initial:"O"},
  {id:26,name:"Emote LOL",category:"Free Fire",price:12.50,description:"Emote via ID, sem precisar adicionar. Código 214.",label:"EMOTE VIA ID",initial:"LOL"},
  {id:27,name:"Emote Agite Comigo",category:"Free Fire",price:13.50,description:"Emote via ID, sem precisar adicionar. Código 215.",label:"EMOTE VIA ID",initial:"A"},
  {id:28,name:"Emote O Cisne",category:"Free Fire",price:15,description:"Emote via ID, sem precisar adicionar. Código 216.",label:"EMOTE VIA ID",initial:"C"},
  {id:29,name:"Emote Flores do Amor",category:"Free Fire",price:0,description:"Indisponível no momento.",label:"INDISPONÍVEL",initial:"♡",unavailable:true}
];

const grid = document.querySelector("#product-grid");
const money = value => value > 0
  ? value.toLocaleString("pt-BR", {style:"currency",currency:"BRL"})
  : "Indisponível";

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function orderMessage(product) {
  return `Olá! Vim pelo site da Nayomi Vendas e quero pedir: ${product.name}. Valor anunciado: ${money(product.price)}. Gostaria de confirmar a disponibilidade e a forma de entrega.`;
}

function renderProducts(category = "Todos") {
  const visible = category === "Todos"
    ? products
    : products.filter(product => product.category === category);

  grid.innerHTML = visible.map(product => `
    <article class="product-card">
      <div class="product-art">
        <span class="product-tag">${product.label}</span>
        <span class="product-initial">${product.initial}</span>
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-bottom">
          <span class="price">${money(product.price)}</span>
          <button class="order-button" data-order="${product.id}" ${product.unavailable ? "disabled" : ""}>
            ${product.unavailable ? "Indisponível" : "Pedir pelo WhatsApp ↗"}
          </button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-order]:not(:disabled)").forEach(button => {
    button.addEventListener("click", () => {
      const product = products.find(item => item.id === Number(button.dataset.order));
      if (product) openWhatsApp(orderMessage(product));
    });
  });
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.category);
  });
});

document.querySelector("#contact-button").addEventListener("click", event => {
  event.preventDefault();
  openWhatsApp("Olá! Vim pelo site da Nayomi Vendas e gostaria de conhecer os produtos.");
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderProducts();
