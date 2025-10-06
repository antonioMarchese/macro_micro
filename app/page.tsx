"use client";

import DivBasedDiagram from "./components/DivBasedDiagram";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Main Content */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl mb-4">
              Ambientes Organizacionais
            </h2>
          </div>

          {/* Company Analysis Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Empresa Analisada: Mercedes-Benz em Juiz de Fora
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              A fábrica da Mercedes-Benz em Juiz de Fora (MG) integra o sistema
              global de produção de veículos comerciais da Daimler Truck.
              Atualmente, a unidade é responsável pela soldagem e pintura de
              todas as cabinas de caminhões Mercedes-Benz produzidas no Brasil.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Fonte:{" "}
              <a
                href="https://www.mercedes-benz-trucks.com.br/quem-somos/empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                https://www.mercedes-benz-trucks.com.br/quem-somos/empresa
              </a>
            </p>
          </div>

          <DivBasedDiagram />

          {/* Key Insights */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Pontos-Chave da Análise Ambiental
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  🟠 Ambiente Contextual
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  O ambiente contextual da Mercedes-Benz de Juiz de Fora é influenciado por forças amplas que moldam o cenário estratégico e tecnológico da indústria automotiva.
                  Os fatores tecnológicos destacam a necessidade constante de inovação e atualização frente ao rápido avanço das tecnologias veiculares e de automação, exigindo investimentos contínuos em pesquisa e desenvolvimento.
                  Nos fatores políticos-legais, a empresa deve se adequar a normas internacionais de qualidade e sustentabilidade, como as certificações ISO 50001, 9001 e 14001, além de lidar com políticas de taxação e restrição de importações que afetam diretamente sua competitividade.
                  O aspecto sociocultural evidencia uma crescente preocupação da sociedade com sustentabilidade e responsabilidade ambiental, pressionando a indústria a adotar práticas mais limpas.
                  Por fim, os fatores econômicos apontam que as oscilações no poder aquisitivo da população impactam diretamente o volume de vendas e as estratégias de precificação dos veículos.
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  🟣 Ambiente Operacional
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  O ambiente operacional da Mercedes-Benz de Juiz de Fora envolve atores externos com os quais a empresa mantém interação direta e contínua.
                  Os fornecedores, por possuírem alto poder de negociação, exigem parcerias sólidas e planejamento logístico eficiente para garantir qualidade e custo competitivo.
                  Os concorrentes, como BMW, Volvo e Audi, pressionam o mercado por diferenciação tecnológica e inovação constante, reforçando a importância da reputação e da excelência dos produtos Mercedes-Benz.
                  Os bancos desempenham papel essencial ao oferecer financiamentos e condições atrativas, muitas vezes por meio de instituições próprias, fortalecendo o acesso dos clientes aos veículos premium.
                  Já os meios de comunicação são fundamentais para o relacionamento com o público: campanhas, eventos e ações como a Caravana do Caminhoneiro e convites familiares para exposições fortalecem o vínculo da marca com seus consumidores e parceiros.
                </p>
              </div>
              <div className="border-l-4 border-slate-500 pl-4">
                <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  ⚙️ Resumo Geral
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  O panorama da Mercedes-Benz de Juiz de Fora reflete um equilíbrio entre a adaptação às forças externas e o fortalecimento das relações diretas de mercado.
                  Enquanto o ambiente contextual define os desafios macroeconômicos, tecnológicos e regulatórios que orientam o planejamento estratégico, o ambiente operacional revela as dinâmicas práticas do negócio — fornecedores, concorrência, crédito e comunicação — que sustentam o desempenho diário da empresa.
                  A integração harmoniosa desses ambientes garante que a organização mantenha sua competitividade, reputação e capacidade de inovação no cenário automotivo nacional e global.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>Análise Ambiental Organizacional - Modelo de Três Camadas</p>
          <div>
            <p>Alunos:</p>
            <ul>
              <li>Antonio Marchese</li>
              <li>Augusto Silva</li>
              <li>Jonas Amaral</li>
              <li>Nicholas Zoffoli</li>
              <li>Marcos Luis</li>
              <li>Maurynk José Ferreira</li>
              <li>Pedro Lima</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
