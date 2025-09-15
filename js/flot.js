window.addEventListener('DOMContentLoaded', () => {
    const flotState = {
        flotItems: [
            {
                id: 1,
                title: 'Зубр',
                imgMin: 'img/flot/zubr.jpeg',
                imgFull: 'img/flot/zubr.jpeg',
                altImg: 'буксир mta-shipping zubr',
                popupActive: false,
                popupBlocked: false,
                flotStats: [
                    {
                        id: 1,
                        name: 'регистровый №',
                        value: '820298'
                    },
                    {
                        id: 2,
                        name: 'порт приписки',
                        value: 'Санкт-Петербург'
                    },
                    {
                        id: 3,
                        name: 'флаг',
                        value: 'Россия'
                    },
                    {
                        id: 4,
                        name: 'символ класса РС',
                        value: 'KM(*)ULR2 AUT2 tug'
                    },
                    {
                        id: 5,
                        name: 'тип и назначение',
                        value: 'буксир'
                    },
                    {
                        id: 6,
                        name: 'подтипы',
                        value: 'кантовщик противопожарное'
                    },
                    {
                        id: 7,
                        name: 'номер проекта',
                        value: '№ 1093'
                    },
                    {
                        id: 8,
                        name: 'валовая вместимость',
                        value: '228 MK-1969'
                    },
                    {
                        id: 9,
                        name: 'водоизмещение',
                        value: '472 т'
                    },
                    {
                        id: 10,
                        name: 'длина габаритная',
                        value: '35,23 м'
                    },
                    {
                        id: 11,
                        name: 'длина расчётная',
                        value: '30,00 м'
                    },
                    {
                        id: 12,
                        name: 'ширина габаритная',
                        value: '9,10 м'
                    },
                    {
                        id: 13,
                        name: 'высота борта',
                        value: '4,50 м'
                    },
                    {
                        id: 14,
                        name: 'осадка',
                        value: '3,15 м'
                    },
                    {
                        id: 15,
                        name: 'дедвейт',
                        value: '86 т'
                    },
                    {
                        id: 16,
                        name: 'скорость',
                        value: '12,00 узлов'
                    },
                    {
                        id: 17,
                        name: 'количество и мощность главного двигателя',
                        value: '2 * 927 кВт (2500 л.с.)'
                    },
                    {
                        id: 18,
                        name: 'марка главного двигателя',
                        value: '6ASL 25/30'
                    },
                    {
                        id: 19,
                        name: 'количество и тип движителя',
                        value: '1 - винт регулируемого шага'
                    },
                    {
                        id: 20,
                        name: 'количество лопастей',
                        value: '3'
                    },
                    {
                        id: 21,
                        name: 'количество и мощность генераторов',
                        value: '2 * 100 кВт'
                    },
                ]
            },
            {
                id: 2,
                title: 'Уран',
                imgMin: 'img/flot/uran.jpeg',
                imgFull: 'img/flot/uran.jpeg',
                altImg: 'буксир mta-shipping Уран',
                popupActive: false,
                popupBlocked: false,
                flotStats: [
                    {
                        id: 1,
                        name: 'регистровый №',
                        value: '860935'
                    },
                    {
                        id: 2,
                        name: 'ИМО',
                        value: '8727408'
                    },
                    {
                        id: 3,
                        name: 'порт приписки',
                        value: 'Санкт-Петербург'
                    },
                    {
                        id: 4,
                        name: 'флаг',
                        value: 'Россия'
                    },
                    {
                        id: 5,
                        name: 'символ класса РС',
                        value: 'KM(*) UL R2 AUT2 FF3WS Tug'
                    },
                    {
                        id: 6,
                        name: 'тип и назначение',
                        value: 'буксир'
                    },
                    {
                        id: 7,
                        name: 'валовая вместимость',
                        value: '279 т'
                    },
                    {
                        id: 8,
                        name: 'длина наибольшая',
                        value: '35,78 м'
                    },
                    {
                        id: 9,
                        name: 'ширина',
                        value: '9,00 м'
                    },
                    {
                        id: 10,
                        name: 'высота борта',
                        value: '4,50 м'
                    },
                    {
                        id: 11,
                        name: 'суммарная мощность',
                        value: '1852 кВт (2500 л.с.)'
                    },
                    {
                        id: 12,
                        name: 'тип главного двигателя',
                        value: 'ДВС 6ASL 25D'
                    },
                    {
                        id: 13,
                        name: 'буксирная лебедка',
                        value: '117 kN, OHW-20, гидравлическая'
                    },
                    {
                        id: 14,
                        name: 'основной буксирный трос',
                        value: 'Ø 38 мм., L 500 м.'
                    },
                ]
            },
            {
                id: 3,
                title: 'В разработке',
                imgMin: 'img/flot/no_image.png',
                imgFull: '',
                altImg: 'В разработке',
                popupActive: false,
                popupBlocked: true,
                flotStats: []
            }
        ],
    };
    const mainMenu = document.querySelector('.navbar');
    const flotWrap = document.querySelector('.flot-wrap');
    const popupWrap = flotWrap.querySelector('.flot-item-popup-wrap');
    const popupMainTitle = popupWrap.querySelector('.flot-item-popup-main-title');
    const popupBigImage = popupWrap.querySelector('.flot-item-bigimage');
    const popupStatsWrap = popupWrap.querySelector('.flot-item-popup-stats-wrap');
    const closePopupBtn = popupWrap.querySelector('.flot-item-popup-close-btn');

    const popupHandler = (flotItemObj, status = false) => {
        if (!flotItemObj) {
            flotState.flotItems = flotState.flotItems.map((flotItem) => {
                return {
                    ...flotItem,
                    popupActive: false
                }
            });
        }
        if (!status) {
            flotState.flotItems = flotState.flotItems.map((flotItem) => {
                return {
                    ...flotItem,
                    popupActive: false
                }
            });
            popupWrap.classList.add('closed-popup');
            const allRows = popupStatsWrap.querySelectorAll('.flot-item-popup-stats-row');
            allRows.forEach((rowItem) => rowItem.remove());
            return;
        }
        flotState.flotItems = flotState.flotItems.map((flotItem) => {
            if (flotItem.id === Number(flotItemObj.id)) {
                return {
                    ...flotItem,
                    popupActive: true
            }
            }
            return {
                ...flotItem,
                popupActive: false
            }
        });
        popupWriteData(flotItemObj);
        popupWrap.classList.remove('closed-popup');
    };

    const popupWriteData = (flotData) => {
        popupMainTitle.textContent = flotData.title;
        popupBigImage.src = flotState.flotItems.find((item) => item.id === flotData.id).imgFull;
        flotData.flotStats.forEach((statItem) => {
            const statRow = document.createElement('div');
            const statName = document.createElement('div');
            const statValue = document.createElement('div');
            statRow.classList.add('flot-item-popup-stats-row');
            statName.textContent = statItem.name.charAt(0).toUpperCase() + String(statItem.name).slice(1) + ':';
            statValue.textContent = statItem.value;
            statName.classList.add('flot-item-popup-stats-cell');
            statName.classList.add('flot-item-popup-stats-title');
            statValue.classList.add('flot-item-popup-stats-cell');
            statRow.appendChild(statName);
            statRow.appendChild(statValue);
            popupStatsWrap.appendChild(statRow);
        })
    };

    const showHidePopupHandler = (e) => {
        const targetItem = e.target;
        const popupId = targetItem.parentNode.parentNode.getAttribute('id');
        mainMenu.style.zIndex = '9';
        if (!targetItem || !popupId) return;
        flotState.flotItems.map((flotItem) => {
            if (flotItem.id === Number(popupId) && !flotItem.popupBlocked) {
                popupHandler(flotItem, true);
                return {
                    ...flotItem,
                    popupActive: flotItem.popupActive ? false : true
                }
            }
            return {
                ...flotItem,
                popupActive: false
            }
        });
    };

    const createFlotItemElement = (flotItemObj) => {
        if (!flotItemObj) return;
        const flotItemWrap = document.createElement('div');
        const flotItemImgWrap = document.createElement('div');
        const flotItemTitle = document.createElement('h4');
        const flotItemImg = document.createElement('img');
        flotItemWrap.setAttribute('id', flotItemObj.id);
        flotItemWrap.classList.add('flot-item-wrap');
        flotItemImgWrap.classList.add('flot-item-img-wrap');
        flotItemTitle.classList.add('flot-item-img-title');
        flotItemTitle.textContent = flotItemObj.title;
        flotItemImg.src = flotItemObj.imgMin;
        
        flotItemImgWrap.appendChild(flotItemTitle);
        flotItemImgWrap.appendChild(flotItemImg);
        flotItemWrap.appendChild(flotItemImgWrap);

        flotItemImgWrap.addEventListener('click', showHidePopupHandler);

        return flotItemWrap;
    };

    flotState.flotItems.forEach((item) => {
        const flotItem = createFlotItemElement(item);
        flotWrap.appendChild(flotItem);
    });
    closePopupBtn.addEventListener('click', () => popupHandler(false, false));
    window.document.body.addEventListener('click', (e) => {
        const target = e.target;
        const popupIsActive = target.classList.contains('tm-row') || 
            target.classList.contains('tm-content') || 
                target.classList.contains('mb-5') || 
                    target.classList.contains('tm-site-footer');
        if (target && popupIsActive) {
            popupHandler(false, false);
            mainMenu.style.zIndex = '11';
        }
    });
});