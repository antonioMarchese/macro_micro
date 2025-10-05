"use client";

import { useState } from "react";

interface GroupData {
  title: string;
  items: string[];
}

const groupData: Record<string, GroupData> = {
  tecnologicos: {
    title: "Fatores Tecnológicos",
    items: [
      "Dificuldade de acompanhar a tecnologia",
      "Inovação",
      "Novas tecnologias",
      "Manter os caminhões na faixa",
    ],
  },
  politicos: {
    title: "Fatores Políticos-Legais",
    items: [
      "Taxação",
      "Restrição de importação",
      "ISO 50001, 9001, 14001",
      "Normas, restrição e validação",
    ],
  },
  socioculturais: {
    title: "Fatores Socioculturais",
    items: ["Sustentabilidade"],
  },
  economicos: {
    title: "Fatores Econômicos",
    items: [
      "Impacto nas compras de acordo com o poder aquisitivo da população",
    ],
  },
  concorrentes: {
    title: "Concorrente",
    items: ["BMW", "Volvo", "Audi", "Tecnologia e cópias"],
  },
  bancos: {
    title: "Banco",
    items: [
      "Financiamento",
      "Alto poder de negociação",
      "Possuem um banco próprio",
    ],
  },
  fornecedores: {
    title: "Fornecedores",
    items: ["Alto poder de negociação"],
  },
  comunicacao: {
    title: "Comunicação",
    items: [
      "Relançamento de produtos",
      "Eventos / Marketing",
      "Caravana do Caminhoneiro",
      "Convite da família para eventos de exposição",
    ],
  },
};

export default function DivBasedDiagram() {
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square mb-10">
      {/* Outer Circle - Ambiente Contextual (Orange) */}
      <div className="absolute inset-0 rounded-full bg-orange-500 flex items-center justify-center">
        {/* Title at top */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
          <div className="text-white font-bold text-lg">Ambiente</div>
          <div className="text-white font-bold text-lg">contextual</div>
        </div>

        {/* Fatores Tecnológicos - Top Left */}
        <div
          className="absolute top-36 left-20 cursor-pointer group"
          onMouseEnter={() => setHoveredGroup("tecnologicos")}
          onMouseLeave={() => setHoveredGroup(null)}
        >
          <div className="text-center text-white text-sm font-medium group-hover:opacity-80 transition-opacity">
            <div>Fatores</div>
            <div>Tecnológicos</div>
          </div>

          {/* Tooltip */}
          {hoveredGroup === "tecnologicos" && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white dark:bg-slate-700 rounded-lg shadow-2xl p-4 border-2 border-orange-500 w-64 z-50">
              <h4 className="font-bold text-base mb-2 text-slate-900 dark:text-white">
                {groupData.tecnologicos.title}
              </h4>
              <ul className="space-y-1">
                {groupData.tecnologicos.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-slate-700 dark:text-slate-300"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Fatores Políticos-Legais - Top Right */}
        <div
          className="absolute top-36 right-15 cursor-pointer group"
          onMouseEnter={() => setHoveredGroup("politicos")}
          onMouseLeave={() => setHoveredGroup(null)}
        >
          <div className="text-center text-white text-sm font-medium group-hover:opacity-80 transition-opacity">
            <div>Fatores</div>
            <div>Políticos-Legais</div>
          </div>

          {/* Tooltip */}
          {hoveredGroup === "politicos" && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white dark:bg-slate-700 rounded-lg shadow-2xl p-4 border-2 border-orange-500 w-64 z-50">
              <h4 className="font-bold text-base mb-2 text-slate-900 dark:text-white">
                {groupData.politicos.title}
              </h4>
              <ul className="space-y-1">
                {groupData.politicos.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-slate-700 dark:text-slate-300"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Fatores Socioculturais - Bottom Right */}
        <div
          className="absolute bottom-36 right-20 cursor-pointer group"
          onMouseEnter={() => setHoveredGroup("socioculturais")}
          onMouseLeave={() => setHoveredGroup(null)}
        >
          <div className="text-center text-white text-sm font-medium group-hover:opacity-80 transition-opacity">
            <div>Fatores</div>
            <div>Socioculturais</div>
          </div>

          {/* Tooltip */}
          {hoveredGroup === "socioculturais" && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white dark:bg-slate-700 rounded-lg shadow-2xl p-4 border-2 border-orange-500 w-64 z-50">
              <h4 className="font-bold text-base mb-2 text-slate-900 dark:text-white">
                {groupData.socioculturais.title}
              </h4>
              <ul className="space-y-1">
                {groupData.socioculturais.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-slate-700 dark:text-slate-300"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Fatores Econômicos - Bottom Left */}
        <div
          className="absolute bottom-36 left-20 cursor-pointer group"
          onMouseEnter={() => setHoveredGroup("economicos")}
          onMouseLeave={() => setHoveredGroup(null)}
        >
          <div className="text-center text-white text-sm font-medium group-hover:opacity-80 transition-opacity">
            <div>Fatores</div>
            <div>Econômicos</div>
          </div>

          {/* Tooltip */}
          {hoveredGroup === "economicos" && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mt-2 bg-white dark:bg-slate-700 rounded-lg shadow-2xl p-4 border-2 border-orange-500 w-64 z-50">
              <h4 className="font-bold text-base mb-2 text-slate-900 dark:text-white">
                {groupData.economicos.title}
              </h4>
              <ul className="space-y-1">
                {groupData.economicos.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-slate-700 dark:text-slate-300"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Middle Circle - Ambiente Operacional (Purple) */}
        <div className="absolute inset-[16%] rounded-full bg-purple-600 flex items-center justify-center">
          {/* Title at top */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
            <div className="text-white font-bold text-base">Ambiente</div>
            <div className="text-white font-bold text-base">operacional</div>
          </div>

          {/* Fornecedores - Top Left */}
          <div
            className="absolute top-30 left-15 text-center text-white text-xs font-medium cursor-pointer group"
            onMouseEnter={() => setHoveredGroup("fornecedores")}
            onMouseLeave={() => setHoveredGroup(null)}
          >
            Fornecedores
            {/* Tooltip */}
            {hoveredGroup === "fornecedores" && (
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white dark:bg-slate-700 rounded-lg shadow-2xl p-4 border-2 border-purple-600 w-64 z-50">
                <h4 className="font-bold text-base mb-2 text-slate-900 dark:text-white">
                  {groupData.fornecedores.title}
                </h4>
                <ul className="space-y-1">
                  {groupData.fornecedores.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-slate-700 dark:text-slate-300"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Concorrentes - Top Right */}
          <div
            className="absolute top-30 right-15 text-center text-white text-xs font-medium cursor-pointer group"
            onMouseEnter={() => setHoveredGroup("concorrentes")}
            onMouseLeave={() => setHoveredGroup(null)}
          >
            Concorrentes
            {/* Tooltip */}
            {hoveredGroup === "concorrentes" && (
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white dark:bg-slate-700 rounded-lg shadow-2xl p-4 border-2 border-purple-600 w-64 z-50">
                <h4 className="font-bold text-base mb-2 text-slate-900 dark:text-white">
                  {groupData.concorrentes.title}
                </h4>
                <ul className="space-y-1">
                  {groupData.concorrentes.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-slate-700 dark:text-slate-300"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Bancos - Bottom Right */}
          <div
            className="absolute bottom-26 right-26 text-center text-white text-xs font-medium cursor-pointer group"
            onMouseEnter={() => setHoveredGroup("bancos")}
            onMouseLeave={() => setHoveredGroup(null)}
          >
            Bancos
            {/* Tooltip */}
            {hoveredGroup === "bancos" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white dark:bg-slate-700 rounded-lg shadow-2xl p-4 border-2 border-purple-600 w-64 z-50">
                <h4 className="font-bold text-base mb-2 text-slate-900 dark:text-white">
                  {groupData.bancos.title}
                </h4>
                <ul className="space-y-1">
                  {groupData.bancos.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-slate-700 dark:text-slate-300"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Meios de Comunicação - Bottom */}
          <div
            className="absolute bottom-26 left-20 text-center text-white text-xs font-medium cursor-pointer group"
            onMouseEnter={() => setHoveredGroup("comunicacao")}
            onMouseLeave={() => setHoveredGroup(null)}
          >
            <div>Meios de</div>
            <div>Comunicação</div>

            {/* Tooltip */}
            {hoveredGroup === "comunicacao" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white dark:bg-slate-700 rounded-lg shadow-2xl p-4 border-2 border-purple-600 w-64 z-50">
                <h4 className="font-bold text-base mb-2 text-slate-900 dark:text-white">
                  {groupData.comunicacao.title}
                </h4>
                <ul className="space-y-1">
                  {groupData.comunicacao.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-slate-700 dark:text-slate-300"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Inner Circle - Ambiente Interno (Blue) */}
          <div className="absolute inset-[30%] rounded-full bg-blue-600 flex flex-col items-center justify-center">
            {/* Building Icon */}
            <div className="mb-2">
              <div className="w-12 h-14 bg-white rounded-sm relative">
                {/* Windows */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-blue-600"></div>
                <div className="absolute top-2 left-5 w-2 h-2 bg-blue-600"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-600"></div>
                <div className="absolute top-5 left-2 w-2 h-2 bg-blue-600"></div>
                <div className="absolute top-5 left-5 w-2 h-2 bg-blue-600"></div>
                <div className="absolute top-5 right-2 w-2 h-2 bg-blue-600"></div>
                <div className="absolute top-8 left-2 w-2 h-2 bg-blue-600"></div>
                <div className="absolute top-8 left-5 w-2 h-2 bg-blue-600"></div>
                <div className="absolute top-8 right-2 w-2 h-2 bg-blue-600"></div>
                {/* Doors */}
                <div className="absolute bottom-0 left-2 w-2 h-4 bg-blue-600"></div>
                <div className="absolute bottom-0 right-2 w-2 h-4 bg-blue-600"></div>
              </div>
            </div>

            {/* Organization label */}
            <div className="absolute bottom-10 text-white text-xs font-medium">
              Organização
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
