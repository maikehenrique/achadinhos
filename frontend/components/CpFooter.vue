<template>
  <div class="footer">
    <div class="footer__content md:flex">
      <div class="col-12 md:col-4">
        <h3 class="footer__title mb-0">Achadinhos da Internet</h3>
        <p class="footer__text w-6">
          Os Melhores Achados da Internet em um Só Lugar
        </p>
      </div>
      <div class="col-12 md:col-4">
        <!-- <h3 class="footer__title">Nossas Páginas</h3> -->
      </div>
      <div class="col-12 md:col-4">
        <h3 class="footer__title pb-2">Redes Sociais</h3>
        <div>
          <a
            href="https://youtube.com/@achadinhos.internet.original"
            target="_blank"
          >
            <img src="/youtube.svg" alt="Youtube" class="footer__icon" />
          </a>
          <a
            href="https://www.instagram.com/achadinhos.internet.ptc"
            target="_blank"
          >
            <img src="/instagram.svg" alt="Instagram" class="footer__icon" />
          </a>
          <a
            href="https://www.tiktok.com/@achadinhos.internet.ptc"
            target="_blank"
          >
            <img src="/tiktok.svg" alt="Tik Tok" class="footer__icon"
          /></a>
          <a
            href="https://k.kwai.com/u/@achadinhos.internet./yC7liN5z"
            target="_blank"
          >
            <img src="/kwai.svg" alt="Kwai" class="footer__icon" />
          </a>
        </div>
      </div>
    </div>
    <div>
      <p class="footer__text text-center pb-2">
        © Todos os direitos reservados - Achadinhos da Internet 2024
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CpFooter',
}
</script>

<style>
.footer {
  background-color: var(--background-color);
  min-height: 100px;
}

.footer__content {
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
}

.footer__title {
  color: #d27def;
  font-weight: bold;
}

.footer__text {
  color: white;
}

.footer__icon {
  color: white;
  fill: white;
  filter: invert(1);
  height: 1.6em;
  margin-left: 7px;
  width: 1.6em;
}
</style>
