<template>
  <div class="policy-page">
    <div class="policy-container">
      <div class="policy-header">
        <h1 class="policy-title">Política de Privacidade</h1>
        <p class="policy-updated">Última atualização: julho de 2025</p>
      </div>

      <div class="policy-content">
        <section class="policy-section">
          <h2>1. Introdução</h2>
          <p>
            O <strong>Achadinhos da Internet</strong> respeita a sua privacidade e está comprometido
            com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de
            Dados (LGPD — Lei nº 13.709/2018).
          </p>
        </section>

        <section class="policy-section">
          <h2>2. Dados Coletados</h2>
          <p>
            Podemos coletar os seguintes tipos de dados ao utilizar nosso site:
          </p>
          <ul>
            <li><strong>Dados de navegação:</strong> páginas visitadas, tempo de permanência, cliques e buscas realizadas;</li>
            <li><strong>Dados técnicos:</strong> endereço IP, tipo de navegador, sistema operacional e dispositivo utilizado;</li>
            <li><strong>Cookies:</strong> utilizados para melhorar a experiência de navegação e exibir conteúdo relevante.</li>
          </ul>
          <p>
            Não coletamos dados pessoais sensíveis como CPF, dados bancários ou senhas.
          </p>
        </section>

        <section class="policy-section">
          <h2>3. Uso dos Dados</h2>
          <p>Os dados coletados são utilizados para:</p>
          <ul>
            <li>Melhorar a experiência do usuário no site;</li>
            <li>Analisar o desempenho e o uso das funcionalidades;</li>
            <li>Personalizar o conteúdo exibido;</li>
            <li>Garantir a segurança e o funcionamento da plataforma.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>4. Cookies</h2>
          <p>
            Utilizamos cookies próprios e de terceiros (como Google Analytics) para analisar o tráfego
            e personalizar a experiência. Você pode desativar os cookies nas configurações do seu
            navegador, mas isso pode afetar algumas funcionalidades do site.
          </p>
        </section>

        <section class="policy-section">
          <h2>5. Compartilhamento de Dados</h2>
          <p>
            Não vendemos nem alugamos seus dados pessoais. Podemos compartilhar dados de forma
            agregada e anônima com parceiros analíticos. Lojas parceiras acessadas via links de
            afiliados possuem suas próprias políticas de privacidade.
          </p>
        </section>

        <section class="policy-section">
          <h2>6. Seus Direitos</h2>
          <p>
            Em conformidade com a LGPD, você tem direito a:
          </p>
          <ul>
            <li>Acessar os dados pessoais que possuímos sobre você;</li>
            <li>Solicitar a correção de dados incorretos;</li>
            <li>Solicitar a exclusão dos seus dados;</li>
            <li>Revogar o consentimento a qualquer momento.</li>
          </ul>
          <p>
            Para exercer esses direitos, entre em contato conosco pelas redes sociais.
          </p>
        </section>

        <section class="policy-section">
          <h2>7. Retenção de Dados</h2>
          <p>
            Os dados coletados são armazenados pelo tempo necessário para cumprir as finalidades
            descritas nesta política, respeitando os prazos legais aplicáveis.
          </p>
        </section>

        <section class="policy-section">
          <h2>8. Alterações nesta Política</h2>
          <p>
            Esta política pode ser revisada a qualquer momento. Alterações relevantes serão
            comunicadas nesta página com atualização da data de revisão.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PoliticaDePrivacidade',
  layout: 'minimal',
}
</script>

<style scoped>
.policy-page {
  background-color: var(--background-color);
  min-height: calc(100vh - 90px);
  padding: 48px 20px 80px;
}

.policy-container {
  max-width: 760px;
  margin: 0 auto;
}

.policy-header {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 2px solid var(--secondary-background-color);
}

.policy-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-secondary);
  margin: 0 0 8px;
}

.policy-updated {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.45);
  margin: 0;
}

.policy-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.policy-section h2 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-text-secondary);
  margin: 0 0 10px;
}

.policy-section p {
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 10px;
}

.policy-section p:last-child {
  margin-bottom: 0;
}

.policy-section ul {
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.7);
  padding-left: 20px;
  margin: 8px 0 10px;
}

.policy-section ul li {
  margin-bottom: 4px;
}
</style>
