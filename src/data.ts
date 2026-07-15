/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NicheBenchmark, Projections } from "./types";

export const NICHES: NicheBenchmark[] = [
  {
    id: "dentistry",
    name: "Clínicas Odontológicas & Saúde",
    cpm: 14.5,
    cpc: 1.1,
    leadRate: 15.0, // 15% of clicks become WhatsApp inquiries
    salesRate: 12.0, // 12% of inquiries schedule and start treatment
    ticket: 1800.0, // Average treatment plan value
    leadTerm: "Agendamentos Iniciados",
    saleTerm: "Tratamentos Fechados",
    icon: "Stethoscope",
  },
  {
    id: "realestate",
    name: "Imobiliárias & Corretores de Luxo",
    cpm: 18.0,
    cpc: 2.2,
    leadRate: 8.5, // 8.5% of clicks become qualified leads
    salesRate: 2.5, // 2.5% of leads buy a property
    ticket: 12000.0, // Commission/Profit margin per sale
    leadTerm: "Leads Qualificados",
    saleTerm: "Contratos de Venda",
    icon: "Home",
  },
  {
    id: "ecommerce",
    name: "E-commerce & Lojas Virtuais",
    cpm: 10.0,
    cpc: 0.75,
    leadRate: 4.5, // 4.5% add to cart / checkout initiated
    salesRate: 1.8, // 1.8% of visitors buy
    ticket: 190.0, // Average Order Value
    leadTerm: "Carrinhos Iniciados",
    saleTerm: "Vendas Concluídas",
    icon: "ShoppingBag",
  },
  {
    id: "aesthetics",
    name: "Estética & Clínicas de Beleza",
    cpm: 12.0,
    cpc: 0.9,
    leadRate: 18.0, // 18% of clicks send a message
    salesRate: 15.0, // 15% schedule and show up
    ticket: 450.0, // Average service ticket
    leadTerm: "Mensagens no Direct/Whats",
    saleTerm: "Procedimentos Realizados",
    icon: "Sparkles",
  },
  {
    id: "b2b_services",
    name: "Serviços Corporativos & B2B",
    cpm: 24.0,
    cpc: 3.2,
    leadRate: 9.0, // 9% fill contact form
    salesRate: 6.0, // 6% become paying clients
    ticket: 4000.0, // Average retainer or contract value
    leadTerm: "Reuniões Agendadas",
    saleTerm: "Contratos Assinados",
    icon: "Briefcase",
  },
  {
    id: "advocacy",
    name: "Escritórios de Advocacia",
    cpm: 22.0,
    cpc: 2.5,
    leadRate: 12.0, // 12% click-to-contact rate
    salesRate: 8.0, // 8% of consults turn into contracts
    ticket: 3200.0, // Average initial fee
    leadTerm: "Consultas Agendadas",
    saleTerm: "Casos Fechados",
    icon: "Scale",
  },
  {
    id: "education",
    name: "Instituições de Ensino & Cursos",
    cpm: 11.5,
    cpc: 0.85,
    leadRate: 10.0, // 10% download brochure/leads
    salesRate: 4.0, // 4% of leads enroll
    ticket: 1500.0, // Average enrollment/semester value
    leadTerm: "Alunos Interessados",
    saleTerm: "Matrículas Realizadas",
    icon: "GraduationCap",
  },
  {
    id: "custom",
    name: "Geral / Personalizado",
    cpm: 15.0,
    cpc: 1.3,
    leadRate: 10.0,
    salesRate: 5.0,
    ticket: 1000.0,
    leadTerm: "Contatos Recebidos",
    saleTerm: "Fechamentos",
    icon: "TrendingUp",
  }
];

export function calculateProjections(
  mediaBudget: number,
  gestorFee: number,
  niche: NicheBenchmark
): Projections {
  if (mediaBudget <= 0) {
    return {
      impressions: 0,
      clicks: 0,
      leads: 0,
      sales: 0,
      revenue: 0,
      roas: 0,
      roi: 0,
      totalInvestment: gestorFee,
      cpa: 0,
      cpl: 0,
    };
  }

  // Calculate clicks and impressions based on media budget
  const clicks = Math.round(mediaBudget / niche.cpc);
  const impressions = Math.round((mediaBudget / niche.cpm) * 1000);

  // Calculate leads based on lead conversion rate
  const leads = Math.round(clicks * (niche.leadRate / 100));

  // Calculate sales based on sales conversion rate
  const sales = Math.round(leads * (niche.salesRate / 100));

  // Calculate revenue based on average ticket
  const revenue = Math.round(sales * niche.ticket);

  // Total investment is media budget + agency/gestor fee
  const totalInvestment = mediaBudget + gestorFee;

  // ROAS: Return on Ad Spend (Revenue / Media Budget)
  const roas = mediaBudget > 0 ? Number((revenue / mediaBudget).toFixed(2)) : 0;

  // ROI: Return on Investment ((Revenue - Total Investment) / Total Investment)
  const roi = totalInvestment > 0 ? Number(((revenue - totalInvestment) / totalInvestment).toFixed(2)) : 0;

  // CPA: Cost per Acquisition (Media Budget / Sales)
  const cpa = sales > 0 ? Number((mediaBudget / sales).toFixed(2)) : 0;

  // CPL: Cost per Lead (Media Budget / Leads)
  const cpl = leads > 0 ? Number((mediaBudget / leads).toFixed(2)) : 0;

  return {
    impressions,
    clicks,
    leads,
    sales,
    revenue,
    roas,
    roi,
    totalInvestment,
    cpa,
    cpl,
  };
}

export const ORIGINAL_TEXT = {
  title: "🚀 Proposta de Aceleração Estratégica com Tráfego Pago",
  intro: `Olá, [Nome do Cliente], tudo bem?

Após analisarmos o potencial do seu negócio, preparei esta proposta focada em uma única meta: escalar os seus resultados com previsibilidade e inteligência. Não acredito em apenas "apertar botões" nas plataformas. O jogo atual do tráfego pago exige estratégia multicanal e otimização constante. Por isso, nossa atuação será baseada nos seguintes pilares:`,
  arsenalTitle: "🎯 Nosso Arsenal de Tráfego",
  arsenalIntro: "Para cercar o seu cliente em todas as etapas de compra, vamos utilizar uma estratégia combinada nas principais fontes do mercado:",
  metaTitle: "Meta Ads (Instagram e Facebook)",
  metaDesc: "Foco em geração de demanda, construção de desejo e impacto visual direto no seu público-alvo.",
  googleTitle: "Google Ads",
  googleDesc: "Foco em captura de intenção. Vamos aparecer exatamente para quem já está com o cartão na mão pesquisando pela sua solução.",
  taboolaTitle: "Taboola (Native Ads)",
  taboolaDesc: "Foco em escala e autoridade. Colocaremos sua marca nos maiores portais de notícias do Brasil de forma nativa e menos invasiva.",
  diferencialTitle: "🧠 O Grande Diferencial: Dados e Criativos",
  diferencialIntro: "O tráfego pago atrai as pessoas, mas o que realmente converte e barateia o custo é o que acontece nos bastidores. Minha gestão terá foco prioritário em:",
  dadosTitle: "Análise de Dados Avançada",
  dadosDesc: "Decisões baseadas em métricas, não em achismos. Monitoramento diário de KPIs (CPA, ROAS, CTR) para realocar a verba onde o retorno é mais rápido.",
  criativosTitle: "Laboratório de Criativos",
  criativosDesc: "O anúncio (vídeo/imagem) é o que faz o cliente parar de rolar o feed. Vamos testar ângulos, copys e formatos diferentes constantemente para evitar fadiga de público e encontrar os \"anúncios campeões\".",
  investimentoTitle: "💰 Investimento",
  investimentoIntro: "O investimento para tirar todo esse ecossistema do papel e colocar a sua máquina de vendas para rodar é dividido em duas partes: a verba das plataformas e o valor da gestão estratégica.",
  gestaoTitle: "Honorários de Gestão (Mão de Obra)",
  gestaoValue: "R$ 3.000,00 / mês.",
  midiaTitle: "Verba de Mídia",
  midiaDesc: "(A definir em conjunto, pago diretamente às plataformas).",
  notaText: "Nota: Este valor de gestão cobre todo o planejamento, execução das campanhas nas três plataformas, análises semanais e direcionamento para a produção dos criativos.",
  passosTitle: "🤝 Próximos Passos",
  passosText: "O mercado não espera e o seu cliente ideal está, neste momento, comprando de quem aparece mais para ele."
};
