document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S1 — CAPA -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col " id="s1" style="background:radial-gradient(ellipse 45% 65% at 78% 48%,rgba(45,135,255,.45) 0%,transparent 70%),radial-gradient(ellipse 40% 55% at 8% 45%,rgba(29,185,84,.22) 0%,transparent 70%),radial-gradient(ellipse 80% 45% at 45% 110%,rgba(2,6,10,.75) 0%,transparent 70%),radial-gradient(ellipse 70% 40% at 40% -10%,rgba(2,6,10,.55) 0%,transparent 70%),linear-gradient(115deg,#0E6035 0%,#0B4B3C 20%,#0A3045 40%,#0A2263 62%,#0B3FC4 100%)" data-i="0">
  <div class="bg-grid"></div>
    <!-- bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <a class="flex items-center no-underline" href="#">
      <img src="assets/images/logo.png" alt="Habii.tech" style="height:28px;width:auto;display:block;margin-left:30px">
    </a>
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-white/60">Proposta Comercial · 2026</span>
  </div>
  <!-- body -->
  <div class="relative z-[5] flex-1 grid grid-cols-2 gap-0 items-center pt-[88px] px-16 pb-8">
    <div>
      <div class="inline-flex items-center gap-[7px] bg-white/10 border border-white/25 text-white text-[11px] font-bold px-[14px] py-[6px] rounded-full tracking-[.08em] uppercase mb-7">
        <span class="w-[5px] h-[5px] bg-[#1DB954] rounded-full block"></span>Proposta Comercial · 2026
      </div>
      <h1 class="text-[clamp(52px,6vw,82px)] font-black leading-[.95] tracking-[-0.04em] text-white mb-6">Proposta<br><em class="not-italic" style="background:linear-gradient(90deg,#1DB954 0%,#3B8CFF 100%);-webkit-background-clip:text;background-clip:text;color:transparent;">Comercial</em><br><span class="text-white/35">WorkOn</span></h1>
      <p class="text-[17px] text-white/70 leading-[1.72] max-w-[460px] mb-[52px]">Desenvolvimento de plataforma para alocação de profissionais: <strong class="text-white font-semibold">aplicativo mobile + painel web</strong> para empresas, colaboradores e operação.</p>
    </div>
    <!-- Phone mockup — WorkOn -->
    <div style="display:flex; justify-content:center; align-items:center; position:relative; z-index:5;">
      <div style="position:absolute; width:420px; height:420px; border-radius:50%; background:radial-gradient(circle, rgba(29,185,84,.35) 0%, rgba(26,115,255,.30) 45%, transparent 70%); filter:blur(30px);"></div>
      <img src="assets/images/work_on_mockup.png" alt="WorkOn — aplicativo mobile" style="position:relative; height:min(78vh,640px); width:auto; display:block; filter:drop-shadow(0 30px 50px rgba(0,0,0,.45));">
    </div>
  </div>
</section>
`);
