/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NicheBenchmark {
  id: string;
  name: string;
  cpm: number; // Cost per 1000 impressions in BRL
  cpc: number; // Cost per click in BRL
  leadRate: number; // Click-to-lead conversion rate (%)
  salesRate: number; // Lead-to-sale conversion rate (%)
  ticket: number; // Average ticket value in BRL
  leadTerm: string; // e.g. "Contatos", "Leads", "Cadastros"
  saleTerm: string; // e.g. "Contratos", "Vendas", "Pacotes"
  icon: string; // Lucide icon name
}

export interface ProposalState {
  clientName: string;
  clientNiche: string;
  gestorName: string;
  gestorEmail: string;
  gestorPhone: string;
  gestorFee: number; // Honorários in BRL
  mediaBudget: number; // Verba de mídia in BRL
  selectedPlatforms: {
    meta: boolean;
    google: boolean;
    taboola: boolean;
  };
}

export interface Projections {
  impressions: number;
  clicks: number;
  leads: number;
  sales: number;
  revenue: number;
  roas: number;
  roi: number;
  totalInvestment: number;
  cpa: number; // Cost per acquisition
  cpl: number; // Cost per lead
}
