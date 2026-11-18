document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S4 — ESCOPO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s4" data-i="4">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Escopo · Plataforma</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div class="mb-8 flex items-end justify-between gap-8">
      <div>
        <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">O que vamos construir</div>
        <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Escopo<br><em class="text-[#6EBF8B] not-italic">do projeto.</em></h2>
      </div>
      <p class="text-[15px] text-[#5C6E64] max-w-[400px] leading-[1.65] pb-1 flex-shrink-0">App mobile para <strong class="text-[#1F2B23] font-semibold">colaboradores</strong> + painel web para <strong class="text-[#1F2B23] font-semibold">empresas e operação</strong>, com ponto por geolocalização, reputação e pagamentos.</p>
    </div>
    <div class="flex-1 grid gap-4" style="grid-template-columns: repeat(3,1fr);">

      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[22px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">App Mobile · Colaboradores</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">9 funcionalidades</div>
          </div>
        </div>
        <div class="px-7 py-[16px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Cadastro: dados pessoais, funções, disponibilidade e região</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Envio de documentos (foto, CPF, residência, certificações)</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Lista de vagas com filtros por região, função e data</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Candidatura e acompanhamento do status</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Notificações push (aprovação, lembrete de turno, pagamento)</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Agenda de trabalhos confirmados e histórico</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Registro de ponto validado por geolocalização</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Avaliação das empresas</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium leading-[1.35]">Extrato de ganhos</div>
        </div>
      </div>

      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[22px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Painel Web · Empresas</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">7 funcionalidades</div>
          </div>
        </div>
        <div class="px-7 py-[16px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Cadastro de vagas avulsas e recorrentes</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Status da vaga: aberta, preenchida, em andamento, concluída ou cancelada</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Aprovação, recusa e lista de espera de candidatos</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Consulta da reputação de cada colaborador</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Acompanhamento de presença e confirmação das horas</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Avaliação dos profissionais após o serviço</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium leading-[1.35]">Pagamento antecipado, faturas e comprovantes</div>
        </div>
      </div>

      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[22px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Painel Web · Operação</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">9 funcionalidades</div>
          </div>
        </div>
        <div class="px-7 py-[16px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Fila de análise de documentos (aprovar/reprovar com motivo)</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Controle de validade e pedido de reenvio</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Gestão de empresas e colaboradores</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Mediação e aprovação de candidatos</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Acompanhamento das alocações</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Reputação: indicadores automáticos, priorização e bloqueio</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Avaliações das empresas parceiras</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Financeiro: taxa de intermediação, repasses via Pix e conciliação</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium leading-[1.35]">Relatórios</div>
        </div>
      </div>

    </div>
    <div class="mt-4 flex items-center gap-3 bg-[#F4F8F5] border border-[#DDE8E2] rounded-[14px] px-5 py-3">
      <span class="flex-shrink-0 text-[11px] font-bold tracking-[.04em] bg-[#FFF7E6] text-[#B45309] border border-[#F6D28A] rounded-full px-[10px] py-[3px] whitespace-nowrap">A definir</span>
      <span class="text-[13px] text-[#5C6E64] leading-[1.5]">Integração com gateway de pagamento com split ou subcontas (ex.: Pagar.me, Asaas, Mercado Pago). A escolha será validada com você na fase de discovery.</span>
    </div>
  </div>
</section>
`);
