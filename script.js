/*
  NAYOMI VENDAS
  1) Troque o número abaixo pelo WhatsApp da loja, com código do Brasil (55),
     DDD e número, sem +, espaços ou traços.
  2) Edite os produtos na lista abaixo. Use preços e ofertas reais.
*/
const WHATSAPP_NUMBER = ""; // Exemplo: "5531999999999"

const products = [
  {
    id: 1,
    name: "Nick Colorido",
    category: "Nicks",
    price: 20.00,
    description: "Personalize seu nick. Consulte as opções disponíveis.",
    label: "PERSONALIZAÇÃO",
    initial: "N"
  },
  {
    id: 2,
    name: "Produto Free Fire",
    category: "Free Fire",
    price: 0.00,
    description: "Adicione aqui os detalhes e as condições do produto.",
    label: "FREE FIRE",
    initial: "FF"
  },
  {
    id: 3,
    name: "Assinatura Digital",
    category: "Assinaturas",
    price: 0.00,
    description: "Consulte planos, prazo e disponibilidade antes de comprar.",
    label: "DIGITAL",
    initial: "✦"
  }
];

const grid = document.querySelector("#product-grid");
const money = value => value > 0
  ? value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  : "Consultar";

function orderMessage(product) {
  return `Olá! Vim pelo site da Nayomi Vendas e tenho interesse em: ${product.name}. Gostaria de confirmar o preço e a disponibilidade.`;
}

function openWhatsApp(message) {
  if (!WHATSAPP_NUMBER) {
    alert("Configure o número do WhatsApp da loja no arquivo script.js antes de publicar o site.");
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
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
          <button class="order-button" data-order="${product.id}">Consultar / pedir ↗</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-order]").forEach(button => {
    button.addEventListener("click", () => {
      const product = products.find(item => item.id === Number(button.dataset.order));
      openWhatsApp(orderMessage(product));
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
