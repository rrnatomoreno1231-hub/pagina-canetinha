import React from 'react';
import Image from 'next/image';
import { Check, ShieldCheck, ChevronDown } from 'lucide-react';
import ProductCarousel from '@/components/ProductCarousel';

export default function Home() {
  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="hero-section section-pad">
        <div className="narrow center">
          <div className="eyebrow">POR APENAS R$10 • PARA PROFESSORAS</div>
          <h1>
            Professora, transforme lápis comuns em <span>uma renda extra</span>
          </h1>
          <p className="hero-copy">
            Use mais de 600 modelos prontos de lápis e canetas personalizados para editar, imprimir e vender para pais, colegas e festas, sem depender de estoque e sem saber design.
          </p>

          <Image
            className="hero-mockup"
            src="/head2.jpg"
            alt="Kit digital com mais de 600 modelos de lápis e canetas personalizados para professoras"
            width={1199}
            height={896}
            priority
            referrerPolicy="no-referrer"
          />

          <div>
            <a href="#ofertas" className="cta-button">
              QUERO COMEÇAR AGORA
            </a>
          </div>

          <p className="microcopy">
            Pagamento único <span>•</span> Acesso imediato <span>•</span> Produto digital
          </p>

          <h2 className="carousel-title">
            Veja exemplos que encantam alunos, pais e colegas
          </h2>

          <ProductCarousel />

          <div className="theme-bubbles">
            <span>Professora</span>
            <span>Turminha</span>
            <span>Alfabetização</span>
            <span>Formatura</span>
            <span>Natal na escola</span>
            <span>Lembrancinha de fim de ano</span>
            <span>Dia dos Professores</span>
            <span>e muito mais!</span>
          </div>
        </div>
      </section>

      {/* 2. VANTAGEM DE QUEM ESTÁ NA SALA DE AULA */}
      <section className="section-pad">
        <div className="narrow center">
          <p className="section-kicker">VANTAGEM DE QUEM ESTÁ NA SALA DE AULA</p>
          <h2>Você já tem o que muita gente demora para conseguir: o público</h2>
          <p className="section-intro">
            Pais, colegas e turmas inteiras já estão ao seu alcance:
          </p>
          <ul className="check-list">
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Pais e responsáveis sempre procurando lembrancinhas</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Colegas e grupos de professoras</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Datas do calendário escolar que viram encomenda em quantidade</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. FEITO PARA COMEÇAR */}
      <section className="section-pad">
        <div className="narrow center">
          <p className="section-kicker">FEITO PARA COMEÇAR</p>
          <h2>Comece com o que você já tem</h2>
          <p className="section-intro">Este kit foi preparado para a professora que:</p>
          <ul className="check-list">
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Quer uma renda extra sem sair do trabalho que já ama</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Não sabe criar artes do zero</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Tem pouco tempo entre planejamento, aulas e correções</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Quer um produto fácil de divulgar para pais e colegas</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Prefere trabalhar em casa e pelo celular</span>
            </li>
          </ul>
          <p className="emphasis">
            Mesmo que você nunca tenha produzido um personalizado antes.
          </p>
        </div>
      </section>

      {/* 4. PASSO A PASSO SIMPLES */}
      <section className="section-pad">
        <div className="wide center">
          <p className="section-kicker">PASSO A PASSO SIMPLES</p>
          <h2>Conheça o Método Sinal Tocou, Pedido Fechou</h2>
          <p className="section-intro">
            Sem gastar com estoque e sem sair do seu ritmo de professora. Você mostra antes de produzir e só produz o que já foi pedido.
          </p>
          <div className="steps-grid">
            <div className="step">
              <span>1</span>
              <h3>1. Escolha a turma</h3>
              <p>Selecione os modelos que combinam com a sua turma e com o público da escola.</p>
            </div>
            <div className="step">
              <span>2</span>
              <h3>2. Personalize no intervalo</h3>
              <p>Edite nomes, cores e frases pelo celular, em poucos minutos.</p>
            </div>
            <div className="step">
              <span>3</span>
              <h3>3. Mostre pro grupo</h3>
              <p>Monte algumas amostras e apresente no grupo de pais, no WhatsApp ou pessoalmente.</p>
            </div>
            <div className="step">
              <span>4</span>
              <h3>4. Feche o pedido e produza</h3>
              <p>Receba a encomenda e produza só a quantidade pedida.</p>
            </div>
          </div>
          <p className="emphasis" style={{ marginBottom: '1.75rem' }}>
            Quando o sinal tocar, você pode estar com o pedido na mão.
          </p>
          <div>
            <a href="#ofertas" className="cta-button">
              QUERO COMEÇAR AGORA
            </a>
          </div>
        </div>
      </section>

      {/* 5. VARIEDADE PARA VENDER */}
      <section className="section-pad">
        <div className="narrow center">
          <p className="section-kicker">VARIEDADE PARA VENDER</p>
          <h2>Mais de 600 modelos prontos, incluindo uma coleção exclusiva para professoras</h2>
          <p className="section-intro">
            Uma biblioteca completa para você oferecer várias opções aos seus clientes sem precisar criar tudo do zero.
          </p>
          <ul className="check-list">
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Coleção Exclusiva Professora: frases de professora, &quot;profe&quot;, turma, alfabetização, lousa e material escolar</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Temas infantis</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Modelos delicados</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Frases especiais e de agradecimento</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Datas comemorativas</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Lembrancinhas de fim de ano</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Modelos para meninos e meninas</span>
            </li>
          </ul>
          <p className="gallery-caption">Você escolhe, personaliza e imprime.</p>
        </div>
      </section>

      {/* 6. O ANO ESCOLAR INTEIRO É OPORTUNIDADE */}
      <section className="section-pad">
        <div className="narrow center">
          <p className="section-kicker">O ANO ESCOLAR INTEIRO É OPORTUNIDADE</p>
          <h2>Personalizados para cada momento do calendário escolar</h2>
          <p className="section-intro">Você poderá oferecer seus produtos para:</p>
          <ul className="check-list">
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Volta às aulas</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Dia dos Professores</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Dia das Crianças</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Festas infantis</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Formaturas e encerramento do ano letivo</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Natal e lembrancinhas de fim de ano</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Presentes para a turma</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Lembrancinhas em quantidade</span>
            </li>
          </ul>
          <p className="emphasis">
            Um único arquivo pode ser usado em várias encomendas.
          </p>
        </div>
      </section>

      {/* 7. O VALOR ESTÁ NA APRESENTAÇÃO */}
      <section className="section-pad">
        <div className="narrow center">
          <h2>O valor está na apresentação</h2>
          <p className="section-intro">
            Um lápis comum se encontra em qualquer papelaria. Quando ele ganha o tema da turma, o nome da criança e uma embalagem bonita, deixa de ser só um lápis e vira uma lembrancinha que pais e alunos guardam.
          </p>
        </div>
      </section>

      {/* 8. VOCÊ NÃO PRECISA SABER DESIGN */}
      <section className="section-pad">
        <div className="narrow center">
          <h2>Você não precisa saber design</h2>
          <p className="section-intro">
            Os modelos já vêm prontos. Você pode usar as artes como estão ou fazer personalizações simples, como:
          </p>
          <ul className="check-list">
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Colocar o nome do aluno ou da turma</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Trocar uma frase</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Escolher novas cores</span>
            </li>
            <li>
              <span className="check-icon">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>Preparar o arquivo para impressão</span>
            </li>
          </ul>
          <p className="emphasis">
            Tudo pelo celular, com orientações passo a passo no Pacote Completo.
          </p>
        </div>
      </section>

      {/* 9. OFERTAS */}
      <section className="section-pad" id="ofertas">
        <div className="wide center">
          <div className="pricing-grid">
            {/* Pacote Inicial */}
            <article className="price-card" id="pacote-inicial">
              <div className="price-card-head">
                <h3>Pacote Inicial</h3>
                <p>Para quem quer começar com os arquivos essenciais.</p>
              </div>
              <div className="price-wrap">
                <p className="anchor-price">
                  De <s>R$37</s> por:
                </p>
                <p className="price">
                  <span>R$</span>10
                </p>
                <p className="payment-label">PAGAMENTO ÚNICO</p>
              </div>
              <ul className="check-list">
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Mais de 600 modelos para lápis e canetas</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Coleção Exclusiva Professora</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Arquivos prontos para imprimir</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Temas para o ano escolar inteiro</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Acesso imediato</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Acesso vitalício</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Garantia de 7 dias</span>
                </li>
              </ul>
              <a
                href="https://pay.wiapy.com/6ac1d92dc7ae865f6e499f78"
                className="cta-button"
              >
                QUERO O PACOTE INICIAL
              </a>
            </article>

            {/* Pacote Completo */}
            <article className="price-card featured" id="pacote-completo">
              <div className="recommended">RECOMENDADO</div>
              <div className="price-card-head">
                <h3>Pacote Completo</h3>
                <p>Para a professora que quer produzir e começar a divulgar.</p>
              </div>
              <div className="price-wrap">
                <p className="anchor-price">
                  De <s>R$97</s> por:
                </p>
                <p className="price">
                  <span>R$</span>17<small>,90</small>
                </p>
                <p className="payment-label">PAGAMENTO ÚNICO</p>
              </div>
              <ul className="check-list">
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Tudo do Pacote Inicial</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Passo a passo de produção</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Modelos editáveis no Canva</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Caixinhas e embalagens editáveis</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Tabela para calcular seus preços</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Catálogo para apresentar a pais e colegas</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Textos prontos para divulgar em grupos de pais e WhatsApp</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Ficha para organizar encomendas por turma</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Acesso vitalício</span>
                </li>
                <li>
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Garantia de 7 dias</span>
                </li>
              </ul>
              <a
                href="https://pay.wiapy.com/5jYpmlqL2cU"
                className="cta-button"
              >
                QUERO O PACOTE COMPLETO
              </a>
            </article>
          </div>
          <p className="instant-note">Acesso imediato após a confirmação do pagamento.</p>
        </div>
      </section>

      {/* 10. GARANTIA */}
      <section className="section-pad">
        <div className="narrow center">
          <div className="guarantee-seal">
            <ShieldCheck size={44} strokeWidth={2} aria-hidden="true" />
            <strong>7</strong>
            <span>DIAS</span>
          </div>
          <p className="section-kicker">7 DIAS • COMPRA PROTEGIDA</p>
          <h2>Experimente por 7 dias</h2>
          <p>Depois de acessar o material, você terá sete dias para conhecer o conteúdo.</p>
          <p>Se perceber que o kit não é para você, basta pedir o reembolso dentro desse prazo.</p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="faq-section section-pad">
        <div className="narrow center">
          <p className="section-kicker">TIRE SUAS DÚVIDAS</p>
          <h2>Perguntas frequentes</h2>
          <div className="faq-list">
            <details>
              <summary>
                <span>O produto é físico?</span>
                <ChevronDown size={20} strokeWidth={2} aria-hidden="true" />
              </summary>
              <p>Não. O kit é 100% digital. Você recebe os arquivos e materiais para baixar e usar.</p>
            </details>
            <details>
              <summary>
                <span>Preciso saber criar artes?</span>
                <ChevronDown size={20} strokeWidth={2} aria-hidden="true" />
              </summary>
              <p>Não. Os modelos já vêm prontos, inclusive a Coleção Exclusiva Professora. No Pacote Completo você também tem arquivos editáveis e orientações para fazer personalizações simples, como colocar o nome do aluno ou da turma.</p>
            </details>
            <details>
              <summary>
                <span>Consigo utilizar pelo celular?</span>
                <ChevronDown size={20} strokeWidth={2} aria-hidden="true" />
              </summary>
              <p>Sim. Os materiais podem ser acessados pelo celular, então você consegue personalizar nos intervalos entre as aulas. Para imprimir, pode usar uma impressora própria ou enviar o arquivo para uma gráfica.</p>
            </details>
            <details>
              <summary>
                <span>Preciso comprar uma máquina?</span>
                <ChevronDown size={20} strokeWidth={2} aria-hidden="true" />
              </summary>
              <p>Não. Você pode começar com materiais simples e produzir só o que for encomendado. O passo a passo mostra o que é necessário para produzir.</p>
            </details>
            <details>
              <summary>
                <span>Posso vender os personalizados?</span>
                <ChevronDown size={20} strokeWidth={2} aria-hidden="true" />
              </summary>
              <p>Sim. Você pode usar os arquivos para criar e vender produtos físicos, por exemplo para pais, colegas e festas. Se for divulgar dentro da escola, vale conferir as regras da sua instituição. A revenda ou distribuição dos arquivos digitais não é permitida.</p>
            </details>
            <details>
              <summary>
                <span>Qual é a diferença entre os pacotes?</span>
                <ChevronDown size={20} strokeWidth={2} aria-hidden="true" />
              </summary>
              <p>O Inicial contém a biblioteca com mais de 600 modelos, incluindo a Coleção Exclusiva Professora. O Completo também inclui o passo a passo, arquivos editáveis, caixinhas, tabela de preços, catálogo e textos de divulgação.</p>
            </details>
            <details>
              <summary>
                <span>Como receberei o acesso?</span>
                <ChevronDown size={20} strokeWidth={2} aria-hidden="true" />
              </summary>
              <p>Após a confirmação do pagamento, as instruções de acesso serão enviadas para o e-mail cadastrado na compra.</p>
            </details>
            <details>
              <summary>
                <span>O acesso tem prazo?</span>
                <ChevronDown size={20} strokeWidth={2} aria-hidden="true" />
              </summary>
              <p>Não. O acesso é por tempo indeterminado, conforme as condições apresentadas no momento da compra.</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
