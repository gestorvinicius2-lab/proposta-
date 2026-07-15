/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ProposalState } from "../types";
import {
  User,
  Coins,
  Settings2,
  Megaphone,
  Check,
  Instagram,
  Chrome,
  Newspaper,
  Phone,
  Mail
} from "lucide-react";

interface ProposalConfiguratorProps {
  state: ProposalState;
  onChange: (updater: (prev: ProposalState) => ProposalState) => void;
}

export default function ProposalConfigurator({
  state,
  onChange,
}: ProposalConfiguratorProps) {
  const handleInputChange = (field: keyof ProposalState, value: any) => {
    onChange((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePlatformToggle = (platform: "meta" | "google" | "taboola") => {
    onChange((prev) => ({
      ...prev,
      selectedPlatforms: {
        ...prev.selectedPlatforms,
        [platform]: !prev.selectedPlatforms[platform],
      },
    }));
  };

  return (
    <div className="bg-white border border-[#1A1A1A]/10 rounded-lg p-6 space-y-6 text-[#1A1A1A] shadow-sm">
      <div className="flex items-center gap-2 pb-4 border-b border-[#1A1A1A]/10">
        <Settings2 size={18} className="text-[#C2410C]" />
        <h3 className="font-serif italic font-bold text-lg text-[#1A1A1A]">Personalizar Proposta</h3>
      </div>

      {/* 1. Client Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-1.5 text-xs font-sans uppercase font-bold tracking-wider text-[#C2410C]">
          <User size={14} />
          <span>Informações do Cliente</span>
        </div>

        <div>
          <label className="block text-xs font-sans font-semibold text-[#1A1A1A]/70 mb-1">Nome do Cliente ou Empresa</label>
          <input
            type="text"
            value={state.clientName}
            onChange={(e) => handleInputChange("clientName", e.target.value)}
            placeholder="Ex: Clínica Odonto Premium"
            className="w-full bg-[#F9F7F2] border border-[#1A1A1A]/15 rounded px-3 py-2 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:ring-1 focus:ring-[#C2410C]"
          />
        </div>
      </div>

      {/* 2. Platform Selection */}
      <div className="space-y-4 pt-4 border-t border-[#1A1A1A]/10">
        <div className="flex items-center gap-1.5 text-xs font-sans uppercase font-bold tracking-wider text-[#C2410C]">
          <Megaphone size={14} />
          <span>Canais de Anúncio Ativos</span>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {/* Meta Ads */}
          <button
            type="button"
            onClick={() => handlePlatformToggle("meta")}
            className={`flex items-center justify-between p-3 rounded border transition text-left cursor-pointer ${
              state.selectedPlatforms.meta
                ? "bg-[#C2410C]/5 border-[#C2410C]/40 text-[#1A1A1A]"
                : "bg-[#F9F7F2]/60 border-[#1A1A1A]/10 text-[#1A1A1A]/60 hover:border-[#1A1A1A]/30"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Instagram className={state.selectedPlatforms.meta ? "text-[#C2410C]" : "text-[#1A1A1A]/40"} size={16} />
              <div>
                <p className="text-xs font-bold font-serif italic">Meta Ads</p>
                <p className="text-[10px] text-[#1A1A1A]/60 font-sans">Instagram & Facebook</p>
              </div>
            </div>
            <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition ${
              state.selectedPlatforms.meta ? "bg-[#C2410C] border-[#C2410C]" : "border-[#1A1A1A]/20"
            }`}>
              {state.selectedPlatforms.meta && <Check size={10} className="text-white" />}
            </div>
          </button>

          {/* Google Ads */}
          <button
            type="button"
            onClick={() => handlePlatformToggle("google")}
            className={`flex items-center justify-between p-3 rounded border transition text-left cursor-pointer ${
              state.selectedPlatforms.google
                ? "bg-[#C2410C]/5 border-[#C2410C]/40 text-[#1A1A1A]"
                : "bg-[#F9F7F2]/60 border-[#1A1A1A]/10 text-[#1A1A1A]/60 hover:border-[#1A1A1A]/30"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Chrome className={state.selectedPlatforms.google ? "text-[#C2410C]" : "text-[#1A1A1A]/40"} size={16} />
              <div>
                <p className="text-xs font-bold font-serif italic">Google Ads</p>
                <p className="text-[10px] text-[#1A1A1A]/60 font-sans">Pesquisa & Youtube</p>
              </div>
            </div>
            <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition ${
              state.selectedPlatforms.google ? "bg-[#C2410C] border-[#C2410C]" : "border-[#1A1A1A]/20"
            }`}>
              {state.selectedPlatforms.google && <Check size={10} className="text-white" />}
            </div>
          </button>

          {/* Taboola Ads */}
          <button
            type="button"
            onClick={() => handlePlatformToggle("taboola")}
            className={`flex items-center justify-between p-3 rounded border transition text-left cursor-pointer ${
              state.selectedPlatforms.taboola
                ? "bg-[#C2410C]/5 border-[#C2410C]/40 text-[#1A1A1A]"
                : "bg-[#F9F7F2]/60 border-[#1A1A1A]/10 text-[#1A1A1A]/60 hover:border-[#1A1A1A]/30"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Newspaper className={state.selectedPlatforms.taboola ? "text-[#C2410C]" : "text-[#1A1A1A]/40"} size={16} />
              <div>
                <p className="text-xs font-bold font-serif italic">Taboola Ads</p>
                <p className="text-[10px] text-[#1A1A1A]/60 font-sans">Native Ads em Portais</p>
              </div>
            </div>
            <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition ${
              state.selectedPlatforms.taboola ? "bg-[#C2410C] border-[#C2410C]" : "border-[#1A1A1A]/20"
            }`}>
              {state.selectedPlatforms.taboola && <Check size={10} className="text-white" />}
            </div>
          </button>
        </div>
      </div>

      {/* 3. Budget Inputs */}
      <div className="space-y-4 pt-4 border-t border-[#1A1A1A]/10">
        <div className="flex items-center gap-1.5 text-xs font-sans uppercase font-bold tracking-wider text-[#C2410C]">
          <Coins size={14} />
          <span>Valores de Investimento</span>
        </div>

        {/* Gestor Fee */}
        <div>
          <label className="block text-xs font-sans font-semibold text-[#1A1A1A]/70 mb-1">Honorários do Gestor (R$ / mês)</label>
          <input
            type="number"
            value={state.gestorFee}
            onChange={(e) => handleInputChange("gestorFee", Number(e.target.value))}
            placeholder="Ex: 3000"
            className="w-full bg-[#F9F7F2] border border-[#1A1A1A]/15 rounded px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#C2410C]"
          />
        </div>

        {/* Media Budget */}
        <div>
          <label className="block text-xs font-sans font-semibold text-[#1A1A1A]/70 mb-1">Verba de Mídia Sugerida (R$ / mês)</label>
          <input
            type="number"
            value={state.mediaBudget}
            onChange={(e) => handleInputChange("mediaBudget", Number(e.target.value))}
            placeholder="Ex: 3000 (deixe 0 para mostrar 'A Definir')"
            className="w-full bg-[#F9F7F2] border border-[#1A1A1A]/15 rounded px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#C2410C]"
          />
        </div>
      </div>

      {/* 4. Contact Details */}
      <div className="space-y-4 pt-4 border-t border-[#1A1A1A]/10">
        <div className="flex items-center gap-1.5 text-xs font-sans uppercase font-bold tracking-wider text-[#C2410C]">
          <User size={14} />
          <span>Suas Informações (Gestor)</span>
        </div>

        <div>
          <label className="block text-xs font-sans font-semibold text-[#1A1A1A]/70 mb-1">Nome do Gestor</label>
          <input
            type="text"
            value={state.gestorName}
            onChange={(e) => handleInputChange("gestorName", e.target.value)}
            placeholder="Ex: Vinícius"
            className="w-full bg-[#F9F7F2] border border-[#1A1A1A]/15 rounded px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#C2410C]"
          />
        </div>

        <div>
          <label className="block text-xs font-sans font-semibold text-[#1A1A1A]/70 mb-1">WhatsApp</label>
          <input
            type="text"
            value={state.gestorPhone}
            onChange={(e) => handleInputChange("gestorPhone", e.target.value)}
            placeholder="Ex: (11) 99999-9999"
            className="w-full bg-[#F9F7F2] border border-[#1A1A1A]/15 rounded px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#C2410C]"
          />
        </div>

        <div>
          <label className="block text-xs font-sans font-semibold text-[#1A1A1A]/70 mb-1">E-mail</label>
          <input
            type="email"
            value={state.gestorEmail}
            onChange={(e) => handleInputChange("gestorEmail", e.target.value)}
            placeholder="Ex: contato@gestor.com"
            className="w-full bg-[#F9F7F2] border border-[#1A1A1A]/15 rounded px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#C2410C]"
          />
        </div>
      </div>
    </div>
  );
}
