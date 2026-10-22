
/* =========================================
   ALL-STARS WIKI — INTERAÇÕES
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.getElementById("lightboxClose");

    // MENU PARA CELULARES
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            const isOpen = sidebar.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Fechar menu" : "Abrir menu"
            );
        });

        sidebar.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                sidebar.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menu");
            });
        });
    }

    // DESTAQUE DA SEÇÃO ATUAL NA NAVEGAÇÃO
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // IMAGENS: TRATAMENTO DE ARQUIVOS AUSENTES
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("error", () => {
            if (img.dataset.fallbackShown === "true") return;

            img.dataset.fallbackShown = "true";

            const placeholder = document.createElement("div");
            placeholder.className = "image-placeholder";
            placeholder.setAttribute("role", "img");
            placeholder.setAttribute(
                "aria-label",
                "Espaço reservado para uma imagem"
            );

            const symbol = document.createElement("span");
            symbol.textContent = "✦";

            const message = document.createElement("p");
            message.textContent = "Adicione sua arte aqui";

            placeholder.append(symbol, message);

            img.replaceWith(placeholder);
        }, { once: true });

        // Se a imagem já estiver carregada, não precisa de fallback.
    });

    // ABRIR A GALERIA AMPLIADA
    document.querySelectorAll(".gallery-image").forEach(img => {
        img.addEventListener("click", () => {
            if (img.dataset.fallbackShown === "true") return;
            if (!img.isConnected || !img.src) return;
            if (img.naturalWidth === 0) return;

            const figure = img.closest("figure");
            const caption = figure?.querySelector("figcaption");

            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt || "Imagem ampliada";
            lightboxCaption.textContent =
                caption?.textContent || img.alt || "";

            lightbox.classList.add("open");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
            lightboxClose.focus();
        });
    });

    // FECHAR A GALERIA
    function closeLightbox() {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImage.src = "";
        document.body.style.overflow = "";
    }

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", event => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && lightbox.classList.contains("open")) {
            closeLightbox();
        }
    });
});
