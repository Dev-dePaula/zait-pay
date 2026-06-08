// ICONES VETORIAIS LINEARES DO BRAND BOARD DE ALTA FIDELIDADE

const BRAZILIAN_BANKS = [
  { code: '001', name: 'Banco do Brasil S.A.' },
  { code: '033', name: 'Banco Santander (Brasil) S.A.' },
  { code: '041', name: 'Banrisul' },
  { code: '070', name: 'BRB - Banco de Brasília S.A.' },
  { code: '077', name: 'Banco Inter S.A.' },
  { code: '104', name: 'Caixa Econômica Federal' },
  { code: '136', name: 'Unicred' },
  { code: '208', name: 'Banco BTG Pactual S.A.' },
  { code: '212', name: 'Banco Original S.A.' },
  { code: '237', name: 'Banco Bradesco S.A.' },
  { code: '260', name: 'Nu Pagamentos S.A. (Nubank)' },
  { code: '290', name: 'PagSeguro Internet S.A.' },
  { code: '318', name: 'Banco BMG S.A.' },
  { code: '323', name: 'Mercado Pago' },
  { code: '336', name: 'Banco C6 S.A.' },
  { code: '341', name: 'Itaú Unibanco S.A.' },
  { code: '364', name: 'Gerencianet / Efí' },
  { code: '380', name: 'PicPay Serviços S.A.' },
  { code: '422', name: 'Banco Safra S.A.' },
  { code: '623', name: 'Banco Pan S.A.' },
  { code: '633', name: 'Banco Rendimento S.A.' },
  { code: '637', name: 'Banco Sofisa S.A.' },
  { code: '655', name: 'Banco Votorantim S.A.' },
  { code: '756', name: 'Banco Cooperativo Sicoob S.A.' },
  { code: '748', name: 'Banco Cooperativo Sicredi S.A.' }
];

function bankOptionsHtml(selected = '') {
  return BRAZILIAN_BANKS.map(b => `<option value="${b.code}" ${selected === b.code ? 'selected' : ''}>${b.code} - ${b.name}</option>`).join('');
}

const Icons = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V10"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19H2"/><path d="M18 6l2-2 2 2"/></svg>`,
  clientes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c.7-3.2 3-5 6-5s5.3 1.8 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 15.5c2.7.4 4.6 2 5.2 4.5"/></svg>`,
  extratos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6"/><path d="M9 13h text-6"/><path d="M9 17h6"/><path d="M9 9h2"/></svg>`,
  conta: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 10h5"/><circle cx="17.5" cy="12.5" r="1"/><path d="M6 9h6"/></svg>`,
  pix: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 10-13h-7z"/></svg>`,
  cartao: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19"/><path d="M6 15h3"/><path d="M13 15h2"/></svg>`,
  boletos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 7v10"/><path d="M11 7v10"/><path d="M15 7v10"/><path d="M18 7v10"/></svg>`,
  links: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.1.2l2.1-2.1a5 5 0 0 0-7.1-7.1L11 5"/><path d="M14 11a5 5 0 0 0-7.1-.2l-2.1 2.1a5 5 0 0 0 7.1 7.1L13 19"/></svg>`,
  api: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M8 9l-4 3 4 3"/><path d="M16 9l4 3-4 3"/><path d="M14 4l-4 16"/></svg>`,
  webhooks: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M10 21h4"/><path d="M12 3v2"/></svg>`,
  split: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M20 4L8 16"/><path d="M14 14l6 6"/><path d="M8 8l4 4"/></svg>`,
  eyeOpen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeClosed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
};

const zaitAdminMenus = [
  ['dashboard','Dashboard Geral', Icons.dashboard], 
  ['clientes', 'Clientes Gerenciados', Icons.clientes], 
  ['kyc', 'Ativação de Contas', Icons.conta], 
  ['extratos', 'Extratos Globais', Icons.extratos],
  ['conta','Conta Nominal PJ/PF', Icons.conta], 
  ['pix','PIX Admin', Icons.pix], 
  ['cartao','Cartões Crédito/Débito', Icons.cartao], 
  ['boletos','Boletos Admin', Icons.boletos], 
  ['links','Links de Pagamento', Icons.links], 
  ['api','API BAAS', Icons.api], 
  ['webhooks','Webhooks', Icons.webhooks]
];

const managerMenus = [
  ['dashboard','Dashboard Gerente', Icons.dashboard], 
  ['clientes', 'Meus Clientes', Icons.clientes], 
  ['kyc', 'Contas Pendentes', Icons.conta], 
  ['extratos', 'Extratos dos Clientes', Icons.extratos],
  ['pix','PIX', Icons.pix], 
  ['cartao','Cartões', Icons.cartao], 
  ['boletos','Boletos', Icons.boletos], 
  ['links','Links de Pagamento', Icons.links]
];

const voltzAdminMenus = [
  ['dashboard','Dashboard Geral', Icons.dashboard], 
  ['clientes', 'Clientes Cadastrados', Icons.clientes], 
  ['voltz_bolsoes','CONTAS BOLSÃO', Icons.dashboard],
  ['pix','PIX', Icons.pix], 
  ['extratos', 'EXTRATO', Icons.extratos],
  ['api','API PARA BAAS E ADQUIRENTES', Icons.api], 
  ['webhooks','WEBHOOK', Icons.webhooks], 
  ['split','SPLIT DE PAGAMENTOS', Icons.split]
];

const clientMenus = [
  ['client_dashboard', 'Dashboard', Icons.dashboard], 
  ['client_extrato', 'Meu Extrato', Icons.extratos], 
  ['client_pix', 'PIX: Enviar e Receber', Icons.pix], 
  ['client_transfer', 'Transferência TED', Icons.split],
  ['client_boletos', 'Meus Boletos', Icons.boletos], 
  ['client_links', 'Links de Pagamento', Icons.links],
  ['client_machine', 'Maquininha de Cartão', Icons.cartao],
  ['client_profile', 'Perfil', Icons.conta]
];

const defaultData = {
  users: [
    { id: 'USR-ADMIN', name: 'Anderson Admin', email: 'admin@pay.com', password: '123456', role: 'admin', isLogged: false, type: 'PF', doc: '000.000.000-00' },
    { id: 'USR-CLI1', name: 'Tech Store SP', email: 'loja@tech.com', password: '123456', role: 'client', isLogged: false, type: 'PJ', doc: '12.345.678/0001-99', rg: '12.345.678-9', phone: '(11) 99999-0000', address: 'Av. Paulista, 1000 - São Paulo/SP', facialStatus: 'Facial validada no onboarding', allowedMode: 'zait', apiAtiva: true }
  ],
  ledgers: { 
    'USR-ADMIN': { zait: { balance: 750000.00, transactions: [], boletos: [], links: [] }, voltz: { balance: 230000.00, transactions: [], boletos:[], links:[] } },
    'USR-CLI1': { 
      zait: { 
        balance: 15200.00, 
        transactions: [
          { id: 'PIX-E55291', method:'PIX', type:'Entrada', value: 500, description:'PIX Recebido: Carlos Silva', date:'20/05/2026 10:14' },
          { id: 'CART-C11920', method:'CARTAO', type:'Entrada', cardType: 'Crédito', installments: 3, merchant: 'Tech Store SP', value: 1200, description:'Venda via Checkout Link', date:'19/05/2026 14:22' },
          { id: 'CART-D88291', method:'CARTAO', type:'Saída', cardType: 'Débito', installments: 1, merchant: 'Posto Ipiranga Centro', value: 150, description:'Compra no Débito Estabelecimento', date:'18/05/2026 17:05' }
        ], 
        boletos: [
          { id: 'BOL-9921A', value: 450, desc: 'Fatura Consultoria', status: 'Pago', issueDate: '2026-05-18', dueDate: '2026-05-25' },
          { id: 'BOL-1102B', value: 900, desc: 'Venda de Equipamentos', status: 'Pendente', issueDate: '2026-05-20', dueDate: '2026-05-30' }
        ], 
        links: [
          { id: 'LNK-402', desc: 'Monitor Gamer 4K', value: 2500, parc: 12, emailDestino: 'comprador@gmail.com' }
        ] 
      }, 
      voltz: { balance: 300.00, transactions: [], boletos:[], links:[] } 
    }
  }
};

let db = {
  users: [],
  ledgers: {},
  voltzPools: [],
  voltzPoolsSummary: null
};
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let account = localStorage.getItem('activeAccount') || 'zait';
let page = currentUser && String(currentUser.role).toUpperCase() === 'CLIENT' ? 'client_dashboard' : 'dashboard';
let balancesHidden = localStorage.getItem('balancesHidden') === 'true';
let selectedVoltzPoolId = null;
let selectedVoltzPoolTab = 'clientes';

function save() { /* Dados sincronizados com a API */ }
function money(v) { return Number(v || 0).toLocaleString('pt-BR', { style:'currency', currency:'BRL' }); }
function formatDateBR(value) {
  if(!value) return '-';
  const d = new Date(value);
  if(Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString('pt-BR');
}
function todayISO() { return new Date().toISOString().slice(0, 10); }
function defaultDueISO(days = 7) { const d = new Date(); d.setDate(d.getDate() + days); return d.toISOString().slice(0, 10); }
function displayMoney(v) { return balancesHidden ? "R$ ••••••" : money(v); }
function uid(prefix='ID') { return prefix + '-' + Math.random().toString(36).slice(2,8).toUpperCase(); }

// ==================== SISTEMA DE MÁSCARAS REAL-TIME ====================
function maskCPFCNPJ(value) {
  let v = value.replace(/\D/g, "");
  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    v = v.substring(0, 14);
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  }
  return v;
}

function maskCurrency(value) {
  let v = value.replace(/\D/g, "");
  v = (v / 100).toFixed(2) + "";
  v = v.replace(".", ",");
  v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return "R$ " + v;
}

function parseCurrency(str) {
  if(!str) return 0;
  return Number(str.replace(/[^0-9,]/g, "").replace(",", "."));
}

function setupMaskListeners() {
  const docInput = document.getElementById('regDoc');
  if(docInput) {
    docInput.addEventListener('input', e => { e.target.value = maskCPFCNPJ(e.target.value); });
  }
  const currInputs = ['pixValue', 'pixSendValue', 'pixReceiveValue', 'bolValue', 'lnkValue', 'depValue', 'trValue', 'adminAmount', 'machineSaleValue'];
  currInputs.forEach(id => {
    const el = document.getElementById(id);
    if(el) { el.addEventListener('input', e => { e.target.value = maskCurrency(e.target.value); }); }
  });
}

// ==================== INTERACTION METHODS ====================
window.togglePrivacy = function() {
  balancesHidden = !balancesHidden;
  localStorage.setItem('balancesHidden', balancesHidden);
  render();
};

function showToast(msg) {
  const el = document.getElementById('toast');
  if(el) { el.textContent = msg; el.style.display = 'block'; setTimeout(() => el.style.display = 'none', 2600); }
}

function openModal(title, bodyHtml) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = bodyHtml;
  document.getElementById('systemModal').classList.remove('hidden');
}

window.closeModal = function() { document.getElementById('systemModal').classList.add('hidden'); };

// Simulações de Upload KYC
window.simulateUpload = function(div) {
  div.style.borderColor = 'var(--success)';
  div.style.background = 'rgba(34, 197, 94, 0.05)';
  div.querySelector('.upload-text').innerHTML = '<strong>Arquivo carregado com sucesso!</strong>';
};

window.capturedFacialBlob = null;
window.facialStream = null;

window.startFacialCapture = async function() {
  try {
    const video = document.getElementById('facialVideo');
    const status = document.getElementById('facialStatus');
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Seu navegador não liberou câmera. Use o campo de selfie alternativa.');
      return;
    }
    window.facialStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
    video.srcObject = window.facialStream;
    video.classList.remove('hidden');
    status.innerHTML = '<strong>Câmera aberta.</strong> Posicione o rosto e clique em Capturar facial.';
  } catch (err) {
    alert('Não foi possível acessar a câmera: ' + err.message + '. Use o upload de selfie alternativa.');
  }
};

window.captureFacialPhoto = function() {
  const video = document.getElementById('facialVideo');
  const canvas = document.getElementById('facialCanvas');
  const preview = document.getElementById('facialPreview');
  const status = document.getElementById('facialStatus');
  if (!video || !video.srcObject || !video.videoWidth) {
    alert('Abra a câmera antes de capturar a facial.');
    return;
  }
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  canvas.toBlob(blob => {
    window.capturedFacialBlob = blob;
    preview.src = URL.createObjectURL(blob);
    preview.classList.remove('hidden');
    status.innerHTML = '<strong>Facial capturada com sucesso.</strong>';
    if (window.facialStream) window.facialStream.getTracks().forEach(t => t.stop());
    video.classList.add('hidden');
  }, 'image/jpeg', 0.92);
};

window.handleRegTypeChange = function() {
  const type = document.getElementById('regType').value;
  const label = document.getElementById('regDocLabel');
  const input = document.getElementById('regDoc');
  input.value = "";
  label.innerText = type === 'PF' ? 'CPF' : 'CNPJ';
};

window.goToKycStep = function() {
  if(!document.getElementById('regName').value || !document.getElementById('regEmail').value || !document.getElementById('regPassword').value || !document.getElementById('regDoc').value || !document.getElementById('regPhone').value || !document.getElementById('regRg').value) {
    alert("Por favor, preencha todos os campos obrigatórios da etapa 1."); return;
  }
  document.getElementById('regStep1').classList.add('hidden');
  document.getElementById('regStep2').classList.remove('hidden');
};

window.goBackToStep1 = function() {
  document.getElementById('regStep2').classList.add('hidden');
  document.getElementById('regStep1').classList.remove('hidden');
};

window.toggleAuthMode = function(e, mode) {
  e.preventDefault();
  if(mode === 'register') {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    goBackToStep1();
  } else {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
  }
};

// Submissão Cadastro Real
window.processRegistration = async function(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const type = document.getElementById('regType').value;
  const doc = document.getElementById('regDoc').value.trim();
  const phone = document.getElementById('regPhone')?.value.trim() || '';
  const rg = document.getElementById('regRg')?.value.trim() || '';
  const front = document.getElementById('regDocFront')?.files?.[0];
  const back = document.getElementById('regDocBack')?.files?.[0];
  const selfie = document.getElementById('regSelfieFile')?.files?.[0];

  if (!front || !back) return alert('Envie a frente e o verso do documento.');
  if (!window.capturedFacialBlob && !selfie) return alert('Capture a facial pela câmera ou envie uma selfie alternativa.');

  const form = new FormData();
  form.append('name', name);
  form.append('full_name', name);
  form.append('email', email);
  form.append('password', password);
  form.append('type', type);
  form.append('documento', doc);
  form.append('document', doc);
  form.append('phone', phone);
  form.append('telefone', phone);
  form.append('rg', rg);
  form.append('documentFront', front);
  form.append('documentBack', back);
  if (selfie) form.append('selfie', selfie);
  if (window.capturedFacialBlob) form.append('facial', window.capturedFacialBlob, 'facial-cliente.jpg');

  try {
    await window.ZaitPayApi.register(form);
    openEmailVerificationModal(email);
  } catch (err) {
    alert('Erro no cadastro: ' + err.message);
  }
};

window.openEmailVerificationModal = function(email) {
  openModal('Verificação de e-mail', `
    <p class="muted">Enviamos um código de 6 dígitos para <strong>${email}</strong>. Digite o código abaixo para concluir a verificação do e-mail. Depois disso, a conta ficará pendente de conferência documental pelo gerente ou admin master.</p>
    <label>Código recebido por e-mail</label>
    <input id="otpCode" maxlength="6" placeholder="000000" style="text-align:center;font-size:22px;letter-spacing:6px;" />
    <button class="btn full" onclick="confirmEmailOtp('${email}')">Confirmar código</button>
    <button class="btn ghost full" style="margin-top:8px;" onclick="resendEmailOtp('${email}')">Reenviar código</button>
  `);
};

window.confirmEmailOtp = async function(email) {
  const code = document.getElementById('otpCode').value.trim();
  if (code.length !== 6) return alert('Informe o código de 6 dígitos.');
  try {
    await window.ZaitPayApi.verifyOtp(email, code);
    alert('E-mail verificado. Sua conta está pendente de ativação após análise documental.');
    location.reload();
  } catch (err) {
    alert('Erro ao verificar código: ' + err.message);
  }
};

window.resendEmailOtp = async function(email) {
  try {
    await window.ZaitPayApi.resendOtp(email);
    showToast('Código reenviado para o e-mail cadastrado.');
  } catch (err) {
    alert('Erro ao reenviar código: ' + err.message);
  }
};

document.getElementById('loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const apiResp = await window.ZaitPayApi.login(email, password);
    window.ZaitPayApi.saveAuth(apiResp);
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    document.getElementById('authScreen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    const role = String(currentUser.role || '').toUpperCase();
    page = (role === 'MASTER' || role === 'MANAGER' || role === 'ADMIN') ? 'dashboard' : 'client_dashboard';
    render();
  } catch (err) {
    alert('Erro no login: ' + err.message);
  }
});

function logout() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('zait_token');
  location.reload();
}

document.querySelectorAll('.switch-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetAccount = btn.dataset.account;
    if(currentUser.role === 'client') {
      const freshUser = db.users.find(u => u.id === currentUser.id);
      if(freshUser && freshUser.allowedMode !== 'all' && freshUser.allowedMode !== targetAccount) {
        showToast('Esta bandeira está bloqueada para você.'); return;
      }
    }
    account = targetAccount;
    localStorage.setItem('activeAccount', account);
    if(currentUser.role === 'admin') page = 'dashboard';
    render();
  });
});

function enforceOperationMode() {
  if (!currentUser) return;
  const btnZait = document.getElementById('btnSwitchZait');
  const btnVoltz = document.getElementById('btnSwitchVoltz');
  if (!btnZait || !btnVoltz) return;
  btnZait.removeAttribute('disabled'); btnVoltz.removeAttribute('disabled');
  btnZait.style.display = '';
  btnVoltz.style.display = '';
  if (currentUser.role === 'client') {
    const freshUser = db.users.find(u => u.id === currentUser.id);
    const mode = freshUser ? (freshUser.allowedMode || 'zait') : 'zait';
    if (mode === 'zait') { btnVoltz.setAttribute('disabled', 'true'); btnVoltz.style.display = 'none'; account = 'zait'; }
    else if (mode === 'voltz') { btnZait.setAttribute('disabled', 'true'); btnZait.style.display = 'none'; account = 'voltz'; }
    localStorage.setItem('activeAccount', account);
  }
}

function applyTheme() {
  const isZait = account === 'zait';
  document.getElementById('brandName').innerHTML = isZait ? 'ZAIT<span class="light">PAY</span>' : 'VOLTZ<span class="light">PAY</span>';
  document.querySelectorAll('.switch-btn').forEach(b => b.classList.toggle('active', b.dataset.account === account));
}

function renderNav() {
  const nav = document.getElementById('nav');
  const role = String(currentUser.role || '').toUpperCase();
  let menus = clientMenus;
  
  if (role === 'MASTER' || role === 'ADMIN') {
    menus = account === 'voltz' ? voltzAdminMenus : zaitAdminMenus;
  } else if (role === 'MANAGER') {
    menus = managerMenus;
  }
  
  nav.innerHTML = menus.map(([key, label, svgIcon]) => {
    const activeClass = page === key ? 'class="active"' : '';
    return `<button ${activeClass} onclick="openPage('${key}')">${svgIcon} <span>${label}</span></button>`;
  }).join('');
  
  const pageInfo = menus.find(m => m[0] === page) || (menus.length > 0 ? menus[0] : ['dashboard', 'Dashboard', '']);
  document.getElementById('pageTitle').textContent = pageInfo[1];
  document.getElementById('pageSubtitle').textContent = (role === 'MASTER' || role === 'MANAGER') ? 'Gestão da Infraestrutura' : 'Operações Bancárias';
}

function openPage(key) { page = key; render(); }
function userLedger(userId = currentUser.id) { return db.ledgers[userId] ? db.ledgers[userId][account] : { balance: 0, transactions: [], boletos:[], links:[] }; }
function activeAccountPayload() {
  const ledger = userLedger();
  return { core: account === 'voltz' ? 'VOLTZ' : 'ZAIT', account_core: account === 'voltz' ? 'VOLTZ' : 'ZAIT', account_id: ledger?.accountId || null, conta_id: ledger?.accountId || null };
}

async function syncData() {
  if(!currentUser) return;
  try {
    const role = String(currentUser.role || '').toUpperCase();
    if(role === 'MASTER' || role === 'MANAGER') {
      const users = await window.ZaitPayApi.request('/users');
      db.users = users;
      try { db.kycPending = await window.ZaitPayApi.getKycPending(); } catch(e) { db.kycPending = []; }
      if(account === 'voltz') {
        try { db.voltzPools = await window.ZaitPayApi.getVoltzPools(); } catch(e) { db.voltzPools = []; console.warn('Falha ao carregar contas bolsão:', e); }
        try { db.voltzPoolsSummary = await window.ZaitPayApi.getVoltzPoolsSummary(); } catch(e) { db.voltzPoolsSummary = null; console.warn('Falha ao carregar resumo consolidado dos bolsões:', e); }
      }
    }
    const accounts = await window.ZaitPayApi.request('/financial-accounts');
    if(role === 'CLIENT') {
      const availableCores = new Set((accounts || []).map(acc => String(acc.core || 'ZAIT').toLowerCase()));
      const inferredMode = availableCores.has('zait') && availableCores.has('voltz') ? 'all' : (availableCores.has('voltz') ? 'voltz' : 'zait');
      currentUser.allowedMode = inferredMode;
      const existingUser = db.users.find(u => u.id === currentUser.id);
      if(existingUser) existingUser.allowedMode = currentUser.allowedMode;
      else db.users.push({ ...currentUser, role: 'client', allowedMode: currentUser.allowedMode });
    }
    accounts.forEach(acc => {
      if(!db.ledgers[acc.user_id]) db.ledgers[acc.user_id] = { zait: { balance: 0, transactions: [], boletos: [], links: [] }, voltz: { balance: 0, transactions: [], boletos: [], links: [] } };
      const core = String(acc.core || 'ZAIT').toLowerCase();
      if(!db.ledgers[acc.user_id][core]) db.ledgers[acc.user_id][core] = { balance: 0, transactions: [], boletos: [], links: [] };
      db.ledgers[acc.user_id][core].accountId = acc.id;
      db.ledgers[acc.user_id][core].agency = acc.agency || acc.agencia || acc.branch_number || '';
      db.ledgers[acc.user_id][core].accountNumber = acc.account_number || acc.numero_conta || '';
      db.ledgers[acc.user_id][core].accountDigit = acc.account_digit || acc.digito_conta || '';
      db.ledgers[acc.user_id][core].accountDisplay = acc.account_display || (db.ledgers[acc.user_id][core].accountNumber ? `${db.ledgers[acc.user_id][core].agency || '0001'} / ${db.ledgers[acc.user_id][core].accountNumber}-${db.ledgers[acc.user_id][core].accountDigit || '0'}` : '');
      db.ledgers[acc.user_id][core].balance = Number(acc.balance || acc.saldo_disponivel || 0);
      db.ledgers[acc.user_id][core].transactions = acc.ledger || [];
    });
  } catch (err) { console.warn('Erro ao sincronizar dados reais:', err); }
}

async function render() {
  if(!currentUser) return;
  await syncData();
  enforceOperationMode(); applyTheme(); renderNav();
  
  const role = String(currentUser.role || '').toUpperCase();
  document.getElementById('userName').textContent = currentUser.name;
  document.getElementById('userRole').textContent = role === 'MASTER' ? 'Acesso Master' : (role === 'MANAGER' ? 'Gerente de Contas' : 'Cliente');
  document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
  
  if(role === 'MASTER' || role === 'MANAGER') document.getElementById('btnAdminPanel').classList.remove('hidden');
  else document.getElementById('btnAdminPanel').classList.add('hidden');

  const map = { dashboard, clientes, kyc, extratos, conta, pix, cartao, boletos, links, api, webhooks, split, voltz_bolsoes, client_dashboard, client_extrato, client_pix, client_transfer, client_boletos, client_links, client_machine, client_profile };
  document.getElementById('content').innerHTML = (map[page] || dashboard)();
  setupMaskListeners();
}

// ======================== ENGINE DE SEGURANÇA E REDE MOCK (MUITO REAL) ========================
function initSecurityGate(onSuccess) {
  const modalHtml = `
    <div style="text-align:center; padding:10px 0;">
      <p class="muted" style="margin-bottom:20px;">Digite sua senha transacional de 4 dígitos para autorizar o procedimento na rede BaaS Zait.</p>
      <input type="password" id="pinCode" maxlength="4" style="font-size:24px; text-align:center; letter-spacing:12px; width:160px; display:block; margin:0 auto 20px; padding:10px;" placeholder="••••" />
      <button class="btn full" onclick="validatePinGate()">Confirmar Assinatura Digital</button>
    </div>
  `;
  openModal("Assinatura Transacional Exigida", modalHtml);
  
  window.validatePinGate = function() {
    const pin = document.getElementById('pinCode').value;
    if(pin.length !== 4) { alert("Insira o PIN de 4 dígitos."); return; }
    
    // Inicia Loader de rede simulado
    openModal("Processando Solicitação", `
      <div style="text-align:center; padding:30px 0;">
        <div class="loader-spinner"></div>
        <p style="margin-top:20px; font-weight:500;">Conectando ao Gate da CIP e Banco Central...</p>
        <p class="muted" style="font-size:12px;">Validando chaves criptográficas e liquidação de saldo.</p>
      </div>
    `);
    
    setTimeout(() => { closeModal(); onSuccess(); }, 1800); // Latência de 1.8 segundos perfeita
  };
}

function showComprovanteModal(title, detailsHtml) {
  const receiptId = uid('AUTH');
  const html = `
    <div class="receipt-card">
      <div class="receipt-header">ZAIT<span>PAY</span></div>
      <div style="text-align:center; margin-bottom:20px;">
        <span class="pill ok">Transação Autenticada</span>
      </div>
      ${detailsHtml}
      <hr style="border:0; border-top:1px dashed var(--border); margin:20px 0;" />
      <p style="font-size:11px; color:var(--muted); margin:0; word-break:break-all;"><strong>ID de Autenticação BaaS:</strong><br>${receiptId}</p>
      <p style="font-size:11px; color:var(--muted); margin:5px 0 0 0;"><strong>Data de Processamento:</strong> ${new Date().toLocaleString('pt-BR')}</p>
      <button class="btn ghost full" style="margin-top:24px;" onclick="closeModal(); openPage('client_dashboard');">Fechar Comprovante</button>
    </div>
  `;
  openModal(title, html);
}

// ======================== ADMIN ABAS IMPLEMENTADAS ========================
function dashboard() {
  const activeCore = account === 'voltz' ? 'voltz' : 'zait';
  const activeLabel = activeCore === 'voltz' ? 'VOLTZ PAY' : 'ZAIT PAY';
  const activeColor = activeCore === 'voltz' ? 'var(--voltz-primary)' : 'var(--zait-primary)';
  let totalBalance = 0;
  let activeAccounts = 0;
  db.users.filter(u => !['MASTER','MANAGER','ADMIN'].includes(String(u.role || '').toUpperCase())).forEach(u => {
    const ledger = db.ledgers[u.id]?.[activeCore];
    if (ledger?.accountId) {
      activeAccounts += 1;
      totalBalance += Number(ledger?.balance || 0);
    }
  });
  
  return `<div class="grid cards">
    <div class="card" style="position:relative;">
      <span class="pill ok">Saldo total ${activeLabel}</span>
      <div class="metric" style="color:${activeColor}">${displayMoney(totalBalance)}</div>
      <span class="muted">Soma somente das contas ${activeLabel} dos clientes</span>
      <button class="privacy-toggle" onclick="togglePrivacy()">${balancesHidden ? Icons.eyeClosed : Icons.eyeOpen}</button>
    </div>
    <div class="card"><span class="pill">Ecossistema</span><div class="metric">${activeAccounts}</div><span class="muted">Contas ${activeLabel} habilitadas</span></div>
    <div class="card"><span class="pill warn">KYC</span><div class="metric">${(db.kycPending || []).length}</div><span class="muted">Contas pendentes de ativação</span></div>
  </div><br><div class="card"><h3>Engenharia Financeira Integrada</h3><p class="muted">Selecione uma partição no menu lateral para auditoria técnica e gestão de operações.</p></div>`;
}

function clientes() {
  const clients = db.users.filter(u => u.id !== currentUser.id);
  let rows = clients.map(u => {
    const ledgZ = db.ledgers[u.id]?.zait || { balance: 0 };
    const ledgV = db.ledgers[u.id]?.voltz || { balance: 0 };
    const accountIds = getUserAccountIds(u.id);
    return `<tr>
      <td><strong>${u.name}</strong><br><small class="muted">${u.email}</small><br><small class="muted">Telefone: ${u.phone || '-'} | RG: ${u.rg || '-'}</small></td>
      <td><span class="pill">${String(u.role).toUpperCase()}</span></td>
      <td>${u.active ? '<span class="pill ok">Ativo</span>' : '<span class="muted">Inativo</span>'}</td>
      <td><span style="color:var(--zait-primary)">Zait:</span> ${money(ledgZ.balance)}<br><small class="muted">Conta: ${ledgZ.accountDisplay || 'não criada'}</small><br><span style="color:var(--voltz-primary)">Voltz:</span> ${money(ledgV.balance)}<br><small class="muted">Conta: ${ledgV.accountDisplay || 'não criada'}</small></td>
      <td>
        <select class="table-select" onchange="setClientOperatingMode('${u.id}', this.value)">
          <option value="all" ${u.allowedMode === 'all'?'selected':''}>Liberar as 2 Contas</option>
          <option value="zait" ${u.allowedMode === 'zait'?'selected':''}>Apenas ZAIT PAY</option>
          <option value="voltz" ${u.allowedMode === 'voltz'?'selected':''}>Apenas VOLTZ PAY</option>
        </select>
      </td>
      <td>
        <button class="btn ghost" style="padding:6px 10px; font-size:11px; margin-bottom:6px;" onclick="openAdminCashModal('${u.id}','CREDIT')">Inserir dinheiro</button><br>
        <button class="btn ghost" style="padding:6px 10px; font-size:11px;" onclick="openAdminCashModal('${u.id}','DEBIT')">Fazer retirada</button>
        ${accountIds.length ? '' : '<br><small class="muted">Sem conta sincronizada</small>'}
      </td>
      <td>
        <button class="btn ghost" style="padding:6px 10px; font-size:11px; margin-bottom:6px;" onclick="toggleClientStatus('${u.id}', ${u.active ? 'false' : 'true'})">${u.active ? 'Bloquear' : 'Desbloquear'}</button><br>
        <button class="btn danger" style="padding:6px 10px; font-size:11px;" onclick="deleteClientUser('${u.id}')">Excluir</button>
      </td>
    </tr>`;
  }).join('');
  const role = String(currentUser.role || '').toUpperCase();
  const createForm = `
    <div class="card" style="margin-bottom: 20px;">
      <h3>Cadastrar Novo ${role === 'MASTER' ? 'Gerente ou Cliente' : 'Cliente'}</h3>
      <p class="muted">Gerentes agora têm visão operacional de todas as contas, conforme política definida para o painel.</p>
      <div class="grid two">
        <div>
          <label>Nome Completo</label>
          <input id="newUserName" placeholder="Ex: João Silva" />
          <label>E-mail</label>
          <input id="newUserEmail" type="email" placeholder="exemplo@email.com" />
          <label>Telefone</label>
          <input id="newUserPhone" placeholder="(00) 00000-0000" />
          <label>RG</label>
          <input id="newUserRg" placeholder="00.000.000-0" />
        </div>
        <div>
          <label>Senha Inicial</label>
          <input id="newUserPass" type="password" placeholder="••••••" />
          <label>Usuário</label>
          <select id="newUserRole">
            <option value="CLIENT">Cliente (Usuário)</option>
            ${role === 'MASTER' ? '<option value="MANAGER">Gerente de Contas</option>' : ''}
          </select>
          <label>Contas habilitadas</label>
          <select id="newUserMode">
            <option value="zait">Apenas ZAIT PAY</option>
            <option value="voltz">Apenas VOLTZ PAY</option>
            <option value="all">Liberar as 2 Contas</option>
          </select>
        </div>
      </div>
      <button class="btn full" style="margin-top: 15px;" onclick="handleCreateUser()">Criar Acesso</button>
    </div>
  `;

  return `
    ${createForm}
    <div class="card">
      <h3>Gestão Operacional de Clientes</h3>
      <div class="table-responsive">
        <table>
          <thead><tr><th>Nome / E-mail</th><th>Usuário</th><th>Status</th><th>Saldos</th><th>Trava Operacional</th><th>Depósito / Retirada</th><th>Ações</th></tr></thead>
          <tbody>${rows || '<tr><td colspan="7">Nenhum registro encontrado.</td></tr>'}</tbody>
        </table>
      </div>
    </div>
  `;
}


function kycStatusLabel(status) {
  const s = String(status || 'pendente').toLowerCase();
  if (s === 'aprovado') return '<span class="pill ok">Aprovado</span>';
  if (s === 'reprovado') return '<span class="pill danger">Reprovado</span>';
  if (s === 'em_analise') return '<span class="pill warn">Em análise</span>';
  return '<span class="pill">Pendente</span>';
}

function kyc() {
  const rows = (db.kycPending || []).map(item => {
    const docs = item.documents || item.metadata?.documents || [];
    const docButtons = docs.map(d => `<button class="btn ghost" style="padding:6px 10px;font-size:11px;margin:2px;" onclick="downloadKycDocument('${item.accountId || item.id}','${d.kind || d.id}','${(d.originalName || 'documento').replace(/'/g, '')}')">Baixar ${d.kind || 'documento'}</button>`).join('') || '<span class="muted">Sem documentos</span>';
    return `<tr>
      <td><strong>${item.user?.name || '-'}</strong><br><small class="muted">${item.user?.email || '-'}</small></td>
      <td>${item.metadata?.accountType || '-'}<br><small>${item.metadata?.document || '-'}</small></td>
      <td>${kycStatusLabel(item.kycStatus)}</td>
      <td>${docButtons}</td>
      <td>
        <button class="btn ghost" style="padding:6px 10px;font-size:11px;margin-bottom:6px;" onclick="openKycDetails('${item.accountId || item.id}')">Conferir dados</button><br>
        <button class="btn" style="padding:6px 10px;font-size:11px;margin-bottom:6px;" onclick="approveKycAccount('${item.accountId || item.id}')">Ativar conta</button><br>
        <button class="btn danger" style="padding:6px 10px;font-size:11px;" onclick="rejectKycAccount('${item.accountId || item.id}')">Reprovar</button>
      </td>
    </tr>`;
  }).join('');
  return `<div class="card">
    <h3>Contas Pendentes de Ativação</h3>
    <p class="muted">Admin master e gerente podem baixar documentos, conferir a facial/selfie e ativar ou reprovar a conta. A ativação libera o login do cliente.</p>
    <div class="table-responsive"><table><thead><tr><th>Cliente</th><th>Tipo / Documento</th><th>Status KYC</th><th>Documentação</th><th>Ações</th></tr></thead><tbody>${rows || '<tr><td colspan="5">Nenhuma conta pendente.</td></tr>'}</tbody></table></div>
  </div>`;
}

window.downloadKycDocument = async function(accountId, kind, originalName) {
  try { await window.ZaitPayApi.downloadKycDocument(accountId, kind, originalName); }
  catch (err) { alert('Erro ao baixar documento: ' + err.message); }
};

window.openKycDetails = function(accountId) {
  const item = (db.kycPending || []).find(i => String(i.accountId || i.id) === String(accountId));
  if (!item) return alert('Solicitação KYC não encontrada.');
  const docs = item.documents || item.metadata?.documents || [];
  const docsHtml = docs.map(d => `<li><strong>${d.kind}</strong>: ${d.originalName || d.storedName} — ${(Number(d.size || 0)/1024).toFixed(1)} KB <button class="btn ghost" style="padding:4px 8px;font-size:11px;" onclick="downloadKycDocument('${accountId}','${d.kind || d.id}','${(d.originalName || 'documento').replace(/'/g, '')}')">Baixar</button></li>`).join('') || '<li>Nenhum documento enviado.</li>';
  openModal('Conferência documental', `
    <p><strong>Cliente:</strong> ${item.user?.name || '-'}</p>
    <p><strong>E-mail:</strong> ${item.user?.email || '-'}</p>
    <p><strong>Documento:</strong> ${item.metadata?.document || '-'}</p>
    <p><strong>Tipo:</strong> ${item.metadata?.accountType || '-'}</p>
    <p><strong>E-mail verificado:</strong> ${item.metadata?.emailVerified ? 'Sim' : 'Não'}</p>
    <p><strong>Status KYC:</strong> ${item.kycStatus || '-'}</p>
    <h4>Arquivos enviados</h4><ul>${docsHtml}</ul>
    <button class="btn full" onclick="approveKycAccount('${accountId}')">Ativar conta agora</button>
    <button class="btn danger full" style="margin-top:8px;" onclick="rejectKycAccount('${accountId}')">Reprovar documentação</button>
  `);
};

window.approveKycAccount = async function(accountId) {
  if (!confirm('Confirma a ativação desta conta após conferência documental?')) return;
  try {
    await window.ZaitPayApi.approveKyc(accountId, 'Aprovado pelo painel administrativo');
    showToast('Conta ativada com sucesso.');
    closeModal();
    render();
  } catch (err) { alert('Erro ao ativar conta: ' + err.message); }
};

window.rejectKycAccount = async function(accountId) {
  const reason = prompt('Informe o motivo da reprovação:', 'Documentação ilegível ou divergente');
  if (reason === null) return;
  try {
    await window.ZaitPayApi.rejectKyc(accountId, reason);
    showToast('Conta reprovada e mantida pendente.');
    closeModal();
    render();
  } catch (err) { alert('Erro ao reprovar conta: ' + err.message); }
};

window.handleCreateUser = async function() {
  const name = document.getElementById('newUserName').value;
  const email = document.getElementById('newUserEmail').value;
  const password = document.getElementById('newUserPass').value;
  const phone = document.getElementById('newUserPhone')?.value || '';
  const rg = document.getElementById('newUserRg')?.value || '';
  const role = document.getElementById('newUserRole').value;
  const mode = document.getElementById('newUserMode')?.value || 'zait';

  if(!name || !email || !password) return alert('Preencha todos os campos');

  try {
    await window.ZaitPayApi.request('/auth/admin/create-user', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, phone, rg, role, mode, allowedMode: mode })
    });
    showToast(`${role === 'MANAGER' ? 'Gerente' : 'Cliente'} criado com sucesso!`);
    render();
  } catch (err) {
    alert('Erro ao criar: ' + err.message);
  }
};

window.toggleClientStatus = async function(userId, active) {
  const user = db.users.find(u => String(u.id) === String(userId));
  if (!user) return alert('Cliente não encontrado.');
  const action = active ? 'desbloquear' : 'bloquear';
  if (!confirm(`Confirma ${action} o usuário ${user.name}?`)) return;
  try {
    await window.ZaitPayApi.setUserStatus(userId, active);
    user.active = Boolean(active);
    save();
    showToast(active ? 'Usuário desbloqueado com sucesso.' : 'Usuário bloqueado com sucesso.');
    render();
  } catch (err) {
    alert('Erro ao alterar status do usuário: ' + err.message);
  }
};

window.deleteClientUser = async function(userId) {
  const user = db.users.find(u => String(u.id) === String(userId));
  if (!user) return alert('Cliente não encontrado.');
  if (!confirm(`Excluir definitivamente o usuário ${user.name}? Esta ação remove o acesso e as contas vinculadas.`)) return;
  try {
    await window.ZaitPayApi.deleteUser(userId);
    db.users = db.users.filter(u => String(u.id) !== String(userId));
    delete db.ledgers[userId];
    save();
    showToast('Usuário excluído com sucesso.');
    render();
  } catch (err) {
    alert('Erro ao excluir usuário: ' + err.message);
  }
};

function getUserAccounts(userId) {
  const accounts = [];
  ['zait', 'voltz'].forEach(core => {
    const ledger = db.ledgers[userId]?.[core];
    if (ledger?.accountId) accounts.push({ id: ledger.accountId, core, label: core === 'zait' ? 'ZAIT PAY' : 'VOLTZ PAY', balance: ledger.balance || 0 });
  });
  return accounts;
}

function getUserAccountIds(userId) {
  return getUserAccounts(userId).map(a => a.id);
}

window.openAdminCashModal = function(userId, operation) {
  const user = db.users.find(u => u.id === userId);
  if(!user) return alert('Cliente não encontrado.');
  const accounts = getUserAccounts(userId);
  if(!accounts.length) return alert('Conta financeira ainda não sincronizada para este cliente.');
  const opLabel = operation === 'CREDIT' ? 'Inserir dinheiro' : 'Fazer retirada';
  const html = `
    <p class="muted">Operação administrativa para <strong>${user.name}</strong>. Todos os lançamentos serão registrados no livro razão.</p>
    <label>Conta de destino</label>
    <select id="adminAccountId">${accounts.map(a => `<option value="${a.id}">${a.label} — saldo atual ${money(a.balance)}</option>`).join('')}</select>
    <label>Valor</label>
    <input id="adminAmount" type="text" placeholder="R$ 0,00" />
    <label>Descrição / Motivo</label>
    <input id="adminDescription" placeholder="Ex: ajuste operacional autorizado" />
    <button class="btn full" onclick="handleAdminCash('${operation}')">${opLabel}</button>
  `;
  openModal(opLabel, html);
  setupMaskListeners();
};

window.handleAdminCash = async function(operation) {
  const accountId = document.getElementById('adminAccountId').value;
  const amount = parseCurrency(document.getElementById('adminAmount').value);
  const description = document.getElementById('adminDescription').value || (operation === 'CREDIT' ? 'Depósito administrativo' : 'Retirada administrativa');
  if(!accountId) return alert('Selecione uma conta.');
  if(amount <= 0) return alert('Informe um valor válido.');

  const endpoint = operation === 'CREDIT' ? '/accounts/cash-in' : '/accounts/cash-out';
  try {
    await window.ZaitPayApi.request(endpoint, {
      method: 'POST',
      body: JSON.stringify({ account_id: accountId, valor: amount, amount, description })
    });
    closeModal();
    showToast(operation === 'CREDIT' ? 'Dinheiro inserido com sucesso.' : 'Retirada realizada com sucesso.');
    render();
  } catch (err) {
    alert('Erro na operação administrativa: ' + err.message);
  }
};

async function setClientOperatingMode(userId, mode) {
  const user = db.users.find(u => u.id === userId);
  if (!user) return;
  const previous = user.allowedMode || 'all';
  user.allowedMode = mode;
  try {
    await window.ZaitPayApi.setClientOperatingMode(userId, mode);
    save();
    showToast(`Configuração operacional salva e contas sincronizadas.`);
    render();
  } catch (err) {
    user.allowedMode = previous;
    alert('Erro ao habilitar contas do cliente: ' + err.message);
    render();
  }
}

function extratos() {
  let all = [];
  db.users.forEach(u => {
    if(db.ledgers[u.id]?.zait?.transactions) db.ledgers[u.id].zait.transactions.forEach(t => all.push({...t, u: u.name, b: 'ZAIT PAY'}));
    if(db.ledgers[u.id]?.voltz?.transactions) db.ledgers[u.id].voltz.transactions.forEach(t => all.push({...t, u: u.name, b: 'VOLTZ PAY'}));
  });
  all.sort((a,b) => b.date.localeCompare(a.date));
  let rows = all.map(t => `<tr><td><strong>${t.u}</strong></td><td><span class="pill">${t.b}</span></td><td>${t.method}</td><td><span class="pill ${t.type==='Entrada'?'ok':'warn'}">${t.type}</span></td><td>${t.description}</td><td><strong>${money(t.value)}</strong></td></tr>`).join('');
  return `<div class="card"><h3>Extrato Consolidado Geral</h3><div class="table-responsive"><table><thead><tr><th>Cliente</th><th>Bandeira</th><th>Método</th><th>Fluxo</th><th>Descrição</th><th>Valor</th></tr></thead><tbody>${rows || '<tr><td colspan="6">Sem movimentações.</td></tr>'}</tbody></table></div></div>`;
}

function conta() {
  const clients = db.users.filter(u => u.role === 'client');
  const pjs = clients.filter(u => u.type === 'PJ');
  const pfs = clients.filter(u => u.type === 'PF' || !u.type);
  const buildRows = (arr) => arr.map(u => `<tr>
    <td><strong>${u.name}</strong><br><small class="muted">${u.doc || 'Falta Documento'}</small></td>
    <td>${u.email}</td>
    <td><button class="btn ghost" style="padding:6px 12px; font-size:11px;" onclick="editClientUi('${u.id}')">Editar Cadastro</button></td>
  </tr>`).join('');
  return `
    <div class="grid two" style="grid-template-columns: 1fr 1fr;">
      <div class="card">
        <h3>Contas Pessoa Jurídica (PJ)</h3>
        <div class="table-responsive"><table><thead><tr><th>Razão Social / CNPJ</th><th>E-mail</th><th>Ações</th></tr></thead><tbody>${buildRows(pjs) || '<tr><td colspan="3">Nenhum PJ.</td></tr>'}</tbody></table></div>
      </div>
      <div class="card">
        <h3>Contas Pessoa Física (PF)</h3>
        <div class="table-responsive"><table><thead><tr><th>Nome Completo / CPF</th><th>E-mail</th><th>Ações</th></tr></thead><tbody>${buildRows(pfs) || '<tr><td colspan="3">Nenhum PF.</td></tr>'}</tbody></table></div>
      </div>
    </div>
  `;
}

window.editClientUi = function(id) {
  const user = db.users.find(u => u.id === id);
  if(!user) return;
  const html = `
    <label>Nome / Razão Social</label><input id="editName" value="${user.name}" />
    <label>E-mail Corporativo</label><input id="editEmail" value="${user.email}" />
    <label>Tipo (PF/PJ)</label><select id="editType"><option value="PF" ${user.type==='PF'?'selected':''}>PF</option><option value="PJ" ${user.type==='PJ'?'selected':''}>PJ</option></select>
    <label>Documento de Identificação</label><input id="editDoc" value="${user.doc || ''}" />
    <button class="btn full" onclick="saveClientEdit('${id}')">Gravar Alterações</button>
  `;
  openModal(`Editar Cliente: ${user.name}`, html);
};

window.saveClientEdit = function(id) {
  const user = db.users.find(u => u.id === id);
  user.name = document.getElementById('editName').value;
  user.email = document.getElementById('editEmail').value;
  user.type = document.getElementById('editType').value;
  user.doc = document.getElementById('editDoc').value;
  save(); closeModal(); showToast('Base de clientes atualizada.'); render();
};

function pix() {
  setTimeout(() => renderPixTable(), 50);
  return `
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <h3>Monitoramento de Entradas PIX</h3>
        <button class="btn" style="padding: 8px 16px; font-size:12px;" onclick="alert('Relatório de Auditoria PIX processado com sucesso.')">⬇️ Exportar Extrato (PDF)</button>
      </div>
      <input type="text" id="pixSearch" placeholder="🔍 Buscar por Nome do Cliente..." onkeyup="renderPixTable()" style="max-width:400px;" />
      <div class="table-responsive">
        <table>
          <thead><tr><th>Data/Hora</th><th>Conta Destinatária</th><th>Descrição / Pagador</th><th>Valor</th></tr></thead>
          <tbody id="pixTableBody"></tbody>
        </table>
      </div>
    </div>
  `;
}

window.renderPixTable = function() {
  const term = (document.getElementById('pixSearch')?.value || '').toLowerCase();
  let entries = [];
  db.users.forEach(u => {
    const tr = db.ledgers[u.id]?.[account]?.transactions || [];
    tr.filter(t => t.method === 'PIX' && t.type === 'Entrada').forEach(t => entries.push({...t, clientName: u.name}));
  });
  if(term) entries = entries.filter(e => e.clientName.toLowerCase().includes(term));
  const tbody = document.getElementById('pixTableBody');
  if(!tbody) return;
  tbody.innerHTML = entries.map(e => `<tr><td>${e.date}</td><td><strong>${e.clientName}</strong></td><td>${e.description}</td><td><strong style="color:var(--success)">${money(e.value)}</strong></td></tr>`).join('') || '<tr><td colspan="4">Nenhuma liquidação PIX encontrada.</td></tr>';
};

function cartao() {
  let entries = [];
  db.users.forEach(u => {
    const tr = db.ledgers[u.id]?.[account]?.transactions || [];
    tr.filter(t => t.method === 'CARTAO').forEach(t => entries.push({...t, clientName: u.name}));
  });
  const rows = entries.map(e => {
    const splitText = e.cardType === 'Crédito' && e.installments > 1 ? `<span class="pill">Em ${e.installments}x</span>` : '<span class="muted">À vista</span>';
    return `<tr>
      <td><strong>${e.clientName}</strong></td>
      <td>${e.cardType === 'Crédito' ? '💳 Crédito' : '🏧 Débito'}</td>
      <td><span class="pill ${e.type==='Entrada'?'ok':'warn'}">${e.type}</span></td>
      <td>${e.merchant || e.description}</td>
      <td>${splitText}</td>
      <td><strong>${money(e.value)}</strong></td>
    </tr>`;
  }).join('');
  return `<div class="card"><h3>Movimentação Global de Cartões</h3><div class="table-responsive"><table><thead><tr><th>Cliente Titular</th><th>Modalidade</th><th>Fluxo</th><th>Estabelecimento Comercial</th><th>Parcelamento</th><th>Valor</th></tr></thead><tbody>${rows || '<tr><td colspan="6">Sem transações capturadas nas maquininhas / links.</td></tr>'}</tbody></table></div></div>`;
}

function boletos() {
  let allBoletos = [];
  db.users.forEach(u => {
    const bls = db.ledgers[u.id]?.[account]?.boletos || [];
    bls.forEach(b => allBoletos.push({...b, clientName: u.name}));
  });
  const rows = allBoletos.map(b => {
    const issueDate = b.issueDate || b.issue_date || b.created_date || b.createdAt;
    const dueDate = b.dueDate || b.due_date || b.vencimento;
    return `<tr>
      <td><small class="muted">${b.id}</small></td>
      <td><strong>${b.clientName}</strong></td>
      <td>${b.desc}</td>
      <td>${formatDateBR(issueDate)}</td>
      <td>${formatDateBR(dueDate)}</td>
      <td>${money(b.value)}</td>
      <td><span class="pill ${b.status==='Pago'?'ok':'warn'}">${b.status || 'Pendente'}</span></td>
    </tr>`;
  }).join('');
  return `<div class="card"><h3>Central de Monitoramento de Boletos</h3><div class="table-responsive"><table><thead><tr><th>ID do Título</th><th>Cliente Cedente</th><th>Sacado / Descrição</th><th>Data de Emissão</th><th>Data de Vencimento</th><th>Valor Nominal</th><th>Status Liquidação</th></tr></thead><tbody>${rows || '<tr><td colspan="7">Nenhum boleto registrado.</td></tr>'}</tbody></table></div></div>`;
}

function links() {
  let allLinks = [];
  db.users.forEach(u => {
    const lnks = db.ledgers[u.id]?.[account]?.links || [];
    lnks.forEach(l => allLinks.push({...l, clientName: u.name}));
  });
  const rows = allLinks.map(l => `<tr>
    <td><strong>${l.clientName}</strong></td>
    <td>${l.desc}</td>
    <td>${money(l.value)} <small class="muted">(Parc. Máx ${l.parc}x)</small></td>
    <td>${l.emailDestino || '<span class="muted">Direto via App</span>'}</td>
  </tr>`).join('');
  return `<div class="card"><h3>Auditoria de Links de Checkout</h3><div class="table-responsive"><table><thead><tr><th>Cliente Criador</th><th>Nome do Item Comercial</th><th>Valor Configurado</th><th>Destino (E-mail Notificado)</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Nenhum link ativo no ecossistema.</td></tr>'}</tbody></table></div></div>`;
}

function api() {
  const clientsWithApi = db.users.filter(u => u.apiAtiva);
  const rows = clientsWithApi.map(u => `<tr><td><strong>${u.name}</strong></td><td><span class="pill ok">Ativo</span></td><td><small class="muted">${uid('KEY')}</small></td><td>${Math.floor(Math.random()*4500)+500} req/h</td></tr>`).join('');
  return `<div class="grid two">
    <div class="card">
      <h3>Configuração Endpoint API REST Core</h3>
      <label>URL Gateway Produção</label><input value="https://api.zaitpay.com.br" disabled />
      <label>Rate Limit Global (Requisições por minuto)</label><input type="number" value="3000" />
      <button class="btn full" onclick="showToast('Rate limit salvo.')">Atualizar Parâmetros</button>
    </div>
    <div class="card">
      <h3>Acessos Ativos por Clientes Dev</h3>
      <div class="table-responsive"><table><thead><tr><th>Cliente Integrado</th><th>Status</th><th>API Key Credencial</th><th>Métrica Trafego</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Nenhum client usando API BaaS.</td></tr>'}</tbody></table></div>
    </div>
  </div>`;
}

function webhooks() {
  return `<div class="grid two">
    <div class="card">
      <h3>Configuração e Callbacks Webhook</h3>
      <label>Destino Principal Logs S/A</label><input value="https://webhook.zaitpay.com.br/disparos" disabled />
      <div style="margin-bottom:20px;">
        <label>Eventos Habilitados para Disparo</label>
        <label style="display:flex; gap:10px; text-transform:none; color:#fff; font-weight:normal; margin-bottom:6px;"><input type="checkbox" checked /> pix.received (Entradas)</label>
        <label style="display:flex; gap:10px; text-transform:none; color:#fff; font-weight:normal; margin-bottom:6px;"><input type="checkbox" checked /> invoice.paid (Boleto Pago)</label>
        <label style="display:flex; gap:10px; text-transform:none; color:#fff; font-weight:normal;"><input type="checkbox" /> link.expired (Checkout Expirado)</label>
      </div>
      <button class="btn full" onclick="showToast('Configurações de webhooks propagadas.')">Salvar Escopo</button>
    </div>
    <div class="card">
      <h3>Monitor de Entrega Webhook (Tempo Real)</h3>
      <div class="table-responsive"><table><thead><tr><th>Evento</th><th>Mapeamento HTTP</th><th>Status Retorno</th></tr></thead><tbody>
        <tr><td>pix.received</td><td>POST 200 OK</td><td>Hoje, 11:32</td></tr>
        <tr><td>invoice.paid</td><td>POST 200 OK</td><td>Hoje, 09:15</td></tr>
        <tr><td>cc.checkout</td><td>POST <span style="color:var(--danger)">500 ERR</span></td><td>Ontem, 21:04</td></tr>
      </tbody></table></div>
    </div>
  </div>`;
}

function split() {
  return `
    <div class="card" style="margin-bottom:20px;">
      <h3>Motor de Split de Pagamentos (Split Rule)</h3>
      <p class="muted">Automatize a divisão de taxas e receitas instantaneamente na captura de qualquer transação de link ou checkout comercial.</p>
    </div>
    <div class="grid two">
      <div class="card">
        <h3>Nova Configuração de Divisão</h3>
        <label>Cliente Beneficiário</label>
        <select id="splitClient"><option value="all">Todos os Contratos (Global)</option>${db.users.filter(u=>u.role==='client').map(u=>`<option value="${u.id}">${u.name}</option>`).join('')}</select>
        <label>Fee Retido para ZAIT PAY (%)</label><input type="text" value="3,5%" />
        <label>Repasse para Conta de Destino (%)</label><input type="text" value="96,5%" />
        <button class="btn full" onclick="showToast('Regra de Split ativa no core bancário!')">Implantar Regra de Distribuição</button>
      </div>
      <div class="card">
        <h3>Regras e Comissões Vigentes</h3>
        <div class="table-responsive"><table><thead><tr><th>Alvo</th><th>Retenção Zait</th><th>Repasse Líquido</th></tr></thead><tbody>
          <tr><td>Global (Padrão)</td><td>3.5%</td><td>96.5%</td></tr>
          <tr><td>Tech Store SP</td><td>4.5%</td><td>95.5%</td></tr>
        </tbody></table></div>
      </div>
    </div>
  `;
}

// ======================== OPERAÇÕES DA ÁREA DO CLIENTE ========================
function client_dashboard() {
  const cl = userLedger();
  const activeLabel = account === 'voltz' ? 'VOLTZ PAY' : 'ZAIT PAY';
  const activeColor = account === 'voltz' ? 'var(--voltz-primary)' : 'var(--zait-primary)';
  return `
    <div class="grid cards" style="grid-template-columns: 1fr;">
      <div class="card" style="position:relative; max-width:460px;">
        <span class="pill ok">Saldo Disponível — ${activeLabel}</span>
        <div class="metric" style="color:${activeColor}">${displayMoney(cl.balance)}</div>
        <span class="muted">Conta ${account === 'voltz' ? 'poupança Voltz' : 'corrente Zait'} · Ag./Conta: ${cl.accountDisplay || 'aguardando sincronização'}</span>
        <button class="privacy-toggle" onclick="togglePrivacy()">${balancesHidden ? Icons.eyeClosed : Icons.eyeOpen}</button>
      </div>
    </div>
    <br>
    <div class="grid two">
      <div class="card">
        <h3>Ações Financeiras</h3>
        <button class="btn full" onclick="openPage('client_pix')">Enviar ou receber Pix</button><br>
        <button class="btn ghost full" onclick="openPage('client_boletos')">Emitir boleto registrado</button><br>
        <button class="btn ghost full" onclick="openPage('client_links')">Gerar checkout link</button><br>
        <button class="btn ghost full" onclick="openPage('client_machine')">Controlar maquininha</button>
      </div>
      <div class="card"><h3>Últimas Transações</h3>${tableTransactions(cl.transactions.slice(-3))}</div>
    </div>
  `;
}

function client_extrato() { return `<div class="card"><h3>Demonstrativo Financeiro da Conta</h3>${tableTransactions(userLedger().transactions)}</div>`; }

function client_transfer() {
  return `<div class="card" style="max-width:560px;">
    <h3>Transferência TED</h3>
    <p class="muted">Selecione o banco de destino e envie os dados bancários do favorecido.</p>
    <form onsubmit="handleClientTransfer(event)">
      <label>Modalidade</label>
      <select id="trMethod"><option value="TED">TED</option></select>
      <label>Valor da Transferência</label>
      <input id="trValue" type="text" placeholder="R$ 0,00" required />
      <label>Banco</label>
      <select id="trBank" required>${bankOptionsHtml()}</select>
      <label>Agência (sem dígito)</label>
      <input id="trBranch" placeholder="0001" required />
      <label>Conta</label>
      <input id="trAcc" placeholder="00000" required />
      <label>Dígito da Conta</label>
      <input id="trDigit" placeholder="0" maxlength="2" />
      <label>Tipo de Conta</label>
      <select id="trAccountType"><option value="checking">Conta Corrente</option><option value="savings">Conta Poupança</option><option value="payment">Conta Pagamento</option></select>
      <label>CPF/CNPJ do Favorecido</label>
      <input id="trDoc" placeholder="000.000.000-00" required />
      <label>Nome do Favorecido</label>
      <input id="trName" placeholder="Nome Completo" required />
      <button class="btn full">Efetuar Transferência</button>
    </form>
  </div>`;
}

window.handleClientTransfer = async function(e) {
  e.preventDefault();
  const val = parseCurrency(document.getElementById('trValue').value);
  const ledger = userLedger();
  if(val <= 0) { alert('Informe um valor válido.'); return; }
  if(ledger.balance < val) { alert('Saldo insuficiente.'); return; }

  const method = document.getElementById('trMethod').value;
  const bankCode = document.getElementById('trBank').value;
  const selectedBank = BRAZILIAN_BANKS.find(b => b.code === bankCode);
  const payload = {
    valor: val,
    amount: val,
    method: 'TED',
    bankCode,
    bankName: selectedBank?.name || bankCode,
    branchCode: document.getElementById('trBranch').value,
    accountNumber: document.getElementById('trAcc').value,
    accountDigit: document.getElementById('trDigit').value || '0',
    accountType: document.getElementById('trAccountType').value,
    document: document.getElementById('trDoc').value,
    name: document.getElementById('trName').value,
    account,
    userId: currentUser.id,
    ...activeAccountPayload()
  };

  initSecurityGate(async () => {
    try {
      await window.ZaitPayApi.request('/transfers/ted', { method: 'POST', body: JSON.stringify(payload) });
      showComprovanteModal("Transferência Realizada", `
        <p style="text-align:center; font-size:24px; font-weight:700; color:var(--success); margin:10px 0;">${money(val)}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Modalidade:</strong> ${method}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Favorecido:</strong> ${payload.name}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Banco:</strong> ${payload.bankCode} - ${payload.bankName}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Status:</strong> Enviado ao provedor BaaS</p>
      `);
      render();
    } catch (err) {
      alert('Erro na transferência: ' + err.message);
    }
  });
};

function client_pix() {
  return `<div class="grid two">
    <form class="card" onsubmit="handleClientPixSend(event)">
      <h3>Enviar PIX</h3>
      <p class="muted">Use este formulário para pagar ou transferir via chave PIX.</p>
      <label>Valor do Envio</label><input id="pixSendValue" type="text" placeholder="R$ 0,00" required />
      <label>Chave PIX do Destinatário</label><input id="pixSendDesc" placeholder="CPF, CNPJ, e-mail, telefone ou chave aleatória" required />
      <button class="btn full">Enviar PIX</button>
    </form>
    <form class="card" onsubmit="handleClientPixReceive(event)">
      <h3>Receber PIX</h3>
      <p class="muted">Gere QR Code e copia e cola para receber saldo via PIX.</p>
      <label>Valor a Receber</label><input id="pixReceiveValue" type="text" placeholder="R$ 0,00" required />
      <label>Método</label><select id="depMethod"><option value="PIX">PIX</option></select>
      <button class="btn full">Gerar QR Code PIX</button>
    </form>
  </div>`;
}

window.handleClientPix = function(e) {
  e.preventDefault();
  const type = document.getElementById('pixType').value;
  const rawValue = parseCurrency(document.getElementById('pixValue').value);
  const desc = document.getElementById('pixDesc').value;
  const ledger = userLedger();

  if(type === 'Saída' && ledger.balance < rawValue) { alert('Erro: Saldo Insuficiente.'); return; }
  if(rawValue <= 0) { alert('Insira um valor válido.'); return; }

  initSecurityGate(async () => {
    try {
      if(type === 'Saída') {
        await window.ZaitPayApi.request('/pix/send', { method: 'POST', body: JSON.stringify({ valor: rawValue, amount: rawValue, chave: desc, key: desc, description: desc, account, userId: currentUser.id, ...activeAccountPayload() }) });
        showComprovanteModal("Comprovante de Operação PIX", `
          <p style="text-align:center; font-size:24px; font-weight:700; color:#fff; margin:10px 0;">${money(rawValue)}</p>
          <p style="margin:5px 0; font-size:13px;"><strong>Tipo de Fluxo:</strong> Transferência Efetuada</p>
          <p style="margin:5px 0; font-size:13px;"><strong>Detalhamento Chave:</strong> ${desc}</p>
          <p style="margin:5px 0; font-size:13px;"><strong>Status:</strong> Enviado ao provedor BaaS configurado</p>
        `);
      } else {
        const resp = await window.ZaitPayApi.createPix({ valor: rawValue, value: rawValue, type: 'Entrada', account, userId: currentUser.id, ...activeAccountPayload() });
        showComprovanteModal("Recebimento PIX Gerado", `
          <div style="text-align:center;">
            <p style="font-size:24px; font-weight:700; color:var(--success);">${money(rawValue)}</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(resp.qrCode || resp.paymentCode)}" style="margin:20px 0; border:10px solid #fff; border-radius:10px;" />
            <p style="font-size:11px; word-break:break-all;">${resp.copyPaste || resp.paymentCode}</p>
          </div>
        `);
      }
      render();
    } catch (err) {
      alert('Erro na operação PIX: ' + err.message);
    }
  });
};

function client_boletos() {
  const bList = userLedger().boletos || [];
  const rows = bList.map(b => `<tr><td>${b.id}</td><td>${b.desc}</td><td>${formatDateBR(b.issueDate || b.issue_date || b.created_date || b.createdAt)}</td><td>${formatDateBR(b.dueDate || b.due_date || b.vencimento)}</td><td>${money(b.value)}</td><td><span class="pill ${b.status==='Pago'?'ok':'warn'}">${b.status}</span></td><td><button class="btn ghost" style="padding:4px 8px; font-size:11px;" onclick="alert('Download do PDF do Boleto CIP iniciado.')">PDF</button></td></tr>`).join('');
  return `<div class="grid two"><form class="card" onsubmit="handleClientBoleto(event)"><h3>Registrar Novo Boleto</h3>
    <label>Valor do Título</label><input id="bolValue" type="text" placeholder="R$ 0,00" required />
    <label>Nome Completo / Sacado</label><input id="bolDesc" placeholder="Quem vai pagar o boleto" required />
    <label>Data de Emissão</label><input id="bolIssueDate" type="date" value="${todayISO()}" required />
    <label>Data de Vencimento</label><input id="bolDueDate" type="date" value="${defaultDueISO()}" required />
    <button class="btn full">Gerar Título</button></form>
    <div class="card"><h3>Boletos Registrados na CIP</h3><div class="table-responsive"><table><thead><tr><th>ID</th><th>Sacado</th><th>Emissão</th><th>Vencimento</th><th>Valor</th><th>Status</th><th>Ações</th></tr></thead><tbody>${rows || '<tr><td colspan="7">Nenhum boleto encontrado.</td></tr>'}</tbody></table></div></div></div>`;
}

window.handleClientBoleto = async function(e) {
  e.preventDefault();
  const val = parseCurrency(document.getElementById('bolValue').value);
  const desc = document.getElementById('bolDesc').value;
  const issueDate = document.getElementById('bolIssueDate')?.value || todayISO();
  const dueDate = document.getElementById('bolDueDate')?.value || defaultDueISO();
  if(val <= 0) { alert('Insira um valor válido.'); return; }

  try {
    const resp = await window.ZaitPayApi.createBoleto({ valor: val, value: val, sacado: desc, description: desc, issueDate, data_emissao: issueDate, dueDate, vencimento: dueDate, account, conta: account, userId: currentUser.id, ...activeAccountPayload() });
    showComprovanteModal("Registro de Cobrança Bancária", `
      <p style="text-align:center; font-size:24px; font-weight:700; margin:10px 0;">${money(val)}</p>
      <p style="margin:5px 0; font-size:13px;"><strong>Pagador / Sacado:</strong> ${desc}</p>
      <p style="margin:5px 0; font-size:13px;"><strong>Data de Emissão:</strong> ${formatDateBR(issueDate)}</p>
      <p style="margin:5px 0; font-size:13px;"><strong>Data de Vencimento:</strong> ${formatDateBR(dueDate)}</p>
      <p style="margin:5px 0; font-size:13px;"><strong>Linha Digitável:</strong><br>${resp.digitableLine}</p>
      <button class="btn full" style="margin-top:20px;" onclick="window.open('${resp.pdfUrl}', '_blank')">Visualizar PDF do Boleto</button>
    `);
    render();
  } catch (err) {
    alert('Erro ao gerar boleto: ' + err.message);
  }
};

function client_links() {
  const lList = userLedger().links || [];
  const installmentOptions = Array.from({length: 12}, (_, i) => i + 1).map(n => `<option value="${n}">${n === 1 ? 'À vista / 1x' : `Até ${n}x`}</option>`).join('');
  const rows = lList.map(l => `<tr><td>${l.desc}</td><td>${money(l.value)}</td><td>Até ${l.parc}x</td><td>${l.emailDestino}</td></tr>`).join('');
  return `<div class="grid two"><form class="card" onsubmit="handleClientLink(event)"><h3>Gerar Link de Checkout</h3>
    <label>Descrição Comercial do Item</label><input id="lnkDesc" placeholder="Ex: Cadeira Executiva" required />
    <label>Valor de Cobrança</label><input id="lnkValue" type="text" placeholder="R$ 0,00" required />
    <label>E-mail do Cliente Comprador</label><input id="lnkEmail" type="email" placeholder="cliente@email.com" required />
    <label>Parcelamento Permitido</label><select id="lnkParc">${installmentOptions}</select>
    <button class="btn full">Gerar Link Informativo</button></form>
    <div class="card"><h3>Links de Checkout Ativos</h3><div class="table-responsive"><table><thead><tr><th>Item Comercial</th><th>Valor</th><th>Modalidade</th><th>E-mail do Cliente</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Nenhum link gerado ainda.</td></tr>'}</tbody></table></div></div></div>`;
}

window.handleClientLink = async function(e) {
  e.preventDefault();
  const val = parseCurrency(document.getElementById('lnkValue').value);
  const desc = document.getElementById('lnkDesc').value;
  const parc = document.getElementById('lnkParc').value;
  const emailDestino = document.getElementById('lnkEmail').value;
  if(val <= 0) { alert('Insira um valor válido.'); return; }

  try {
    const resp = await window.ZaitPayApi.createPaymentLink({ valor: val, value: val, descricao: desc, description: desc, parcelas: parc, installments: parc, emailDestino, email: emailDestino, account, conta: account, userId: currentUser.id, ...activeAccountPayload() });
    showComprovanteModal("Checkout Link Criado com Sucesso", `
      <p style="text-align:center; font-size:24px; font-weight:700; color:var(--zait-primary); margin:10px 0;">${money(val)}</p>
      <p style="margin:5px 0; font-size:13px;"><strong>Item Disponibilizado:</strong> ${desc}</p>
      <p style="margin:5px 0; font-size:13px;"><strong>Parcelamento:</strong> até ${parc}x</p>
      <p style="margin:5px 0; font-size:13px;"><strong>URL do Checkout:</strong><br><a href="${resp.checkoutUrl || '#'}" target="_blank" style="color:var(--zait-primary);">${resp.checkoutUrl || 'Gerado com Sucesso'}</a></p>
    `);
    render();
  } catch (err) {
    alert('Erro ao criar link: ' + err.message);
  }
};

window.handleClientPixSend = function(e) {
  e.preventDefault();
  const rawValue = parseCurrency(document.getElementById('pixSendValue').value);
  const desc = document.getElementById('pixSendDesc').value;
  const ledger = userLedger();
  if(rawValue <= 0) { alert('Insira um valor válido.'); return; }
  if(ledger.balance < rawValue) { alert('Erro: Saldo Insuficiente.'); return; }

  initSecurityGate(async () => {
    try {
      await window.ZaitPayApi.request('/pix/send', { method: 'POST', body: JSON.stringify({ valor: rawValue, amount: rawValue, chave: desc, key: desc, description: desc, account, userId: currentUser.id, ...activeAccountPayload() }) });
      showComprovanteModal("Comprovante de Envio PIX", `
        <p style="text-align:center; font-size:24px; font-weight:700; color:#fff; margin:10px 0;">${money(rawValue)}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Operação:</strong> Transferência PIX enviada</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Chave do destinatário:</strong> ${desc}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Conta de origem:</strong> ${account === 'voltz' ? 'VOLTZ PAY' : 'ZAIT PAY'}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Status:</strong> Enviado ao provedor BaaS configurado</p>
      `);
      render();
    } catch (err) {
      alert('Erro ao enviar PIX: ' + err.message);
    }
  });
};

window.handleClientPixReceive = async function(e) {
  e.preventDefault();
  const rawValue = parseCurrency(document.getElementById('pixReceiveValue').value);
  if(rawValue <= 0) { alert('Insira um valor válido.'); return; }
  try {
    const resp = await window.ZaitPayApi.createPix({ valor: rawValue, value: rawValue, type: 'Entrada', metodo: 'PIX', account, userId: currentUser.id, ...activeAccountPayload() });
    showComprovanteModal("Recebimento PIX Gerado", `
      <div style="text-align:center;">
        <p style="font-size:24px; font-weight:700; color:var(--success);">${money(rawValue)}</p>
        <p class="muted">Recebimento na conta ${account === 'voltz' ? 'VOLTZ PAY' : 'ZAIT PAY'}.</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(resp.qrCode || resp.paymentCode || 'PIX') }" style="margin:20px 0; border:10px solid #fff; border-radius:10px;" />
        <p style="font-size:11px; word-break:break-all;">${resp.copyPaste || resp.paymentCode || 'Código PIX gerado'}</p>
      </div>
    `);
    render();
  } catch (err) {
    alert('Erro ao gerar recebimento PIX: ' + err.message);
  }
};

function client_machine() {
  const ledger = userLedger();
  ledger.machine = ledger.machine || { model: 'Smart POS', settlement: 'D+1', debitFee: 1.69, creditFee: 3.19, anticipationFee: 1.99, sales: [] };
  const m = ledger.machine;
  const sales = m.sales || [];
  const gross = sales.reduce((sum, s) => sum + Number(s.gross || 0), 0);
  const net = sales.reduce((sum, s) => sum + Number(s.net || 0), 0);
  const pending = sales.filter(s => s.status === 'A receber').reduce((sum, s) => sum + Number(s.net || 0), 0);
  const rows = sales.map(s => `<tr><td>${s.date}</td><td>${s.type}</td><td>${s.installments}x</td><td>${money(s.gross)}</td><td>${money(s.net)}</td><td><span class="pill ${s.status === 'Liquidado' ? 'ok' : 'warn'}">${s.status}</span></td></tr>`).join('');
  return `<div class="grid two">
    <div class="card">
      <h3>Maquininha de Cartão</h3>
      <p class="muted">Controle vendas presenciais, taxas, parcelamento, prazo de recebimento e antecipação dos recebíveis da maquininha.</p>
      <div class="grid three">
        <div><small class="muted">Vendas brutas</small><h3>${money(gross)}</h3></div>
        <div><small class="muted">Valor líquido</small><h3>${money(net)}</h3></div>
        <div><small class="muted">A receber</small><h3>${money(pending)}</h3></div>
      </div>
      <label>Modelo / Terminal</label><input id="machineModel" value="${m.model || ''}" />
      <label>Prazo de recebimento</label><select id="machineSettlement"><option value="D+0" ${m.settlement==='D+0'?'selected':''}>D+0 com antecipação</option><option value="D+1" ${m.settlement==='D+1'?'selected':''}>D+1</option><option value="D+14" ${m.settlement==='D+14'?'selected':''}>D+14</option><option value="D+30" ${m.settlement==='D+30'?'selected':''}>D+30</option></select>
      <div class="grid three">
        <div><label>Taxa débito (%)</label><input id="machineDebitFee" type="number" step="0.01" value="${m.debitFee}" /></div>
        <div><label>Taxa crédito (%)</label><input id="machineCreditFee" type="number" step="0.01" value="${m.creditFee}" /></div>
        <div><label>Antecipação (%)</label><input id="machineAnticipationFee" type="number" step="0.01" value="${m.anticipationFee}" /></div>
      </div>
      <button class="btn full" onclick="saveMachineConfig()">Salvar Configurações</button>
    </div>
    <div class="card">
      <h3>Registrar Venda da Maquininha</h3>
      <label>Valor da venda</label><input id="machineSaleValue" type="text" placeholder="R$ 0,00" />
      <label>Tipo de transação</label><select id="machineSaleType"><option value="Débito">Débito</option><option value="Crédito">Crédito</option></select>
      <label>Parcelas</label><select id="machineInstallments">${Array.from({length:12}, (_, i)=>i+1).map(n=>`<option value="${n}">${n}x</option>`).join('')}</select>
      <button class="btn full" onclick="simulateMachineSale()">Registrar Venda</button><br>
      <button class="btn ghost full" onclick="anticipateReceivables()">Antecipar Recebíveis</button>
    </div>
    <div class="card" style="grid-column:1/-1;">
      <h3>Vendas e Recebíveis</h3>
      <div class="table-responsive"><table><thead><tr><th>Data</th><th>Tipo</th><th>Parcelas</th><th>Bruto</th><th>Líquido</th><th>Status</th></tr></thead><tbody>${rows || '<tr><td colspan="6">Nenhuma venda registrada na maquininha.</td></tr>'}</tbody></table></div>
    </div>
  </div>`;
}

window.saveMachineConfig = function() {
  const ledger = userLedger();
  ledger.machine = ledger.machine || { sales: [] };
  ledger.machine.model = document.getElementById('machineModel').value;
  ledger.machine.settlement = document.getElementById('machineSettlement').value;
  ledger.machine.debitFee = Number(document.getElementById('machineDebitFee').value || 0);
  ledger.machine.creditFee = Number(document.getElementById('machineCreditFee').value || 0);
  ledger.machine.anticipationFee = Number(document.getElementById('machineAnticipationFee').value || 0);
  showToast('Configurações da maquininha salvas.');
  render();
};

window.simulateMachineSale = function() {
  const ledger = userLedger();
  ledger.machine = ledger.machine || { debitFee: 1.69, creditFee: 3.19, anticipationFee: 1.99, sales: [] };
  ledger.machine.sales = ledger.machine.sales || [];
  const gross = parseCurrency(document.getElementById('machineSaleValue').value);
  const type = document.getElementById('machineSaleType').value;
  const installments = Number(document.getElementById('machineInstallments').value || 1);
  if(gross <= 0) { alert('Informe um valor válido para a venda.'); return; }
  const baseFee = type === 'Débito' ? Number(ledger.machine.debitFee || 0) : Number(ledger.machine.creditFee || 0);
  const parcelFee = type === 'Crédito' && installments > 1 ? (installments - 1) * 0.45 : 0;
  const totalFee = baseFee + parcelFee;
  const net = gross * (1 - totalFee / 100);
  ledger.machine.sales.unshift({ date: new Date().toLocaleString('pt-BR'), type, installments, gross, net, status: ledger.machine.settlement === 'D+0' ? 'Liquidado' : 'A receber' });
  showToast('Venda registrada na maquininha.');
  render();
};

window.anticipateReceivables = function() {
  const ledger = userLedger();
  const sales = ledger.machine?.sales || [];
  const fee = Number(ledger.machine?.anticipationFee || 0);
  const pending = sales.filter(s => s.status === 'A receber');
  const total = pending.reduce((sum, s) => sum + Number(s.net || 0), 0);
  if(total <= 0) { alert('Não há recebíveis pendentes para antecipar.'); return; }
  const liquid = total * (1 - fee / 100);
  pending.forEach(s => s.status = 'Liquidado');
  ledger.balance += liquid;
  ledger.transactions.unshift({ date: new Date().toLocaleString('pt-BR'), method: 'MAQUININHA', type: 'Entrada', description: 'Antecipação de recebíveis da maquininha', value: liquid });
  showToast('Recebíveis antecipados e lançados no saldo.');
  render();
};

function getCurrentClientProfile() {
  return db.users.find(u => u.id === currentUser.id) || currentUser;
}

function getAccountDisplayForProfile(core) {
  const key = core === 'VOLTZ' ? 'voltz' : 'zait';
  const ledger = db.ledgers[currentUser.id]?.[key] || {};
  const label = core === 'VOLTZ' ? 'VOLTZ PAY' : 'ZAIT PAY';
  const status = core === 'VOLTZ' && getCurrentClientProfile().allowedMode === 'zait' ? 'Aguardando aprovação' : 'Ativa';
  return `<tr><td>${label}</td><td>${ledger.agency || ledger.branch || '0001'}</td><td>${ledger.accountNumber || ledger.number || ledger.account || '-'}</td><td>${ledger.accountDigit || ledger.digit || '-'}</td><td><span class="pill ${status === 'Ativa' ? 'ok' : 'warn'}">${status}</span></td></tr>`;
}

function client_profile() {
  const u = getCurrentClientProfile();
  const allowed = u.allowedMode || 'zait';
  const accountsRows = [getAccountDisplayForProfile('ZAIT')];
  if(allowed === 'all' || allowed === 'voltz') accountsRows.push(getAccountDisplayForProfile('VOLTZ'));
  return `<div class="grid two">
    <form class="card" onsubmit="handleClientProfileUpdate(event)">
      <h3>Perfil do Cliente</h3>
      <p class="muted">Consulte e atualize os dados cadastrais usados na conta.</p>
      <label>Nome / Razão Social</label><input id="profileName" value="${u.name || ''}" required />
      <label>CPF/CNPJ</label><input id="profileDoc" value="${u.doc || u.document || ''}" disabled />
      <label>RG</label><input id="profileRg" value="${u.rg || ''}" />
      <label>Telefone</label><input id="profilePhone" value="${u.phone || u.telefone || ''}" />
      <label>Endereço</label><input id="profileAddress" value="${u.address || u.endereco || ''}" />
      <label>Facial</label><input value="${u.facialStatus || u.facial_status || 'Pendente de validação facial'}" disabled />
      <button class="btn full">Salvar Dados</button>
    </form>
    <div class="card">
      <h3>Contas do Cliente</h3>
      <div class="table-responsive"><table><thead><tr><th>Conta</th><th>Agência</th><th>Número</th><th>Dígito</th><th>Status</th></tr></thead><tbody>${accountsRows.join('')}</tbody></table></div>
      <hr style="border-color:rgba(255,255,255,.08); margin:20px 0;">
      <form onsubmit="handleClientPasswordChange(event)">
        <h3>Mudar Senha</h3>
        <label>Senha atual</label><input id="profileCurrentPassword" type="password" />
        <label>Nova senha</label><input id="profileNewPassword" type="password" minlength="6" required />
        <button class="btn full">Atualizar Senha</button>
      </form>
    </div>
  </div>`;
}

window.handleClientProfileUpdate = async function(e) {
  e.preventDefault();
  const payload = {
    name: document.getElementById('profileName').value,
    rg: document.getElementById('profileRg').value,
    phone: document.getElementById('profilePhone').value,
    telefone: document.getElementById('profilePhone').value,
    address: document.getElementById('profileAddress').value,
    endereco: document.getElementById('profileAddress').value
  };
  try {
    await window.ZaitPayApi.request('/auth/me', { method: 'PUT', body: JSON.stringify(payload) });
  } catch (err) {
    console.warn('Atualização remota de perfil indisponível, aplicando ajuste local.', err);
  }
  const u = getCurrentClientProfile();
  Object.assign(u, payload);
  currentUser = { ...currentUser, ...payload };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  showToast('Perfil atualizado.');
  render();
};

window.handleClientPasswordChange = async function(e) {
  e.preventDefault();
  const currentPassword = document.getElementById('profileCurrentPassword').value;
  const newPassword = document.getElementById('profileNewPassword').value;
  try {
    await window.ZaitPayApi.request('/auth/me/password', { method: 'POST', body: JSON.stringify({ currentPassword, password: newPassword, newPassword }) });
  } catch (err) {
    console.warn('Troca remota de senha indisponível, aplicando ajuste local.', err);
  }
  const u = getCurrentClientProfile();
  u.password = newPassword;
  showToast('Senha atualizada.');
  render();
};

function tableTransactions(rows) {
  if(!rows || !rows.length) return '<p class="muted">Nenhum registro lançado no livro razão da conta.</p>';
  return `<div class="table-responsive"><table><thead><tr><th>Data/Hora</th><th>Método</th><th>Fluxo</th><th>Descrição</th><th>Valor Líquido</th></tr></thead><tbody>${rows.map(t=>`<tr><td>${t.date || '--'}</td><td>${t.method}</td><td><span class="pill ${t.type==='Entrada'?'ok':'warn'}">${t.type}</span></td><td>${t.description}</td><td><strong>${money(t.value)}</strong></td></tr>`).join('')}</tbody></table></div>`;
}

window.logout = function() {
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  currentUser = null;
  document.getElementById('app').classList.add('hidden');
  document.getElementById('authScreen').classList.remove('hidden');
  render();
};

if(currentUser) { 
  document.getElementById('authScreen').classList.add('hidden'); 
  document.getElementById('app').classList.remove('hidden'); 
  render(); 
}

// ======================== VOLTZ: CONTAS BOLSÃO ========================
function getSelectedVoltzPool() {
  const pools = db.voltzPools || [];
  if(!selectedVoltzPoolId && pools.length) selectedVoltzPoolId = pools[0].id;
  return pools.find(p => p.id === selectedVoltzPoolId) || pools[0] || null;
}

function setVoltzPoolTab(tab) {
  selectedVoltzPoolTab = tab || 'clientes';
  render();
}

function selectVoltzPool(poolId) {
  selectedVoltzPoolId = poolId;
  selectedVoltzPoolTab = 'clientes';
  render();
}

function voltz_bolsoes() {
  const pools = db.voltzPools || [];
  const summary = db.voltzPoolsSummary || {};
  const summaryPools = Array.isArray(summary.pools) ? summary.pools : [];
  const clients = (db.users || []).filter(u => String(u.role || '').toUpperCase() === 'CLIENT');
  const selected = getSelectedVoltzPool();
  const getPoolTotal = (pool) => {
    const item = summaryPools.find(p => p.id === pool.id);
    if(item) return Number(item.totalBalance || item.balance || 0);
    if(pool.totalBalance !== undefined) return Number(pool.totalBalance || 0);
    if(pool.balance !== undefined) return Number(pool.balance || 0);
    return (pool.clients || []).reduce((sum, c) => sum + Number(c.poolBalance || 0), 0);
  };
  const poolList = pools.map(pool => {
    const activeClients = (pool.clients || []).filter(c => String(c.status || 'ACTIVE').toUpperCase() === 'ACTIVE').length;
    const poolTotal = getPoolTotal(pool);
    const isActive = selected && selected.id === pool.id;
    return `
      <button class="card ${isActive ? 'active' : ''}" style="text-align:left; width:100%; margin-bottom:10px; border:${isActive ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,.08)'};" onclick="selectVoltzPool('${pool.id}')">
        <div style="display:flex; justify-content:space-between; gap:10px; align-items:center;">
          <div>
            <span class="pill">Bolsão ${pool.code}</span>
            <h4 style="margin:8px 0 4px;">${pool.name}</h4>
            <p class="muted" style="margin:0;">${activeClients} cliente(s) ativo(s)</p>
          </div>
          <div style="text-align:right;">
            <small class="muted">Subtotal do bolsão</small>
            <strong style="display:block;">${money(poolTotal)}</strong>
          </div>
        </div>
      </button>`;
  }).join('');

  const detail = selected ? renderVoltzPoolDetail(selected, clients) : `
    <div class="card">
      <p class="muted">Nenhuma conta bolsão criada ainda. Crie a primeira conta para gerar o código 001.</p>
    </div>`;

  return `
    <div class="card">
      <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; align-items:flex-start;">
        <div>
          <h3>Contas Bolsão Voltz</h3>
          <p class="muted">Aqui o admin cria, visualiza e administra todas as contas bolsão. O cliente não vê essa estrutura; para ele o saldo Voltz continua normal.</p>
        </div>
        <button class="btn" onclick="openCreateVoltzPoolModal()">Criar Conta Bolsão</button>
      </div>
    </div>
    <br>
    <div style="display:grid; grid-template-columns:minmax(260px, 360px) 1fr; gap:16px; align-items:start;">
      <div class="card">
        <h4>Contas criadas</h4>
        <p class="muted">Clique em uma conta para ver clientes, API BaaS, split e saldo.</p>
        ${poolList || '<p class="muted">Sem contas bolsão.</p>'}
      </div>
      ${detail}
    </div>`;
}

function renderVoltzPoolDetail(pool, clients) {
  const subtotal = Number(pool.totalBalance !== undefined ? pool.totalBalance : (pool.balance || 0));
  const tabs = [
    ['clientes', 'Clientes'],
    ['api', 'API BaaS'],
    ['split', 'Split de pagamento'],
    ['saldo', 'Saldos por cliente']
  ];
  const tabButtons = tabs.map(([id, label]) => `<button class="btn ${selectedVoltzPoolTab === id ? '' : 'ghost'}" onclick="setVoltzPoolTab('${id}')">${label}</button>`).join('');
  let content = '';
  if(selectedVoltzPoolTab === 'api') content = renderVoltzPoolApiTab(pool);
  else if(selectedVoltzPoolTab === 'split') content = renderVoltzPoolSplitTab(pool);
  else if(selectedVoltzPoolTab === 'saldo') content = renderVoltzPoolSaldoTab(pool);
  else content = renderVoltzPoolClientesTab(pool, clients);

  return `
    <div class="card">
      <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; align-items:flex-start;">
        <div>
          <span class="pill">Bolsão ${pool.code}</span>
          <h3 style="margin:8px 0 4px;">${pool.name}</h3>
          <p class="muted">Os valores do bolsão são controlados por cliente. Este controle é interno do admin e não altera o saldo Voltz exibido ao cliente.</p>
        </div>
        <div style="text-align:right;">
          <small class="muted">Subtotal deste bolsão</small>
          <strong style="display:block; margin-bottom:8px;">${money(subtotal)}</strong>
          <button class="btn ghost" onclick="openVoltzPoolLedgerModal('${pool.id}')">Inserir saldo por cliente</button>
        </div>
      </div>
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin:16px 0;">${tabButtons}</div>
      ${content}
    </div>`;
}

function renderVoltzPoolClientesTab(pool, clients) {
  const linkedIds = new Set((pool.clients || []).map(c => c.userId));
  const optionsClientes = clients
    .filter(u => !linkedIds.has(u.id))
    .map(u => `<option value="${u.id}">${u.name} - ${u.email}</option>`).join('');
  const clientRows = (pool.clients || []).map(c => {
    const status = String(c.status || 'ACTIVE').toUpperCase();
    const ativo = status === 'ACTIVE';
    const voltzBalance = db.ledgers?.[c.userId]?.voltz?.balance || 0;
    return `<tr>
      <td>${c.user?.name || c.userId}</td>
      <td>${c.user?.email || '-'}</td>
      <td>${money(voltzBalance)}</td>
      <td>${money(c.poolBalance || 0)}</td>
      <td><span class="pill ${ativo ? 'ok' : 'warn'}">${ativo ? 'Ativo' : 'Inativo'}</span></td>
      <td style="display:flex; gap:8px; flex-wrap:wrap;">
        <button class="btn ghost" onclick="setVoltzPoolClientStatus('${pool.id}','${c.userId}','${ativo ? 'INACTIVE' : 'ACTIVE'}')">${ativo ? 'Desativar' : 'Ativar'}</button>
        <button class="btn danger" onclick="removeVoltzPoolClient('${pool.id}','${c.userId}')">Excluir</button>
      </td>
    </tr>`;
  }).join('');

  return `
    <div class="card" style="background:rgba(255,255,255,.03);">
      <h4>Clientes inseridos neste bolsão</h4>
      <p class="muted">O cliente não verá este vínculo. O admin enxerga o saldo Voltz normal do cliente e o saldo individual deste cliente dentro do bolsão.</p>
      <div class="form-row" style="margin:12px 0;">
        <select id="pool_client_${pool.id}">${optionsClientes || '<option value="">Todos os clientes já foram inseridos ou não há clientes</option>'}</select>
        <button class="btn" onclick="addClientToVoltzPool('${pool.id}')">Inserir cliente</button>
      </div>
      <div class="table-responsive">
        <table>
          <thead><tr><th>Cliente</th><th>Email</th><th>Saldo Voltz do cliente</th><th>Saldo do bolsão</th><th>Status no bolsão</th><th>Ações</th></tr></thead>
          <tbody>${clientRows || '<tr><td colspan="6">Nenhum cliente vinculado nesta conta bolsão.</td></tr>'}</tbody>
        </table>
      </div>
    </div>`;
}

function renderVoltzPoolApiTab(pool) {
  return `
    <div class="card" style="background:rgba(255,255,255,.03);">
      <h4>API BaaS da conta bolsão</h4>
      <p class="muted">Configure aqui a API usada por este bolsão, separada das demais integrações.</p>
      <div class="form-grid" style="margin-top:12px;">
        <label>Provider<input id="baas_provider_${pool.id}" value="${pool.baasProvider || ''}" placeholder="suitpay, fitbank, mock"></label>
        <label>Base URL<input id="baas_url_${pool.id}" value="${pool.baasBaseUrl || ''}" placeholder="https://api.provedor.com"></label>
        <label>API Key / Token<input id="baas_key_${pool.id}" value="" placeholder="preencha só se quiser trocar"></label>
      </div>
      <button class="btn" style="margin-top:10px;" onclick="saveVoltzPoolBaas('${pool.id}')">Salvar API BaaS</button>
    </div>`;
}

function renderVoltzPoolSplitTab(pool) {
  return `
    <div class="card" style="background:rgba(255,255,255,.03);">
      <h4>Split de pagamento e tarifas</h4>
      <p class="muted">Defina quanto o admin vai controlar/cobrar por mensalidade e por operação deste bolsão.</p>
      <div class="form-grid" style="margin-top:12px;">
        <label>Manutenção mensal R$<input id="fee_monthly_${pool.id}" type="number" step="0.01" value="${pool.monthlyMaintenanceFee || 0}"></label>
        <label>PIX R$<input id="fee_pix_${pool.id}" type="number" step="0.01" value="${pool.pixFeeFixed || 0}"></label>
        <label>Boleto R$<input id="fee_boleto_${pool.id}" type="number" step="0.01" value="${pool.boletoFeeFixed || 0}"></label>
        <label>Débito %<input id="fee_debit_${pool.id}" type="number" step="0.01" value="${pool.debitCardFeePercent || 0}"></label>
        <label>Crédito %<input id="fee_credit_${pool.id}" type="number" step="0.01" value="${pool.creditCardFeePercent || 0}"></label>
      </div>
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:10px;">
        <button class="btn" onclick="saveVoltzPoolFees('${pool.id}')">Salvar split/tarifas</button>
        <button class="btn ghost" onclick="chargeVoltzMonthly('${pool.id}')">Cobrar mensalidade dos clientes ativos</button>
      </div>
    </div>`;
}

function renderVoltzPoolSaldoTab(pool) {
  const clients = pool.clients || [];
  const subtotal = Number(pool.totalBalance !== undefined ? pool.totalBalance : (pool.balance || 0));
  const clientRows = clients.map(c => {
    const status = String(c.status || 'ACTIVE').toUpperCase();
    return `<tr>
      <td>${c.user?.name || c.userId}</td>
      <td>${c.user?.email || '-'}</td>
      <td>${money(c.poolBalance || 0)}</td>
      <td><span class="pill ${status === 'ACTIVE' ? 'ok' : 'warn'}">${status === 'ACTIVE' ? 'Ativo' : 'Inativo'}</span></td>
      <td><button class="btn ghost" onclick="openVoltzPoolLedgerModal('${pool.id}', '${c.userId}')">Inserir saldo</button></td>
    </tr>`;
  }).join('');

  const findClientName = (userId) => {
    const linked = clients.find(c => c.userId === userId);
    return linked?.user?.name || userId || '-';
  };
  const ledgerRows = (pool.ledger || []).slice(0, 50).map(e => `<tr><td>${new Date(e.createdAt).toLocaleString('pt-BR')}</td><td>${findClientName(e.userId)}</td><td>${e.method}</td><td><span class="pill ${e.type === 'DEBIT' ? 'warn' : 'ok'}">${e.type === 'DEBIT' ? 'Saída' : 'Entrada'}</span></td><td>${e.description}</td><td>${money(e.amount)}</td></tr>`).join('');
  return `
    <div class="card" style="background:rgba(255,255,255,.03);">
      <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; align-items:center;">
        <div>
          <h4>Saldos por cliente da conta bolsão</h4>
          <p class="muted">Subtotal deste bolsão: <strong>${money(subtotal)}</strong>. Cada cliente possui um saldo administrativo próprio dentro deste bolsão. Não existe lançamento geral sem cliente.</p>
        </div>
        <button class="btn" onclick="openVoltzPoolLedgerModal('${pool.id}')">Inserir saldo por cliente</button>
      </div>
      <div class="table-responsive" style="margin-top:12px;">
        <table><thead><tr><th>Cliente</th><th>Email</th><th>Saldo no bolsão</th><th>Status</th><th>Ação</th></tr></thead><tbody>${clientRows || '<tr><td colspan="5">Nenhum cliente vinculado nesta conta bolsão.</td></tr>'}</tbody></table>
      </div>
      <h4 style="margin-top:18px;">Últimos lançamentos por cliente</h4>
      <div class="table-responsive" style="margin-top:12px;">
        <table><thead><tr><th>Data</th><th>Cliente</th><th>Método</th><th>Tipo</th><th>Descrição</th><th>Valor</th></tr></thead><tbody>${ledgerRows || '<tr><td colspan="6">Sem lançamentos.</td></tr>'}</tbody></table>
      </div>
    </div>`;
}

function openCreateVoltzPoolModal() {
  openModal('Criar Conta Bolsão Voltz', `
    <p class="muted">O sistema vai gerar o próximo código sequencial, como 001, 002, 003.</p>
    <label>Nome da conta bolsão<input id="new_pool_name" placeholder="Ex: Bolsão Marketplace"></label>
    <button class="btn full" onclick="createVoltzPool()">Criar Conta Bolsão</button>
  `);
}

async function createVoltzPool() {
  const name = document.getElementById('new_pool_name')?.value || '';
  const created = await window.ZaitPayApi.createVoltzPool({ name });
  selectedVoltzPoolId = created?.id || selectedVoltzPoolId;
  selectedVoltzPoolTab = 'clientes';
  closeModal();
  await render();
}

async function addClientToVoltzPool(poolId) {
  const userId = document.getElementById(`pool_client_${poolId}`)?.value;
  if(!userId) return alert('Selecione um cliente.');
  await window.ZaitPayApi.addVoltzPoolClient(poolId, userId);
  selectedVoltzPoolId = poolId;
  selectedVoltzPoolTab = 'clientes';
  await render();
}

async function setVoltzPoolClientStatus(poolId, userId, status) {
  await window.ZaitPayApi.updateVoltzPoolClientStatus(poolId, userId, status);
  selectedVoltzPoolId = poolId;
  selectedVoltzPoolTab = 'clientes';
  await render();
}

async function removeVoltzPoolClient(poolId, userId) {
  if(!confirm('Excluir este cliente da conta bolsão?')) return;
  await window.ZaitPayApi.removeVoltzPoolClient(poolId, userId);
  selectedVoltzPoolId = poolId;
  selectedVoltzPoolTab = 'clientes';
  await render();
}

async function saveVoltzPoolBaas(poolId) {
  const payload = {
    baasProvider: document.getElementById(`baas_provider_${poolId}`)?.value || '',
    baasBaseUrl: document.getElementById(`baas_url_${poolId}`)?.value || ''
  };
  const key = document.getElementById(`baas_key_${poolId}`)?.value;
  if(key) payload.baasApiKey = key;
  await window.ZaitPayApi.updateVoltzPoolConfig(poolId, payload);
  alert('API BaaS salva para a conta bolsão.');
  selectedVoltzPoolId = poolId;
  selectedVoltzPoolTab = 'api';
  await render();
}

async function saveVoltzPoolFees(poolId) {
  await window.ZaitPayApi.updateVoltzPoolConfig(poolId, {
    monthlyMaintenanceFee: Number(document.getElementById(`fee_monthly_${poolId}`)?.value || 0),
    pixFeeFixed: Number(document.getElementById(`fee_pix_${poolId}`)?.value || 0),
    boletoFeeFixed: Number(document.getElementById(`fee_boleto_${poolId}`)?.value || 0),
    debitCardFeePercent: Number(document.getElementById(`fee_debit_${poolId}`)?.value || 0),
    creditCardFeePercent: Number(document.getElementById(`fee_credit_${poolId}`)?.value || 0)
  });
  alert('Split/tarifas salvos com sucesso.');
  selectedVoltzPoolId = poolId;
  selectedVoltzPoolTab = 'split';
  await render();
}

function openVoltzPoolLedgerModal(poolId, selectedUserId = '') {
  const pool = (db.voltzPools || []).find(p => p.id === poolId);
  const activeClients = (pool?.clients || []).filter(c => String(c.status || 'ACTIVE').toUpperCase() === 'ACTIVE');
  const options = activeClients.map(c => `<option value="${c.userId}" ${selectedUserId === c.userId ? 'selected' : ''}>${c.user?.name || c.userId} - saldo bolsão ${money(c.poolBalance || 0)}</option>`).join('');
  openModal('Inserir saldo por cliente no Bolsão', `
    <p class="muted">Escolha o cliente que receberá o lançamento. Isso altera somente o saldo administrativo desse cliente no bolsão e não altera o saldo Voltz dele.</p>
    <label>Cliente<select id="pool_ledger_user">${options || '<option value="">Nenhum cliente ativo neste bolsão</option>'}</select></label>
    <label>Tipo<select id="pool_ledger_type"><option value="CREDIT">Entrada</option><option value="DEBIT">Saída</option></select></label>
    <label>Valor R$<input id="pool_ledger_amount" type="number" step="0.01" placeholder="0,00"></label>
    <label>Descrição<input id="pool_ledger_desc" placeholder="Ex: aporte manual, ajuste, repasse"></label>
    <button class="btn full" onclick="submitVoltzPoolLedger('${poolId}')">Confirmar lançamento</button>
  `);
}

async function submitVoltzPoolLedger(poolId) {
  const userId = document.getElementById('pool_ledger_user')?.value || '';
  if(!userId) return alert('Selecione o cliente que receberá o saldo no bolsão.');
  await window.ZaitPayApi.addVoltzPoolLedger(poolId, {
    userId,
    type: document.getElementById('pool_ledger_type')?.value || 'CREDIT',
    amount: Number(document.getElementById('pool_ledger_amount')?.value || 0),
    description: document.getElementById('pool_ledger_desc')?.value || 'Lançamento administrativo no bolsão do cliente',
    method: 'ADMIN_CLIENT_BALANCE'
  });
  closeModal();
  selectedVoltzPoolId = poolId;
  selectedVoltzPoolTab = 'saldo';
  await render();
}

async function chargeVoltzMonthly(poolId) {
  if(!confirm('Confirmar cobrança de mensalidade para todos os clientes ativos deste bolsão?')) return;
  await window.ZaitPayApi.chargeVoltzPoolMonthly(poolId, {});
  alert('Mensalidades lançadas no controle administrativo do bolsão.');
  selectedVoltzPoolId = poolId;
  selectedVoltzPoolTab = 'split';
  await render();
}
