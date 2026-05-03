const modal = document.getElementById("blog-modal");
const modalBody = document.getElementById("modal-body");
const close = document.querySelector(".close");

if (close) {
    close.onclick = function () {
        modal.style.display = "none";
    }
}

document.querySelectorAll(".blog-text").forEach((item, index) => {
    item.parentElement.addEventListener("click", function (e) {
        e.preventDefault();

        const contents = [
            `<li>
    <img src="img/BLOG1.png" alt="">
    <div class="blog-text">
        <p>2026.04.02 | お知らせ</p>
        <h4>【焼きたてのお知らせ】朝の焼きたてパンが並びました</h4>
        <p>やさしい朝の光とともに、
        本日も焼きたてのパンが並びました。
        発酵バターの香りが広がるパンを
        ぜひお楽しみください。</p>
    </div>
</li>`,

            `<li>
    <img src="img/BLOG2.png" alt="">
    <div class="blog-text">
        <p>2026.03.28 | お知らせ</p>
        <h4>【毎日のパンづくり】毎朝、丁寧に焼き上げています</h4>
        <p>Maison Verdureでは毎朝、
        店内でパンを焼き上げています。
        こだわりの製法で丁寧に仕上げています。</p>
    </div>
</li>`,

            `<li>
    <img src="img/BLOG3.png" alt="">
    <div class="blog-text">
        <p>2026.03.20 | お知らせ</p>
        <h4>【季節のおすすめ】季節のパンが登場しました</h4>
        <p>季節の素材を使用したパンが
        新しく仲間入りしました。
        ぜひお試しください。</p>
    </div>
</li>`,

            `<li>
    <img src="img/店舗情報.png" alt="">
    <div class="blog-text">
        <p>2026.03.15 | お知らせ</p>
        <h4>【お店のご紹介】緑に囲まれた小さなパン屋</h4>
        <p>緑に囲まれた静かな場所で
        ゆったりとした時間を
        お過ごしいただけます。</p>
    </div>
</li>`
        ];

        modalBody.innerHTML = contents[index];
        modal.style.display = "block";
    });
});

// close.onclick = function () {
//     modal.style.display = "none";
// }

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const id = this.getAttribute("href");
        const target = document.querySelector(id);

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

let cartCount = 0;

const cartButtons = document.querySelectorAll(".cart-btn");
const cartCountDisplay = document.getElementById("cart-count");

cartButtons.forEach(button => {
    button.addEventListener("click", function () {

        const productItem = this.closest(".product-item");
        const quantity = productItem.querySelector(".product-qty").value;

        cartCount += parseInt(quantity);

        cartCountDisplay.textContent = cartCount;

    });
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});