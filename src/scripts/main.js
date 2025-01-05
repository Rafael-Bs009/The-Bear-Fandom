document.addEventListener('DOMContentLoaded',function() {


                                      /*Função para aparecer a bio */
    const itemsContainerImg = document.querySelectorAll('.characters__container--img .characters__img');
    const itemsContainerBio = document.querySelectorAll('.characters__container--bio .characters__bio');

/* Função para colocar a class quando estiver em hover*/
    function handleItemHover(event) {
        const hoveredId = event.target.getAttribute('data-chr');

        const matchingItem = document.querySelector(`.characters__container--bio .characters__bio[data-chr="${hoveredId}"]`);

        if (matchingItem) {
            matchingItem.classList.add('characters__bio--open');
        }
    }

/*Função para remover a classe quando o hover sai */
    function handleItemHoverOut(event) {
        const hoveredId = event.target.getAttribute('data-chr');

        const matchingItem = document.querySelector(`.characters__container--bio .characters__bio[data-chr="${hoveredId}"]`);

        if (matchingItem) {
            matchingItem.classList.remove('characters__bio--open');
        }
    }

/*Adiciona eventos de hover para os itens*/
    itemsContainerImg.forEach(characters__img => {
        characters__img.addEventListener('mouseenter', handleItemHover);
        characters__img.addEventListener('mouseleave', handleItemHoverOut);
    });



                                /*pegar img da pasta para o carousel */
    const imagePasta = "./dist/images/gallery/";
    const imagesNames = ["image (1).png", "image (2).png", "image (3).png", "image (4).png", "image (5).png", "image (6).png", "image (7).png", "image (8).png", "image (9).png", "image (10).png", 
    "image (11).png", "image (12).png", "image (13).png", "image (14).png", "image (15).png", "image (16).png", "image (17).png", "image (18).png", "image (19).png", "image (20).png",
    "image (21).png", "image (22).png", "image (23).png", "image (24).png", "image (25).png", "image (26).png", "image (27).png", "image (28).png", "image (29).png", "image (30).png",
    "image (31).png", "image (32).png", "image (33).png", "image (34).png", "image (35).png", "image (36).png", "image (37).png", "image (38).png", "image (39).png", "image (40).png",
    "image (41).png", "image (42).png", "image (43).png", "image (44).png", "image (45).png", "image (46).png", "image (47).png", "image (48).png", "image (49).png", "image (50).png",
    "image (51).png", "image (52).png", "image (53).png", "image (54).png", "image (55).png", "image (56).png", "image (57).png", "image (58).png", "image (59).png", "image (60).png",
    "image (61).png", "image (62).png", "image (63).png", "image (64).png", "image (65).png", "image (66).png", "image (67).png", "image (68).png", "image (69).png", "image (70).png",
    "image (71).png", "image (72).png", "image (73).png", "image (74).png", "image (75).png", "image (76).png", "image (77).png", "image (78).png", "image (79).png", "image (80).png",
    "image (81).png", "image (82).png", "image (83).png", "image (84).png", "image (85).png", "image (86).png", "image (87).png", "image (88).png", "image (89).png", "image (90).png",
    "image (91).png", "image (92).png", "image (93).png", "image (94).png", "image (95).png", "image (96).png", "image (97).png", "image (98).png", "image (99).png", "image (100).png",
    "image (101).png", "image (102).png", "image (103).png", "image (104).png", "image (105).png", "image (106).png", "image (107).png", "image (108).png", "image (109).png", "image (110).png",
    "image (111).png", "image (112).png", "image (113).png", "image (114).png", "image (115).png", "image (116).png",];
    const carousel = document.querySelector(".galeria__carousel");

/* Criando as img dinamicamente */
    imagesNames.forEach(imageName => {
        const imgElemet = document.createElement("img");
        imgElemet.src = `${imagePasta}${imageName}`;
        imgElemet.alt = "imagem da Galeria";
        carousel.appendChild(imgElemet);
    });
/* Seleção das imagens após a criação */
    const images = carousel.querySelectorAll("img");
/* Esperar o carregamento completo das imagens */
    let imagesLoaded = 0;
    images.forEach(img => {
        img.addEventListener("load", () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                updatecarousel(); // Atualizar posição inicial
            }
        });
    });

/* movimento do carousel */
    const prevBtn = document.querySelector(".galeria__btn--prev");
    const nextBtn = document.querySelector(".galeria__btn--next");
    let currentIndex = 0;

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updatecarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updatecarousel();
    });

/* Atualização da posição carousel */
    function updatecarousel() {
        const slideWidth = images[0].offsetWidth;
        carousel.style.transition = "transform 0.5s ease";
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

                  /* movimento do carousel Citações */
    const quotesItems = document.querySelectorAll(".citacao__carousel--item");
    const quotesPrev = document.querySelector(".citacao__btn--prev");
    const quotesNext = document.querySelector(".citacao__btn--next");

    let atualIndex = 0;

    function updateQuotes() {
        quotesItems.forEach((item, index) => {
            item.classList.remove("citacao__carousel--item--active");
            if (index === atualIndex) {
                item.classList.add("citacao__carousel--item--active");
            }
        });
    }

    quotesNext.addEventListener("click", () => {
        atualIndex = (atualIndex + 1) % quotesItems.length;
        updateQuotes();
    });

    quotesPrev.addEventListener("click", () => {
        atualIndex = (atualIndex - 1 + quotesItems.length) % quotesItems.length;
        updateQuotes();
    });

    updateQuotes();

                            /* Section Indicações */
    const indication = document.querySelectorAll('[data-indications-award]');

    indication.forEach( open => {
        open.addEventListener('click', abreOuFechaModality);
    });

/*Section informações, troca de abas */
    const buttons = document.querySelectorAll('[data-tab-button]');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event){
            console.log("Botão clicado:", event.target);
            
            const abaAlvo = event.target.dataset.tabButton;
            console.log("Aba alvo:", abaAlvo);

            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            console.log("Elemento da aba:", aba);

            if (aba) {
            escondeTodasAbas();
            aba.classList.add('informacoes__list--is-active');

            removeBotaoAtivo();
            event.target.classList.add('informacoes__tabs__button--is-active');
            } else {
                console.error("Aba não encontrada para:", abaAlvo);
            }
        })
    });


    /*Section informações, troca de abas */
    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
    
        buttons.forEach(button => {
            button.classList.remove('informacoes__tabs__button--is-active')
        });
    };
    
    function escondeTodasAbas() {
        const tabContainer = document.querySelectorAll('[data-tab-id]');
    
        tabContainer.forEach(tab => {
            tab.classList.remove('informacoes__list--is-active');
        });
    };
    
    
    /* Faz abrir ou fechar a modality na section indicações */
    function abreOuFechaModality(elemento) {
        const classe = 'indications__item--is-open';
        const elementoPai = elemento.target.parentNode;
    
        elementoPai.classList.toggle(classe);
    
    };
});


