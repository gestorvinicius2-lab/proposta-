/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ProposalState } from "../types";
import { ORIGINAL_TEXT } from "../data";
import { FileText, Calendar, ShieldCheck, Mail, Phone, User, DollarSign } from "lucide-react";

interface ProposalDocumentProps {
  state: ProposalState;
}

export default function ProposalDocument({ state }: ProposalDocumentProps) {
  const formatBRL = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const clientDisplay = state.clientName ? state.clientName : "[Nome do Cliente]";
  const gestorDisplay = state.gestorName ? state.gestorName : "[Seu Nome]";

  return (
    <div className="bg-white border border-[#1A1A1A]/10 rounded-lg p-8 md:p-16 text-[#1A1A1A] shadow-lg max-w-4xl mx-auto print:border-none print:shadow-none print:p-0">
      
      {/* DOCUMENT HEADER */}
      <div className="border-b border-[#1A1A1A]/10 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#C2410C] uppercase block mb-2">
            PROPOSTA COMERCIAL
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight leading-tight">
            {ORIGINAL_TEXT.title.replace("🚀 ", "")}
          </h1>
          <p className="text-xs text-[#1A1A1A]/60 font-sans mt-2">
            Gestão de Tráfego Pago Multicanal & Estratégia de Atração de Clientes
          </p>
        </div>
        
        <div className="bg-[#F9F7F2] border border-[#1A1A1A]/10 rounded p-4 text-left md:text-right min-w-[200px] shadow-sm">
          <div className="mb-2">
            <span className="text-[9px] font-sans text-[#1A1A1A]/50 uppercase tracking-widest block">Data de Emissão</span>
            <span className="text-xs font-serif font-bold italic text-[#1A1A1A]">
              {new Date().toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
          <div>
            <span className="text-[9px] font-sans text-[#1A1A1A]/50 uppercase tracking-widest block">Validade</span>
            <span className="text-[10px] text-[#C2410C] font-semibold">10 dias a partir do envio</span>
          </div>
        </div>
      </div>

      {/* INTRODUCTION */}
      <div className="space-y-6 text-[#1A1A1A]/90 text-sm md:text-base leading-relaxed mb-10">
        <p className="font-serif italic font-semibold text-lg text-[#1A1A1A]">
          Olá, <span className="text-[#C2410C] not-italic font-black">{clientDisplay}</span>, tudo bem?
        </p>
        <p>
          Após analisarmos o potencial do seu negócio, preparei esta proposta focada em uma única meta:{" "}
          <strong className="text-[#1A1A1A] font-serif italic font-bold border-b border-[#C2410C]/20 pb-0.5">
            escalar os seus resultados com previsibilidade e inteligência
          </strong>
          . Não acredito em apenas "apertar botões" nas plataformas. O jogo atual do tráfego pago exige estratégia
          multicanal e otimização constante. Por isso, nossa atuação será baseada nos seguintes pilares:
        </p>
      </div>

      {/* ARSENAL DE TRÁFEGO */}
      <div className="border-t border-[#1A1A1A]/10 pt-8 mb-10 space-y-6">
        <div>
          <h3 className="text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
            <span className="text-[#C2410C] font-serif italic font-bold">✦</span> {ORIGINAL_TEXT.arsenalTitle.replace("🎯 ", "")}
          </h3>
          <p className="text-xs md:text-sm text-[#1A1A1A]/60 mt-1">
            {ORIGINAL_TEXT.arsenalIntro}
          </p>
        </div>

        <div className="space-y-4">
          {/* Meta Ads */}
          {state.selectedPlatforms.meta && (
            <div className="p-5 bg-[#F9F7F2]/50 border border-[#1A1A1A]/10 rounded">
              <h4 className="font-serif font-bold text-base text-[#1A1A1A] flex items-center justify-between">
                <span>{ORIGINAL_TEXT.metaTitle}</span>
                <span className="text-[10px] font-sans font-semibold text-[#C2410C] uppercase tracking-wider bg-[#C2410C]/10 px-2 py-0.5 rounded">Geração de Demanda</span>
              </h4>
              <p className="text-xs md:text-sm text-[#1A1A1A]/70 leading-relaxed mt-2">
                {ORIGINAL_TEXT.metaDesc}
              </p>
            </div>
          )}

          {/* Google Ads */}
          {state.selectedPlatforms.google && (
            <div className="p-5 bg-[#F9F7F2]/50 border border-[#1A1A1A]/10 rounded">
              <h4 className="font-serif font-bold text-base text-[#1A1A1A] flex items-center justify-between">
                <span>{ORIGINAL_TEXT.googleTitle}</span>
                <span className="text-[10px] font-sans font-semibold text-[#C2410C] uppercase tracking-wider bg-[#C2410C]/10 px-2 py-0.5 rounded">Captura de Intenção</span>
              </h4>
              <p className="text-xs md:text-sm text-[#1A1A1A]/70 leading-relaxed mt-2">
                {ORIGINAL_TEXT.googleDesc}
              </p>
            </div>
          )}

          {/* Taboola Ads */}
          {state.selectedPlatforms.taboola && (
            <div className="p-5 bg-[#F9F7F2]/50 border border-[#1A1A1A]/10 rounded">
              <h4 className="font-serif font-bold text-base text-[#1A1A1A] flex items-center justify-between">
                <span>{ORIGINAL_TEXT.taboolaTitle}</span>
                <span className="text-[10px] font-sans font-semibold text-[#C2410C] uppercase tracking-wider bg-[#C2410C]/10 px-2 py-0.5 rounded">Escala & Autoridade</span>
              </h4>
              <p className="text-xs md:text-sm text-[#1A1A1A]/70 leading-relaxed mt-2">
                {ORIGINAL_TEXT.taboolaDesc}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* DIFERENCIAL */}
      <div className="border-t border-[#1A1A1A]/10 pt-8 mb-10 space-y-6">
        <div>
          <h3 className="text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
            <span className="text-[#C2410C] font-serif italic font-bold">✦</span> {ORIGINAL_TEXT.diferencialTitle.replace("🧠 ", "")}
          </h3>
          <p className="text-xs md:text-sm text-[#1A1A1A]/60 mt-1">
            {ORIGINAL_TEXT.diferencialIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-[#F9F7F2]/30 border border-[#1A1A1A]/10 rounded">
            <h4 className="font-serif font-bold text-sm text-[#1A1A1A] mb-2">{ORIGINAL_TEXT.dadosTitle}</h4>
            <p className="text-xs md:text-sm text-[#1A1A1A]/70 leading-relaxed">
              {ORIGINAL_TEXT.dadosDesc}
            </p>
          </div>

          <div className="p-5 bg-[#F9F7F2]/30 border border-[#1A1A1A]/10 rounded">
            <h4 className="font-serif font-bold text-sm text-[#1A1A1A] mb-2">{ORIGINAL_TEXT.criativosTitle}</h4>
            <p className="text-xs md:text-sm text-[#1A1A1A]/70 leading-relaxed">
              {ORIGINAL_TEXT.criativosDesc}
            </p>
          </div>
        </div>
      </div>

      {/* INVESTIMENTO */}
      <div className="border-t border-[#1A1A1A]/10 pt-8 mb-10 space-y-6">
        <div>
          <h3 className="text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
            <span className="text-[#C2410C] font-serif italic font-bold">✦</span> {ORIGINAL_TEXT.investimentoTitle.replace("💰 ", "")}
          </h3>
          <p className="text-xs md:text-sm text-[#1A1A1A]/60 mt-1">
            {ORIGINAL_TEXT.investimentoIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-white border border-[#1A1A1A]/15 rounded shadow-sm">
            <span className="text-[10px] font-sans font-bold tracking-wider text-[#1A1A1A]/50 uppercase block mb-1">
              {ORIGINAL_TEXT.gestaoTitle}
            </span>
            <span className="text-2xl font-serif font-black text-[#C2410C]">
              {formatBRL(state.gestorFee)}
            </span>
            <span className="text-xs text-[#1A1A1A]/60 block mt-2">
              Pago mensalmente para planejamento, execução e otimização.
            </span>
          </div>

          <div className="p-5 bg-white border border-[#1A1A1A]/15 rounded shadow-sm">
            <span className="text-[10px] font-sans font-bold tracking-wider text-[#1A1A1A]/50 uppercase block mb-1">
              {ORIGINAL_TEXT.midiaTitle}
            </span>
            <span className="text-2xl font-serif font-black text-[#1A1A1A]">
              {state.mediaBudget > 0 ? formatBRL(state.mediaBudget) : "A Definir"}
            </span>
            <span className="text-xs text-[#1A1A1A]/60 block mt-2">
              Investimento pago diretamente ao leilão das plataformas de anúncios.
            </span>
          </div>
        </div>

        <p className="text-xs text-[#1A1A1A]/60 italic bg-[#F9F7F2]/60 p-4 rounded border border-[#1A1A1A]/10">
          <strong>Nota:</strong> Este valor de gestão cobre todo o planejamento, execução das campanhas nas plataformas selecionadas, análises periódicas e direcionamento estratégico para produção de criativos.
        </p>
      </div>

      {/* PROXIMOS PASSOS */}
      <div className="border-t border-[#1A1A1A]/10 pt-8 mb-12 space-y-4">
        <h3 className="text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
          <span className="text-[#C2410C] font-serif italic font-bold">✦</span> {ORIGINAL_TEXT.passosTitle.replace("🤝 ", "")}
        </h3>
        <p className="text-xs md:text-sm text-[#1A1A1A]/70 leading-relaxed">
          {ORIGINAL_TEXT.passosText} Vamos construir sua máquina previsível de vendas de tráfego pago hoje mesmo?
        </p>
      </div>

      {/* SIGNATURES */}
      <div className="border-t border-[#1A1A1A]/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="text-xs text-[#1A1A1A]/50 uppercase tracking-widest block mb-1">Elaborado por</p>
          <p className="font-serif font-bold text-base text-[#1A1A1A]">{gestorDisplay}</p>
          <p className="text-xs text-[#1A1A1A]/60">Gestão de Tráfego Pago & Estratégia Comercial</p>
        </div>
        <div className="text-xs space-y-1 text-[#1A1A1A]/70">
          {state.gestorPhone && (
            <p className="flex items-center gap-1.5">
              <Phone size={12} className="text-[#C2410C]" />
              <span>{state.gestorPhone}</span>
            </p>
          )}
          {state.gestorEmail && (
            <p className="flex items-center gap-1.5">
              <Mail size={12} className="text-[#C2410C]" />
              <span>{state.gestorEmail}</span>
            </p>
          )}
        </div>
      </div>

    </div>
  );
}
