/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ProposalState } from "./types";
import ProposalConfigurator from "./components/ProposalConfigurator";
import ProposalDocument from "./components/ProposalDocument";
import { motion, AnimatePresence } from "motion/react";
import {
  Eye,
  EyeOff,
  Printer,
  Sparkles,
  Copy,
  Check,
  FileText
} from "lucide-react";

export default function App() {
  const [state, setState] = useState<ProposalState>({
    clientName: "Edson",
    clientNiche: "custom",
    gestorName: "Gestor Vinícius",
    gestorEmail: "gestorvinicius2@gmail.com", // Personalized based on user email metadata
    gestorPhone: "(11) 99999-9999",
    gestorFee: 3000,
    mediaBudget: 1500,
    selectedPlatforms: {
      meta: true,
      google: true,
      taboola: true,
    },
  });

  const [isPreviewOnly, setIsPreviewOnly] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const handleCopyText = () => {
    const client = state.clientName || "[Nome do Cliente]";
    const fee = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(state.gestorFee);
    const media = state.mediaBudget > 0 
      ? new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(state.mediaBudget)
      : "A definir em conjunto, pago diretamente às plataformas";
    const gestor = state.gestorName || "[Seu Nome]";
    
    let platformsText = "";
    if (state.selectedPlatforms.meta) {
      platformsText += `\n- Meta Ads (Instagram e Facebook):\n  Foco em geração de demanda, construção de desejo e impacto visual direto no seu público-alvo.`;
    }
    if (state.selectedPlatforms.google) {
      platformsText += `\n- Google Ads:\n  Foco em captura de intenção. Vamos aparecer exatamente para quem já está com o cartão na mão pesquisando pela sua solução.`;
    }
    if (state.selectedPlatforms.taboola) {
      platformsText += `\n- Taboola (Native Ads):\n  Foco em escala e autoridade. Colocaremos sua marca nos maiores portais de notícias do Brasil de forma nativa e menos invasiva.`;
    }

    const proposalText = `*Proposta de Aceleração Estratégica com Tráfego Pago*

Olá, ${client}, tudo bem?

Após analisarmos o potencial do seu negócio, preparei esta proposta focada em uma única meta: escalar os seus resultados com previsibilidade e inteligência. Não acredito em apenas "apertar botões" nas plataformas. O jogo atual do tráfego pago exige estratégia multicanal e otimização constante. Por isso, nossa atuação será baseada nos seguintes pilares:

*Nosso Arsenal de Tráfego*
Para cercar o seu cliente em todas as etapas de compra, vamos utilizar uma estratégia combinada nas principais fontes do mercado:${platformsText}

*O Grande Diferencial: Dados e Criativos*
O tráfego pago atrai as pessoas, mas o que realmente converte e barateia o custo é o que acontece nos bastidores. Minha gestão terá foco prioritário em:
- Análise de Dados Avançada: Decisões baseadas em métricas, não em achismos. Monitoramento diário de KPIs (CPA, ROAS, CTR) para realocar a verba onde o retorno é mais rápido.
- Laboratório de Criativos: O anúncio (vídeo/imagem) é o que faz o cliente parar de rolar o feed. Vamos testar ângulos, copys e formatos diferentes constantemente para evitar fadiga de público e encontrar os "anúncios campeões".

*Investimento*
O investimento para tirar todo esse ecossistema do papel e colocar a sua máquina de vendas para rodar é dividido em duas partes:
- Honorários de Gestão (Mão de Obra): ${fee} / mês.
- Verba de Mídia: ${state.mediaBudget > 0 ? `${media} / mês.` : `${media}`}

Nota: Este valor de gestão cobre todo o planejamento, execução das campanhas nas plataformas selecionadas, análises periódicas e direcionamento para a produção dos criativos.

*Próximos Passos*
O mercado não espera e o seu cliente ideal está, neste momento, comprando de quem aparece mais para ele.

--
Elaborado por: ${gestor}
WhatsApp: ${state.gestorPhone || ""}
Email: ${state.gestorEmail || ""}`;

    navigator.clipboard.writeText(proposalText).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A1A1A] font-sans selection:bg-[#C2410C] selection:text-white">
      
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#1A1A1A]/10 px-4 md:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded bg-[#C2410C]/10 border border-[#C2410C]/25 flex items-center justify-center text-[#C2410C] font-bold text-lg">
            ✦
          </div>
          <div>
            <h1 className="font-serif italic font-bold text-base tracking-tight text-[#1A1A1A] leading-tight">
              Gerador de Proposta de Tráfego Pago
            </h1>
            <p className="text-[11px] text-[#1A1A1A]/50 uppercase tracking-widest font-sans font-medium mt-0.5">
              Modelo Comercial Objetivo · Sem Distrações
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-stretch sm:self-auto">
          {/* Toggle View Mode */}
          <button
            type="button"
            onClick={() => setIsPreviewOnly(!isPreviewOnly)}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2 rounded text-xs font-semibold border transition-all duration-300 cursor-pointer ${
              isPreviewOnly
                ? "bg-[#C2410C] text-white border-[#C2410C] hover:bg-[#A83204]"
                : "bg-white border-[#1A1A1A]/15 text-[#1A1A1A] hover:bg-[#1A1A1A]/5"
            }`}
          >
            {isPreviewOnly ? (
              <>
                <Eye size={15} />
                <span>Mostrar Painel de Edição</span>
              </>
            ) : (
              <>
                <EyeOff size={15} />
                <span>Visualizar como Cliente</span>
              </>
            )}
          </button>

          {/* Copy Plain Text */}
          <button
            type="button"
            onClick={handleCopyText}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#1A1A1A]/5 border border-[#1A1A1A]/15 rounded text-xs text-[#1A1A1A] font-semibold transition cursor-pointer"
            title="Copiar texto formatado para WhatsApp/Email"
          >
            <Copy size={15} />
            <span className="hidden md:inline">Copiar Texto</span>
          </button>

          {/* Print PDF */}
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#1A1A1A]/5 border border-[#1A1A1A]/15 rounded text-xs text-[#1A1A1A] font-semibold transition cursor-pointer"
            title="Imprimir ou Salvar como PDF"
          >
            <Printer size={15} />
            <span className="hidden md:inline">Salvar PDF</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 relative">
        
        {/* Toast Notification */}
        <AnimatePresence>
          {copiedLink && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 right-4 md:right-8 z-50 bg-[#C2410C] text-white font-bold px-4 py-3 rounded shadow-lg flex items-center gap-2 text-xs"
            >
              <Sparkles size={16} className="animate-bounce" />
              <span>Proposta copiada para a área de transferência!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CONFIGURATOR SIDEBAR */}
          <AnimatePresence mode="popLayout">
            {!isPreviewOnly && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="lg:col-span-4 space-y-6 print:hidden"
              >
                <ProposalConfigurator
                  state={state}
                  onChange={setState}
                />

                <div className="bg-white rounded border border-[#1A1A1A]/10 p-5 space-y-3 shadow-sm">
                  <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-[#C2410C] font-black">
                    Guia Rápido
                  </h4>
                  <ul className="text-xs text-[#1A1A1A]/70 space-y-2 list-disc list-inside leading-relaxed">
                    <li>Customize os nomes e valores no painel acima.</li>
                    <li>O documento ao lado é atualizado em tempo real.</li>
                    <li>Use <strong className="text-[#1A1A1A] font-semibold">"Salvar PDF"</strong> para baixar o layout impresso perfeito.</li>
                    <li>Use <strong className="text-[#1A1A1A] font-semibold">"Copiar Texto"</strong> para enviar rapidamente via WhatsApp.</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* DOCUMENT PREVIEW */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`space-y-8 ${isPreviewOnly ? "lg:col-span-12 max-w-4xl mx-auto" : "lg:col-span-8"}`}
          >
            <ProposalDocument
              state={state}
            />
          </motion.div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-[#1A1A1A]/10 mt-20 text-center text-xs text-[#1A1A1A]/50 space-y-1 print:hidden">
        <p className="font-serif italic font-semibold text-[#1A1A1A]">✦ Gerador de Proposta Comercial · 2026</p>
        <p className="max-w-md mx-auto leading-relaxed text-[#1A1A1A]/40 px-4">
          Crie, customize e copie propostas de tráfego pago objetivas com total controle e facilidade.
        </p>
      </footer>
    </div>
  );
}
