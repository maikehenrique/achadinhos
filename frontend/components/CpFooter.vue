<template>
  <footer class="footer">
    <div class="footer__main">
      <div class="footer__grid">
        <div class="footer__brand">
          <p class="footer__brand-name">Achadinhos da Internet</p>
          <p class="footer__tagline">Os melhores achados da internet em um só lugar</p>
        </div>

        <div class="footer__nav">
          <h4 class="footer__nav-title">Transparência</h4>
          <ul class="footer__nav-list">
            <li>
              <nuxt-link to="/termos-de-uso" class="footer__link">Termos de uso</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/politica-de-privacidade" class="footer__link">Política de privacidade</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/politicas-de-seguranca" class="footer__link">Políticas de segurança</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="footer__social">
          <h4 class="footer__nav-title">Redes Sociais</h4>
          <div class="footer__social-icons">
            <a href="https://youtube.com/@achadinhos.internet.original" target="_blank" class="footer__social-link" aria-label="YouTube">
              <img src="/youtube.svg" alt="Youtube" class="footer__icon" />
            </a>
            <a href="https://www.instagram.com/achadinhos.internet.ptc" target="_blank" class="footer__social-link" aria-label="Instagram">
              <img src="/instagram.svg" alt="Instagram" class="footer__icon" />
            </a>
            <a href="https://www.tiktok.com/@achadinhos.internet.ptc" target="_blank" class="footer__social-link" aria-label="TikTok">
              <img src="/tiktok.svg" alt="Tik Tok" class="footer__icon" />
            </a>
            <a href="https://k.kwai.com/u/@achadinhos.internet./yC7liN5z" target="_blank" class="footer__social-link" aria-label="Kwai">
              <img src="/kwai.svg" alt="Kwai" class="footer__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p class="footer__copy">© {{ new Date().getFullYear() }} Achadinhos da Internet · Todos os direitos reservados</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CpFooter',
}
</script>

<style>
.footer {
  background-color: var(--footer-background);
  border-top: 3px solid var(--secondary-background-color);
  width: 100%;
}

.footer__main {
  max-width: 1340px;
  margin: 0 auto;
  padding: 40px 20px 32px;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 40px;
}

.footer__brand-name {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 8px;
  letter-spacing: 0.02em;
}

.footer__tagline {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
  max-width: 240px;
}

.footer__nav-title {
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 16px;
}

.footer__nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__link {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s ease;
  display: inline-block;
}

.footer__link:hover {
  color: #ffffff;
}

.footer__social-icons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  transition: background 0.2s ease;
}

.footer__social-link:hover {
  background: rgba(255, 255, 255, 0.18);
}

.footer__icon {
  filter: invert(1);
  height: 18px;
  width: 18px;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 1340px;
  margin: 0 auto;
  padding: 16px 20px;
}

.footer__copy {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
  margin: 0;
  text-align: center;
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer__tagline {
    max-width: 100%;
  }

  .footer__bottom {
    padding: 14px 20px;
  }
}
</style>
