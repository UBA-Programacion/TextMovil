// Datos de la aplicación
const flashLoanProviders = {
    ethereum: [
        { id: 'aave', nombre: 'AAVE', emoji: '🏛️', comision: 0.09, apy: 0.09, limite: 'Sin límite', color: '#62B1F6', network: 'ethereum' },
        { id: 'dydx', nombre: 'dYdX', emoji: '💎', comision: 0, apy: 0, limite: '$20M', color: '#3DA8F5', network: 'ethereum' },
        { id: 'uniswap_v2', nombre: 'Uniswap V2', emoji: '🦄', comision: 0.3, apy: 0.3, limite: 'Variable', color: '#FF007A', network: 'ethereum' },
        { id: 'balancer', nombre: 'Balancer', emoji: '⚖️', comision: 0, apy: 0, limite: '$50M', color: '#1E1E1E', network: 'ethereum' },
        { id: 'makerdao', nombre: 'MakerDAO', emoji: '🏦', comision: 0, apy: 0, limite: 'Variable', color: '#F0AD4E', network: 'ethereum' }
    ],
    bnbchain: [
        { id: 'venus', nombre: 'Venus', emoji: '🪐', comision: 0.08, apy: 0.08, limite: 'Variable', color: '#F3BA2F', network: 'bnb' },
        { id: 'pancakeswap', nombre: 'PancakeSwap', emoji: '🥞', comision: 0.25, apy: 0.25, limite: '$100M', color: '#D1884F', network: 'bnbchain' }
    ],
    solana: [
        { id: 'solend', nombre: 'Solend', emoji: '☀️', comision: 0.1, apy: 0.1, limite: '$5M', color: '#14F195', network: 'solana' }
    ],
    cardano: [
        { id: 'aave_cardano', nombre: 'AAVE', emoji: '🏛️', comision: 0.09, apy: 0.09, limite: 'Variable', color: '#62B1F6', network: 'cardano' }
    ],
    polygon: [
        { id: 'aave_polygon', nombre: 'AAVE', emoji: '🏛️', comision: 0.09, apy: 0.09, limite: 'Variable', color: '#62B1F6', network: 'polygon' }
    ],
    arbitrum: [
        { id: 'aave_arbitrum', nombre: 'AAVE', emoji: '🏛️', comision: 0.09, apy: 0.09, limite: 'Variable', color: '#62B1F6', network: 'arbitrum' }
    ]
};

const networks = [
    { nombre: 'Ethereum', id: 'ethereum', color: '#627EEA' },
    { nombre: 'BNBChain', id: 'bnbchain', color: '#F3BA2F' },
    { nombre: 'Solana', id: 'solana', color: '#14F195' },
    { nombre: 'Cardano', id: 'cardano', color: '#0033AD' },
    { nombre: 'Polygon', id: 'polygon', color: '#8247E5' },
    { nombre: 'Arbitrum', id: 'arbitrum', color: '#28A0F0' }
];

const tokens = [
    { symbol: 'ETH', nombre: 'Ethereum', color: '#627EEA', icon: '🔷' },
    { symbol: 'BTC', nombre: 'Bitcoin', color: '#F7931A', icon: '₿' },
    { symbol: 'USDT', nombre: 'Tether', color: '#26A17B', icon: '💵' },
    { symbol: 'USDC', nombre: 'USD Coin', color: '#2775CA', icon: '💲' },
    { symbol: 'BNB', nombre: 'Binance Coin', color: '#F3BA2F', icon: '🟡' },
    { symbol: 'SOL', nombre: 'Solana', color: '#14F195', icon: '🟢' },
    { symbol: 'ADA', nombre: 'Cardano', color: '#0033AD', icon: '🔵' },
    { symbol: 'MATIC', nombre: 'Polygon', color: '#8247E5', icon: '🟣' },
    { symbol: 'DAI', nombre: 'Dai', color: '#F5AC37', icon: '🟠' },
    { symbol: 'WETH', nombre: 'Wrapped ETH', color: '#627EEA', icon: '🔶' },
    { symbol: 'WBTC', nombre: 'Wrapped BTC', color: '#F7931A', icon: '🟧' }
];

// ELIMINADO: Tokens nativos por red para Flash Loans
// Solo usamos stablecoins ahora

// Stablecoins fijos para Flash Loans
const flashLoanStablecoins = [
    { symbol: 'DAI', nombre: 'Dai Stablecoin', icon: '🔶' },
    { symbol: 'USDC', nombre: 'USD Coin', icon: '💵' },
    { symbol: 'USDT', nombre: 'Tether', icon: '💱' }
];

// Exchanges por red
const exchangesByNetwork = {
    ethereum: {
        cex: [
            { nombre: 'Binance', tipo: 'CEX', comision: 0.1, color: '#F3BA2F', icon: '🏦' },
            { nombre: 'Coinbase', tipo: 'CEX', comision: 0.5, color: '#0052FF', icon: '🪙' },
            { nombre: 'Kraken', tipo: 'CEX', comision: 0.26, color: '#5741D9', icon: '🌊' },
            { nombre: 'OKX', tipo: 'CEX', comision: 0.1, color: '#000000', icon: '⚡' },
            { nombre: 'Kraken Pro', tipo: 'CEX', comision: 0.16, color: '#5741D9', icon: '🏛️' }
        ],
        dex: [
            { nombre: 'Uniswap V3', tipo: 'DEX', comision: 0.3, color: '#FF007A', icon: '🦄' },
            { nombre: 'SushiSwap', tipo: 'DEX', comision: 0.3, color: '#FA52A0', icon: '🍣' },
            { nombre: 'Balancer', tipo: 'DEX', comision: 0.3, color: '#1E1E1E', icon: '⚖️' },
            { nombre: 'Curve', tipo: 'DEX', comision: 0.04, color: '#40B8E6', icon: '📈' },
            { nombre: '0x', tipo: 'DEX', comision: 0.5, color: '#003DA5', icon: 'ⓞ' }
        ]
    },
    bnbchain: {
        cex: [
            { nombre: 'Binance', tipo: 'CEX', comision: 0.1, color: '#F3BA2F', icon: '🏦' },
            { nombre: 'KuCoin', tipo: 'CEX', comision: 0.1, color: '#23AF91', icon: '💰' },
            { nombre: 'OKX', tipo: 'CEX', comision: 0.1, color: '#000000', icon: '⚡' },
            { nombre: 'Bybit', tipo: 'CEX', comision: 0.1, color: '#f7931a', icon: '🔷' }
        ],
        dex: [
            { nombre: 'PancakeSwap', tipo: 'DEX', comision: 0.25, color: '#D1884F', icon: '🥞' },
            { nombre: 'SushiSwap', tipo: 'DEX', comision: 0.3, color: '#FA52A0', icon: '🍣' },
            { nombre: 'Balancer', tipo: 'DEX', comision: 0.3, color: '#1E1E1E', icon: '⚖️' },
            { nombre: 'ApeSwap', tipo: 'DEX', comision: 0.2, color: '#A16552', icon: '🐵' },
            { nombre: 'ThugSwap', tipo: 'DEX', comision: 0.3, color: '#8B4513', icon: '🐕' }
        ]
    },
    solana: {
        cex: [
            { nombre: 'FTX', tipo: 'CEX', comision: 0.1, color: '#1C274C', icon: '📊' },
            { nombre: 'Kraken', tipo: 'CEX', comision: 0.26, color: '#5741D9', icon: '🌊' },
            { nombre: 'Coinbase', tipo: 'CEX', comision: 0.5, color: '#0052FF', icon: '🪙' },
            { nombre: 'OKX', tipo: 'CEX', comision: 0.1, color: '#000000', icon: '⚡' }
        ],
        dex: [
            { nombre: 'Raydium', tipo: 'DEX', comision: 0.25, color: '#AC3FD9', icon: '☄️' },
            { nombre: 'Marinade', tipo: 'DEX', comision: 0.1, color: '#EE8B60', icon: '🔶' },
            { nombre: 'Orca', tipo: 'DEX', comision: 0.25, color: '#3772FF', icon: '🐋' },
            { nombre: 'Magic Eden', tipo: 'DEX', comision: 2, color: '#9945FF', icon: '✨' },
            { nombre: 'Serum', tipo: 'DEX', comision: 0.05, color: '#9945FF', icon: '📈' }
        ]
    },
    cardano: {
        cex: [
            { nombre: 'Kraken', tipo: 'CEX', comision: 0.26, color: '#5741D9', icon: '🌊' },
            { nombre: 'Coinbase', tipo: 'CEX', comision: 0.5, color: '#0052FF', icon: '🪙' },
            { nombre: 'OKX', tipo: 'CEX', comision: 0.1, color: '#000000', icon: '⚡' }
        ],
        dex: [
            { nombre: 'SundaeSwap', tipo: 'DEX', comision: 0.5, color: '#FF1493', icon: '🍦' },
            { nombre: 'Minswap', tipo: 'DEX', comision: 0.3, color: '#9D4EDD', icon: '🟣' },
            { nombre: 'JPG Store', tipo: 'DEX', comision: 2, color: '#E0AAFF', icon: '🖼️' },
            { nombre: 'Sky', tipo: 'DEX', comision: 0.3, color: '#87CEEB', icon: '🌤️' }
        ]
    },
    polygon: {
        cex: [
            { nombre: 'Binance', tipo: 'CEX', comision: 0.1, color: '#F3BA2F', icon: '🏦' },
            { nombre: 'Coinbase', tipo: 'CEX', comision: 0.5, color: '#0052FF', icon: '🪙' },
            { nombre: 'Kraken', tipo: 'CEX', comision: 0.26, color: '#5741D9', icon: '🌊' },
            { nombre: 'OKX', tipo: 'CEX', comision: 0.1, color: '#000000', icon: '⚡' }
        ],
        dex: [
            { nombre: 'Uniswap V3', tipo: 'DEX', comision: 0.3, color: '#FF007A', icon: '🦄' },
            { nombre: 'QuickSwap', tipo: 'DEX', comision: 0.25, color: '#3A72F4', icon: '⚡' },
            { nombre: 'SushiSwap', tipo: 'DEX', comision: 0.3, color: '#FA52A0', icon: '🍣' },
            { nombre: 'Balancer', tipo: 'DEX', comision: 0.3, color: '#1E1E1E', icon: '⚖️' },
            { nombre: 'Aave', tipo: 'DEX', comision: 0.05, color: '#62B1F6', icon: '🏛️' }
        ]
    },
    arbitrum: {
        cex: [
            { nombre: 'Binance', tipo: 'CEX', comision: 0.1, color: '#F3BA2F', icon: '🏦' },
            { nombre: 'Kraken', tipo: 'CEX', comision: 0.26, color: '#5741D9', icon: '🌊' },
            { nombre: 'OKX', tipo: 'CEX', comision: 0.1, color: '#000000', icon: '⚡' }
        ],
        dex: [
            { nombre: 'Uniswap V3', tipo: 'DEX', comision: 0.3, color: '#FF007A', icon: '🦄' },
            { nombre: 'Camelot', tipo: 'DEX', comision: 0.25, color: '#A67C52', icon: '🐪' },
            { nombre: 'GMX', tipo: 'DEX', comision: 0.1, color: '#4F46E5', icon: '📊' },
            { nombre: 'Balancer', tipo: 'DEX', comision: 0.3, color: '#1E1E1E', icon: '⚖️' },
            { nombre: 'Curve', tipo: 'DEX', comision: 0.04, color: '#40B8E6', icon: '📈' }
        ]
    }
};

// Estado de la aplicación
let strategy = [];
let selectedNetwork = 'ethereum';
let currentExchange = null;
let currentFlashLoan = null;
let activeFlashLoan = null;
let allExchanges = [];
let exchangeCount = 2; // Cantidad de secciones de intercambios visibles (default: 2)

// Inicializar la aplicación
function init() {
    console.log('=== INICIALIZACIÓN DE LA APP ===');
    updateExchangesForNetwork();
    renderFlashLoans();
    setupNetworkSelector();
    setupExchangesSelector();
    
    // Set initial exchange count and visibility
    exchangeCount = 2;
    console.log('Exchange count inicial:', exchangeCount);
    updateExchangeSectionsVisibility();
    renderAllExchangeSections();
    
    populateTokenSelect();
    updateButtons();
    console.log('=== INICIALIZACIÓN COMPLETA ===');
}

// Actualizar exchanges según la red seleccionada
function updateExchangesForNetwork() {
    const network = document.getElementById('networkSelector').value;
    const networkExchanges = exchangesByNetwork[network] || exchangesByNetwork.ethereum;
    allExchanges = [...networkExchanges.cex, ...networkExchanges.dex];
}

// Renderizar proveedores de Flash Loans
function renderFlashLoans() {
    const grid = document.getElementById('flashLoansGrid');
    const network = document.getElementById('networkSelector').value;
    const providers = flashLoanProviders[network] || flashLoanProviders.ethereum;
    
    grid.innerHTML = providers.map(provider => {
        const isActive = activeFlashLoan && activeFlashLoan.id === provider.id;
        const statusClass = isActive ? 'on' : 'off';
        const activeStyle = isActive ? `style="border-color: ${provider.color}; box-shadow: 0 0 25px ${provider.color}80, 0 4px 12px rgba(0, 0, 0, 0.3);"` : '';
        
        return `
            <button class="flash-loan-btn ${statusClass}" 
                    onclick="openFlashLoanModal('${provider.id}')"
                    id="btn-flashloan-${provider.id}"
                    ${activeStyle}>
                <div class="flash-loan-badge"></div>
                <div class="flash-loan-icon">${provider.emoji}</div>
                <div class="flash-loan-name">${provider.nombre}</div>
                <div class="flash-loan-info">${provider.comision}%</div>
            </button>
        `;
    }).join('');
}

// Abrir modal de Flash Loan
function openFlashLoanModal(providerId) {
    const network = document.getElementById('networkSelector').value;
    const providers = flashLoanProviders[network] || flashLoanProviders.ethereum;
    const provider = providers.find(p => p.id === providerId);
    
    if (!provider) return;
    
    currentFlashLoan = provider;
    
    // Configurar modal
    document.getElementById('modalFlashLoanName').textContent = provider.nombre;
    document.getElementById('flashLoanCommission').textContent = provider.comision + '%';
    document.getElementById('flashLoanAPY').textContent = provider.apy + '%';
    document.getElementById('flashLoanLimit').textContent = provider.limite;
    
    // Poblar selector de tokens - SOLO 3 STABLECOINS: DAI, USDC, USDT
    const select = document.getElementById('flashLoanToken');
    
    // Solo stablecoins, sin tokens nativos
    const allowedTokens = flashLoanStablecoins;
    
    const options = allowedTokens.map(token => 
        `<option value="${token.symbol}">${token.icon} ${token.symbol} - ${token.nombre}</option>`
    ).join('');
    select.innerHTML = '<option value="">-- Elige un token --</option>' + options;
    
    // Si ya hay uno activo, pre-llenar
    if (activeFlashLoan && activeFlashLoan.id === providerId) {
        document.getElementById('flashLoanAmount').value = activeFlashLoan.amount;
        document.getElementById('flashLoanToken').value = activeFlashLoan.token;
    } else {
        document.getElementById('flashLoanAmount').value = '1000'; // Default: 1000
        document.getElementById('flashLoanToken').value = 'USDC'; // Default: USDC
    }
    
    // Mostrar modal
    document.getElementById('flashLoanModal').classList.add('show');
}

// Cerrar modal de Flash Loan
function closeFlashLoanModal() {
    document.getElementById('flashLoanModal').classList.remove('show');
    currentFlashLoan = null;
}

// Confirmar Flash Loan
function confirmFlashLoan() {
    const amount = parseFloat(document.getElementById('flashLoanAmount').value);
    const token = document.getElementById('flashLoanToken').value;
    
    if (!amount || amount <= 0) {
        alert('Por favor ingresa una cantidad válida');
        return;
    }
    
    if (!token) {
        alert('Por favor selecciona un token');
        return;
    }
    
    // Buscar el token en los permitidos para Flash Loan (solo stablecoins)
    const allowedTokens = flashLoanStablecoins;
    const tokenData = allowedTokens.find(t => t.symbol === token);
    
    if (!tokenData) {
        alert('Token no válido');
        return;
    }
    
    // Guardar Flash Loan activo
    activeFlashLoan = {
        ...currentFlashLoan,
        amount: amount,
        token: token,
        tokenName: tokenData.nombre,
        tokenIcon: tokenData.icon
    };
    
    // Actualizar UI
    renderFlashLoans();
    renderActiveFlashLoan();
    updateButtons();
    closeFlashLoanModal();
}

// Renderizar Flash Loan activo - COMPACT VERSION
function renderActiveFlashLoan() {
    const section = document.getElementById('activeFlashLoanSection');
    const container = document.getElementById('activeFlashLoan');
    const repaymentSection = document.getElementById('repaymentSection');
    const repaymentContainer = document.getElementById('repaymentFlashLoan');
    
    if (!activeFlashLoan) {
        section.style.display = 'none';
        repaymentSection.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';
    repaymentSection.style.display = 'block';
    
    // Format amount with commas
    const formattedAmount = activeFlashLoan.amount.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
    
    // Generate card HTML (same for both)
    const cardHTML = `
        <div class="flash-loan-card">
            <div class="flash-loan-info-compact">
                <span class="flash-loan-emoji">${activeFlashLoan.emoji}</span>
                <span class="flash-loan-protocol">${activeFlashLoan.nombre}</span>
                <span class="flash-loan-separator">|</span>
                <span class="flash-loan-token">${activeFlashLoan.tokenIcon} ${activeFlashLoan.token}</span>
                <span class="flash-loan-separator">|</span>
                <span class="flash-loan-cantidad">${formattedAmount}</span>
            </div>
            <button class="flash-loan-change-btn" onclick="changeFlashLoan()" title="Cambiar Flash Loan">
                ✕
            </button>
        </div>
    `;
    
    // Set both cards with identical content
    container.innerHTML = cardHTML;
    repaymentContainer.innerHTML = cardHTML;
}

// Cambiar Flash Loan
function changeFlashLoan() {
    activeFlashLoan = null;
    renderFlashLoans();
    renderActiveFlashLoan();
    updateButtons();
}

// Poblar el selector de tokens
function populateTokenSelect() {
    const select = document.getElementById('tokenSelect');
    const options = tokens.map(token => 
        `<option value="${token.symbol}">${token.icon} ${token.symbol} - ${token.nombre}</option>`
    ).join('');
    select.innerHTML = '<option value="">-- Elige un token --</option>' + options;
}

// Renderizar una sección específica de intercambios
function renderExchangeSection(sectionNumber) {
    const grid = document.getElementById(`exchangeGrid${sectionNumber}`);
    if (!grid) return;
    
    // Obtener exchanges de la red actual
    const exchanges = allExchanges;
    
    // Obtener exchanges bloqueados para este nivel (los usados en niveles anteriores)
    const blockedExchanges = getBlockedExchangesForLevel(sectionNumber);
    
    grid.innerHTML = exchanges.map(exchange => {
        const isActive = strategy.find(item => item.nombre === exchange.nombre && item.level === sectionNumber);
        const isBlocked = blockedExchanges.includes(exchange.nombre);
        
        let statusClass = 'off';
        let classes = ['exchange-btn'];
        
        if (isBlocked) {
            classes.push('blocked');
        } else if (isActive) {
            statusClass = 'on';
            classes.push(statusClass);
        } else {
            classes.push(statusClass);
        }
        
        const glowColor = exchange.color === '#000000' ? '#666666' : exchange.color;
        const activeStyle = isActive ? `style="border-color: ${glowColor}; box-shadow: 0 0 25px ${glowColor}80, 0 4px 12px rgba(0, 0, 0, 0.3);"` : '';
        
        return `
            <button class="${classes.join(' ')}" 
                    onclick="${isBlocked ? '' : `openExchangeModal('${exchange.nombre}', ${sectionNumber})`}" 
                    id="btn-${exchange.nombre.toLowerCase().replace(/\s+/g, '-')}-${sectionNumber}"
                    ${activeStyle}
                    ${isBlocked ? 'disabled' : ''}>
                <div class="exchange-badge"></div>
                <div class="exchange-icon">${exchange.icon}</div>
                <div class="exchange-name">${exchange.nombre}</div>
                <div class="exchange-info">Fee: ${exchange.comision}%</div>
                ${isActive ? `<div class="exchange-selected-data">${isActive.tokenIcon || ''} ${isActive.token} → ${isActive.tokenToReceiveIcon || ''} ${isActive.tokenToReceive}</div>` : ''}
            </button>
        `;
    }).join('');
}

// Obtener exchanges bloqueados para un nivel específico
function getBlockedExchangesForLevel(level) {
    // Los exchanges bloqueados son aquellos que ya fueron seleccionados en niveles anteriores
    const blocked = [];
    
    strategy.forEach(item => {
        if (item.level < level) {
            blocked.push(item.nombre);
        }
    });
    
    return blocked;
}

// Abrir modal de selección de exchange
function openExchangeModal(exchangeName, level) {
    const exchange = allExchanges.find(ex => ex.nombre === exchangeName);
    if (!exchange) return;
    
    // Verificar que haya un flash loan activo
    if (!activeFlashLoan) {
        alert('⚠️ Primero debes solicitar un Flash Loan antes de agregar intercambios');
        return;
    }
    
    // Verificar si el exchange está bloqueado para este nivel
    const blockedExchanges = getBlockedExchangesForLevel(level);
    if (blockedExchanges.includes(exchangeName)) {
        alert(`⚠️ ${exchangeName} ya fue usado en un intercambio anterior`);
        return;
    }
    
    currentExchange = exchange;
    
    // Determinar si este es el último intercambio
    const isLastExchange = (level === exchangeCount);
    
    // Configurar modal
    document.getElementById('modalExchangeName').textContent = exchange.nombre;
    document.getElementById('modalCommission').textContent = exchange.comision + '%';
    
    // LÓGICA INDEPENDIENTE: Todos los intercambios usan el flash loan
    let tokenToSend, tokenToSendName, tokenToSendIcon, amountToSend;
    
    // Usar el nivel pasado como parámetro
    const currentLevel = level;
    
    // TODOS LOS INTERCAMBIOS: Usan el token del flash loan (independientes)
    tokenToSend = activeFlashLoan.token;
    tokenToSendName = activeFlashLoan.tokenName;
    tokenToSendIcon = activeFlashLoan.tokenIcon;
    amountToSend = activeFlashLoan.amount;
    
    // Mostrar token y cantidad en formato compacto
    document.getElementById('exchangeModalTokenDisplay').textContent = 
        `${tokenToSendIcon} ${tokenToSend}`;
    document.getElementById('exchangeModalAmountDisplay').textContent = 
        `${amountToSend.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})}`;
    
    // Notas eliminadas - ya no se muestran en el modal compacto
    
    // Guardar en currentExchange para usar en confirmSelection
    currentExchange.tokenToSend = tokenToSend;
    currentExchange.tokenToSendName = tokenToSendName;
    currentExchange.tokenToSendIcon = tokenToSendIcon;
    currentExchange.amountToSend = amountToSend;
    currentExchange.level = currentLevel;
    
    // Poblar selector de moneda a recibir (excluyendo el token que se envía)
    populateTokenToReceiveSelect(tokenToSend, isLastExchange);
    
    // Si ya existe en la estrategia, pre-seleccionar la moneda a recibir
    const existing = strategy.find(item => item.nombre === exchangeName);
    if (existing) {
        document.getElementById('tokenToReceiveSelect').value = existing.tokenToReceive;
    } else if (isLastExchange) {
        // Si es el último intercambio, pre-seleccionar el token del flash loan
        document.getElementById('tokenToReceiveSelect').value = activeFlashLoan.token;
    } else {
        // Pre-seleccionar tokens según el nivel (para facilitar UX)
        const select = document.getElementById('tokenToReceiveSelect');
        const defaultTokensByLevel = ['ETH', 'BTC', 'DAI', 'MATIC', 'SOL'];
        const defaultToken = defaultTokensByLevel[currentLevel - 1];
        
        // Intentar seleccionar el token sugerido
        const optionExists = Array.from(select.options).some(opt => opt.value === defaultToken);
        if (optionExists) {
            select.value = defaultToken;
        } else if (select.options.length > 0) {
            select.selectedIndex = 0;
        }
    }
    
    // Configurar UI según si es último intercambio
    const tokenSelect = document.getElementById('tokenToReceiveSelect');
    const lastExchangeNote = document.getElementById('lastExchangeNote');
    const lastExchangeInfo = document.getElementById('lastExchangeInfo');
    
    if (isLastExchange) {
        // Deshabilitar selector y mostrar mensajes
        tokenSelect.disabled = true;
        tokenSelect.style.opacity = '0.7';
        tokenSelect.style.cursor = 'not-allowed';
        lastExchangeNote.style.display = 'block';
        lastExchangeInfo.style.display = 'block';
    } else {
        // Habilitar selector normalmente
        tokenSelect.disabled = false;
        tokenSelect.style.opacity = '1';
        tokenSelect.style.cursor = 'pointer';
        lastExchangeNote.style.display = 'none';
        lastExchangeInfo.style.display = 'none';
    }
    
    // Mostrar modal
    document.getElementById('selectionModal').classList.add('show');
}

// Cerrar modal de selección
function closeSelectionModal() {
    document.getElementById('selectionModal').classList.remove('show');
    currentExchange = null;
}

// Determinar el nivel actual del exchange en el grid
function getCurrentExchangeLevel(exchangeName) {
    // Buscar en qué grid está este exchange
    for (let i = 1; i <= 5; i++) {
        const grid = document.getElementById(`exchangeGrid${i}`);
        if (grid && grid.innerHTML.includes(exchangeName)) {
            return i;
        }
    }
    return 1;
}

// Obtener el intercambio anterior configurado
function getPreviousExchange(currentLevel) {
    // Buscar el exchange configurado en el nivel anterior
    const previousLevelExchanges = strategy.filter(ex => {
        const exLevel = getCurrentExchangeLevelFromStrategy(ex.nombre);
        return exLevel === currentLevel - 1;
    });
    
    return previousLevelExchanges.length > 0 ? previousLevelExchanges[0] : null;
}

// Determinar el nivel de un exchange en la estrategia
function getCurrentExchangeLevelFromStrategy(exchangeName) {
    for (let i = 1; i <= 5; i++) {
        const grid = document.getElementById(`exchangeGrid${i}`);
        if (grid && grid.innerHTML.includes(exchangeName)) {
            return i;
        }
    }
    return 1;
}

// Poblar selector de moneda a recibir
function populateTokenToReceiveSelect(excludeToken, isLastExchange = false) {
    const select = document.getElementById('tokenToReceiveSelect');
    const network = document.getElementById('networkSelector').value;
    
    // Obtener tokens según la red
    const tokensByNetwork = {
        ethereum: [
            { symbol: 'ETH', nombre: 'Ethereum', emoji: 'Ξ' },
            { symbol: 'BTC', nombre: 'Bitcoin', emoji: '₿' },
            { symbol: 'DAI', nombre: 'Dai', emoji: '🔶' },
            { symbol: 'USDC', nombre: 'USD Coin', emoji: '💵' },
            { symbol: 'USDT', nombre: 'Tether', emoji: '💱' },
            { symbol: 'ADA', nombre: 'Cardano', emoji: '₳' },
            { symbol: 'SOL', nombre: 'Solana', emoji: '◎' },
            { symbol: 'MATIC', nombre: 'Polygon', emoji: '▰' },
            { symbol: 'WETH', nombre: 'Wrapped ETH', emoji: 'ⓦ' },
            { symbol: 'WBTC', nombre: 'Wrapped BTC', emoji: 'ⓦ' }
        ],
        bnbchain: [
            { symbol: 'BNB', nombre: 'Binance Coin', emoji: '🔶' },
            { symbol: 'BTC', nombre: 'Bitcoin', emoji: '₿' },
            { symbol: 'ETH', nombre: 'Ethereum', emoji: 'Ξ' },
            { symbol: 'USDC', nombre: 'USD Coin', emoji: '💵' },
            { symbol: 'USDT', nombre: 'Tether', emoji: '💱' },
            { symbol: 'DAI', nombre: 'Dai', emoji: '🔶' },
            { symbol: 'BUSD', nombre: 'Binance USD', emoji: '💚' }
        ],
        solana: [
            { symbol: 'SOL', nombre: 'Solana', emoji: '◎' },
            { symbol: 'USDC', nombre: 'USD Coin', emoji: '💵' },
            { symbol: 'USDT', nombre: 'Tether', emoji: '💱' },
            { symbol: 'SRM', nombre: 'Serum', emoji: '📈' },
            { symbol: 'COPE', nombre: 'Cope', emoji: '🐟' }
        ],
        cardano: [
            { symbol: 'ADA', nombre: 'Cardano', emoji: '₳' },
            { symbol: 'USDC', nombre: 'USD Coin', emoji: '💵' },
            { symbol: 'USDT', nombre: 'Tether', emoji: '💱' },
            { symbol: 'MIN', nombre: 'Minswap', emoji: '🟣' }
        ],
        polygon: [
            { symbol: 'MATIC', nombre: 'Polygon', emoji: '▰' },
            { symbol: 'ETH', nombre: 'Ethereum', emoji: 'Ξ' },
            { symbol: 'BTC', nombre: 'Bitcoin', emoji: '₿' },
            { symbol: 'USDC', nombre: 'USD Coin', emoji: '💵' },
            { symbol: 'USDT', nombre: 'Tether', emoji: '💱' },
            { symbol: 'DAI', nombre: 'Dai', emoji: '🔶' }
        ],
        arbitrum: [
            { symbol: 'ARB', nombre: 'Arbitrum', emoji: '◆' },
            { symbol: 'ETH', nombre: 'Ethereum', emoji: 'Ξ' },
            { symbol: 'BTC', nombre: 'Bitcoin', emoji: '₿' },
            { symbol: 'USDC', nombre: 'USD Coin', emoji: '💵' },
            { symbol: 'USDT', nombre: 'Tether', emoji: '💱' },
            { symbol: 'DAI', nombre: 'Dai', emoji: '🔶' }
        ]
    };
    
    const availableTokens = tokensByNetwork[network] || tokensByNetwork.ethereum;
    
    // Si es el último intercambio, solo mostrar el token del flash loan
    if (isLastExchange && activeFlashLoan) {
        const flashLoanTokenData = availableTokens.find(t => t.symbol === activeFlashLoan.token);
        if (flashLoanTokenData) {
            select.innerHTML = `<option value="${flashLoanTokenData.symbol}">${flashLoanTokenData.emoji} ${flashLoanTokenData.symbol} - ${flashLoanTokenData.nombre}</option>`;
        } else {
            // Fallback si no encuentra el token en la lista
            select.innerHTML = `<option value="${activeFlashLoan.token}">${activeFlashLoan.tokenIcon} ${activeFlashLoan.token} - ${activeFlashLoan.tokenName}</option>`;
        }
        return;
    }
    
    // Filtrar el token que se está enviando (no puede recibirlo)
    const tokenToExclude = excludeToken || activeFlashLoan.token;
    const filteredTokens = availableTokens.filter(t => t.symbol !== tokenToExclude);
    
    // Generar opciones (sin placeholder - todos los intercambios son independientes)
    const options = filteredTokens.map(token => 
        `<option value="${token.symbol}">${token.emoji} ${token.symbol} - ${token.nombre}</option>`
    ).join('');
    
    select.innerHTML = options;
}

// Confirmar selección
function confirmSelection() {
    // Verificar que haya flash loan activo
    if (!activeFlashLoan) {
        alert('⚠️ Error: No hay un flash loan activo');
        return;
    }
    
    const tokenToReceive = document.getElementById('tokenToReceiveSelect').value;
    
    if (!tokenToReceive || tokenToReceive === '') {
        alert('⚠️ Por favor selecciona una moneda a recibir');
        return;
    }
    
    // Determinar si es el último intercambio
    const isLastExchange = (currentExchange.level === exchangeCount);
    
    // VALIDACIÓN CRÍTICA: Si es el último intercambio, DEBE ser el token del flash loan
    if (isLastExchange && tokenToReceive !== activeFlashLoan.token) {
        alert(`⚠️ El último intercambio debe devolver ${activeFlashLoan.token} para cerrar el ciclo de arbitraje`);
        return;
    }
    
    // Validar que no se seleccione el mismo token que se envía (excepto último intercambio)
    if (!isLastExchange && tokenToReceive === currentExchange.tokenToSend) {
        alert('⚠️ No puedes recibir el mismo token que envías');
        return;
    }
    
    // Buscar datos del token a recibir
    const network = document.getElementById('networkSelector').value;
    const tokensByNetwork = {
        ethereum: [
            { symbol: 'ETH', nombre: 'Ethereum', emoji: 'Ξ' },
            { symbol: 'BTC', nombre: 'Bitcoin', emoji: '₿' },
            { symbol: 'DAI', nombre: 'Dai', emoji: '🔶' },
            { symbol: 'USDC', nombre: 'USD Coin', emoji: '💵' },
            { symbol: 'USDT', nombre: 'Tether', emoji: '💱' },
            { symbol: 'ADA', nombre: 'Cardano', emoji: '₳' },
            { symbol: 'SOL', nombre: 'Solana', emoji: '◎' },
            { symbol: 'MATIC', nombre: 'Polygon', emoji: '▰' },
            { symbol: 'WETH', nombre: 'Wrapped ETH', emoji: 'ⓦ' },
            { symbol: 'WBTC', nombre: 'Wrapped BTC', emoji: 'ⓦ' }
        ],
        bnbchain: [
            { symbol: 'BNB', nombre: 'Binance Coin', emoji: '🔶' },
            { symbol: 'BTC', nombre: 'Bitcoin', emoji: '₿' },
            { symbol: 'ETH', nombre: 'Ethereum', emoji: 'Ξ' },
            { symbol: 'USDC', nombre: 'USD Coin', emoji: '💵' },
            { symbol: 'USDT', nombre: 'Tether', emoji: '💱' },
            { symbol: 'DAI', nombre: 'Dai', emoji: '🔶' },
            { symbol: 'BUSD', nombre: 'Binance USD', emoji: '💚' }
        ],
        solana: [
            { symbol: 'SOL', nombre: 'Solana', emoji: '◎' },
            { symbol: 'USDC', nombre: 'USD Coin', emoji: '💵' },
            { symbol: 'USDT', nombre: 'Tether', emoji: '💱' },
            { symbol: 'SRM', nombre: 'Serum', emoji: '📈' },
            { symbol: 'COPE', nombre: 'Cope', emoji: '🐟' }
        ],
        cardano: [
            { symbol: 'ADA', nombre: 'Cardano', emoji: '₳' },
            { symbol: 'USDC', nombre: 'USD Coin', emoji: '💵' },
            { symbol: 'USDT', nombre: 'Tether', emoji: '💱' },
            { symbol: 'MIN', nombre: 'Minswap', emoji: '🟣' }
        ],
        polygon: [
            { symbol: 'MATIC', nombre: 'Polygon', emoji: '▰' },
            { symbol: 'ETH', nombre: 'Ethereum', emoji: 'Ξ' },
            { symbol: 'BTC', nombre: 'Bitcoin', emoji: '₿' },
            { symbol: 'USDC', nombre: 'USD Coin', emoji: '💵' },
            { symbol: 'USDT', nombre: 'Tether', emoji: '💱' },
            { symbol: 'DAI', nombre: 'Dai', emoji: '🔶' }
        ],
        arbitrum: [
            { symbol: 'ARB', nombre: 'Arbitrum', emoji: '◆' },
            { symbol: 'ETH', nombre: 'Ethereum', emoji: 'Ξ' },
            { symbol: 'BTC', nombre: 'Bitcoin', emoji: '₿' },
            { symbol: 'USDC', nombre: 'USD Coin', emoji: '💵' },
            { symbol: 'USDT', nombre: 'Tether', emoji: '💱' },
            { symbol: 'DAI', nombre: 'Dai', emoji: '🔶' }
        ]
    };
    
    const availableTokens = tokensByNetwork[network] || tokensByNetwork.ethereum;
    const tokenData = availableTokens.find(t => t.symbol === tokenToReceive);
    
    if (!tokenData) {
        alert('⚠️ Token no válido');
        return;
    }
    
    // Usar los datos calculados en openExchangeModal (del intercambio anterior o flash loan)
    const token = currentExchange.tokenToSend;
    const tokenName = currentExchange.tokenToSendName;
    const tokenIcon = currentExchange.tokenToSendIcon;
    const amount = currentExchange.amountToSend;
    const level = currentExchange.level;
    
    // Eliminar exchange si ya existe en estrategia (solo en el mismo nivel)
    strategy = strategy.filter(item => !(item.nombre === currentExchange.nombre && item.level === level));
    
    // Estimar cantidad a recibir (simplificado: restar comisión)
    const estimatedReceiveAmount = amount * (1 - currentExchange.comision / 100);
    
    // Agregar/actualizar en estrategia
    strategy.push({
        ...currentExchange,
        token: token,
        tokenName: tokenName,
        tokenIcon: tokenIcon,
        amount: amount,
        tokenToReceive: tokenToReceive,
        tokenToReceiveName: tokenData.nombre,
        tokenToReceiveIcon: tokenData.emoji,
        estimatedReceiveAmount: estimatedReceiveAmount,
        level: level,
        id: Date.now()
    });
    
    // Actualizar UI
    renderAllExchangeSections();
    updateButtons();
    closeSelectionModal();
}

// Configurar selector de red
function setupNetworkSelector() {
    document.getElementById('networkSelector').addEventListener('change', () => {
        activeFlashLoan = null;
        updateExchangesForNetwork();
        renderFlashLoans();
        renderActiveFlashLoan();
        clearStrategy();
    });
}

// Configurar selector de intercambios
function setupExchangesSelector() {
    const selector = document.getElementById('exchangesSelector');
    
    // Set initial value to 2 (default)
    exchangeCount = 2;
    selector.value = '2';
    
    // Add event listener
    selector.addEventListener('change', (e) => {
        const newCount = parseInt(e.target.value);
        console.log('=== CAMBIO DE INTERCAMBIOS ===');
        console.log('Desde:', exchangeCount, 'Hacia:', newCount);
        exchangeCount = newCount;
        updateExchangeSectionsVisibility();
        renderAllExchangeSections();
        console.log('=== ACTUALIZACIÓN COMPLETA ===');
    });
}

// Actualizar visibilidad de secciones de intercambios
function updateExchangeSectionsVisibility() {
    console.log('=== ACTUALIZAR VISIBILIDAD ===');
    console.log('Cantidad de intercambios:', exchangeCount);
    
    for (let i = 1; i <= 5; i++) {
        const section = document.getElementById(`exchangeSection${i}`);
        console.log(`Buscando exchangeSection${i}:`, section ? 'EXISTE' : 'NO EXISTE');
        
        if (section) {
            const shouldShow = i <= exchangeCount;
            
            if (shouldShow) {
                section.style.display = 'block';
                section.style.opacity = '1';
                section.style.maxHeight = '2000px';
                section.style.overflow = 'visible';
                console.log(`  → Intercambio ${i}: VISIBLE ✓`);
            } else {
                section.style.display = 'none';
                section.style.opacity = '0';
                section.style.maxHeight = '0';
                section.style.overflow = 'hidden';
                console.log(`  → Intercambio ${i}: OCULTO ✗`);
            }
        } else {
            console.error(`  → ERROR: exchangeSection${i} NO ENCONTRADO`);
        }
    }
    
    console.log('=== FIN ACTUALIZACIÓN ===');
}

// Renderizar todas las secciones de intercambios
function renderAllExchangeSections() {
    console.log('=== RENDERIZAR TODAS LAS SECCIONES ===');
    updateExchangeSectionsVisibility();
    
    for (let i = 1; i <= exchangeCount; i++) {
        console.log(`Renderizando grid ${i}`);
        renderExchangeSection(i);
    }
    console.log('=== FIN RENDERIZADO ===');
}



// Renderizar estrategia (eliminado - ya no se usa)
function renderStrategy() {
    // Función eliminada según requerimientos
}

// Eliminar de la estrategia
function removeFromStrategy(index) {
    strategy.splice(index, 1);
    renderAllExchangeSections();
    updateButtons();
}

// Limpiar estrategia
function clearStrategy() {
    strategy = [];
    renderAllExchangeSections();
    updateButtons();
}

// Actualizar estado de botones
function updateButtons() {
    const simulateBtn = document.getElementById('simulateBtn');
    const hasFlashLoan = activeFlashLoan !== null;
    const hasMinExchanges = strategy.length >= 2;

    // Habilitar solo si hay Flash Loan Y al menos 2 exchanges
    simulateBtn.disabled = !(hasFlashLoan && hasMinExchanges);
}

// Simular estrategia
function simulateStrategy() {
    const modal = document.getElementById('resultsModal');
    const modalBody = document.getElementById('modalBody');

    // Mostrar modal con loading
    modal.classList.add('show');
    modalBody.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p style="margin-top: 16px; color: var(--color-text-secondary);">Calculando resultados...</p>
        </div>
    `;

    // Simular cálculo
    setTimeout(() => {
        const results = calculateResults();
        displayResults(results);
    }, 1500);
}

// Calcular resultados de simulación
function calculateResults() {
    // Contar exchanges y calcular comisiones
    const exchangeCount = strategy.length;
    const totalFees = strategy.reduce((sum, ex) => sum + ex.comision, 0);
    
    // Agregar comisión del Flash Loan
    const flashLoanFee = activeFlashLoan ? activeFlashLoan.comision : 0;
    const totalFeesWithFlash = totalFees + flashLoanFee;

    // Simular precio inicial y diferencial
    const baseAmount = 1000; // USD
    const priceVariation = (Math.random() * 4 - 1); // -1% a +3%
    const slippage = Math.random() * 1.5; // 0% a 1.5%

    // Calcular ganancia/pérdida
    const grossProfit = baseAmount * (priceVariation / 100);
    const feeCost = baseAmount * (totalFeesWithFlash / 100);
    const flashLoanFeeCost = activeFlashLoan ? baseAmount * (activeFlashLoan.comision / 100) : 0;
    const slippageCost = baseAmount * (slippage / 100);
    const gasFee = getGasFee();
    const netProfit = grossProfit - feeCost - slippageCost - gasFee;
    const profitPercentage = (netProfit / baseAmount) * 100;

    // Determinar viabilidad
    let viability, viabilityMessage;
    if (profitPercentage > 2) {
        viability = 'high';
        viabilityMessage = '¡Estrategia muy prometedora!';
    } else if (profitPercentage > 0.5) {
        viability = 'medium';
        viabilityMessage = 'Estrategia viable con riesgos controlados';
    } else if (profitPercentage > 0) {
        viability = 'low';
        viabilityMessage = 'Margen de ganancia muy ajustado';
    } else {
        viability = 'low';
        viabilityMessage = 'Estrategia no rentable - altas comisiones';
    }

    return {
        baseAmount,
        grossProfit,
        feeCost,
        flashLoanFeeCost,
        slippageCost,
        gasFee,
        netProfit,
        profitPercentage,
        viability,
        viabilityMessage,
        totalFees: totalFeesWithFlash,
        exchangeCount,
        executionTime: Math.floor(Math.random() * 25) + 5,
        flashLoan: activeFlashLoan
    };
}

// Obtener gas fee según la red
function getGasFee() {
    const network = document.getElementById('networkSelector').value;
    const gasFees = {
        ethereum: Math.random() * 40 + 10,
        bnbchain: Math.random() * 2 + 0.5,
        solana: Math.random() * 0.05 + 0.01,
        cardano: Math.random() * 0.3 + 0.1,
        polygon: Math.random() * 1 + 0.2,
        arbitrum: Math.random() * 5 + 1
    };
    return gasFees[network] || 5;
}

// Mostrar resultados
function displayResults(results) {
    const modalBody = document.getElementById('modalBody');
    const isProfit = results.netProfit > 0;
    const profitIcon = isProfit ? '📈' : '📉';
    const profitColor = isProfit ? '#22C55E' : '#EF4444';

    modalBody.innerHTML = `
        <div class="result-card">
            <div class="result-header">
                <div class="result-icon">${profitIcon}</div>
                <div>
                    <div class="result-value" style="color: ${profitColor}">
                        ${isProfit ? '+' : ''}$${results.netProfit.toFixed(2)}
                    </div>
                    <div class="result-label">Ganancia Neta</div>
                </div>
            </div>

            <div class="result-item">
                <span>Inversión Base</span>
                <strong>$${results.baseAmount.toFixed(2)}</strong>
            </div>
            <div class="result-item">
                <span>Ganancia Bruta</span>
                <strong style="color: #22C55E">+$${results.grossProfit.toFixed(2)}</strong>
            </div>
            <div class="result-item">
                <span>Comisión Flash Loan (${results.flashLoan.comision}%)</span>
                <strong style="color: #EF4444">-$${results.flashLoanFeeCost.toFixed(2)}</strong>
            </div>
            <div class="result-item">
                <span>Comisiones Exchanges (${(results.totalFees - results.flashLoan.comision).toFixed(2)}%)</span>
                <strong style="color: #EF4444">-$${(results.feeCost - results.flashLoanFeeCost).toFixed(2)}</strong>
            </div>
            <div class="result-item">
                <span>Slippage</span>
                <strong style="color: #EF4444">-$${results.slippageCost.toFixed(2)}</strong>
            </div>
            <div class="result-item">
                <span>Gas Fees</span>
                <strong style="color: #EF4444">-$${results.gasFee.toFixed(2)}</strong>
            </div>
            <div class="result-item">
                <span>ROI</span>
                <strong style="color: ${profitColor}">${results.profitPercentage.toFixed(2)}%</strong>
            </div>

            <div class="viability-indicator viability-${results.viability}">
                ${results.viability === 'high' ? '✅' : results.viability === 'medium' ? '⚠️' : '❌'}
                ${results.viabilityMessage}
            </div>
        </div>

        <div class="result-card">
            <h4 style="margin-bottom: 12px; font-size: 16px;">📊 Detalles de Ejecución</h4>
            <div class="result-item">
                <span>Flash Loan</span>
                <strong>${results.flashLoan.emoji} ${results.flashLoan.nombre}</strong>
            </div>
            <div class="result-item">
                <span>Monto Flash Loan</span>
                <strong>${results.flashLoan.tokenIcon} ${results.flashLoan.amount} ${results.flashLoan.token}</strong>
            </div>
            <div class="result-item">
                <span>Exchanges utilizados</span>
                <strong>${results.exchangeCount}</strong>
            </div>
            <div class="result-item">
                <span>Tiempo estimado</span>
                <strong>${results.executionTime}s</strong>
            </div>
            <div class="result-item">
                <span>Red blockchain</span>
                <strong>${getNetworkName()}</strong>
            </div>
        </div>

        <div class="result-card">
            <h4 style="margin-bottom: 12px; font-size: 16px;">🔄 Cadena de Intercambios</h4>
            ${generateExchangeChainHTML()}
        </div>

        <div class="result-card" style="background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.3);">
            <h4 style="margin-bottom: 8px; font-size: 14px; color: #FBBF24;">⚠️ Advertencia</h4>
            <p style="font-size: 13px; color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
                Esta es una simulación basada en datos estimados. Los resultados reales pueden variar significativamente debido a volatilidad del mercado, liquidez disponible y condiciones de la red.
            </p>
        </div>
    `;
}

// Generar HTML de la cadena de intercambios
function generateExchangeChainHTML() {
    if (!activeFlashLoan || strategy.length === 0) {
        return '<p style="color: var(--color-text-secondary); font-size: 13px;">No hay intercambios configurados</p>';
    }
    
    // Ordenar strategy por nivel
    const sortedStrategy = [...strategy].sort((a, b) => a.level - b.level);
    
    let html = `
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; padding: 12px; background: rgba(50, 184, 198, 0.1); border-radius: 8px;">
            <span style="font-size: 20px;">⚡</span>
            <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 14px;">Flash Loan</div>
                <div style="font-size: 12px; color: var(--color-text-secondary);">${activeFlashLoan.tokenIcon} ${activeFlashLoan.amount} ${activeFlashLoan.token}</div>
            </div>
        </div>
    `;
    
    sortedStrategy.forEach((ex, index) => {
        const arrow = index < sortedStrategy.length - 1 || sortedStrategy.length < exchangeCount ? '⬇️' : '✅';
        html += `
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <div style="flex: 1; padding: 10px; background: var(--color-background); border-radius: 8px; border: 1px solid var(--color-card-border);">
                    <div style="font-weight: 600; font-size: 13px; margin-bottom: 4px;">${ex.icon} ${ex.nombre}</div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">
                        ${ex.tokenIcon} ${ex.token} → ${ex.tokenToReceiveIcon} ${ex.tokenToReceive}
                    </div>
                    <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 2px;">
                        ${ex.amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 6})} ${ex.token} → ~${(ex.estimatedReceiveAmount || ex.amount * 0.997).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 6})} ${ex.tokenToReceive}
                    </div>
                </div>
            </div>
            ${index < sortedStrategy.length - 1 ? '<div style="text-align: center; font-size: 20px; margin: 4px 0;">⬇️</div>' : ''}
        `;
    });
    
    return html;
}

// Obtener nombre de la red
function getNetworkName() {
    const network = document.getElementById('networkSelector').value;
    const networkObj = networks.find(n => n.id === network);
    return networkObj ? networkObj.nombre : 'Ethereum';
}

// Cerrar modal de resultados
function closeModal() {
    document.getElementById('resultsModal').classList.remove('show');
}

function closeResultsModal() {
    closeModal();
}



// Cerrar modales al hacer clic fuera
document.getElementById('resultsModal').addEventListener('click', (e) => {
    if (e.target.id === 'resultsModal') {
        closeResultsModal();
    }
});

document.getElementById('selectionModal').addEventListener('click', (e) => {
    if (e.target.id === 'selectionModal') {
        closeSelectionModal();
    }
});

document.getElementById('flashLoanModal').addEventListener('click', (e) => {
    if (e.target.id === 'flashLoanModal') {
        closeFlashLoanModal();
    }
});

document.getElementById('walletBtn').addEventListener('click', function() {
  // Aquí abrir el modal, mostrar opciones, etc.
  alert("Abrir billetera o conexión");
});


// Resetear la aplicación
function resetApp() {
    // Hacer sonido
    playResetSound();
    
    // Remover clase 'on' de todos los botones de flash loan
    document.querySelectorAll('.flash-loan-btn').forEach(btn => {
        btn.classList.remove('on');
        btn.classList.add('off');
    });
    
    // Remover clase 'on' de todos los botones de exchange
    document.querySelectorAll('.exchange-btn').forEach(btn => {
        btn.classList.remove('on');
        btn.classList.add('off');
    });
    
    // Limpiar estado
    activeFlashLoan = null;
    strategy = [];
    currentExchange = null;
    currentFlashLoan = null;
    
    // Ocultar secciones
    document.getElementById('activeFlashLoanSection').style.display = 'none';
    document.getElementById('repaymentSection').style.display = 'none';
    
    // Reset dropdown a 2
    document.getElementById('exchangesSelector').value = '2';
    exchangeCount = 2;
    
    // Actualizar visibilidad de intercambios
    updateExchangeSectionsVisibility();
    
    // Re-renderizar todo
    renderFlashLoans();
    renderActiveFlashLoan();
    renderAllExchangeSections();
    updateButtons();
    
    console.log('App reseteada');
}

// Función para sonido de reset
function playResetSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Sonido: frecuencia media, corto
        oscillator.frequency.value = 300;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
    } catch (error) {
        console.log('Audio no disponible:', error);
    }
}

// Inicializar al cargar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}