<template>
  <div class="policy-page">
    <div class="policy-container">
      <div class="policy-header">
        <h1 class="policy-title">Políticas de Segurança</h1>
        <p class="policy-updated">Última atualização: julho de 2025</p>
      </div>

      <div class="policy-content">
        <section class="policy-section">
          <h2>1. Nosso Compromisso com a Segurança</h2>
          <p>
            O <strong>Achadinhos da Internet</strong> adota medidas técnicas e organizacionais para
            garantir a segurança dos dados dos usuários e a integridade da plataforma.
          </p>
        </section>

        <section class="policy-section">
          <h2>2. Comunicação Segura (HTTPS)</h2>
          <p>
            Todo o tráfego entre o seu navegador e o nosso site é protegido por criptografia SSL/TLS
            (protocolo HTTPS). Isso garante que as informações transmitidas não possam ser
            interceptadas ou alteradas por terceiros.
          </p>
        </section>

        <section class="policy-section">
          <h2>3. Ausência de Dados de Pagamento</h2>
          <p>
            Não armazenamos dados de cartão de crédito, informações bancárias ou senhas de compra.
            Todas as transações são realizadas diretamente nas lojas parceiras, que possuem seus
            próprios sistemas de segurança e certificações de pagamento.
          </p>
        </section>

        <section class="policy-section">
          <h2>4. Proteção contra Acessos Indevidos</h2>
          <p>
            Utilizamos controles de acesso e monitoramento contínuo para detectar e prevenir
            acessos não autorizados à nossa infraestrutura. Nossos sistemas são mantidos atualizados
            para mitigar vulnerabilidades conhecidas.
          </p>
        </section>

        <section class="policy-section">
          <h2>5. Links Externos</h2>
          <p>
            Nosso site contém links para lojas e plataformas externas. Ao sair do
            <strong>Achadinhos da Internet</strong>, você está sujeito às políticas de segurança
            e privacidade de cada site de destino. Recomendamos que você as consulte antes de
            fornecer qualquer dado pessoal ou financeiro.
          </p>
        </section>

        <section class="policy-section">
          <h2>6. Responsabilidade do Usuário</h2>
          <p>Para uma experiência segura, recomendamos:</p>
          <ul>
            <li>Manter o navegador e o sistema operacional atualizados;</li>
            <li>Evitar acessar o site em redes Wi-Fi públicas sem proteção VPN;</li>
            <li>Desconfiar de sites falsos que imitam o nosso domínio;</li>
            <li>Não compartilhar dados pessoais em campos não solicitados.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>7. Reporte de Vulnerabilidades</h2>
          <p>
            Se você identificar alguma vulnerabilidade de segurança em nosso site, pedimos que
            nos comunique responsavelmente pelas nossas redes sociais, antes de tornar a
            informação pública. Analisaremos o reporte com prioridade.
          </p>
        </section>

        <section class="policy-section">
          <h2>8. Atualizações desta Política</h2>
          <p>
            Esta política pode ser atualizada para refletir melhorias em nossas práticas de
            segurança. A data de última atualização sempre será indicada no topo desta página.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PoliticasDeSeguranca',
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
