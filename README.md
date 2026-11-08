# PulseFit Academia Atividade Bootstrap

Atividade da disciplina Tópicos Avançados em Programação (Prof. Elton Figueiredo - UCSAL).

Site responsivo de uma academia fictícia feito com **Bootstrap 5** (via CDN) no GitHub Codespaces.

## Componentes

| Componente | Uso no site |
|---|---|
| Navbar | Menu principal com hambúrguer no celular |
| Carrossel | Destaques: musculação, aulas coletivas e funcional |
| Cards | Planos Básico, Plus e Premium |
| Tabela | Grade de aulas da semana |
| Formulário | Agendamento de aula experimental com validação HTML5 |
| Modal | Explicação de como contratar o plano |

## Como rodar

1. Abra o repositório no Codespaces.
2. No terminal: `python3 -m http.server 8000`
3. Na aba **Portas**, abra a porta 8000 e acesse `/bootstrap/`.

## Estrutura

```
bootstrap/
├── index.html   → página com os 6 componentes
├── style.css    → poucos ajustes próprios (imagens do carrossel e rolagem)
└── img/         → imagens do carrossel
```