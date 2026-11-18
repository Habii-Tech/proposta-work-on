document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S3 — DORES DO CLIENTE -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-[#F4F8F5]" id="s3" data-i="3">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Problemas identificados</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div>
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Diagnóstico</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Os desafios<br><em class="text-[#6EBF8B] not-italic">da operação hoje.</em></h2>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-8 flex-1">

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Operação 100% no WhatsApp</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Vagas, candidaturas e combinados passam por mensagens soltas. Nada fica centralizado, o que dificulta o acompanhamento e a escala da operação.</div>
      </div>
      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Planilhas e conferência manual</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Alocações, horas e pagamentos dependem de planilhas e de conferência feita por pessoas, com alto risco de erro e retrabalho.</div>
      </div>
      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Sem controle de presença</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Sem registro confiável de entrada e saída, fica difícil comprovar se o profissional esteve no local e por quanto tempo.</div>
      </div>
      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Profissionais sem histórico de confiança</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Não há como saber quais profissionais são confiáveis: faltas, atrasos e cancelamentos em cima da hora não ficam registrados.</div>
      </div>
      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Documentação dispersa</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Documentos e certificações dos colaboradores chegam por mensagem, sem validação padronizada nem controle de validade.</div>
      </div>
      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Pagamentos difíceis de controlar</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Cobrança das empresas e repasse aos profissionais são feitos manualmente, sem extrato, comprovantes ou conciliação financeira.</div>
      </div>

    </div>
  </div>
</section>
`);
