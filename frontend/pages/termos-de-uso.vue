<template>
  <div class="policy-page">
    <div class="policy-container">
      <div class="policy-header">
        <h1 class="policy-title">Termos de Uso</h1>
        <p class="policy-updated">Última atualização: julho de 2025</p>
      </div>

      <div class="policy-content">
        <section class="policy-section">
          <h2>1. Sobre o Serviço</h2>
          <p>
            O <strong>Achadinhos da Internet</strong> é uma plataforma de curadoria de produtos com
            os melhores preços e ofertas encontrados na internet. Atuamos como agregador de conteúdo,
            direcionando nossos usuários para lojas parceiras por meio de links de afiliados.
          </p>
        </section>

        <section class="policy-section">
          <h2>2. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não
            concorde com alguma das condições, pedimos que não utilize nossos serviços.
          </p>
        </section>

        <section class="policy-section">
          <h2>3. Links de Afiliados</h2>
          <p>
            Os produtos exibidos neste site podem conter links de afiliados. Isso significa que,
            quando você clica em um link e realiza uma compra, podemos receber uma comissão da
            loja parceira, sem qualquer custo adicional para você. Essa comissão nos ajuda a manter
            o serviço gratuito.
          </p>
          <p>
            Não nos responsabilizamos pelas transações realizadas entre o usuário e as lojas
            parceiras. Todas as compras estão sujeitas às políticas e condições de cada loja.
          </p>
        </section>

        <section class="policy-section">
          <h2>4. Precisão das Informações</h2>
          <p>
            Nos esforçamos para manter as informações de preços e disponibilidade de produtos
            atualizadas. No entanto, preços e estoques podem variar a qualquer momento, sendo
            de responsabilidade de cada loja parceira confirmar as condições finais da compra.
          </p>
        </section>

        <section class="policy-section">
          <h2>5. Uso Permitido</h2>
          <p>É proibido utilizar este site para:</p>
          <ul>
            <li>Reproduzir, copiar ou distribuir o conteúdo sem autorização;</li>
            <li>Realizar raspagem automática de dados (web scraping);</li>
            <li>Praticar atos que possam prejudicar a infraestrutura do serviço;</li>
            <li>Qualquer finalidade ilícita ou contrária à legislação vigente.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>6. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo deste site — incluindo logotipos, textos, layout e design — é de
            propriedade do <strong>Achadinhos da Internet</strong> ou foi utilizado com permissão
            dos detentores dos direitos. É vedada a reprodução sem autorização prévia e expressa.
          </p>
        </section>

        <section class="policy-section">
          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            O <strong>Achadinhos da Internet</strong> não se responsabiliza por danos diretos ou
            indiretos decorrentes do uso deste site, da indisponibilidade do serviço ou de
            decisões de compra tomadas com base nas informações aqui apresentadas.
          </p>
        </section>

        <section class="policy-section">
          <h2>8. Alterações nos Termos</h2>
          <p>
            Estes termos podem ser atualizados a qualquer momento. Recomendamos que você os revise
            periodicamente. O uso contínuo do site após alterações constitui aceite das novas condições.
          </p>
        </section>

        <section class="policy-section">
          <h2>9. Contato</h2>
          <p>
            Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco pelas nossas
            redes sociais.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermosDeUso',
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
  margin: 8px 0 0;
}

.policy-section ul li {
  margin-bottom: 4px;
}
</style>
