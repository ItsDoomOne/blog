---
layout: post.njk
title: 17/01/2026/1  - Voltando com o Blog
date: "2026-01-17T19:20:00Z"
tags: posts

---
# {{ title }}

### Resumo: Voltei com o blog.

Depois de muito tempo cogitando, eu decidi voltar com o blog. Embora não tenha leitores ativos, acho que pode ser uma boa oportunidade de documentar minha jornada na programação e na T.I.

Como esse é o primeiro post publico que nao está arquivado, aqui está um contexto para novos leitores hipoteticos e/ou leitores antigos hipoteticos.

Hoje, estou utilizando o Arch Linux no meu computador principal (um Thinkpad E14 Gen 2), depois de ter experimentado com o NixOS e o Guix no meu ex computador principal, que me refiro daqui em diante como "Archleo", "Archserver", "NAS", "Servidor" ou "Sistema de Áudio". Era uma máquina velha, com chipset H81, com um processador Haswell, mais especificamente, um i5-4440. Além disso, tinha 12GB de RAM DDR3, um SSD Sata da Adata de 120GB, e um HD de laptop antigo do meu velho HP 240 G7 cujo teve o HD trocada a certo ponto de sua vida, que tinha agora 500gb. Utilizo ele hoje como um sistema de audio airplay 2 para meu iPhone XR e meu iPhone 6S com o Shairport-sync + Pipewire. 

O meu computador principal, o Thinkpad, será referido daqui em diante como "Thinkpad", "E14", "E14G2", "Thinkleo" ou somente "Meu PC". Ele tem um i7-1165G7, 16GB de ram single-channel (ele só tem um slot), que por causa da limitação da largura de banda, tem sua iGPU (Intel Xe Graphics, 96EU) em "Modo Graficos UHD" segundo o PSREF da Lenovo. Comprei usado por ~1500 reais à mais ou menos um mês atrás para estudar no Instituto Federal do Rio Grande do Sul, para ensino médio e curso tecnico (programação). Fiz a prova faz alguns meses e fiquei em primeiro lugar dos suplentes, ou seja, se alguem que entrou na cota universal (a minha cota) desistir, ela vai pra mim, ou pelo menos eu acho, não levei em consideração a possiblidade dessa vaga ir para algum cotista, mas acredito que não.

Outra coisa que aconteceu nesse meio tempo de eu parar de escrever foi o fato de eu começar o Spew, uma linguagem de programação de dominio especifico, e um interpretador para essa linguagem, o PySpew. Nos ultimos três dias eu comecei a implementar os primeiros comandos no interpretador, e hoje criei também a configuração em TOML por que julguei ser mais facil de implementar. Irei desenvolver mais interpretadores com o tempo para ao mesmo tempo aprender e otimizar, pois acho implementar um interpretador usando uma linguagem interpretada é algo estupido e desnecessário. Minha ideia é desenvolver "CSpew" que é um interpretador Spew em C, só que para isso eu preciso aprender C, que vai ser um desafio complexo, e também o Spew.NET, que é um interpretador em .NET 9 (ou 10, pois acho que quando começar, já vai ter lançado), escrito em C#. Já dei uma estudada em C# fazem alguns varios meses, então sei que é uma linguagem quase perfeita para o trabalho, principalmente por ela ser hibrida e não interpretada, porém ainda mais lenta que uma linguagem compilada verdadeira (C# é meio misto, pois compila seu codigo para CIL e depois faz JIT para transformar em machine code).
