// Dados para Produto Acabado (PA)
const paData = {
    plastico: {
        'TIGRA LATA 24X0,33L(CP)': { total_cx_por_palete: 120, caixas_por_fiada: 12, fiadas_completas: 10 },
        'BIRRA LATA 24X0,33L(CP)': { total_cx_por_palete: 120, caixas_por_fiada: 12, fiadas_completas: 10 },
        'TIGRA LATA 24X0,33L NI': { total_cx_por_palete: 120, caixas_por_fiada: 12, fiadas_completas: 10 },
        'COCA COLA LATA 24X0,33L': { total_cx_por_palete: 120, caixas_por_fiada: 12, fiadas_completas: 10 },
        'COCA COLA RET 24X0,3L PROMO': { total_cx_por_palete: 56, caixas_por_fiada: 8, fiadas_completas: 7 },
        'FANTA RET 24X0,3L PROMO': { total_cx_por_palete: 56, caixas_por_fiada: 8, fiadas_completas: 7 },
        'SPRITE RET 24X0,3L PROMO': { total_cx_por_palete: 56, caixas_por_fiada: 8, fiadas_completas: 7 },
        'SUPER BOCK TR 24X0,25 L': { total_cx_por_palete: 56, caixas_por_fiada: 8, fiadas_completas: 7 },
        'CRISTAL TR 24X0,25 L': { total_cx_por_palete: 56, caixas_por_fiada: 8, fiadas_completas: 7 },
        'TIGRA TR 24X0,33 L CP': { total_cx_por_palete: 56, caixas_por_fiada: 8, fiadas_completas: 7 }
    },
    madeira: {
        'BIRRA LATA 24X0,33L(CP)': { total_cx_por_palete: 130, caixas_por_fiada: 13, fiadas_completas: 10 },
        'TIGRA LATA 24X0,33L NI': { total_cx_por_palete: 130, caixas_por_fiada: 13, fiadas_completas: 10 },
        'COCA COLA LATA 24X0,33L': { total_cx_por_palete: 130, caixas_por_fiada: 13, fiadas_completas: 10 },
        'COCA COLA RET 24X0,3L PROMO': { total_cx_por_palete: 70, caixas_por_fiada: 10, fiadas_completas: 7 },
        'FANTA RET 24X0,3L PROMO': { total_cx_por_palete: 70, caixas_por_fiada: 10, fiadas_completas: 7 },
        'SPRITE RET 24X0,3L PROMO': { total_cx_por_palete: 70, caixas_por_fiada: 10, fiadas_completas: 7 },
        'SUPER BOCK TR 24X0,25 L': { total_cx_por_palete: 70, caixas_por_fiada: 10, fiadas_completas: 7 },
        'CRISTAL TR 24X0,25 L': { total_cx_por_palete: 70, caixas_por_fiada: 10, fiadas_completas: 7 },
        'TIGRA TR 24X0,33 L CP': { total_cx_por_palete: 70, caixas_por_fiada: 10, fiadas_completas: 7 }
    }
};

// Dados para Matéria Prima (MP)
const mpData = {
    'vasilhame': { vasilhame_por_unidade: 48 },
    'malote-garrafas': { vasilhame_por_unidade: 3330 },
    'malote-importado': { vasilhame_por_unidade: 3370 }
};

// Dados para Carga Faturada (CF)
const cargaFaturadaData = {
    'BIRRA LATA 24X0,33L(CP)': { caixas_por_palete: 130, paletes: 24, total_caixas_base: 3120 },
    'TIGRA LATA 24X0,33L NI': { caixas_por_palete: 130, paletes: 24, total_caixas_base: 3120 },
    'COCA COLA LATA 24X0,33L': { caixas_por_palete: 130, paletes: 24, total_caixas_base: 3120 },
    'COCA COLA RET 24X0,3L PROMO': { caixas_por_palete: 70, paletes: 24, total_caixas_base: 1680 },
    'FANTA RET 24X0,3L PROMO': { caixas_por_palete: 70, paletes: 24, total_caixas_base: 1680 },
    'SPRITE RET 24X0,3L PROMO': { caixas_por_palete: 70, paletes: 24, total_caixas_base: 1680 },
    'SUPER BOCK TR 24X0,25 L': { caixas_por_palete: 70, paletes: 24, total_caixas_base: 1680 },
    'CRISTAL TR 24X0,25 L': { caixas_por_palete: 70, paletes: 24, total_caixas_base: 1680 },
    'TIGRA TR 24X0,33 L CP': { caixas_por_palete: 70, paletes: 24, total_caixas_base: 1680 }
};


function showCalculator(calculatorId) {
    // Esconde todas as calculadoras
    document.querySelectorAll('.calculator-content').forEach(calculator => {
        calculator.style.display = 'none';
    });

    // Mostra a calculadora selecionada
    document.getElementById(calculatorId + '-calculator').style.display = 'block';

    // Para Produto Acabado, reseta e popula os produtos
    if (calculatorId === 'produto-acabado') {
        document.getElementById('tipo-palete').value = ''; // Reseta a seleção do palete
        populateProducts(); // Reseta os produtos
        document.getElementById('result-pa').textContent = ''; // Limpa o resultado
        document.getElementById('numero-paletes-pa').value = 0;
        document.getElementById('caixas-adicionais-pa').value = 0;
    }
    // Para Matéria Prima, popula os tipos de matéria prima
    else if (calculatorId === 'materia-prima') {
        populateMateriaPrimaTypes(); // Popula os tipos de MP
        document.getElementById('quantidade-mp').value = 0; // Limpa a quantidade
        document.getElementById('result-mp').textContent = ''; // Limpa o resultado
    }
    // Para Carga Faturada, popula os produtos e limpa os campos
    else if (calculatorId === 'carga-faturada') {
        populateCargaFaturadaProducts(); // Popula os produtos de Carga Faturada
        document.getElementById('caixas-adicionais-cf').value = 0; // Clear additional boxes
        document.getElementById('result-cf').textContent = ''; // Clear result
        document.getElementById('cf-product-details').style.display = 'none'; // Hide details
    }
}

function populateProducts() {
    const tipoPalete = document.getElementById('tipo-palete').value;
    const produtoSelect = document.getElementById('produto-pa');

    // Limpa as opções existentes
    produtoSelect.innerHTML = '<option value="">Selecione o produto</option>';
    document.getElementById('result-pa').textContent = ''; // Limpa o resultado

    if (tipoPalete && paData[tipoPalete]) {
        for (const produto in paData[tipoPalete]) {
            const option = document.createElement('option');
            option.value = produto;
            option.textContent = produto;
            produtoSelect.appendChild(option);
        }
    }
}

function populateMateriaPrimaTypes() {
    const tipoMpSelect = document.getElementById('tipo-mp');
    tipoMpSelect.innerHTML = '<option value="">Selecione o tipo</option>'; // Limpa e adiciona opção padrão

    for (const tipo in mpData) {
        const option = document.createElement('option');
        option.value = tipo;
        option.textContent = tipo.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()); // Formata para exibir (ex: malote-garrafas -> Malote Garrafas)
        tipoMpSelect.appendChild(option);
    }
}

function populateCargaFaturadaProducts() {
    const produtoCfSelect = document.getElementById('produto-cf');
    produtoCfSelect.innerHTML = '<option value="">Selecione o produto</option>'; // Limpa e adiciona opção padrão

    for (const produto in cargaFaturadaData) {
        const option = document.createElement('option');
        option.value = produto;
        option.textContent = produto;
        produtoCfSelect.appendChild(option);
    }
}

// Function to display product details for Carga Faturada
function displayCargaFaturadaDetails() {
    const produtoSelecionado = document.getElementById('produto-cf').value;
    const productDetailsDiv = document.getElementById('cf-product-details');

    if (produtoSelecionado && cargaFaturadaData[produtoSelecionado]) {
        const data = cargaFaturadaData[produtoSelecionado];
        document.getElementById('cf-detail-cx-palete').textContent = data.caixas_por_palete;
        document.getElementById('cf-detail-paletes').textContent = data.paletes;
        // Format total_caixas_base with toLocaleString
        document.getElementById('cf-detail-total-cx-base').textContent = data.total_caixas_base.toLocaleString('pt-PT'); // <--- ALTERADO AQUI
        productDetailsDiv.style.display = 'block'; // Show details
    } else {
        productDetailsDiv.style.display = 'none'; // Hide if nothing is selected
    }
    document.getElementById('result-cf').textContent = ''; // Clear the result when changing product
    document.getElementById('caixas-adicionais-cf').value = 0; // Reset additional boxes
}


function calculateProdutoAcabado() {
    const tipoPalete = document.getElementById('tipo-palete').value;
    const produtoSelecionado = document.getElementById('produto-pa').value;
    const numeroPaletes = parseInt(document.getElementById('numero-paletes-pa').value);
    const caixasAdicionais = parseInt(document.getElementById('caixas-adicionais-pa').value);
    const resultDiv = document.getElementById('result-pa');

    if (!tipoPalete || !produtoSelecionado || isNaN(numeroPaletes) || isNaN(caixasAdicionais)) {
        resultDiv.textContent = 'Por favor, selecione o tipo de palete e produto e insira valores numéricos válidos.';
        return;
    }

    if (numeroPaletes < 0 || caixasAdicionais < 0) {
         resultDiv.textContent = 'O número de paletes e caixas adicionais não podem ser negativos.';
         return;
    }

    const data = paData[tipoPalete][produtoSelecionado];
    if (!data) {
        resultDiv.textContent = 'Dados do produto não encontrados.';
        return;
    }

    const totalCaixasPorPalete = data.total_cx_por_palete;
    const totalCaixas = (numeroPaletes * totalCaixasPorPalete) + caixasAdicionais;

    // Format the output
    resultDiv.textContent = `Total Geral: ${totalCaixas.toLocaleString('pt-PT')} Caixas`; // <--- ALTERADO AQUI
}

function calculateMateriaPrima() {
    const tipoMp = document.getElementById('tipo-mp').value;
    const quantidade = parseInt(document.getElementById('quantidade-mp').value);
    const resultDiv = document.getElementById('result-mp');

    if (!tipoMp || isNaN(quantidade)) {
        resultDiv.textContent = 'Por favor, selecione o tipo de matéria prima e insira uma quantidade válida.';
        return;
    }

    if (quantidade < 0) {
        resultDiv.textContent = 'A quantidade não pode ser negativa.';
        return;
    }

    const data = mpData[tipoMp];
    if (!data) {
        resultDiv.textContent = 'Dados do tipo de matéria prima não encontrados.';
        return;
    }

    const vasilhamePorUnidade = data.vasilhame_por_unidade;
    const totalVasilhames = quantidade * vasilhamePorUnidade;

    // Format the output
    resultDiv.textContent = `Total Geral: ${totalVasilhames.toLocaleString('pt-PT')} Vasilhames`; // <--- ALTERADO AQUI
}

function calculateCargaFaturada() {
    const produtoCf = document.getElementById('produto-cf').value;
    const valorMultiplicador = parseInt(document.getElementById('caixas-adicionais-cf').value);
    const resultDiv = document.getElementById('result-cf');

    if (!produtoCf || isNaN(valorMultiplicador)) {
        resultDiv.textContent = 'Por favor, selecione o produto e insira um valor numérico válido para o multiplicador.';
        return;
    }

    if (valorMultiplicador < 0) {
        resultDiv.textContent = 'O valor inserido não pode ser negativo.';
        return;
    }

    const data = cargaFaturadaData[produtoCf];
    if (!data) {
        resultDiv.textContent = 'Dados do produto não encontrados para Carga Faturada.';
        return;
    }

    const cargaFaturadaTotal = data.total_caixas_base * valorMultiplicador;

    // Format the output
    resultDiv.textContent = `Total Geral: ${cargaFaturadaTotal.toLocaleString('pt-PT')} Caixas`; // <--- ALTERADO AQUI
}